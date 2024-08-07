// //@ts-nocheck
// import { has } from 'lodash';
// import { DateTime } from 'luxon';
// const formatTimeToHHMM = (time: string) => time?.slice(0, 5);
// const getDateTimeForWeekday = (weekday: number, timezone: string): DateTime => {
//   const now = DateTime.utc().setZone(timezone);
//   const today = now.weekday;

//   const daysToAdd = (weekday + 7 - today) % 7;

//   const targetDateTime = now.plus({ days: daysToAdd });

//   return targetDateTime;
// };

// const getAvailabilityWithHighestDay = (
//   availabilities: TAvailability[]
// ): TAvailability | null => {
//   if (availabilities.length === 0) {
//     return null;
//   }

//   return availabilities.reduce((acc, availability) => {
//     return acc.day! > availability.day! ? acc : availability;
//   });
// };

// const computeNextWeekTime = (weekday: number, timezone: string): DateTime => {
//   const now = DateTime.utc().setZone(timezone);
//   const today = now.weekday;

//   const daysToAdd = (weekday + 7 - today) % 7 || 7;
//   const targetDateTime = now.plus({ days: daysToAdd });

//   return targetDateTime;
// };

// export const finalAvailabilityData = (
//   availability: TComputeProviderAvailabilityPerProvider[]
// ) => {
//   const availabilities = computeProviderAvailabilityPerProvider(
//     availability
//   ) as TComputedAvailability[];

//   return availability.map((provider) => {
//     const providerAvailability = availabilities.find(
//       (avail: TComputedAvailability) => avail.providerId === provider.id
//     );

//     return {
//       ...provider,
//       availability: {
//         timezone: providerAvailability?.timezone ?? '',
//         current: providerAvailability?.current,
//         next: providerAvailability?.next,
//       },
//     };
//   });
// };

// export const transformProviders = (
//   allProvidersAvailability: TTransformProvidersData
// ) => {
//   const providerMap = new Map();

//   allProvidersAvailability.forEach((entry) => {
//     if (!providerMap.has(entry.id)) {
//       providerMap.set(entry.id, {
//         ...entry,
//         availability: entry.availability ? [entry.availability] : [],
//       });
//     } else {
//       const existingProvider = providerMap.get(entry.id);
//       if (entry.availability) {
//         existingProvider.availability.push(entry.availability);
//       }
//     }
//   });

//   return Array.from(providerMap.values());
// };

// const addTimeToISODateWithZone = (
//   time: string,
//   date: DateTime,
//   timezone?: string
// ) => {
//   const [hours, minutes] = time.split(':').map(Number);
//   const dt = date
//     .set({ hour: hours, minute: minutes, second: 0, millisecond: 0 })
//     .setZone(timezone, { keepLocalTime: true });

//   return dt.toISO({ includeOffset: true });
// };

// const currentTimeFn = (timezone: string) => {
//   const now = DateTime.now().setZone(timezone);
//   const formatWithLeadingZero = (num: number) => (num < 10 ? `0${num}` : num);
//   const hours = formatWithLeadingZero(now.hour);
//   const minutes = formatWithLeadingZero(now.minute);
//   const time = `${hours}:${minutes}`;
//   return time;
// };

// const hasConsecutiveMidnightAvailability = (
//   availabilities: TAvailability[],
//   timezone: string
// ): boolean => {
//   // Sort availabilities by day (ensures correct order for comparison)
//   const sortedAvailabilities = availabilities
//     .slice()
//     .sort((a, b) => (a.day ?? 0) - (b.day ?? 0));

//   for (let i = 0; i < sortedAvailabilities.length - 1; i++) {
//     const currentAvail = sortedAvailabilities[i];
//     const nextAvail = sortedAvailabilities[i + 1];

//     // Check if the current availability ends at 23:59 in its timezone
//     const currentEndTime = DateTime.fromISO(
//       `${currentAvail.date || DateTime.now().toISODate()}T${
//         currentAvail.endTime
//       }`,
//       { zone: timezone }
//     );
//     const currentEndOfDay = currentEndTime.endOf('day');

//     // Check if the next availability starts at 00:00 and is on the next day
//     const nextStartTime = DateTime.fromISO(
//       `${nextAvail.date || DateTime.now().toISODate()}T${nextAvail.startTime}`,
//       { zone: timezone }
//     );
//     const nextStartOfDay = nextStartTime.startOf('day');

//     if (
//       currentEndTime.equals(currentEndOfDay) && // Ends at 23:59:00 in its timezone
//       nextStartTime.equals(nextStartOfDay) && // Starts at 00:00:00 in its timezone
//       nextAvail.day === (currentAvail.day! + 1) % 7 // Is on the next day
//     ) {
//       return true; // Found a consecutive midnight availability pair
//     }
//   }
//   return false; // No consecutive midnight pairs found
// };

// const getNextWeekDateForDay = (av: TAvailability) => {
//   const now = DateTime.now().setZone(av.timezone);

//   // Find the next week's Monday (dayIndex: 1)
//   const nextWeek = now
//     .plus({ weeks: 1 })
//     .startOf('week')
//     .set({
//       weekday: av.day,
//       hour: av.endTime.split(':')[0],
//       minute: av.endTime.split(':')[1],
//     });

//   // Format the result
//   return nextWeek.toISO();
// };

// const getDateForDay = (av: TAvailability) => {
//   const now = DateTime.now().setZone(av.timezone);
//   const nextWeek = now
//     .plus({ day: 0 })
//     .startOf('week')
//     .set({
//       weekday: av.day,
//       hour: av.startTime.split(':')[0],
//       minute: av.startTime.split(':')[1],
//     });
//   return nextWeek.toISO();
// };
// const getDateWithinWeek = (av: TAvailability) => {
//   const now = DateTime.now().setZone(av.timezone);

//   const nextWeek = now
//     .plus({ day: 0 })
//     .startOf('week')
//     .set({
//       weekday: av.day,
//       hour: av.endTime.split(':')[0],
//       minute: av.endTime.split(':')[1],
//     });

//   return nextWeek.toISO();
// };

