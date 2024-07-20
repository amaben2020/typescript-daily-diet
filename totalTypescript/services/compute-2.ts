//@ts-nocheck
import { DateTime } from 'luxon';

const formatTimeToHHMM = (time: string) => time?.slice(0, 5);

function addTimeToISODateWithZone(time: string, date: DateTime) {
  const [hours, minutes] = time?.split(':').map(Number) ?? [];
  const newDateTime = date.set({
    hour: hours,
    minute: minutes,
    second: 0,
    millisecond: 0,
  });
  return newDateTime.toISO();
}
// function sortAvailabilityById(providers) {
//   return providers.map((provider) => {
//     const sortedAvailability = provider.availability.sort(
//       (a, b) => a.id - b.id
//     );
//     return {
//       ...provider,
//       availability: sortedAvailability,
//     };
//   });
// }

// function sortAvailabilityById(providers) {
//   return providers.map((provider) => {
//     const sortedAvailability = provider.availability.sort((a, b) => {
//       if (a.date === b.date) {
//         return a.id - b.id;
//       }
//       return new Date(a.date) - new Date(b.date);
//     });
//     return {
//       ...provider,
//       availability: sortedAvailability,
//     };
//   });
// }

function sortAvailabilityById(provider) {
  return provider.map((p) => {
    p.availability.sort((a, b) => {
      if (a.date === b.date) {
        return a.id - b.id;
      }
      return new Date(a.date) - new Date(b.date);
    });
    return p;
  });
}

function currentTimeFn(timezone: string) {
  const now = DateTime.now().setZone(timezone);
  const formatWithLeadingZero = (num: number) => (num < 10 ? `0${num}` : num);
  const hours = formatWithLeadingZero(now.hour);
  const minutes = formatWithLeadingZero(now.minute);
  const time = `${hours}:${minutes}`;
  return time;
}

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
        id: 97,
        createdBy: 'admin',
        createdAt: '2024-07-14T10:46:30.209Z',
        updatedBy: null,
        updatedAt: null,
        providerId: 138,
        day: null,
        startTime: '21:00:00',
        endTime: '23:59:00',
        timezone: 'America/Los_Angeles',
        date: '2024-07-14',
        isOverride: true,
      },
      {
        id: 96,
        createdBy: 'admin',
        createdAt: '2024-07-14T10:46:30.209Z',
        updatedBy: null,
        updatedAt: null,
        providerId: 138,
        day: null,
        startTime: '00:00:00',
        endTime: '20:33:00',
        timezone: 'America/Los_Angeles',
        date: '2024-07-14',
        isOverride: true,
      },
      {
        id: 98,
        createdBy: 'admin',
        createdAt: '2024-07-14T10:46:30.209Z',
        updatedBy: null,
        updatedAt: null,
        providerId: 138,
        day: null,
        startTime: '00:00:00',
        endTime: '02:39:00',
        timezone: 'America/Los_Angeles',
        date: '2024-07-15',
        isOverride: true,
      },
      {
        id: 99,
        createdBy: 'admin',
        createdAt: '2024-07-14T10:46:30.209Z',
        updatedBy: null,
        updatedAt: null,
        providerId: 138,
        day: null,
        startTime: '21:00:00',
        endTime: '21:09:00',
        timezone: 'America/Los_Angeles',
        date: '2024-07-15',
        isOverride: true,
      },
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

    // availability: [
    //   {
    //     id: 102,
    //     createdBy: 'admin',
    //     createdAt: '2024-07-14T10:46:30.209Z',
    //     updatedBy: null,
    //     updatedAt: null,
    //     providerId: 400,
    //     day: null,
    //     startTime: '21:00:00',
    //     endTime: '23:59:00',
    //     timezone: 'America/Los_Angeles',
    //     date: '2024-07-14',
    //     isOverride: true,
    //   },
    //   {
    //     id: 100,
    //     createdBy: 'admin',
    //     createdAt: '2024-07-14T10:46:30.209Z',
    //     updatedBy: null,
    //     updatedAt: null,
    //     providerId: 400,
    //     day: null,
    //     startTime: '00:00:00',
    //     endTime: '20:33:00',
    //     timezone: 'America/Los_Angeles',
    //     date: '2024-07-14',
    //     isOverride: true,
    //   },
    //   {
    //     id: 103,
    //     createdBy: 'admin',
    //     createdAt: '2024-07-14T10:46:30.209Z',
    //     updatedBy: null,
    //     updatedAt: null,
    //     providerId: 400,
    //     day: null,
    //     startTime: '00:00:00',
    //     endTime: '02:39:00',
    //     timezone: 'America/Los_Angeles',
    //     date: '2024-07-15',
    //     isOverride: true,
    //   },
    //   {
    //     id: 101,
    //     createdBy: 'admin',
    //     createdAt: '2024-07-14T10:46:30.209Z',
    //     updatedBy: null,
    //     updatedAt: null,
    //     providerId: 400,
    //     day: null,
    //     startTime: '21:00:00',
    //     endTime: '21:09:00',
    //     timezone: 'America/Los_Angeles',
    //     date: '2024-07-15',
    //     isOverride: true,
    //   },
    // ],

    availability: [
      {
        id: 54,
        createdBy: 'admin',
        createdAt: '2024-07-12T12:51:15.575Z',
        updatedBy: null,
        updatedAt: null,
        providerId: 138,
        day: null,
        startTime: '00:00:00',
        endTime: '02:33:00',
        timezone: 'America/Los_Angeles',
        date: '2024-07-15',
        isOverride: true,
      },
      {
        id: 53,
        createdBy: 'admin',
        createdAt: '2024-07-12T12:51:15.575Z',
        updatedBy: null,
        updatedAt: null,
        providerId: 138,
        day: null,
        startTime: '22:01:00',
        endTime: '23:59:00',
        timezone: 'America/Los_Angeles',
        date: '2024-07-14',
        isOverride: true,
      },
      {
        id: 52,
        createdBy: 'admin',
        createdAt: '2024-07-12T12:51:15.575Z',
        updatedBy: null,
        updatedAt: null,
        providerId: 138,
        day: null,
        startTime: '05:01:00',
        endTime: '19:59:00',
        timezone: 'America/Los_Angeles',
        date: '2024-07-14',
        isOverride: true,
      },
      {
        id: 54,
        createdBy: 'admin',
        createdAt: '2024-07-12T12:51:15.575Z',
        updatedBy: null,
        updatedAt: null,
        providerId: 138,
        day: null,
        startTime: '22:01:00',
        endTime: '23:59:00',
        timezone: 'America/Los_Angeles',
        date: '2024-07-15',
        isOverride: true,
      },
    ],
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

