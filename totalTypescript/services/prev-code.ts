/* eslint-disable no-restricted-syntax */
// /* eslint-disable @typescript-eslint/no-loop-func */
import { createJobRequestSchema } from 'db/schema/jobRequests';
import { selectProviderAvailability } from 'db/schema/providerAvailability';
import { DateTime } from 'luxon';
import { z } from 'zod';
import { formatTimeToHHMM } from '@utils/helpers';

export type TTransformProvidersData = TProvider[];
export type TComputedAvailability = {
  providerId?: number;
  timezone?: string;
  current: {
    start_timestamp: string;
    end_timestamp: string;
    id: number;
  } | null;
  next: {
    start_timestamp: string;
    end_timestamp: string;
    id: number;
  } | null;
};

export type TAvailability = {
  id: number;
  createdBy: string;
  createdAt: string;
  updatedBy: string | null;
  updatedAt: string | null;
  day?: number | null;
  date?: string | null;
  startTime: string;
  endTime: string;
  isOverride: boolean;
  timezone?: string;
  providerId: number;
};

export type TProvider = {
  id: number;
  firstname: string;
  lastname: string;
  email: string | null;
  rating: string;
  phone: string;
  distance: number | null;
  latitude: number | null;
  longitude: number | null;
  is_onjob: boolean;
  is_blocked: boolean;
  is_online: boolean;
  location_updated_at: string;
  job_request: z.infer<typeof createJobRequestSchema> | null;
  availability: TAvailability[] | null;
};

export type TComputeCurrentAndNextAvailability = {
  timezone?: string;
  start_timestamp: string | null;
  end_timestamp: string | null;
  id?: number;
} | null;

export type TComputeProviderAvailabilityPerProvider = z.infer<
  typeof selectProviderAvailability
> & {
  availability: TAvailability[];
};
const getNextWeekOccurrenceForPastDay = (
  dayIndex: number,
  timezone: string,
  notNextWeek?: boolean
): DateTime => {
  const now = DateTime.now().setZone(timezone);
  const todayIndex = now.weekday % 7;
  const nextWeek: number = notNextWeek ? 0 : 7;
  const daysToAdd = (dayIndex - todayIndex + nextWeek) % 7 || 7;
  return now.plus({ days: daysToAdd }).startOf('day');
};
const getLowerDate = (dateA: DateTime, dateB: DateTime): DateTime => {
  return dateA <= dateB ? dateA : dateB;
};

const isProviderAlwaysOnline = (availabilities: TAvailability[]) =>
  availabilities.every(
    (avail) =>
      avail.day !== null &&
      !avail.isOverride &&
      avail.startTime === '00:00:00' &&
      avail.endTime === '23:59:00'
  );

const getDateTimeForWeekday = (weekday: number, timezone: string): DateTime => {
  const now = DateTime.utc().setZone(timezone);
  const today = now.weekday;

  const daysToAdd = (weekday + 7 - today) % 7;

  const targetDateTime = now.plus({ days: daysToAdd });

  return targetDateTime;
};

export const finalAvailabilityData = (
  availability: TComputeProviderAvailabilityPerProvider[]
) => {
  const availabilities = computeProviderAvailabilityPerProvider(
    availability
  ) as TComputedAvailability[];

  return availability.map((provider) => {
    const providerAvailability = availabilities.find(
      (avail: TComputedAvailability) => avail.providerId === provider.id
    );

    return {
      ...provider,
      availability: {
        timezone: providerAvailability?.timezone ?? '',
        current: providerAvailability?.current,
        next: providerAvailability?.next,
      },
    };
  });
};

export const transformProviders = (
  allProvidersAvailability: TTransformProvidersData
) => {
  const providerMap = new Map();

  allProvidersAvailability.forEach((entry) => {
    if (!providerMap.has(entry.id)) {
      providerMap.set(entry.id, {
        ...entry,
        availability: entry.availability ? [entry.availability] : [],
      });
    } else {
      const existingProvider = providerMap.get(entry.id);
      if (entry.availability) {
        existingProvider.availability.push(entry.availability);
      }
    }
  });

  return Array.from(providerMap.values());
};