// const mock = [
//   {
//     id: 138,
//     firstname: 'Mobile',
//     lastname: 'UAT',
//     email: null,
//     rating: '0',
//     phone: '11111111111',
//     distance: 1.1210646618872298,
//     latitude: 38.93592274180123,
//     longitude: -94.35870889009857,
//     is_onjob: false,
//     is_blocked: false,
//     is_online: true,
//     location_updated_at: '2024-02-24T17:41:04.867Z',
//     job_request: null,
//     availability: [
//       {
//         id: 277,
//         createdBy: 'admin',
//         createdAt: '2024-07-31T12:35:28.143Z',
//         updatedBy: null,
//         updatedAt: null,
//         providerId: 138,
//         day: 0,
//         startTime: '00:00:00',
//         endTime: '23:59:00',
//         timezone: 'America/Los_Angeles',
//         date: null,
//         isOverride: false,
//       },
//       {
//         id: 278,
//         createdBy: 'admin',
//         createdAt: '2024-07-31T12:35:28.143Z',
//         updatedBy: null,
//         updatedAt: null,
//         providerId: 138,
//         day: null,
//         startTime: '01:01:00',
//         endTime: '19:59:00',
//         timezone: 'America/Los_Angeles',
//         date: '2024-08-02',
//         isOverride: true,
//       },
//       {
//         id: 271,
//         createdBy: 'admin',
//         createdAt: '2024-07-31T12:35:28.143Z',
//         updatedBy: null,
//         updatedAt: null,
//         providerId: 138,
//         day: 1,
//         startTime: '00:00:00',
//         endTime: '23:59:00',
//         timezone: 'America/Los_Angeles',
//         date: null,
//         isOverride: false,
//       },
//       {
//         id: 272,
//         createdBy: 'admin',
//         createdAt: '2024-07-31T12:35:28.143Z',
//         updatedBy: null,
//         updatedAt: null,
//         providerId: 138,
//         day: 2,
//         startTime: '00:00:00',
//         endTime: '23:59:00',
//         timezone: 'America/Los_Angeles',
//         date: null,
//         isOverride: false,
//       },
//       {
//         id: 273,
//         createdBy: 'admin',
//         createdAt: '2024-07-31T12:35:28.143Z',
//         updatedBy: null,
//         updatedAt: null,
//         providerId: 138,
//         day: 6,
//         startTime: '00:00:00',
//         endTime: '23:59:00',
//         timezone: 'America/Los_Angeles',
//         date: null,
//         isOverride: false,
//       },
//       {
//         id: 274,
//         createdBy: 'admin',
//         createdAt: '2024-07-31T12:35:28.143Z',
//         updatedBy: null,
//         updatedAt: null,
//         providerId: 138,
//         day: 4,
//         startTime: '00:00:00',
//         endTime: '23:59:00',
//         timezone: 'America/Los_Angeles',
//         date: null,
//         isOverride: false,
//       },
//       {
//         id: 275,
//         createdBy: 'admin',
//         createdAt: '2024-07-31T12:35:28.143Z',
//         updatedBy: null,
//         updatedAt: null,
//         providerId: 138,
//         day: 3,
//         startTime: '00:00:00',
//         endTime: '23:59:00',
//         timezone: 'America/Los_Angeles',
//         date: null,
//         isOverride: false,
//       },
//       {
//         id: 276,
//         createdBy: 'admin',
//         createdAt: '2024-07-31T12:35:28.143Z',
//         updatedBy: null,
//         updatedAt: null,
//         providerId: 138,
//         day: 5,
//         startTime: '00:00:00',
//         endTime: '23:59:00',
//         timezone: 'America/Los_Angeles',
//         date: null,
//         isOverride: false,
//       },
//     ],
//   },
// ];

// type TComputeCurrentAndNextAvailability = {
//   timezone?: string;
//   start_timestamp: string | null;
//   end_timestamp: string | null;
//   id?: number;
// } | null;

// type TAvailability = {
//   id: number;
//   createdBy: string;
//   createdAt: string;
//   updatedBy: string | null;
//   updatedAt: string | null;
//   day?: number | null;
//   date?: string | null;
//   startTime: string;
//   endTime: string;
//   isOverride: boolean;
//   timezone?: string;
//   providerId: number;
// };
// function getLowerDate(dateA: DateTime, dateB: DateTime): DateTime {
//   return dateA <= dateB ? dateA : dateB;
// }
// const formatAvailabilities = (availabilities: TAvailability[]) => {
//   return availabilities
//     .map((availability) => {
//       return {
//         ...availability,
//         startTime: formatTimeToHHMM(availability.startTime),
//         endTime: formatTimeToHHMM(availability.endTime),
//       };
//     })
//     .sort((a, b) => a.startTime.localeCompare(b.startTime));
// };

// const checkMidnightOverride = (availabilities) => {
//   for (let i = 0; i < availabilities.length - 1; i++) {
//     const current = availabilities[i];
//     const next = availabilities[i + 1];

//     if (current.endTime === '23:59:00' && next.startTime === '00:00:00') {
//       return true;
//     }
//   }
//   return false;
// };

// const mergeAlwaysOnlineAvailabilities = (
//   currentAvailability: TAvailability,
//   timezone: string,
//   availabilities: TAvailability[]
//   // eslint-disable-next-line consistent-return
// ) => {
//   const previousAvailability = availabilities.find(
//     (avail) => avail.day === Number(currentAvailability.day) - 1
//   );

//   if (previousAvailability) {
//     const startTimestamp = getDateTimeForWeekday(
//       Number(currentAvailability.day),
//       String(timezone)
//     ).set({
//       hour: Number(0o0),
//       minute: Number(0o0),
//       second: Number(0o0),
//       millisecond: 0,
//     });

//     const previousAvailabilityEndTime =
//       previousAvailability?.endTime.split(':');

//     const endTimestamp = getDateTimeForWeekday(
//       Number(previousAvailability?.day),
//       String(timezone)
//     ).set({
//       hour: Number(previousAvailabilityEndTime[0]),
//       minute: Number(previousAvailabilityEndTime[1]),
//       second: Number(0o0),
//       millisecond: 0,
//     });

//     return {
//       start_timestamp: startTimestamp.toISO(),
//       end_timestamp: endTimestamp.toISO(),
//       id: currentAvailability.id,
//     };
//   }
// };
// const isProviderAlwaysOnline = (availabilities: TAvailability[]) =>
//   availabilities.every(
//     (avail) =>
//       avail.day !== null &&
//       !avail.isOverride &&
//       avail.startTime === '00:00:00' &&
//       avail.endTime === '23:59:00'
//   );

// const getNextWeekOccurrenceForPastDay = (
//   dayIndex: number,
//   timezone: string,
//   notNextWeek?: boolean,
//   upperWeek?: boolean
// ): DateTime => {
//   const now = DateTime.now().setZone(timezone);
//   const todayIndex = now.weekday % 7;
//   const nextWeek: number = notNextWeek ? 0 : 7;
//   const daysToAdd = (dayIndex - todayIndex + nextWeek) % 7 || 7;
//   return now
//     .plus({ days: upperWeek ? 7 + dayIndex : daysToAdd })
//     .startOf('day');
// };

// const getDayDate = (dayIndex: number, timezone: string): DateTime => {
//   const now = DateTime.now().setZone(timezone);
//   const todayIndex = now.weekday % 7;
//   const nextWeek: number = 0;
//   const daysToAdd = (dayIndex - todayIndex + nextWeek) % 7 || 7;
//   // check what -2 did previously
//   return now
//     .plus({ days: dayIndex === 0 ? 0 : Number(dayIndex) - 1 })
//     .startOf('day');
// };

// export const computeCurrentAndNextAvailability = (
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

//   const formattedAvailabilitiesTime = formatAvailabilities(availabilities);

//   const currentDay = formattedAvailabilitiesTime.find(
//     (avail) => avail.day === weekdayIndex
//   );

//   const isAlwaysOnline = isProviderAlwaysOnline(availabilities);

//   const daysOfWeek = [0, 1, 2, 3, 4, 5, 6];
//   const hasAvailabilityForEveryDay = daysOfWeek.every((day) =>
//     availabilities.some((avail) => avail.day === day && !avail.isOverride)
//   );

//   const isAlwaysOnlineForWork = isAlwaysOnline && hasAvailabilityForEveryDay;

//   for (const availability of formattedAvailabilitiesTime) {
//     timezone = availability.timezone;

//     const { startTime, endTime, date } = availability;

//     const startTimestamp = addTimeToISODateWithZone(
//       startTime,
//       date! > todayDate! || availability.day! > weekdayIndex
//         ? now.plus({ day: 1 })
//         : now,
//       timezone
//     );

//     const endTimestamp = addTimeToISODateWithZone(
//       endTime,
//       date! > todayDate! || availability.day! > weekdayIndex
//         ? now.plus({ day: 1 })
//         : now,
//       timezone
//     );

