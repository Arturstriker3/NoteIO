
import Dexie from 'dexie';

export async function loadNotesFromIndexDB(componentInstance) {
  try {
    const db = new Dexie('LocalNotes');
    db.version(1).stores({
      notes: '++id, text, potential, category, reminder, timestamp',
    });

    // Buscar todas as notas no IndexDB
    const allNotes = await db.notes.toArray();

    // Converter a array de notas em um objeto com IDs como chaves
    const notesObject = {};
    allNotes.forEach(note => {
      notesObject[note.id] = note;
    });

    // Armazenar as notas no data do componente
    componentInstance.notes = notesObject;
  } catch (error) {
    console.error('Erro ao carregar notas do IndexDB:', error);
  }
}

export default loadNotesFromIndexDB;