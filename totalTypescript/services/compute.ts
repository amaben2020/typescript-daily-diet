/* eslint-disable @typescript-eslint/no-loop-func */
/* eslint-disable no-restricted-syntax */
//@ts-nocheck

import { DateTime } from 'luxon';

const formatTimeToHHMM = (time: string) => time?.slice(0, 5);

function addTimeToISODateWithZone(time: string) {
  const currentDateTime = DateTime.now();
  const [hours, minutes] = time?.split(':').map(Number) ?? [];

  const newDateTime = currentDateTime.set({
    hour: hours,
    minute: minutes,
    second: 0,
    millisecond: 0,
  });

  return newDateTime.toISO();
}

function currentTimeFn(timezone: string) {
  const now = DateTime.now().setZone(timezone);

  // Utility function to format hours and minutes with leading zero
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
        id: 56,
        createdBy: 'admin',
        createdAt: '2024-07-14T21:34:58.355Z',
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
        id: 57,
        createdBy: 'admin',
        createdAt: '2024-07-14T21:34:58.355Z',
        updatedBy: null,
        updatedAt: null,
        providerId: 138,
        day: null,
        startTime: '21:00:00',
        endTime: '21:09:00',
        timezone: 'America/Los_Angeles',
        date: '2024-07-14',
        isOverride: true,
      },
    ],
  },
  {
    id: 400,
    firstname: 'Caleb',
    lastname: 'Markovich',
    email: 'calebmarkovich@gmail.com',
    rating: '4.7',
    phone: '18168774952',
    distance: 4.067316322298682,
    latitude: 38.99631248237696,
    longitude: -94.36141859581052,
    is_onjob: false,
    is_blocked: false,
    is_online: false,
    location_updated_at: '2024-02-24T17:41:04.867Z',
    job_request: {
      id: 10173,
      created_by: 'admin',
      created_at: '2023-07-11T21:53:13.120Z',
      updated_by: 'admin',
      updated_at: '2023-07-11T21:53:37.295Z',
      dispatcher_id: null,
      provider_id: 400,
      service_area_id: 2,
      location_address: "1460 NE Douglas St, Lee's Summit, MO 64086, USA",
      location_state: 'MO',
      location_city: "Lee's Summit",
      location_details: 'Parking lot',
      location_notes: '@ Whataburger',
      location_latitude: 38.99871165548076,
      location_longitude: -94.34112558453809,
      response_time: null,
      job_id: 4555,
      status: 'CANCELED',
      distance: 33077.42888,
      duration: 8.083866666666667,
    },
    availability: [
      {
        id: 56,
        createdBy: 'admin',
        createdAt: '2024-07-14T21:34:58.355Z',
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
        id: 57,
        createdBy: 'admin',
        createdAt: '2024-07-14T21:34:58.355Z',
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
        id: 58,
        createdBy: 'admin',
        createdAt: '2024-07-14T21:34:58.355Z',
        updatedBy: null,
        updatedAt: null,
        providerId: 138,
        day: null,
        startTime: '00:00:00',
        endTime: '04:00:00',
        timezone: 'America/Los_Angeles',
        date: '2024-07-14',
        isOverride: true,
      },
    ],
  },
  {
    id: 135,
    firstname: 'Jarel',
    lastname: 'Sage',
    email: 'jarelsage@gmail.com',
    rating: '4.8',
    phone: '18169822729',
    distance: 9.08787125608104,
    latitude: 39.0510227,
    longitude: -94.4680361,
    is_onjob: false,
    is_blocked: false,
    is_online: false,
    location_updated_at: '2024-02-24T17:41:04.867Z',
    job_request: null,
    availability: [],
  },
  {
    id: 134,
    firstname: 'Derrick',
    lastname: 'Northrup',
    email: 'derrick.m.northrup@outlook.com',
    rating: '5.0',
    phone: '19402244718',
    distance: 10.97476832871932,
    latitude: 38.84792709,
    longitude: -94.54629516,
    is_onjob: false,
    is_blocked: false,
    is_online: false,
    location_updated_at: '2024-02-24T17:41:04.867Z',
    job_request: {
      id: 10180,
      created_by: 'admin',
      created_at: '2023-07-13T18:13:12.945Z',
      updated_by: 'system',
      updated_at: '2023-07-13T18:23:13.181Z',
      dispatcher_id: null,
      provider_id: 134,
      service_area_id: 2,
      location_address: "1460 NE Douglas St, Lee's Summit, MO 64086, USA",
      location_state: 'MO',
      location_city: "Lee's Summit",
      location_details: 'Parking lot',
      location_notes: '@ Whataburger',
      location_latitude: 38.969240327565956,
      location_longitude: -94.31612799860417,
      response_time: null,
      job_id: 4555,
      status: 'NO_RESPONSE',
      distance: 80387.14168,
      duration: 16.0225,
    },
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
// const computeCurrentAndNextAvailability = (
//   availabilities: TAvailability[],
//   providerId: number
// ) => {
//   let timezone;
//   let currentAvailability: TComputeCurrentAndNextAvailability = null;
//   let nextAvailability: TComputeCurrentAndNextAvailability = null;

//   const now = DateTime.now();

//   const weekdayIndex = now.weekday % 7;

//   const providerTimezone = availabilities.find(
//     (availability) => availability.timezone
//   )?.timezone;
//   const currentTime = currentTimeFn(String(providerTimezone));

//   const todayDate = now.setZone(providerTimezone).toISODate();

//   const formattedAvailabilitiesTime = availabilities
//     .map((availability) => {
//       return {
//         ...availability,
//         startTime: formatTimeToHHMM(availability.startTime),
//         endTime: formatTimeToHHMM(availability.endTime),
//       };
//     })
//     .sort((a, b) => a.startTime.localeCompare(b.startTime));

//   for (const availability of formattedAvailabilitiesTime) {
//     timezone = availability.timezone;
//     const { startTime, endTime } = availability;

//     const currentAvailabilityIndex = availabilities.findIndex(
//       (avail) => avail.id === currentAvailability?.id
//     );

//     const nextAvailabilityDataIndex = currentAvailabilityIndex + 1;

//     const nextAvailabilityData =
//       availabilities[nextAvailabilityDataIndex] ?? null;

//     const midnightAvailabilityData =
//       availabilities.find(
//         (av) => av.date! > todayDate! && av.startTime === '00:00:00'
//       ) ?? null;

//     console.log('availability', availability);
//     timezone = availability.timezone;

//     const startTimestamp = availability.date
//       ? addTimeToISODateWithZone(startTime)
//       : '';

//     const endTimestamp =
//       availability?.date && addTimeToISODateWithZone(endTime);
//     // implies this is an override availability

//     if (todayDate === availability?.date && availability?.isOverride) {
//       if (currentTime >= startTime && currentTime <= endTime) {
//         currentAvailability = {
//           start_timestamp: String(startTimestamp),
//           end_timestamp: String(endTimestamp),
//           id: availability.id,
//         };
//       }
//     }
//   }

//   return {
//     providerId,
//     timezone,
//     ...(currentAvailability?.end_timestamp &&
//     currentAvailability?.start_timestamp
//       ? { current: currentAvailability }
//       : { current: null }),
//     ...(nextAvailability?.end_timestamp && nextAvailability?.start_timestamp
//       ? { next: nextAvailability }
//       : { next: null }),
//   };
// };

const computeProviderAvailability = (
  availabilities: Availability[],
  providerId: number
): ComputedAvailability => {
  // Handle empty or missing timezone cases
  if (!availabilities.length || !availabilities[0].timezone) {
    return { providerId, timezone: '', current: null, next: null };
  }

  // Get current time and provider's timezone
  const now = DateTime.now();
  const providerTimezone = availabilities[0].timezone;
  const todayDate = now.setZone(providerTimezone).toISODate();
  const currentTime = currentTimeFn(providerTimezone);

  // Correctly format and type availabilities
  const formattedAvailabilities: {
    startTime: DateTime;
    endTime: DateTime;
    id: number;
    date: string;
  }[] = availabilities
    // Filter out non-overrides and availabilities without dates
    .filter((avail) => avail.date && avail.isOverride)
    // Map and convert to DateTime objects ONLY for valid availabilities
    .map((avail) => {
      const startTime = DateTime.fromISO(`${avail.date}T${avail.startTime}`, {
        zone: availabilities[0].timezone, // Use timezone from the first availability
      });
      const endTime = DateTime.fromISO(`${avail.date}T${avail.endTime}`, {
        zone: availabilities[0].timezone,
      });

      // Ensure that startTime and endTime are valid DateTime instances
      if (!startTime.isValid || !endTime.isValid) {
        throw new Error(
          `Invalid startTime or endTime for availability with ID ${avail.id}`
        );
      }

      return {
        ...avail,
        startTime,
        endTime,
      };
    })
    .sort((a, b) => a.startTime - b.startTime); // Sort after formatting

  // Merge 23:59/00:00 availabilities
  for (let i = 0; i < formattedAvailabilities.length - 1; i++) {
    const currentAvail = formattedAvailabilities[i];
    const nextAvail = formattedAvailabilities[i + 1];

    // Check if the current availability ends at 23:59 on a day
    // AND the next one starts at 00:00 the following day
    if (
      currentAvail.endTime.equals(
        currentAvail.startOf('day').plus({ days: 1, seconds: -1 })
      ) &&
      nextAvail.startTime.equals(nextAvail.startOf('day')) &&
      nextAvail.date === currentAvail.plus({ days: 1 }).toISODate()
    ) {
      // Extend the current availability's endTime to the next day's endTime
      currentAvail.endTime = DateTime.fromISO(
        `${nextAvail.date}T${nextAvail.endTime.toFormat('HH:mm:ss')}`,
        { zone: providerTimezone }
      );
      // Remove the merged availability (since it's now included in the previous one)
      formattedAvailabilities.splice(i + 1, 1);
    }
  }

  // Find current and next availabilities
  const currentAvailability = formattedAvailabilities.find(
    (avail) => avail.startTime <= now && avail.endTime >= now
  );

  const nextAvailabilityIndex = formattedAvailabilities.findIndex(
    (avail) => avail.startTime > now
  );
  const nextAvailability =
    nextAvailabilityIndex !== -1
      ? formattedAvailabilities[nextAvailabilityIndex]
      : null;

  // Return the results with the providerId and timezone
  return {
    providerId,
    timezone: providerTimezone,
    current: currentAvailability
      ? {
          id: currentAvailability.id,
          start_timestamp: currentAvailability.startTime.toISO(),
          end_timestamp: currentAvailability.endTime.toISO(),
        }
      : null,
    next: nextAvailability
      ? {
          id: nextAvailability.id,
          start_timestamp: nextAvailability.startTime.toISO(),
          end_timestamp: nextAvailability.endTime.toISO(),
        }
      : null,
  };
};

const computeProviderAvailabilityPerProvider = (providerData: any[]) => {
  return (
    Array.isArray(providerData) &&
    providerData.map((provider) => {
      return computeProviderAvailability(provider.availability, provider.id);
    })
  );
};

console.log(computeProviderAvailabilityPerProvider(mock));