//     // computes for next week if past date is selected
//     if (availability?.day < weekdayIndex && !availability.isOverride) {
//       const nextWeekDate = getNextWeekOccurrenceForPastDay(
//         Number(availability.day),
//         String(timezone)
//       );

//       const updatedDateTime = nextWeekDate.set({
//         hour: Number(availability.startTime.split(':')[0]),
//         minute: Number(availability.startTime.split(':')[1]),
//       });

//       const nextAvailabilityEndtime = nextWeekDate.set({
//         hour: Number(availability.endTime.split(':')[0]),
//         minute: Number(availability.endTime.split(':')[1]),
//       });

//       nextAvailability = {
//         start_timestamp: updatedDateTime.toISO(),
//         end_timestamp: nextAvailabilityEndtime.toISO(),
//         id: availability.id,
//       };
//       break;
//     }

//     if (todayDate === date && availability?.isOverride) {
//       if (currentTime >= startTime && currentTime <= endTime) {
//         currentAvailability = {
//           start_timestamp: String(startTimestamp),
//           end_timestamp: String(endTimestamp),
//           id: availability.id,
//         };
//       }

//       if (currentTime < startTime && !currentAvailability) {
//         nextAvailability = {
//           start_timestamp: String(startTimestamp),
//           end_timestamp: String(endTimestamp),
//           id: availability.id,
//         };
//         break;
//       }
//     }

//     if (weekdayIndex === availability.day && !availability.isOverride) {
//       const hasMidnightOverride = checkMidnightOverride(availabilities);
//       const sortedAvailabilities = availabilities.sort((a, b) =>
//         Number(a.day) > Number(b.day) ? 1 : -1
//       );

//       const hasElapsed = currentTime > endTime;

//       if (hasElapsed && !isAlwaysOnlineForWork) {
//         const sortedAv = availabilities.sort((a, b) =>
//           Number(a.day) > Number(b.day) ? 1 : -1
//         );

//         const futureDay = sortedAv.find((av) => Number(av.day) > weekdayIndex);

//         const currDay = sortedAv.find((av) => av.day === weekdayIndex);
//         const previousDay = sortedAv.find(
//           (av) =>
//             Number(av.day) < weekdayIndex &&
//             Number(av.day) < Number(currDay?.day)
//         );

//         // eslint-disable-next-line no-nested-ternary
//         const correctAvailability = futureDay?.id
//           ? futureDay
//           : previousDay?.id
//           ? previousDay
//           : currDay;

//         const nextAvailableDate = getNextWeekOccurrenceForPastDay(
//           Number(correctAvailability?.day),
//           String(timezone),
//           !!futureDay?.id
//         );

//         const updatedDateTime = nextAvailableDate.set({
//           hour: Number(correctAvailability?.startTime.split(':')[0]),
//           minute: Number(correctAvailability?.startTime.split(':')[1]),
//         });

//         const nextAvailabilityEndtime = nextAvailableDate.set({
//           hour: Number(correctAvailability?.endTime.split(':')[0]),
//           minute: Number(correctAvailability?.endTime.split(':')[1]),
//         });

//         // compute next availability if current is past
//         if (currentTime >= endTime) {
//           const filterPastAvailability = availabilities.filter(
//             (av) => av.endTime > currentTime
//           );

//           nextAvailability = {
//             start_timestamp: computeWeekDate(filterPastAvailability[0])
//               .start_timestamp,
//             end_timestamp: computeWeekDate(filterPastAvailability[0])
//               .end_timestamp,
//             id: filterPastAvailability[0].id,
//           };
//           break;
//         }

//         nextAvailability = {
//           start_timestamp: updatedDateTime.toISO(),
//           end_timestamp: nextAvailabilityEndtime.toISO(),
//           id: availability.id,
//         };
//         break;
//       }

//       if (hasMidnightOverride) {
//         const mergedAvailabilities = mergeAvailabilities(
//           availabilities.filter((avail) => !avail.isOverride)
//         );
//         const lastAvailability = availabilities.find(
//           (av) =>
//             av.endTime === mergedAvailabilities[0].endTime &&
//             av.id === mergedAvailabilities[0].id
//         );

//         const nextAvailabilityAfterMidnight = sortedAvailabilities.find(
//           (av) => av.startTime !== '00:00:00' && av.endTime !== '23:59:00'
//         );
//         // const isOverrides = availabilities.filter((av) => av.isOverride)[0];
//         // console.log('isOverrides', isOverrides);
//         // if (isOverrides) {
//         //   // So the availability.current.end_timestamp would be Thursday 23:59
//         //   // And the availability.next.start_timestamp would be Friday 3:00
//         //   console.log('MergedAv....', availabilities);
//         //   const startTimestamp = convertToISO(
//         //     isOverrides.date,
//         //     isOverrides.startTime.split(':')[0],
//         //     isOverrides.startTime.split(':')[1],
//         //     timezone
//         //   );

//         //   const dayIndexForOverrides = getDayAvailabilityIndex(
//         //     startTimestamp,
//         //     timezone
//         //   );
//         //   console.log(dayIndexForOverrides);

//         //   const currentTime = availabilities.find(
//         //     (av) => av.day === dayIndexForOverrides - 1
//         //   );

//         //   const endTimestamp = convertToISO(
//         //     isOverrides.date,
//         //     isOverrides.endTime.split(':')[0],
//         //     isOverrides.endTime.split(':')[1],
//         //     timezone
//         //   );
//         //   currentAvailability = {
//         //     start_timestamp: getDateForDay(currentTime),
//         //     end_timestamp: appendTimeToDate(
//         //       getDateForDay(currentTime),
//         //       currentTime?.endTime.split(':')[0],
//         //       currentTime?.endTime.split(':')[1]
//         //     ),
//         //     id: currentTime.id,
//         //   };
//         //   nextAvailability = {
//         //     start_timestamp: startTimestamp,
//         //     end_timestamp: endTimestamp,
//         //     id: isOverrides.id,
//         //   };
//         //   break;
//         // }

//         currentAvailability = {
//           start_timestamp: computeWeekDate(availabilities[0]).start_timestamp,
//           end_timestamp: computeWeekDate(lastAvailability!).end_timestamp,
//           id: lastAvailability!.id,
//         };
//         nextAvailability = {
//           start_timestamp: computeWeekDate(nextAvailabilityAfterMidnight!)
//             .start_timestamp,
//           end_timestamp: computeWeekDate(nextAvailabilityAfterMidnight!)
//             .end_timestamp,
//           id: nextAvailabilityAfterMidnight?.id,
//         };
//         break;
//       }

//       const hasNextDayAvailablity = sortedAvailabilities.find(
//         (av) => av.day === weekdayIndex + 1
//       );
//       const hasPrevAndNextOnSameDay = sortedAvailabilities.filter(
//         (av) => av.day === weekdayIndex && av.endTime > currentTime
//       );

//       if (
//         hasNextDayAvailablity &&
//         !availability.isOverride &&
//         hasPrevAndNextOnSameDay.length < 2
//       ) {
//         // eslint-disable-next-line no-unreachable-loop
//         for (const [index, av] of sortedAvailabilities.entries()) {
//           console.log('av', av);
//           currentAvailability = {
//             start_timestamp: computeWeekDate(av).start_timestamp,
//             end_timestamp: computeWeekDate(av).end_timestamp,
//             id: av.id,
//           };
//           nextAvailability = {
//             start_timestamp: computeWeekDate(sortedAvailabilities[index + 2])
//               .start_timestamp,
//             end_timestamp: computeWeekDate(sortedAvailabilities[index + 2])
//               .end_timestamp,
//             id: sortedAvailabilities[index + 1].id,
//           };

