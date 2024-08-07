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
    day: 1,
    startTime: '08:00:00',
    endTime: '20:00:00',
    timezone: 'America/Los_Angeles',
    date: null,
    isOverride: false,
  },
  {
    id: 35,
    createdBy: 'admin',
    createdAt: '2024-08-03T18:15:02.045Z',
    updatedBy: null,
    updatedAt: null,
    providerId: 138,
    day: 6,
    startTime: '11:00:00',
    endTime: '20:59:00',
    timezone: 'America/Los_Angeles',
    date: null,
    isOverride: false,
  },
  {
    id: 35,
    createdBy: 'admin',
    createdAt: '2024-08-03T18:15:02.045Z',
    updatedBy: null,
    updatedAt: null,
    providerId: 138,
    day: 6,
    startTime: '11:00:00',
    endTime: '20:59:00',
    timezone: 'America/Los_Angeles',
    date: null,
    isOverride: false,
  },
  {
    id: 36,
    createdBy: 'admin',
    createdAt: '2024-08-03T18:15:02.045Z',
    updatedBy: null,
    updatedAt: null,
    providerId: 138,
    day: 6,
    startTime: '21:00:00',
    endTime: '22:59:00',
    timezone: 'America/Los_Angeles',
    date: null,
    isOverride: false,
  },

  {
    id: 38,
    createdBy: 'admin',
    createdAt: '2024-08-03T18:15:02.045Z',
    updatedBy: null,
    updatedAt: null,
    providerId: 138,
    day: 4,
    startTime: '00:00:00',
    endTime: '02:59:00',
    timezone: 'America/Los_Angeles',
    date: null,
    isOverride: false,
  },
];

// Function to sort availability based on the current day
const sortAvailabilityByCurrentDay = (currentDayIndex, availability) => {
  return availability.sort((a, b) => {
    const aDayShifted = (a.day - currentDayIndex + 7) % 7;
    const bDayShifted = (b.day - currentDayIndex + 7) % 7;
    return aDayShifted - bDayShifted;
  });
};

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

// Function to get the current and next availability
const getCurrentAndNextAvailability = (currentDate, availability) => {
  const currentDateTime = DateTime.fromISO(currentDate, {
    zone: 'America/Los_Angeles',
  });
  const currentDayIndex = currentDateTime.weekday % 7;

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
        weekday: entry.day + 1, // Convert JS day (0-6) to Luxon weekday (1-7)
        hour: parseInt(entry.startTime.split(':')[0]),
        minute: parseInt(entry.startTime.split(':')[1]),
      },
      { zone: entry.timezone }
    ).set({
      weekYear: currentDateTime.weekYear,
      weekNumber: currentDateTime.weekNumber,
    });

    const localEndTime = DateTime.fromObject(
      {
        weekday: entry.day + 1, // Convert JS day (0-6) to Luxon weekday (1-7)
        hour: parseInt(entry.endTime.split(':')[0]),
        minute: parseInt(entry.endTime.split(':')[1]),
      },
      { zone: entry.timezone }
    ).set({
      weekYear: currentDateTime.weekYear,
      weekNumber: currentDateTime.weekNumber,
    });

    console.log('localStartTime', localStartTime);

    const adjustedLocalStartTime = isPastDay
      ? getNextWeekOccurrenceForPastDay(entry.day, entry.timezone)
      : getDayDate(entry.day, entry.timezone);
    const adjustedLocalEndTime = isPastDay
      ? getNextWeekOccurrenceForPastDay(entry.day, entry.timezone)
      : getDayDate(entry.day, entry.timezone);

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

// Example usage
const currentDate = DateTime.now().setZone('America/Los_Angeles').toISO(); // Use current date and time
const availabilityResult = getCurrentAndNextAvailability(
  currentDate,
  availability
);

console.log('Availability Result', availabilityResult);
