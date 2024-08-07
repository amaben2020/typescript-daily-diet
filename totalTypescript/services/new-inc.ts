/* eslint-disable no-restricted-syntax */
// /* eslint-disable @typescript-eslint/no-loop-func */
// working 3rd aug 2024
import { DateTime } from 'luxon';
import { formatTimeToHHMM } from '@utils/helpers';
import {
  TComputedAvailability,
  TComputeProviderAvailabilityPerProvider,
  TAvailability,
  TTransformProvidersData,
  TComputeCurrentAndNextAvailability,
  TProvider,
} from '@utils/availability/types';

function sortAvailabilityByCurrentDay(
  currentDayIndex: number,
  availability: TAvailability[]
) {
  return availability.sort((a, b) => {
    const aDayShifted = (a.day! - currentDayIndex + 7) % 7;
    const bDayShifted = (b.day! - currentDayIndex + 7) % 7;
    return aDayShifted - bDayShifted;
  });
}

const getDayDate = (dayIndex: number, timezone: string): DateTime => {
  const now = DateTime.now().setZone(timezone);

  return now.plus({ days: 0 }).startOf('day');
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

const getCurrentAndNextAvailability = (
  currentDate: DateTime,
  availability: TAvailability[]
) => {
  const currentDateTime = DateTime.fromISO(String(currentDate), {
    zone: 'America/Los_Angeles',
  });
  const currentDayIndex = currentDateTime.weekday % 7;

  const sortedAvailability = sortAvailabilityByCurrentDay(
    currentDayIndex,
    availability
  );

  const availabilitiesWithDateTime = sortedAvailability.map(
    (entry: TAvailability) => {
      const isPastDay = Number(entry?.day) < currentDayIndex;

      const adjustedLocalStartTime = isPastDay
        ? getNextWeekOccurrenceForPastDay(Number(entry.day), entry.timezone!)
        : getDayDate(Number(entry.day), entry.timezone!);

      return {
        ...entry,
        localStartTime: adjustedLocalStartTime.set({
          hour: Number(entry.startTime.split(':')[0]),
          minute: Number(entry.startTime.split(':')[1]),
        }),
        localEndTime: adjustedLocalStartTime.set({
          hour: Number(entry.endTime.split(':')[0]),
          minute: Number(entry.endTime.split(':')[1]),
        }),
      };
    }
  );

  let currentAvailability = null;
  let nextAvailability = null;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < availabilitiesWithDateTime.length; i++) {
    const entry = availabilitiesWithDateTime[i];

    if (
      entry.localStartTime <= currentDateTime &&
      entry.localEndTime >= currentDateTime
    ) {
      currentAvailability = entry;
      nextAvailability = availabilitiesWithDateTime[i + 1];
      break;
    } else if (entry.localStartTime > currentDateTime) {
      if (
        !nextAvailability ||
        entry.localStartTime < nextAvailability.localStartTime
      ) {
        nextAvailability = entry;
      }
    }
  }

  // If no next availability found in the current week, search for the next week
  if (!nextAvailability) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < availabilitiesWithDateTime.length; i++) {
      const entry = availabilitiesWithDateTime[i];

      const nextWeekStart = entry.localStartTime.plus({ weeks: 1 });
      const nextWeekEnd = entry.localEndTime.plus({ weeks: 1 });
      if (nextWeekStart > currentDateTime) {
        nextAvailability = {
          ...entry,
          localStartTime: nextWeekStart,
          localEndTime: nextWeekEnd,
        };
        break;
      }
    }
  }

  // Format the result as desired
  const result = {
    current: currentAvailability
      ? {
          start_timestamp: currentAvailability.localStartTime.toISO(),
          end_timestamp: currentAvailability.localEndTime.toISO(),
        }
      : null,
    next: nextAvailability
      ? {
          start_timestamp: nextAvailability.localStartTime.toISO(),
          end_timestamp: nextAvailability.localEndTime.toISO(),
          id: nextAvailability.id,
        }
      : null,
  };

  return result;
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

    const availabilityResult = getCurrentAndNextAvailability(
      now,
      formattedAvailabilitiesTime
    );

    if (availability.day) {
      currentAvailability = availabilityResult.current;
      nextAvailability = availabilityResult.next;
      break;
    }

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