//           break;
//         }

//         break;
//       }

//       if (currentTime >= startTime && currentTime <= endTime) {
//         currentAvailability = {
//           start_timestamp: String(startTimestamp),
//           end_timestamp: String(endTimestamp),
//           id: availability.id,
//         };
//       }

//       if (availability.id !== currentAvailability?.id) {
//         nextAvailability = {
//           start_timestamp: String(startTimestamp),
//           end_timestamp: String(endTimestamp),
//           id: availability.id,
//         };
//       }
//     }

//     if (
//       weekdayIndex === availability.day! &&
//       !currentAvailability?.id &&
//       availability.endTime < currentTime &&
//       !nextAvailability?.id
//     ) {
//       const getNextWeekDay = getDateTimeForWeekday(
//         availability.day!,
//         String(timezone)
//       ).plus({ days: 7 });

//       const nextWeekDate = DateTime.fromISO(
//         availabilities?.find((avail) => avail.date)?.date ?? ''
//       );

//       const nextAvailableTimeSlot = getLowerDate(nextWeekDate, getNextWeekDay);
//       const dateString = nextAvailableTimeSlot
//         .toLocaleString(DateTime.DATETIME_FULL)
//         .replace('PDT', String(timezone));

//       const dateTime = DateTime.fromFormat(
//         dateString,
//         "MMMM d, yyyy 'at' h:mm a z",
//         { zone: timezone }
//       );

//       const updatedDateTime = dateTime.set({
//         hour: Number(
//           availability?.startTime
//             ? availability.startTime.split(':')[0]
//             : availability.startTime.split(':')[0]
//         ),
//         minute: Number(
//           availability?.startTime
//             ? availability.startTime.split(':')[1]
//             : availability.startTime.split(':')[1]
//         ),
//       });

//       const nextAvailabilityEndtime = dateTime.set({
//         hour: Number(
//           availability?.endTime
//             ? availability.endTime.split(':')[0]
//             : availability.endTime.split(':')[0]
//         ),
//         minute: Number(
//           availability?.endTime
//             ? availability.endTime.split(':')[1]
//             : availability.endTime.split(':')[1]
//         ),
//       });

//       const updatedIsoString = updatedDateTime.toISO();
//       const nextAvailabilityEndtimeIso = nextAvailabilityEndtime.toISO();

//       nextAvailability = {
//         start_timestamp: updatedIsoString,
//         end_timestamp: nextAvailabilityEndtimeIso,
//         id: availability.id,
//       };
//     }

//     // TODO: extract this logic to a function
//     const hasNextButNoCurrentDay =
//       Number(availability.day) > weekdayIndex &&
//       !availability.isOverride &&
//       !currentAvailability?.start_timestamp;
//     if (hasNextButNoCurrentDay) {
//       const { day } = availability;

//       const hasNextAvailability = availabilities.find(
//         (avail) =>
//           Number(avail.day) < Number(day) ||
//           Number(avail.endTime.split(':')[0]) <
//             Number(availability.startTime.split(':')[0])
//       );

//       const nextAvailableTimeSlot = getDateTimeForWeekday(
//         Number(hasNextAvailability?.day ? hasNextAvailability?.day : day),
//         String(timezone)
//       );

//       const dateString = nextAvailableTimeSlot
//         .toLocaleString(DateTime.DATETIME_FULL)
//         .replace('PDT', String(timezone));

//       const dateTime = DateTime.fromFormat(
//         dateString,
//         "MMMM d, yyyy 'at' h:mm a z",
//         { zone: timezone }
//       );

//       const updatedDateTime = dateTime.set({
//         hour: Number(
//           hasNextAvailability?.startTime
//             ? hasNextAvailability.startTime.split(':')[0]
//             : availability.startTime.split(':')[0]
//         ),
//         minute: Number(
//           hasNextAvailability?.startTime
//             ? hasNextAvailability.startTime.split(':')[1]
//             : availability.startTime.split(':')[1]
//         ),
//       });

//       const nextAvailabilityEndtime = dateTime.set({
//         hour: Number(
//           hasNextAvailability?.endTime
//             ? hasNextAvailability.endTime.split(':')[0]
//             : availability.endTime.split(':')[0]
//         ),
//         minute: Number(
//           hasNextAvailability?.endTime
//             ? hasNextAvailability.endTime.split(':')[1]
//             : availability.endTime.split(':')[1]
//         ),
//       });

//       const updatedIsoString = updatedDateTime.toISO();
//       const nextAvailabilityEndtimeIso = nextAvailabilityEndtime.toISO();
//       const hasMidnightOverride = checkMidnightOverride(availabilities);
//       console.log('hasMidnightOverride', hasMidnightOverride);
//       if (hasMidnightOverride) {
//         const mergedAvailabilities = mergeAvailabilities(availabilities);
//         const sortedAvailabilities = availabilities.sort((a, b) =>
//           Number(a.day) > Number(b.day) ? 1 : -1
//         );
//         const lastAvailability = availabilities.find(
//           (av) =>
//             av.endTime === mergedAvailabilities[0].endTime &&
//             av.id === mergedAvailabilities[0].id
//         );

//         const isPastWeekDay = lastAvailability?.day! < weekdayIndex;
//         const sortedAvByIds = availabilities.sort((a, b) =>
//           a.id > b.id ? 1 : -1
//         );
//         const nextAvailabilityAfterMidnight = sortedAvailabilities.find(
//           (av) => av.startTime !== '00:00:00' && av.endTime !== '23:59:00'
//         );
//         const getNextWeekDateAndTimezoneForLastAv =
//           getNextWeekDateForDay(lastAvailability);

//         currentAvailability = {
//           start_timestamp: getDateForDay(sortedAvByIds[0]),
//           end_timestamp: isPastWeekDay
//             ? getNextWeekDateAndTimezoneForLastAv
//             : !isPastWeekDay
//             ? getDateWithinWeek(lastAvailability)
//             : computeWeekDate(lastAvailability!).end_timestamp,
//           id: lastAvailability!.id,
//         };
//         nextAvailability = {
//           start_timestamp: computeWeekDate(nextAvailabilityAfterMidnight!)
//             .start_timestamp,
//           end_timestamp: computeWeekDate(nextAvailabilityAfterMidnight!)
//             .end_timestamp,
//           id: nextAvailabilityAfterMidnight?.id,
//         };
//         break;
//       }
//       nextAvailability = {
//         start_timestamp: updatedIsoString,
//         end_timestamp: nextAvailabilityEndtimeIso,
//         id: availability.id,
//       };
//     }

//     if (
//       availability.date! > todayDate! &&
//       availability.isOverride &&
//       !currentAvailability?.start_timestamp
//     ) {
//       const removeEmptyAvailabilities = availabilities.filter(
//         (av) => av.endTime !== '00:00:00' && av.startTime !== '00:00:00'
//       );

//       const hasNextAvailability = removeEmptyAvailabilities.find(
//         (avail) => avail.date! < availability.date!
//       );

//       const nextAvailableTimeSlot = DateTime.fromISO(
//         hasNextAvailability?.date
//           ? hasNextAvailability?.date
//           : availability.date!,

//         {
//           zone: timezone,
//         }
//       );

//       const dateString = nextAvailableTimeSlot
//         .toLocaleString(DateTime.DATETIME_FULL)
//         .replace('PDT', String(timezone));

