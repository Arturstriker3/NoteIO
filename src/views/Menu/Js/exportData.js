// exportData.js

import Dexie from 'dexie';
import axios from 'axios';

export async function sendIndexedDBDataToDatabase(token) {
  try {
    const db = new Dexie('LocalNotes');
    db.version(1).stores({
      notes: '++id, text, potential, category, reminder, timestamp',
    });

    // Fetch all notes from the IndexedDB
    const allNotes = await db.notes.toArray();

    // Construir a URL correta para a rota do backend
    const apiUrl = `http://localhost:3000/api/send-notes?token=${token}`;

    // Enviar os dados para o backend usando a URL correta
    const response = await axios.post(apiUrl, { notes: allNotes });

    // Verificar se a resposta tem um status de sucesso (código 2xx)
    if (response.status >= 200 && response.status < 300) {
      console.log('Data sent to the database successfully:', response.data);
    } else {
      console.error('Error sending data to the database. Status:', response.status);
    }
  } catch (error) {
    console.error('Error sending data to the database:', error);
  }
}