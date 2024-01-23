
export default function (note) {
  const currentDate = new Date();
  const enteredDate = new Date(note.reminder);

  if (enteredDate < currentDate) {
    note.reminder = currentDate.toISOString().split('T')[0];
  } else {
    const formattedDate = formatDate(enteredDate);
    note.reminder = formattedDate;
  }
}

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}