//       const dateTime = DateTime.fromFormat(
//         dateString,
//         "MMMM d, yyyy 'at' h:mm a z",
//         { zone: timezone }
//       );

//       const updatedDateTime = dateTime.set({
//         hour: Number(availability.startTime.split(':')[0]),
//         minute: Number(availability.startTime.split(':')[1]),
//       });

//       const nextAvailabilityEndtime = dateTime.set({
//         hour: Number(availability.endTime.split(':')[0]),
//         minute: Number(availability.endTime.split(':')[1]),
//       });

//       const updatedIsoString = updatedDateTime.toISO();
//       const nextAvailabilityEndtimeIso = nextAvailabilityEndtime.toISO();

//       nextAvailability = {
//         start_timestamp: updatedIsoString,
//         end_timestamp: nextAvailabilityEndtimeIso,
//         id: availability.id,
//       };
//     }

//     // if availability is undefined for Next
//     if (
//       availability.date! > todayDate! &&
//       availability.isOverride &&
//       !currentAvailability?.start_timestamp &&
//       availability.startTime === '00:00' &&
//       availability.endTime === '00:00'
//     ) {
//       nextAvailability = null;
//     }
//   }

//   if (currentAvailability) {
//     const currentAvailabilityIndex = availabilities.findIndex(
//       (avail) => avail.id === currentAvailability?.id
//     );

//     const nextAvailabilityDataIndex = currentAvailabilityIndex + 1;
//     const nextAvailabilityData =
//       availabilities[nextAvailabilityDataIndex] ?? null;

//     const sortedAvailabilities = availabilities.sort((a, b) =>
//       a.id > b.id ? 1 : -1
//     );

//     const previousDay = sortedAvailabilities.find(
//       (av) => av.id === nextAvailabilityData?.id && av.day !== null
//     );

//     const currDay = sortedAvailabilities.find((av) => av.day === weekdayIndex);

//     if (
//       Number(previousDay?.day) < weekdayIndex &&
//       Number(nextAvailabilityData?.day) < weekdayIndex
//     ) {
//       currentAvailability.end_timestamp = addTimeToISODateWithZone(
//         String(currDay?.endTime),
//         now,
//         timezone
//       );

//       currentAvailability.start_timestamp = addTimeToISODateWithZone(
//         String(currDay?.startTime),
//         now,
//         timezone
//       );

//       const convertPreviousDayToNextWeek = getDateTimeForWeekday(
//         Number(previousDay?.day),
//         String(timezone)
//       ).plus({ days: 7 });

//       const dateString = convertPreviousDayToNextWeek
//         .toLocaleString(DateTime.DATETIME_FULL)
//         .replace('PDT', String(timezone));

//       const dateTime = DateTime.fromFormat(
//         dateString,
//         "MMMM d, yyyy 'at' h:mm a z",
//         { zone: timezone }
//       );

//       const updatedDateTime = dateTime.set({
//         hour: Number(
//           previousDay?.startTime
//             ? previousDay.startTime.split(':')[0]
//             : previousDay?.startTime.split(':')[0]
//         ),
//         minute: Number(
//           previousDay?.startTime
//             ? previousDay.startTime.split(':')[1]
//             : previousDay?.startTime.split(':')[1]
//         ),
//       });

//       const previousDayEndtime = dateTime.set({
//         hour: Number(
//           previousDay?.endTime
//             ? previousDay.endTime.split(':')[0]
//             : previousDay?.endTime.split(':')[0]
//         ),
//         minute: Number(
//           previousDay?.endTime
//             ? previousDay.endTime.split(':')[1]
//             : previousDay?.endTime.split(':')[1]
//         ),
//       });

//       const updatedIsoString = updatedDateTime.toISO();
//       const nextAvailabilityEndtimeIso = previousDayEndtime.toISO();

//       nextAvailability = {
//         start_timestamp: updatedIsoString,
//         end_timestamp: nextAvailabilityEndtimeIso,
//         id: previousDay?.id,
//       };
//     }

//     if (nextAvailabilityData?.startTime === '00:00:00' && !previousDay?.id) {
//       const nextNextAvailability =
//         availabilities[nextAvailabilityDataIndex + 1];

//       currentAvailability.end_timestamp = addTimeToISODateWithZone(
//         nextAvailabilityData.endTime,
//         now.plus({ day: 1 }),
//         timezone
//       );

//       nextAvailability = nextNextAvailability?.startTime
//         ? {
//             start_timestamp: addTimeToISODateWithZone(
//               nextNextAvailability.startTime,
//               now.plus({ day: 1 }),
//               timezone
//             ),
//             end_timestamp: addTimeToISODateWithZone(
//               nextNextAvailability.endTime,
//               now.plus({ day: 1 }),
//               timezone
//             ),
//           }
//         : null;
//     }

//     if (nextAvailabilityData && !previousDay?.id) {
//       const { startTime, endTime, date } = nextAvailabilityData;

//       const startTimestamp = addTimeToISODateWithZone(
//         startTime,
//         date! > todayDate!
//           ? DateTime.fromISO(String(date), { zone: timezone })
//           : now,
//         timezone
//       );

//       let endTimestamp = addTimeToISODateWithZone(
//         endTime,
//         date! > todayDate! ? now.plus({ day: 1 }) : now,
//         timezone
//       );

//       // Handle the special case for midnight override
//       if (
//         endTime === '23:59:00' &&
//         nextAvailabilityDataIndex + 1 < availabilities.length
//       ) {
//         const nextNextAvailability =
//           availabilities[nextAvailabilityDataIndex + 1];

//         if (nextNextAvailability.startTime === '00:00:00') {
//           endTimestamp = addTimeToISODateWithZone(
//             nextNextAvailability.endTime,
//             now.plus({ day: 1 }),
//             timezone
//           );
//         }
//       }

//       nextAvailability = {
//         start_timestamp: String(startTimestamp),
//         end_timestamp: String(endTimestamp),
//         id: nextAvailabilityData.id,
//       };
//     }
//   }

//   // When availabilities all have start as 00:00 and end as 23:59, next should be null
//   if (isAlwaysOnlineForWork) {
//     const mergedAvailability = mergeAlwaysOnlineAvailabilities(
//       currentDay as TAvailability,
//       String(providerTimezone),
//       formattedAvailabilitiesTime
//     );

//     if (mergedAvailability) {
//       currentAvailability = {
//         timezone: providerTimezone,
//         start_timestamp: mergedAvailability.start_timestamp,
//         end_timestamp: null,
//         id: currentDay?.id,
//       };
//       nextAvailability = null;
//     }
//   }

//   return {
//     providerId,
//     timezone,
//     ...(currentAvailability?.end_timestamp ||
//     currentAvailability?.start_timestamp
//       ? { current: currentAvailability }
//       : { current: null }),
//     ...(nextAvailability?.end_timestamp && nextAvailability?.start_timestamp
//       ? { next: nextAvailability }
//       : { next: null }),
//   };
// };

// const computeProviderAvailabilityPerProvider = (providerData: any[]) => {
//   return (
//     Array.isArray(providerData) &&
//     providerData.map((provider) => {
//       return computeCurrentAndNextAvailability(
//         provider.availability,
//         provider.id
//       );
//     })
//   );
// };

// const sortAvailabilityById = (providers: TProvider[]) =>
//   providers.map((provider) => {
//     const sortedAvailability =
//       provider.availability!.sort((a, b) => a.id - b.id) ?? [];
//     return {
//       ...provider,
//       availability: sortedAvailability,
//     };
//   });