export const computeProviderAvailabilityPerProvider = (
  providerData: TComputeProviderAvailabilityPerProvider[]
) => {
  return (
    Array.isArray(providerData) &&
    providerData.map((provider) => {
      return computeCurrentAndNextAvailability(
        provider.availability,
        provider.id
      );
    })
  );
};

const addTimeToISODateWithZone = (
  time: string,
  date: DateTime,
  timezone?: string
) => {
  const [hours, minutes] = time.split(':').map(Number);
  const dt = date
    .set({ hour: hours, minute: minutes, second: 0, millisecond: 0 })
    .setZone(timezone, { keepLocalTime: true });

  return dt.toISO({ includeOffset: true });
};

const currentTimeFn = (timezone: string) => {
  const now = DateTime.now().setZone(timezone);
  const formatWithLeadingZero = (num: number) => (num < 10 ? `0${num}` : num);
  const hours = formatWithLeadingZero(now.hour);
  const minutes = formatWithLeadingZero(now.minute);
  const time = `${hours}:${minutes}`;
  return time;
};
const formatAvailabilities = (availabilities: TAvailability[]) => {
  return availabilities
    .map((availability) => {
      return {
        ...availability,
        startTime: formatTimeToHHMM(availability.startTime),
        endTime: formatTimeToHHMM(availability.endTime),
      };
    })
    .sort((a, b) => a.startTime.localeCompare(b.startTime));
};

const mergeAlwaysOnlineAvailabilities = (
  currentAvailability: TAvailability,
  timezone: string,
  availabilities: TAvailability[]
  // eslint-disable-next-line consistent-return
) => {
  const previousAvailability = availabilities.find(
    (avail) => avail.day === Number(currentAvailability.day) - 1
  );

  if (previousAvailability) {
    const startTimestamp = getDateTimeForWeekday(
      Number(currentAvailability.day),
      String(timezone)
    ).set({
      hour: Number(0o0),
      minute: Number(0o0),
      second: Number(0o0),
      millisecond: 0,
    });

    const previousAvailabilityEndTime =
      previousAvailability?.endTime.split(':');

    const endTimestamp = getDateTimeForWeekday(
      Number(previousAvailability?.day),
      String(timezone)
    ).set({
      hour: Number(previousAvailabilityEndTime[0]),
      minute: Number(previousAvailabilityEndTime[1]),
      second: Number(0o0),
      millisecond: 0,
    });

    return {
      start_timestamp: startTimestamp.toISO(),
      end_timestamp: endTimestamp.toISO(),
      id: currentAvailability.id,
    };
  }
};

const mergeAvailabilities = (
  availabilities: TAvailability[],
  index = 0
): TAvailability[] => {
  if (index >= availabilities.length - 1) {
    return availabilities.slice(index);
  }

  const current = availabilities[index];
  const next = availabilities[index + 1];

  if (current.endTime === '23:59:00' && next.startTime === '00:00:00') {
    const merged = {
      ...current,
      endTime: next.endTime,
      id: next.id,
      day: next.day,
    };

    return mergeAvailabilities([merged, ...availabilities.slice(index + 2)], 0);
  }

  return [current, ...mergeAvailabilities(availabilities, index + 2)];
};

const getDayDate = (dayIndex: number, timezone: string): DateTime => {
  const now = DateTime.now().setZone(timezone);

  return now
    .plus({ days: dayIndex === 0 ? 0 : Number(dayIndex) - 2 })
    .startOf('day');
};

const computeWeekDate = (availability: TAvailability) => {
  const currentAvailableDay = getDayDate(
    Number(availability?.day),
    String(availability?.timezone)
  );

  const updatedDateTime = currentAvailableDay.set({
    hour: Number(availability?.startTime.split(':')[0]),
    minute: Number(availability?.startTime.split(':')[1]),
  });

  const nextAvailabilityEndtime = currentAvailableDay.set({
    hour: Number(availability?.endTime.split(':')[0]),
    minute: Number(availability?.endTime.split(':')[1]),
  });

  const nextAvailability = {
    start_timestamp: updatedDateTime.toISO(),
    end_timestamp: nextAvailabilityEndtime.toISO(),
    id: availability?.id,
  };

  return nextAvailability;
};

