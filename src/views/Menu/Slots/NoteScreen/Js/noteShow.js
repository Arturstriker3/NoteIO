
export const showNoteContentFunction = (componentInstance, note) => {
  if (componentInstance.activeNote && componentInstance.activeNote.id === note.id) {
    // Clicou na mesma nota, então fecha
    componentInstance.activeNote = null;
  } else {
    // Clicou em uma nota diferente, então exibe
    componentInstance.activeNote = note;
  }
};