// console.log(computeProviderAvailabilityPerProvider(sortAvailabilityById(mock)));

// function mergeAvailabilities(
//   availabilities: Availability[],
//   index = 0
// ): Availability[] {
//   if (index >= availabilities.length - 1) {
//     return availabilities.slice(index);
//   }

//   const current = availabilities[index];
//   const next = availabilities[index + 1];

//   if (current.endTime === '23:59:00' && next.startTime === '00:00:00') {
//     const merged = {
//       ...current,
//       endTime: next.endTime,
//       id: next.id,
//       day: next.day,
//     };

//     return mergeAvailabilities([merged, ...availabilities.slice(index + 2)], 0);
//   }

//   return [current, ...mergeAvailabilities(availabilities, index + 2)];
// }

// function sortAvailabilityByCustomOrder(
//   availabilities: Availability[],
//   dayToStart: number
// ) {
//   const createDayOrder = () => {
//     const days = [0, 1, 2, 3, 4, 5, 6];
//     const currentDay = 5;
//     const dayOrder: number[] = [];

//     for (let i = 0; i < days.length; i++) {
//       dayOrder.push(days[(currentDay + i) % days.length]);
//     }
//     console.log('dayOrder', dayOrder);
//     return dayOrder;
//   };

//   const dayOrder = createDayOrder();

//   return availabilities.sort((a, b) => {
//     const indexA = dayOrder.indexOf(a.day!);
//     const indexB = dayOrder.indexOf(b.day!);

//     return indexA - indexB;
//   });
// }

// function computeNextWeekDate(availability) {
//   let nextAvailability;

//   const currentAvailableDay = getNextWeekOccurrenceForPastDay(
//     Number(availability?.day),
//     String(availability.timezone),
//     false,
//     true
//   );

//   const updatedDateTime = currentAvailableDay.set({
//     hour: Number(availability?.startTime.split(':')[0]),
//     minute: Number(availability?.startTime.split(':')[1]),
//   });

//   const nextAvailabilityEndtime = currentAvailableDay.set({
//     hour: Number(availability?.endTime.split(':')[0]),
//     minute: Number(availability?.endTime.split(':')[1]),
//   });

//   nextAvailability = {
//     start_timestamp: updatedDateTime.toISO(),
//     end_timestamp: nextAvailabilityEndtime.toISO(),
//     id: availability.id,
//   };

//   return nextAvailability;
// }

// function computeNextWeekDateWithinWeek(availability) {
//   let nextAvailability;

//   const currentAvailableDay = getNextWeekOccurrenceForPastDay(
//     Number(availability?.day),
//     String(availability.timezone)
//   );

//   const updatedDateTime = currentAvailableDay.set({
//     hour: Number(availability?.startTime.split(':')[0]),
//     minute: Number(availability?.startTime.split(':')[1]),
//   });

//   const nextAvailabilityEndtime = currentAvailableDay.set({
//     hour: Number(availability?.endTime.split(':')[0]),
//     minute: Number(availability?.endTime.split(':')[1]),
//   });

//   nextAvailability = {
//     start_timestamp: updatedDateTime.toISO(),
//     end_timestamp: nextAvailabilityEndtime.toISO(),
//     id: availability.id,
//   };

//   return nextAvailability;
// }

// function computeWeekDate(availability) {
//   let nextAvailability;

//   const currentAvailableDay = getDayDate(
//     Number(availability?.day),
//     String(availability?.timezone)
//   );

//   const updatedDateTime = currentAvailableDay.set({
//     hour: Number(availability?.startTime.split(':')[0]),
//     minute: Number(availability?.startTime.split(':')[1]),
//   });

//   const nextAvailabilityEndtime = currentAvailableDay.set({
//     hour: Number(availability?.endTime.split(':')[0]),
//     minute: Number(availability?.endTime.split(':')[1]),
//   });

//   nextAvailability = {
//     start_timestamp: updatedDateTime.toISO(),
//     end_timestamp: nextAvailabilityEndtime.toISO(),
//     id: availability?.id,
//   };

//   return nextAvailability;
// }

// function convertToISO(dateStr, hour = 0, minute = 0, timezone) {
//   const [year, month, day] = dateStr.split('-').map(Number);
//   const formattedYear = 2000 + year; // assuming year '24' means '2024'

//   const dateTime = DateTime.fromObject(
//     {
//       year: formattedYear,
//       month,
//       day,
//       hour,
//       minute,
//     },
//     { zone: timezone }
//   );

//   return dateTime.toISO();
// }

// function getDayAvailabilityIndex(dateStr, timezone) {
//   const dateTime = DateTime.fromISO(dateStr, { zone: timezone });

//   const dayOfWeek = dateTime.weekday;

//   const dayIndex = dayOfWeek % 7;
//   return dayIndex;
// }

// function appendTimeToDate(dateStr, hours, minutes) {
//   let dateTime = DateTime.fromISO(dateStr, { zone: 'America/Los_Angeles' });

//   dateTime = dateTime.plus({ hours, minutes });
//   return dateTime.toISO();
// }

// @ts-nocheck
// import { DateTime } from 'luxon';

// // Sample availability data
// const availability = [
//   {
//     id: 34,
//     createdBy: 'admin',
//     createdAt: '2024-08-03T18:15:02.045Z',
//     updatedBy: null,
//     updatedAt: null,
//     providerId: 138,
//     day: 1,
//     startTime: '08:00:00',
//     endTime: '20:00:00',
//     timezone: 'America/Los_Angeles',
//     date: null,
//     isOverride: false,
//   },
//   {
//     id: 35,
//     createdBy: 'admin',
//     createdAt: '2024-08-03T18:15:02.045Z',
//     updatedBy: null,
//     updatedAt: null,
//     providerId: 138,
//     day: 6,
//     startTime: '11:00:00',
//     endTime: '20:59:00',
//     timezone: 'America/Los_Angeles',
//     date: null,
//     isOverride: false,
//   },
//   {
//     id: 36,
//     createdBy: 'admin',
//     createdAt: '2024-08-03T18:15:02.045Z',
//     updatedBy: null,
//     updatedAt: null,
//     providerId: 138,
//     day: 3,
//     startTime: '00:00:00',
//     endTime: '02:59:00',
//     timezone: 'America/Los_Angeles',
//     date: null,
//     isOverride: false,
//   },
//   {
//     id: 37,
//     createdBy: 'admin',
//     createdAt: '2024-08-03T18:15:02.045Z',
//     updatedBy: null,
//     updatedAt: null,
//     providerId: 138,
//     day: 2,
//     startTime: '00:00:00',
//     endTime: '02:59:00',
//     timezone: 'America/Los_Angeles',
//     date: null,
//     isOverride: false,
//   },
//   {
//     id: 38,
//     createdBy: 'admin',
//     createdAt: '2024-08-03T18:15:02.045Z',
//     updatedBy: null,
//     updatedAt: null,
//     providerId: 138,
//     day: 4,
//     startTime: '00:00:00',
//     endTime: '02:59:00',
//     timezone: 'America/Los_Angeles',
//     date: null,
//     isOverride: false,
//   },
// ];

// // Function to sort availability based on the current day
// const sortAvailabilityByCurrentDay = (currentDayIndex, availability) => {
//   return availability.sort((a, b) => {
//     const aDayShifted = (a.day - currentDayIndex + 7) % 7;
//     const bDayShifted = (b.day - currentDayIndex + 7) % 7;
//     return aDayShifted - bDayShifted;
//   });
// };

