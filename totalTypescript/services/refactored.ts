export const getCurrentAndNextAvailability = (
  currentDate: DateTime,
  availability: TAvailability[],
  timezone: string
) => {
  const currentDateTime = DateTime.fromISO(String(currentDate), {
    zone: timezone,
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
        : getDayDate(entry.timezone!);

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

  for (const [index, entry] of availabilitiesWithDateTime.entries()) {
    if (
      entry.localStartTime <= currentDateTime &&
      entry.localEndTime >= currentDateTime
    ) {
      currentAvailability = entry;
      nextAvailability = availabilitiesWithDateTime[index + 1];
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
    for (const entry of availabilitiesWithDateTime) {
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
