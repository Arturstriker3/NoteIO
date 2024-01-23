
export default (note) => {
  const currentDate = new Date();
  const enteredDate = new Date(note.reminder);

  if (enteredDate < currentDate) {
    note.reminder = currentDate.toISOString().split('T')[0];
  }
}