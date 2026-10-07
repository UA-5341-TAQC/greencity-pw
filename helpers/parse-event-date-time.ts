export function parseEventDateTime(dateText: string, timeText: string): Date {
  const normalizedDate = dateText.trim();
  let eventDate = new Date(normalizedDate);

  if (Number.isNaN(eventDate.getTime())) {
    const numericDate = normalizedDate.match(/^(\d{1,2})[./](\d{1,2})[./](\d{4})$/);

    if (numericDate) {
      const firstPart = Number(numericDate[1]);
      const secondPart = Number(numericDate[2]);
      const year = Number(numericDate[3]);
      const month = normalizedDate.includes('.') ? secondPart : firstPart;
      const day = normalizedDate.includes('.') ? firstPart : secondPart;
      eventDate = new Date(year, month - 1, day);
    }
  }

  const time = timeText.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
  if (Number.isNaN(eventDate.getTime()) || !time) {
    throw new Error(`Unable to parse event date and time: "${dateText} ${timeText}"`);
  }

  let hours = Number(time[1]);
  const minutes = Number(time[2]);
  const meridiem = time[3]?.toUpperCase();

  if (meridiem === 'PM' && hours < 12) hours += 12;
  if (meridiem === 'AM' && hours === 12) hours = 0;

  eventDate.setHours(hours, minutes, 0, 0);
  return eventDate;
}
