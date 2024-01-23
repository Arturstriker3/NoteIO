// api.js

import axios from 'axios';
import Dexie from 'dexie';

async function retrieveNotes(token) {
  try {
    const response = await axios.get(`http://localhost:3000/api/annotations?token=${token}`);
    const notes = response.data;
    return notes;
  } catch (error) {
    console.error('Erro ao recuperar notas:', error);
    throw error;
  }
}

async function deleteIndexDB() {
  const db = new Dexie('LocalNotes');
  await db.delete();
  console.log('IndexDB apagado');
}

async function addNotesToIndexDB(notes) {
  const db = new Dexie('LocalNotes');
  db.version(1).stores({
    notes: '++id, category, potential, reminder, text, timestamp',
  });

  // Simplificar as notas antes de adicioná-las ao IndexedDB
  const simplifiedNotes = notes.map(({ id, category, potential, reminder, text, timestamp }) => ({
    id, category, potential, reminder, text, timestamp
  }));

  await db.notes.bulkAdd(simplifiedNotes);
  console.log('Notas adicionadas ao IndexDB');
}

export { retrieveNotes, deleteIndexDB, addNotesToIndexDB };