// // Function to get the current and next availability
// const getCurrentAndNextAvailability = (currentDate, availability) => {
//   const currentDateTime = DateTime.fromISO(currentDate, {
//     zone: 'America/Los_Angeles',
//   });
//   const currentDayIndex = currentDateTime.weekday % 7; // Convert Luxon weekday (1-7) to JS day (0-6)

//   // Sort availability based on current day
//   const sortedAvailability = sortAvailabilityByCurrentDay(
//     currentDayIndex,
//     availability
//   );

//   // Convert availability to include local date times
//   const availabilitiesWithDateTime = sortedAvailability.map((entry) => {
//     const hasPastDay = entry.day < currentDayIndex;
//     const localStartTime = DateTime.fromObject(
//       {
//         weekday: hasPastDay ? entry.day + 2 : entry.day,
//         hour: parseInt(entry.startTime.split(':')[0]),
//         minute: parseInt(entry.startTime.split(':')[1]),
//       },
//       { zone: entry.timezone }
//     ).set({ weekYear: currentDateTime.weekYear });

//     const localEndTime = DateTime.fromObject(
//       {
//         weekday: hasPastDay ? entry.day + 2 : entry.day,
//         hour: parseInt(entry.endTime.split(':')[0]),
//         minute: parseInt(entry.endTime.split(':')[1]),
//       },
//       { zone: entry.timezone }
//     ).set({ weekYear: currentDateTime.weekYear });

//     return { ...entry, localStartTime, localEndTime };
//   });

//   // Find current and next availability
//   let currentAvailability = null;
//   let nextAvailability = null;

//   for (let i = 0; i < availabilitiesWithDateTime.length; i++) {
//     const entry = availabilitiesWithDateTime[i];
//     console.log('ENTRY', entry);
//     console.log('currentDateTime', currentDateTime);
//     if (
//       entry.localStartTime <= currentDateTime &&
//       entry.localEndTime >= currentDateTime
//     ) {
//       currentAvailability = entry;
//       break; // Exit loop after finding current availability
//     } else if (entry.localStartTime > currentDateTime) {
//       if (
//         !nextAvailability ||
//         entry.localStartTime < nextAvailability.localStartTime
//       ) {
//         nextAvailability = entry;
//       }
//     }
//   }

//   // If no next availability found in the current week, search for the next week
//   if (!nextAvailability) {
//     for (let i = 0; i < availabilitiesWithDateTime.length; i++) {
//       const entry = availabilitiesWithDateTime[i];
//       const nextWeekStart = entry.localStartTime.plus({ weeks: 1 });
//       const nextWeekEnd = entry.localEndTime.plus({ weeks: 1 });
//       if (nextWeekStart > currentDateTime) {
//         nextAvailability = {
//           ...entry,
//           localStartTime: nextWeekStart,
//           localEndTime: nextWeekEnd,
//         };
//         break;
//       }
//     }
//   }

//   // Format the result as desired
//   const result = {
//     current: currentAvailability
//       ? {
//           start_timestamp: currentAvailability.localStartTime.toISO(),
//           end_timestamp: currentAvailability.localEndTime.toISO(),
//         }
//       : null,
//     next: nextAvailability
//       ? {
//           start_timestamp: nextAvailability.localStartTime.toISO(),
//           end_timestamp: nextAvailability.localEndTime.toISO(),
//           id: nextAvailability.id,
//         }
//       : null,
//   };

//   return result;
// };

// // Example usage
// const currentDate = DateTime.now().setZone('America/Los_Angeles').toISO(); // Use current date and time
// const availabilityResult = getCurrentAndNextAvailability(
//   currentDate,
//   availability
// );

// console.log('Current Availability:', availabilityResult.current);
// console.log('Next Availability:', availabilityResult.next);

import { DateTime } from 'luxon';
// Sample availability data
const availability = [
  {
    id: 34,
    createdBy: 'admin',
    createdAt: '2024-08-03T18:15:02.045Z',
    updatedBy: null,
    updatedAt: null,
    providerId: 138,
    day: 6,
    startTime: '00:00:00',
    endTime: '19:00:00',
    timezone: 'America/Los_Angeles',
    date: null,
    isOverride: false,
  },
  // {
  //   id: 34,
  //   createdBy: 'admin',
  //   createdAt: '2024-08-03T18:15:02.045Z',
  //   updatedBy: null,
  //   updatedAt: null,
  //   providerId: 138,
  //   day: 5,
  //   startTime: '00:00:00',
  //   endTime: '19:00:00',
  //   timezone: 'America/Los_Angeles',
  //   date: null,
  //   isOverride: false,
  // },
  // {
  //   id: 34,
  //   createdBy: 'admin',
  //   createdAt: '2024-08-03T18:15:02.045Z',
  //   updatedBy: null,
  //   updatedAt: null,
  //   providerId: 138,
  //   day: 6,
  //   startTime: '00:00:00',
  //   endTime: '18:00:00',
  //   timezone: 'America/Los_Angeles',
  //   date: null,
  //   isOverride: false,
  // },
  // {
  //   id: 34,
  //   createdBy: 'admin',
  //   createdAt: '2024-08-03T18:15:02.045Z',
  //   updatedBy: null,
  //   updatedAt: null,
  //   providerId: 138,
  //   day: 2,
  //   startTime: '00:00:00',
  //   endTime: '10:00:00',
  //   timezone: 'America/Los_Angeles',
  //   date: null,
  //   isOverride: false,
  // },
  // {
  //   id: 34,
  //   createdBy: 'admin',
  //   createdAt: '2024-08-03T18:15:02.045Z',
  //   updatedBy: null,
  //   updatedAt: null,
  //   providerId: 138,
  //   day: 5,
  //   startTime: '00:00:00',
  //   endTime: '10:00:00',
  //   timezone: 'America/Los_Angeles',
  //   date: null,
  //   isOverride: false,
  // },
  // {
  //   id: 35,
  //   createdBy: 'admin',
  //   createdAt: '2024-08-03T18:15:02.045Z',
  //   updatedBy: null,
  //   updatedAt: null,
  //   providerId: 138,
  //   day: 4,
  //   startTime: '12:00:00',
  //   endTime: '22:00:00',
  //   timezone: 'America/Los_Angeles',
  //   date: null,
  //   isOverride: false,
  // },
  // {
  //   id: 35,
  //   createdBy: 'admin',
  //   createdAt: '2024-08-03T18:15:02.045Z',
  //   updatedBy: null,
  //   updatedAt: null,
  //   providerId: 138,
  //   day: 5,
  //   startTime: '12:00:00',
  //   endTime: '22:00:00',
  //   timezone: 'America/Los_Angeles',
  //   date: null,
  //   isOverride: false,
  // },
  // {
  //   id: 34,
  //   createdBy: 'admin',
  //   createdAt: '2024-08-03T18:15:02.045Z',
  //   updatedBy: null,
  //   updatedAt: null,
  //   providerId: 138,
  //   day: 5,
  //   startTime: '11:00:00',
  //   endTime: '20:00:00',
  //   timezone: 'America/Los_Angeles',
  //   date: null,
  //   isOverride: false,
  // },
  // {
  //   id: 36,
  //   createdBy: 'admin',
  //   createdAt: '2024-08-03T18:15:02.045Z',
  //   updatedBy: null,
  //   updatedAt: null,
  //   providerId: 138,
  //   day: 5,
  //   startTime: '11:00:00',
  //   endTime: '20:59:00',
  //   timezone: 'America/Los_Angeles',
  //   date: null,
  //   isOverride: false,
  // },
  // {
  //   id: 36,
  //   createdBy: 'admin',
  //   createdAt: '2024-08-03T18:15:02.045Z',
  //   updatedBy: null,
  //   updatedAt: null,
  //   providerId: 138,
  //   day: 0,
  //   startTime: '02:00:00',
  //   endTime: '20:59:00',
  //   timezone: 'America/Los_Angeles',
  //   date: null,
  //   isOverride: false,
  // },
  // {
  //   id: 36,
  //   createdBy: 'admin',
  //   createdAt: '2024-08-03T18:15:02.045Z',
  //   updatedBy: null,
  //   updatedAt: null,
  //   providerId: 138,
  //   day: 1,
  //   startTime: '11:00:00',
  //   endTime: '20:59:00',
  //   timezone: 'America/Los_Angeles',
  //   date: null,
  //   isOverride: false,
  // },
];

