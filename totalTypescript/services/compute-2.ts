//@ts-nocheck
import { DateTime } from 'luxon';
const formatTimeToHHMM = (time: string) => time?.slice(0, 5);
const getDateTimeForWeekday = (weekday: number, timezone: string): DateTime => {
  const now = DateTime.utc().setZone(timezone);
  const today = now.weekday;

  const daysToAdd = (weekday + 7 - today) % 7;

  const targetDateTime = now.plus({ days: daysToAdd });

  return targetDateTime;
};

const getAvailabilityWithHighestDay = (
  availabilities: TAvailability[]
): TAvailability | null => {
  if (availabilities.length === 0) {
    return null;
  }

  return availabilities.reduce((acc, availability) => {
    return acc.day! > availability.day! ? acc : availability;
  });
};

const computeNextWeekTime = (weekday: number, timezone: string): DateTime => {
  const now = DateTime.utc().setZone(timezone);
  const today = now.weekday;

  const daysToAdd = (weekday + 7 - today) % 7 || 7;
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

const mock = [
  {
    id: 138,
    firstname: 'Mobile',
    lastname: 'UAT',
    email: null,
    rating: '0',
    phone: '11111111111',
    distance: 1.1210646618872298,
    latitude: 38.93592274180123,
    longitude: -94.35870889009857,
    is_onjob: false,
    is_blocked: false,
    is_online: true,
    location_updated_at: '2024-02-24T17:41:04.867Z',
    job_request: null,

    availability: [
      {
        id: 58,
        createdBy: 'admin',
        createdAt: '2024-07-22T18:20:45.492Z',
        updatedBy: null,
        updatedAt: null,
        providerId: 400,
        day: 0,
        startTime: '09:00:00',
        endTime: '23:00:00',
        timezone: 'America/Los_Angeles',
        date: null,
        isOverride: false,
      },
      {
        id: 59,
        createdBy: 'admin',
        createdAt: '2024-07-22T18:20:45.492Z',
        updatedBy: null,
        updatedAt: null,
        providerId: 400,
        day: 2,
        startTime: '01:00:00',
        endTime: '19:00:00',
        timezone: 'America/Los_Angeles',
        date: null,
        isOverride: false,
      },
      // {
      //   id: 60,
      //   createdBy: 'admin',
      //   createdAt: '2024-07-22T18:20:45.492Z',
      //   updatedBy: null,
      //   updatedAt: null,
      //   providerId: 400,
      //   day: null,
      //   startTime: '07:00:00',
      //   endTime: '23:59:00',
      //   timezone: 'America/Los_Angeles',
      //   date: '2024-07-25',
      //   isOverride: true,
      // },
      // {
      //   id: 61,
      //   createdBy: 'admin',
      //   createdAt: '2024-07-22T18:20:45.492Z',
      //   updatedBy: null,
      //   updatedAt: null,
      //   providerId: 400,
      //   day: null,
      //   startTime: '07:00:00',
      //   endTime: '23:59:00',
      //   timezone: 'America/Los_Angeles',
      //   date: '2024-07-24',
      //   isOverride: true,
      // },
    ],
  },

  {
    id: 400,
    firstname: 'Mobile',
    lastname: 'UAT',
    email: null,
    rating: '0',
    phone: '11111111111',
    distance: 1.1210646618872298,
    latitude: 38.93592274180123,
    longitude: -94.35870889009857,
    is_onjob: false,
    is_blocked: false,
    is_online: true,
    location_updated_at: '2024-02-24T17:41:04.867Z',
    job_request: null,

    availability: [],
  },
];

type TComputeCurrentAndNextAvailability = {
  timezone?: string;
  start_timestamp: string | null;
  end_timestamp: string | null;
  id?: number;
} | null;

type TAvailability = {
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
function getLowerDate(dateA: DateTime, dateB: DateTime): DateTime {
  return dateA <= dateB ? dateA : dateB;
}
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

  const formattedAvailabilitiesTime = availabilities
    .map((availability) => {
      return {
        ...availability,
        startTime: formatTimeToHHMM(availability.startTime),
        endTime: formatTimeToHHMM(availability.endTime),
      };
    })
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

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

    // if for a given day the endtime has passed, compute the next week availability correctly
    if (
      weekdayIndex === availability.day! &&
      !currentAvailability?.id &&
      availability.endTime < currentTime &&
      !nextAvailability?.id
    ) {
      const nextWeekDay = availabilities.find(
        (avail) => avail.day === availability.day!
      );
      const getNextWeekDay = getDateTimeForWeekday(
        availability.day!,
        timezone
      ).plus({ days: 7 });

      const nextWeekDate = DateTime.fromISO(
        availabilities.find((avail) => avail.date)?.date
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

    // properly computing availability
    if (weekdayIndex === availability.day && currentAvailability?.id) {
      const sortedAvailabilities = availabilities.sort((a, b) =>
        a.id > b.id ? 1 : -1
      );
      console.log('Availabilities', sortedAvailabilities);
      const currentDay = sortedAvailabilities.find(
        (av) => av.day === weekdayIndex
      );
      const previousDay = sortedAvailabilities.find(
        (av) => av.day < weekdayIndex
      );

      if (currentDay && previousDay?.day < weekdayIndex) {
        currentAvailability.end_timestamp = addTimeToISODateWithZone(
          currentDay.endTime,
          now,
          timezone
        );

        const convertPreviousDayToNextWeek = getDateTimeForWeekday(
          previousDay.day!,
          timezone
        ).plus({ days: 7 });

        const dateString = convertPreviousDayToNextWeek
          .toLocaleString(DateTime.DATETIME_FULL)
          .replace('PDT', String(timezone));

        console.log('DSS', dateString);

        const dateTime = DateTime.fromFormat(
          dateString,
          "MMMM d, yyyy 'at' h:mm a z",
          { zone: timezone }
        );

        const updatedDateTime = dateTime.set({
          hour: Number(
            previousDay?.startTime
              ? previousDay.startTime.split(':')[0]
              : previousDay.startTime.split(':')[0]
          ),
          minute: Number(
            previousDay?.startTime
              ? previousDay.startTime.split(':')[1]
              : previousDay.startTime.split(':')[1]
          ),
        });

        const previousDayEndtime = dateTime.set({
          hour: Number(
            previousDay?.endTime
              ? previousDay.endTime.split(':')[0]
              : previousDay.endTime.split(':')[0]
          ),
          minute: Number(
            previousDay?.endTime
              ? previousDay.endTime.split(':')[1]
              : previousDay.endTime.split(':')[1]
          ),
        });

        const updatedIsoString = updatedDateTime.toISO();
        const nextAvailabilityEndtimeIso = previousDayEndtime.toISO();

        nextAvailability = {
          start_timestamp: updatedIsoString,
          end_timestamp: nextAvailabilityEndtimeIso,
          id: availability.id,
        };
      }
    }
  }

  if (currentAvailability) {
    const currentAvailabilityIndex = availabilities.findIndex(
      (avail) => avail.id === currentAvailability?.id
    );

    const nextAvailabilityDataIndex = currentAvailabilityIndex + 1;
    const nextAvailabilityData =
      availabilities[nextAvailabilityDataIndex] ?? null;

    if (nextAvailabilityData?.startTime === '00:00:00') {
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

    if (nextAvailabilityData) {
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

  return {
    providerId,
    timezone,
    ...(currentAvailability?.end_timestamp &&
    currentAvailability?.start_timestamp
      ? { current: currentAvailability }
      : { current: null }),
    ...(nextAvailability?.end_timestamp && nextAvailability?.start_timestamp
      ? { next: nextAvailability }
      : { next: null }),
  };
};

const computeProviderAvailabilityPerProvider = (providerData: any[]) => {
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

const sortAvailabilityById = (providers: TProvider[]) =>
  providers.map((provider) => {
    const sortedAvailability =
      provider.availability!.sort((a, b) => a.id - b.id) ?? [];
    return {
      ...provider,
      availability: sortedAvailability,
    };
  });

console.log(computeProviderAvailabilityPerProvider(sortAvailabilityById(mock)));

import { DateTime } from 'luxon';

function getNextOccurrenceOfDay(dayIndex: number, timezone: string): DateTime {
  const now = DateTime.now().setZone(timezone);
  const todayIndex = now.weekday % 7; // Convert Luxon weekday (1=Monday, ..., 7=Sunday) to 0=Sunday, ..., 6=Saturday
  const daysToAdd = (dayIndex - todayIndex + 7) % 7 || 7; // Ensure we move to the next occurrence of the day
  return now.plus({ days: daysToAdd }).startOf('day');
}

// Example usage:
const nextSunday = getNextOccurrenceOfDay(0, 'America/Los_Angeles');
console.log('Next Sunday:', nextSunday.toISODate()); // Expected output: '2024-07-28' if today is before 2024-07-28

const nextMonday = getNextOccurrenceOfDay(1, 'America/Los_Angeles');
console.log('Next Monday:', nextMonday.toISODate()); // Expected output: '2024-07-29' if today is before 2024-07-29
