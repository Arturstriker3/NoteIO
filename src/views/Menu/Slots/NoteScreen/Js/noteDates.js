export const formattedCreationDate = (activeNote) => {
  if (activeNote && activeNote.timestamp) {
    const timestamp = activeNote.timestamp;
    const date = new Date(timestamp);
    
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;

    const formattedDate = `${day}/${month}/${date.getFullYear()}`;
    return formattedDate;
  }
  return null;
};

export const formattedReminderDate = (activeNote) => {
  if (activeNote && activeNote.reminder) {
    const timestamp = activeNote.reminder;
    const date = new Date(timestamp);
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;

    const formattedDate = `${day}/${month}/${date.getFullYear()}`;
    return formattedDate;
  }
  return null;
};