// Function to sort availability based on the current day
const sortAvailabilityByCurrentDay = (currentDayIndex, availability) => {
  return availability.sort((a, b) => {
    const aDayShifted = (a.day - currentDayIndex + 7) % 7;
    const bDayShifted = (b.day - currentDayIndex + 7) % 7;
    return aDayShifted - bDayShifted;
  });
};

// const getDayDate = (
//   dayIndex: number,
//   timezone: string,
//   now: DateTime
// ): DateTime => {
//   const todayIndex = now.weekday % 7;

//   console.log('todayIndex', todayIndex);

//   const isPastDay = dayIndex < todayIndex;
//   const isCurrentDay = dayIndex === todayIndex;
//   const isNextDay = dayIndex > todayIndex;

//   console.log('isPastDay', isPastDay);
//   console.log('isCurrentDay', isCurrentDay);
//   console.log('isNextDay', isNextDay);

//   //ok
//   // return now
//   //   .plus({ days: isPastDay || isNextDay ? dayIndex : 0 })
//   //   .startOf('day');

//   return now
//     .plus({ days: isPastDay ? dayIndex : isNextDay ? 1 : 0 })
//     .startOf('day');
// };

const getDayDate = (
  dayIndex: number,
  timezone: string,
  now: DateTime
): DateTime => {
  const todayIndex = now.weekday % 7; // Adjust to 0-6 range

  console.log('todayIndex', todayIndex);

  const isPastDay = dayIndex < todayIndex;
  const isCurrentDay = dayIndex === todayIndex;
  const isNextDay = dayIndex > todayIndex;

  console.log('isPastDay', isPastDay);
  console.log('isCurrentDay', isCurrentDay);
  console.log('isNextDay', isNextDay);

  // Calculate the difference in days
  let daysToAdd;
  if (isPastDay) {
    // For past days, calculate the date in the next week
    daysToAdd = 7 - (todayIndex - dayIndex);
  } else {
    // For today or future days, calculate the date in the current week
    daysToAdd = dayIndex - todayIndex;
  }

  return now.plus({ days: daysToAdd }).startOf('day');
};

// working
// const getNextWeekOccurrenceForPastDay = (
//   dayIndex: number,
//   timezone: string,
//   notNextWeek?: boolean
// ): DateTime => {
//   const now = DateTime.now().setZone(timezone);
//   const todayIndex = now.weekday % 7;
//   const nextWeek: number = notNextWeek ? 0 : 7;
//   const daysToAdd = (dayIndex - todayIndex + nextWeek) % 7 || 7;
//   console.log('daysToAdd', daysToAdd);
//   console.log('dayIndex', dayIndex);
//   return now.plus({ days: dayIndex === 0 ? 0 : daysToAdd }).startOf('day');
// };

const getNextWeekOccurrenceForPastDays = (
  dayIndex: number,
  timezone: string
): DateTime => {
  const now = DateTime.now().setZone(timezone);
  const todayIndex = now.weekday % 7; // Adjust to 0-6 range
  const daysToAdd = (dayIndex + 7 - todayIndex) % 7;
  console.log('todayIndex inside getNextWeek', todayIndex);
  const correctDaysToAdd =
    dayIndex === 0 && todayIndex !== 0 ? 7 - todayIndex : daysToAdd;

  return now.plus({ days: correctDaysToAdd }).startOf('day');
};

// Function to get the current and next availability
const getCurrentAndNextAvailability = (currentDate, availability) => {
  const currentDateTime = DateTime.fromISO(currentDate, {
    zone: 'America/Los_Angeles',
  });
  const currentDayIndex = currentDateTime.weekday % 7;
  console.log('currentDayIndex', currentDayIndex);
  // Sort availability based on current day
  const sortedAvailability = sortAvailabilityByCurrentDay(
    currentDayIndex,
    availability
  );

  // Convert availability to include local date times and adjust past dates
  const availabilitiesWithDateTime = sortedAvailability.map((entry) => {
    const isPastDay = entry.day < currentDayIndex;
    const localStartTime = DateTime.fromObject(
      {
        weekday: entry.day + 1,
        hour: parseInt(entry.startTime.split(':')[0]),
        minute: parseInt(entry.startTime.split(':')[1]),
      },
      { zone: entry.timezone }
    ).set({
      weekYear: currentDateTime.weekYear,
      weekNumber: currentDateTime.weekNumber,
    });

    console.log('isPastDay', isPastDay);

    const localEndTime = DateTime.fromObject(
      {
        weekday: entry.day + 1,
        hour: parseInt(entry.endTime.split(':')[0]),
        minute: parseInt(entry.endTime.split(':')[1]),
      },
      { zone: entry.timezone }
    ).set({
      weekYear: currentDateTime.weekYear,
      weekNumber: currentDateTime.weekNumber,
    });

    console.log(
      'getDayDate(entry.day, entry.timezone)',
      getDayDate(entry.day, entry.timezone, currentDateTime)
    );

    const adjustedLocalStartTime = isPastDay
      ? getNextWeekOccurrenceForPastDays(entry.day, entry.timezone)
      : getDayDate(entry.day, entry.timezone, currentDateTime);
    const adjustedLocalEndTime = isPastDay
      ? getNextWeekOccurrenceForPastDays(entry.day, entry.timezone)
      : getDayDate(entry.day, entry.timezone, currentDateTime);

    console.log('adjustedLocalStartTime', adjustedLocalStartTime);

    return {
      ...entry,
      localStartTime: adjustedLocalStartTime.set({
        hour: entry.startTime.split(':')[0],
        minute: entry.startTime.split(':')[1],
      }),
      localEndTime: adjustedLocalStartTime.set({
        hour: entry.endTime.split(':')[0],
        minute: entry.endTime.split(':')[1],
      }),
    };
  });

  // Find current and next availability
  let currentAvailability = null;
  let nextAvailability = null;

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
    for (let i = 0; i < availabilitiesWithDateTime.length; i++) {
      const entry = availabilitiesWithDateTime[i];
      console.log('entry', entry);

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

  const result = {
    current: currentAvailability
      ? {
          start_timestamp: currentAvailability.localStartTime.toISO(),
          end_timestamp: currentAvailability.localEndTime.toISO(),
          id: currentAvailability.id,
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

// Example usage
const currentDate = DateTime.now()
  // .minus({ days: 3 })
  .setZone('America/Los_Angeles')
  .toISO();
console.log('currentDate', currentDate);
const availabilityResult = getCurrentAndNextAvailability(
  currentDate,
  availability
);

console.log('Availability Result', availabilityResult);