const checkMidnightOverride = (availabilities: TAvailability[]) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < availabilities.length - 1; i++) {
    const current = availabilities[i];
    const next = availabilities[i + 1];

    if (current.endTime === '23:59:00' && next.startTime === '00:00:00') {
      return true;
    }
  }
  return false;
};

export const computeCurrentAndNextAvailability = (
  availabilities: TAvailability[],
  providerId: number
) => {
  let timezone;
  let currentAvailability: TComputeCurrentAndNextAvailability = null;
  let nextAvailability: TComputeCurrentAndNextAvailability = null;
  const now = DateTime.now();
  const weekdayIndex = now.weekday % 7;

  const providerTimezone = availabilities.find(
    (availability) => availability.timezone
  )?.timezone;
  const currentTime = currentTimeFn(String(providerTimezone));
  const todayDate = now.setZone(providerTimezone).toISODate();

  const formattedAvailabilitiesTime = formatAvailabilities(availabilities);

  const currentDay = formattedAvailabilitiesTime.find(
    (avail) => avail.day === weekdayIndex
  );

  const isAlwaysOnline = isProviderAlwaysOnline(availabilities);

  const daysOfWeek = [0, 1, 2, 3, 4, 5, 6];
  const hasAvailabilityForEveryDay = daysOfWeek.every((day) =>
    availabilities.some((avail) => avail.day === day && !avail.isOverride)
  );

  const isAlwaysOnlineForWork = isAlwaysOnline && hasAvailabilityForEveryDay;

  for (const availability of formattedAvailabilitiesTime) {
    timezone = availability.timezone;

    const { startTime, endTime, date } = availability;

    const startTimestamp = addTimeToISODateWithZone(
      startTime,
      date! > todayDate! || availability.day! > weekdayIndex
        ? now.plus({ day: 1 })
        : now,
      timezone
    );

    const endTimestamp = addTimeToISODateWithZone(
      endTime,
      date! > todayDate! || availability.day! > weekdayIndex
        ? now.plus({ day: 1 })
        : now,
      timezone
    );

    // computes for next week if past date is selected
    if (Number(availability?.day) < weekdayIndex && !availability.isOverride) {
      const nextWeekDate = getNextWeekOccurrenceForPastDay(
        Number(availability.day),
        String(timezone)
      );

      const updatedDateTime = nextWeekDate.set({
        hour: Number(availability.startTime.split(':')[0]),
        minute: Number(availability.startTime.split(':')[1]),
      });

      const nextAvailabilityEndtime = nextWeekDate.set({
        hour: Number(availability.endTime.split(':')[0]),
        minute: Number(availability.endTime.split(':')[1]),
      });

      nextAvailability = {
        start_timestamp: updatedDateTime.toISO(),
        end_timestamp: nextAvailabilityEndtime.toISO(),
        id: availability.id,
      };
      break;
    }

    if (todayDate === date && availability?.isOverride) {
      if (currentTime >= startTime && currentTime <= endTime) {
        currentAvailability = {
          start_timestamp: String(startTimestamp),
          end_timestamp: String(endTimestamp),
          id: availability.id,
        };
      }

      if (currentTime < startTime && !currentAvailability) {
        nextAvailability = {
          start_timestamp: String(startTimestamp),
          end_timestamp: String(endTimestamp),
          id: availability.id,
        };
        break;
      }
    }

    if (weekdayIndex === availability.day && !availability.isOverride) {
      const hasMidnightOverride = checkMidnightOverride(availabilities);
      const sortedAvailabilities = availabilities.sort((a, b) =>
        Number(a.day) > Number(b.day) ? 1 : -1
      );

      const hasElapsed = currentTime > endTime;

      if (hasElapsed && !isAlwaysOnlineForWork) {
        const sortedAv = availabilities.sort((a, b) =>
          Number(a.day) > Number(b.day) ? 1 : -1
        );

        const futureDay = sortedAv.find((av) => Number(av.day) > weekdayIndex);

        const currDay = sortedAv.find((av) => av.day === weekdayIndex);
        const previousDay = sortedAv.find(
          (av) =>
            Number(av.day) < weekdayIndex &&
            Number(av.day) < Number(currDay?.day)
        );

        // eslint-disable-next-line no-nested-ternary
        const correctAvailability = futureDay?.id
          ? futureDay
          : previousDay?.id
          ? previousDay
          : currDay;

        const nextAvailableDate = getNextWeekOccurrenceForPastDay(
          Number(correctAvailability?.day),
          String(timezone),
          !!futureDay?.id
        );

        const updatedDateTime = nextAvailableDate.set({
          hour: Number(correctAvailability?.startTime.split(':')[0]),
          minute: Number(correctAvailability?.startTime.split(':')[1]),
        });

        const nextAvailabilityEndtime = nextAvailableDate.set({
          hour: Number(correctAvailability?.endTime.split(':')[0]),
          minute: Number(correctAvailability?.endTime.split(':')[1]),
        });

        // compute next availability if current is past
        if (currentTime >= endTime) {
          const filterPastAvailability = availabilities.filter(
            (av) => av.endTime > currentTime
          );

          nextAvailability = {
            start_timestamp: computeWeekDate(filterPastAvailability[0])
              .start_timestamp,
            end_timestamp: computeWeekDate(filterPastAvailability[0])
              .end_timestamp,
            id: filterPastAvailability[0].id,
          };
          break;
        }

        nextAvailability = {
          start_timestamp: updatedDateTime.toISO(),
          end_timestamp: nextAvailabilityEndtime.toISO(),
          id: availability.id,
        };
        break;
      }

      if (hasMidnightOverride) {
        const mergedAvailabilities = mergeAvailabilities(availabilities);

        const lastAvailability = availabilities.find(
          (av) =>
            av.endTime === mergedAvailabilities[0].endTime &&
            av.id === mergedAvailabilities[0].id
        );

        const nextAvailabilityAfterMidnight = sortedAvailabilities.find(
          (av) => av.startTime !== '00:00:00' && av.endTime !== '23:59:00'
        );
        currentAvailability = {
          start_timestamp: computeWeekDate(availabilities[0]).start_timestamp,
          end_timestamp: computeWeekDate(lastAvailability!).end_timestamp,
          id: lastAvailability!.id,
        };
        nextAvailability = {
          start_timestamp: computeWeekDate(nextAvailabilityAfterMidnight!)
            .start_timestamp,
          end_timestamp: computeWeekDate(nextAvailabilityAfterMidnight!)
            .end_timestamp,
          id: nextAvailabilityAfterMidnight?.id,
        };
        break;
      }

      const hasNextDayAvailablity = sortedAvailabilities.find(
        (av) => av.day === weekdayIndex + 1
      );
      const hasPrevAndNextOnSameDay = sortedAvailabilities.filter(
        (av) => av.day === weekdayIndex && av.endTime > currentTime
      );

      if (
        hasNextDayAvailablity &&
        !availability.isOverride &&
        hasPrevAndNextOnSameDay.length < 2
      ) {
        // eslint-disable-next-line no-unreachable-loop
        for (const [index, av] of sortedAvailabilities.entries()) {
          console.log('av', av);
          currentAvailability = {
            start_timestamp: computeWeekDate(av).start_timestamp,
            end_timestamp: computeWeekDate(av).end_timestamp,
            id: av.id,
          };
          nextAvailability = {
            start_timestamp: computeWeekDate(sortedAvailabilities[index + 2])
              .start_timestamp,
            end_timestamp: computeWeekDate(sortedAvailabilities[index + 2])
              .end_timestamp,
            id: sortedAvailabilities[index + 1].id,
          };

          break;
        }

        break;
      }

      if (currentTime >= startTime && currentTime <= endTime) {
        currentAvailability = {
          start_timestamp: String(startTimestamp),
          end_timestamp: String(endTimestamp),
          id: availability.id,
        };
      }

      if (availability.id !== currentAvailability?.id) {
        nextAvailability = {
          start_timestamp: String(startTimestamp),
          end_timestamp: String(endTimestamp),
          id: availability.id,
        };
      }
    }

    if (
      weekdayIndex === availability.day! &&
      !currentAvailability?.id &&
      availability.endTime < currentTime &&
      !nextAvailability?.id
    ) {
      const getNextWeekDay = getDateTimeForWeekday(
        availability.day!,
        String(timezone)
      ).plus({ days: 7 });

      const nextWeekDate = DateTime.fromISO(
        availabilities?.find((avail) => avail.date)?.date ?? ''
      );

      const nextAvailableTimeSlot = getLowerDate(nextWeekDate, getNextWeekDay);
      const dateString = nextAvailableTimeSlot
        .toLocaleString(DateTime.DATETIME_FULL)
        .replace('PDT', String(timezone));

      const dateTime = DateTime.fromFormat(
        dateString,
        "MMMM d, yyyy 'at' h:mm a z",
        { zone: timezone }
      );

      const updatedDateTime = dateTime.set({
        hour: Number(
          availability?.startTime
            ? availability.startTime.split(':')[0]
            : availability.startTime.split(':')[0]
        ),
        minute: Number(
          availability?.startTime
            ? availability.startTime.split(':')[1]
            : availability.startTime.split(':')[1]
        ),
      });

      const nextAvailabilityEndtime = dateTime.set({
        hour: Number(
          availability?.endTime
            ? availability.endTime.split(':')[0]
            : availability.endTime.split(':')[0]
        ),
        minute: Number(
          availability?.endTime
            ? availability.endTime.split(':')[1]
            : availability.endTime.split(':')[1]
        ),
      });

      const updatedIsoString = updatedDateTime.toISO();
      const nextAvailabilityEndtimeIso = nextAvailabilityEndtime.toISO();

      nextAvailability = {
        start_timestamp: updatedIsoString,
        end_timestamp: nextAvailabilityEndtimeIso,
        id: availability.id,
      };
    }

    // TODO: extract this logic to a function
    const hasNextButNoCurrentDay =
      Number(availability.day) > weekdayIndex &&
      !availability.isOverride &&
      !currentAvailability?.start_timestamp;
    if (hasNextButNoCurrentDay) {
      const { day } = availability;

      const hasNextAvailability = availabilities.find(
        (avail) =>
          Number(avail.day) < Number(day) ||
          Number(avail.endTime.split(':')[0]) <
            Number(availability.startTime.split(':')[0])
      );

      const nextAvailableTimeSlot = getDateTimeForWeekday(
        Number(hasNextAvailability?.day ? hasNextAvailability?.day : day),
        String(timezone)
      );

      const dateString = nextAvailableTimeSlot
        .toLocaleString(DateTime.DATETIME_FULL)
        .replace('PDT', String(timezone));

      const dateTime = DateTime.fromFormat(
        dateString,
        "MMMM d, yyyy 'at' h:mm a z",
        { zone: timezone }
      );

      const updatedDateTime = dateTime.set({
        hour: Number(
          hasNextAvailability?.startTime
            ? hasNextAvailability.startTime.split(':')[0]
            : availability.startTime.split(':')[0]
        ),
        minute: Number(
          hasNextAvailability?.startTime
            ? hasNextAvailability.startTime.split(':')[1]
            : availability.startTime.split(':')[1]
        ),
      });

      const nextAvailabilityEndtime = dateTime.set({
        hour: Number(
          hasNextAvailability?.endTime
            ? hasNextAvailability.endTime.split(':')[0]
            : availability.endTime.split(':')[0]
        ),
        minute: Number(
          hasNextAvailability?.endTime
            ? hasNextAvailability.endTime.split(':')[1]
            : availability.endTime.split(':')[1]
        ),
      });

      const updatedIsoString = updatedDateTime.toISO();
      const nextAvailabilityEndtimeIso = nextAvailabilityEndtime.toISO();

      nextAvailability = {
        start_timestamp: updatedIsoString,
        end_timestamp: nextAvailabilityEndtimeIso,
        id: availability.id,
      };
    }

    if (
      availability.date! > todayDate! &&
      availability.isOverride &&
      !currentAvailability?.start_timestamp
    ) {
      const removeEmptyAvailabilities = availabilities.filter(
        (av) => av.endTime !== '00:00:00' && av.startTime !== '00:00:00'
      );

      const hasNextAvailability = removeEmptyAvailabilities.find(
        (avail) => avail.date! < availability.date!
      );

      const nextAvailableTimeSlot = DateTime.fromISO(
        hasNextAvailability?.date
          ? hasNextAvailability?.date
          : availability.date!,

        {
          zone: timezone,
        }
      );

      const dateString = nextAvailableTimeSlot
        .toLocaleString(DateTime.DATETIME_FULL)
        .replace('PDT', String(timezone));

      const dateTime = DateTime.fromFormat(
        dateString,
        "MMMM d, yyyy 'at' h:mm a z",
        { zone: timezone }
      );

      const updatedDateTime = dateTime.set({
        hour: Number(availability.startTime.split(':')[0]),
        minute: Number(availability.startTime.split(':')[1]),
      });

      const nextAvailabilityEndtime = dateTime.set({
        hour: Number(availability.endTime.split(':')[0]),
        minute: Number(availability.endTime.split(':')[1]),
      });

      const updatedIsoString = updatedDateTime.toISO();
      const nextAvailabilityEndtimeIso = nextAvailabilityEndtime.toISO();

      nextAvailability = {
        start_timestamp: updatedIsoString,
        end_timestamp: nextAvailabilityEndtimeIso,
        id: availability.id,
      };
    }

    // if availability is undefined for Next
    if (
      availability.date! > todayDate! &&
      availability.isOverride &&
      !currentAvailability?.start_timestamp &&
      availability.startTime === '00:00' &&
      availability.endTime === '00:00'
    ) {
      nextAvailability = null;
    }
  }

  if (currentAvailability) {
    const currentAvailabilityIndex = availabilities.findIndex(
      (avail) => avail.id === currentAvailability?.id
    );

    const nextAvailabilityDataIndex = currentAvailabilityIndex + 1;
    const nextAvailabilityData =
      availabilities[nextAvailabilityDataIndex] ?? null;

    const sortedAvailabilities = availabilities.sort((a, b) =>
      a.id > b.id ? 1 : -1
    );

    const previousDay = sortedAvailabilities.find(
      (av) => av.id === nextAvailabilityData?.id && av.day !== null
    );

    const currDay = sortedAvailabilities.find((av) => av.day === weekdayIndex);

    if (
      Number(previousDay?.day) < weekdayIndex &&
      Number(nextAvailabilityData?.day) < weekdayIndex
    ) {
      currentAvailability.end_timestamp = addTimeToISODateWithZone(
        String(currDay?.endTime),
        now,
        timezone
      );

      currentAvailability.start_timestamp = addTimeToISODateWithZone(
        String(currDay?.startTime),
        now,
        timezone
      );

      const convertPreviousDayToNextWeek = getDateTimeForWeekday(
        Number(previousDay?.day),
        String(timezone)
      ).plus({ days: 7 });

      const dateString = convertPreviousDayToNextWeek
        .toLocaleString(DateTime.DATETIME_FULL)
        .replace('PDT', String(timezone));

      const dateTime = DateTime.fromFormat(
        dateString,
        "MMMM d, yyyy 'at' h:mm a z",
        { zone: timezone }
      );

      const updatedDateTime = dateTime.set({
        hour: Number(
          previousDay?.startTime
            ? previousDay.startTime.split(':')[0]
            : previousDay?.startTime.split(':')[0]
        ),
        minute: Number(
          previousDay?.startTime
            ? previousDay.startTime.split(':')[1]
            : previousDay?.startTime.split(':')[1]
        ),
      });

      const previousDayEndtime = dateTime.set({
        hour: Number(
          previousDay?.endTime
            ? previousDay.endTime.split(':')[0]
            : previousDay?.endTime.split(':')[0]
        ),
        minute: Number(
          previousDay?.endTime
            ? previousDay.endTime.split(':')[1]
            : previousDay?.endTime.split(':')[1]
        ),
      });

      const updatedIsoString = updatedDateTime.toISO();
      const nextAvailabilityEndtimeIso = previousDayEndtime.toISO();

      nextAvailability = {
        start_timestamp: updatedIsoString,
        end_timestamp: nextAvailabilityEndtimeIso,
        id: previousDay?.id,
      };
    }

    if (nextAvailabilityData?.startTime === '00:00:00' && !previousDay?.id) {
      const nextNextAvailability =
        availabilities[nextAvailabilityDataIndex + 1];

      currentAvailability.end_timestamp = addTimeToISODateWithZone(
        nextAvailabilityData.endTime,
        now.plus({ day: 1 }),
        timezone
      );

      nextAvailability = nextNextAvailability?.startTime
        ? {
            start_timestamp: addTimeToISODateWithZone(
              nextNextAvailability.startTime,
              now.plus({ day: 1 }),
              timezone
            ),
            end_timestamp: addTimeToISODateWithZone(
              nextNextAvailability.endTime,
              now.plus({ day: 1 }),
              timezone
            ),
          }
        : null;
    }

    if (nextAvailabilityData && !previousDay?.id) {
      const { startTime, endTime, date } = nextAvailabilityData;

      const startTimestamp = addTimeToISODateWithZone(
        startTime,
        date! > todayDate!
          ? DateTime.fromISO(String(date), { zone: timezone })
          : now,
        timezone
      );

      let endTimestamp = addTimeToISODateWithZone(
        endTime,
        date! > todayDate! ? now.plus({ day: 1 }) : now,
        timezone
      );

      // Handle the special case for midnight override
      if (
        endTime === '23:59:00' &&
        nextAvailabilityDataIndex + 1 < availabilities.length
      ) {
        const nextNextAvailability =
          availabilities[nextAvailabilityDataIndex + 1];

        if (nextNextAvailability.startTime === '00:00:00') {
          endTimestamp = addTimeToISODateWithZone(
            nextNextAvailability.endTime,
            now.plus({ day: 1 }),
            timezone
          );
        }
      }

      nextAvailability = {
        start_timestamp: String(startTimestamp),
        end_timestamp: String(endTimestamp),
        id: nextAvailabilityData.id,
      };
    }
  }

  // When availabilities all have start as 00:00 and end as 23:59, next should be null
  if (isAlwaysOnlineForWork) {
    const mergedAvailability = mergeAlwaysOnlineAvailabilities(
      currentDay as TAvailability,
      String(providerTimezone),
      formattedAvailabilitiesTime
    );

    if (mergedAvailability) {
      currentAvailability = {
        timezone: providerTimezone,
        start_timestamp: mergedAvailability.start_timestamp,
        end_timestamp: null,
        id: currentDay?.id,
      };
      nextAvailability = null;
    }
  }

  return {
    providerId,
    timezone,
    ...(currentAvailability?.end_timestamp ||
    currentAvailability?.start_timestamp
      ? { current: currentAvailability }
      : { current: null }),
    ...(nextAvailability?.end_timestamp && nextAvailability?.start_timestamp
      ? { next: nextAvailability }
      : { next: null }),
  };
};

export const sortAvailabilityById = (providers: TProvider[]) =>
  providers.map((provider) => {
    const sortedAvailability =
      provider.availability!.sort((a, b) => a.id - b.id) ?? [];
    return {
      ...provider,
      availability: sortedAvailability,
    };
  });
