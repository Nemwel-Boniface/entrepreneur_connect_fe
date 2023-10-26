function formatDate(date) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';

  // Convert to 12-hour format
  if (hours > 12) {
    hours -= 12;
  }

  // Ensure single-digit minutes are displayed with a leading zero
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${month} ${day} ${year}, ${hours}:${formattedMinutes}${ampm}`;
}

export default formatDate;