const computeCurrentAndNextAvailability = (
  availabilities: TAvailability[],
  providerId: number
) => {
  let timezone;
  let currentAvailability: TComputeCurrentAndNextAvailability = null;
  let nextAvailability: TComputeCurrentAndNextAvailability = null;
  const now = DateTime.now();
  const weekdayIndex = now.weekday % 7;

  console.log('now!!!!!!!', now);

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

  console.log('formattedAvailabilitiesTime', formattedAvailabilitiesTime);

  for (const availability of formattedAvailabilitiesTime) {
    timezone = availability.timezone;
    const { startTime, endTime, date } = availability;

    // const startTimestamp = date ? addTimeToISODateWithZone(startTime, now) : '';
    // const endTimestamp = date && addTimeToISODateWithZone(endTime, now);
    console.log('todayDate ======> ', todayDate);
    const startTimestamp =
      date! > todayDate!
        ? addTimeToISODateWithZone(startTime, now.plus({ day: 1 }))
        : addTimeToISODateWithZone(startTime, now);

    const currentDay = date?.split('-')[0];
    const currentMonth = date?.split('-')[1];
    const currentYear = date?.split('-')[2];
    console.log('currentDate ===>', currentDay, currentMonth, currentYear);
    const desiredDate = DateTime.fromISO(String(date), { zone: timezone });
    console.log('DesiredDate', desiredDate);
    console.log('date', date);
    let endTimestamp =
      date! > todayDate!
        ? addTimeToISODateWithZone(
            endTime,
            DateTime.fromISO(String(date), { zone: timezone })
          )
        : addTimeToISODateWithZone(endTime, now);

    if (todayDate === date && availability?.isOverride) {
      if (currentTime >= startTime && currentTime <= endTime) {
        currentAvailability = {
          start_timestamp: String(startTimestamp),
          end_timestamp: String(endTimestamp),
          id: availability.id,
        };
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
    }
  }

  if (currentAvailability) {
    const currentAvailabilityIndex = availabilities.findIndex(
      (avail) => avail.id === currentAvailability?.id
    );

    const nextAvailabilityDataIndex = currentAvailabilityIndex + 1;
    const nextAvailabilityData =
      availabilities[nextAvailabilityDataIndex] ?? null;

    if (nextAvailabilityData) {
      console.log('nextAvailabilityData for id 97', nextAvailabilityData);
      const { startTime, endTime, date } = nextAvailabilityData;

      let startTimestamp =
        date! > todayDate!
          ? addTimeToISODateWithZone(
              startTime,
              DateTime.fromISO(String(date), { zone: timezone })
            )
          : addTimeToISODateWithZone(startTime, now);

      // let endTimestamp = date && addTimeToISODateWithZone(endTime, now);
      let endTimestamp =
        date! > todayDate!
          ? addTimeToISODateWithZone(endTime, now.plus({ day: 1 }))
          : addTimeToISODateWithZone(endTime, now);

      // Handle the special case for midnight override
      if (
        endTime === '23:59:00' &&
        nextAvailabilityDataIndex + 1 < availabilities.length
      ) {
        const nextNextAvailability =
          availabilities[nextAvailabilityDataIndex + 1];

        console.log('nextNextAvailability.endTime', nextNextAvailability);
        console.log('now', now);
        if (nextNextAvailability.startTime === '00:00:00') {
          endTimestamp = addTimeToISODateWithZone(
            nextNextAvailability.endTime,
            now.plus({ day: 1 })
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

console.log(computeProviderAvailabilityPerProvider(sortAvailabilityById(mock)));
