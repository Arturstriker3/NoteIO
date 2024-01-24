// apiService.js

import axios from 'axios';
import Dexie from 'dexie';
import { usePersistStore } from '@/stores/persist';

export async function sendIndexedDBDataToAPI() {
    try {
      // Utilize diretamente a propriedade computada persistStore para obter o store
      const persistStore = usePersistStore();
  
      // Configure o banco de dados IndexedDB usando Dexie
      const db = new Dexie('LocalNotes');
      db.version(1).stores({
        notes: '++id, text, potential, category, reminder, timestamp',
      });
  
      // Busque todos os dados do IndexedDB
      const allNotes = await db.notes.toArray();
  
      // Atualize a URL para a rota PATCH
      const apiUrl = `http://localhost:3000/api/send-notes/${persistStore.actualToken}`;
  
      // Utilize o método PATCH em vez de POST
      const response = await axios.patch(apiUrl, { notes: allNotes });
  
      if (response.status >= 200 && response.status < 300) {
        console.log('Dados enviados para o banco de dados com sucesso:', response.data);
      } else {
        console.error('Erro ao enviar dados para o banco de dados. Status:', response.status);
      }
    } catch (error) {
      console.error('Erro ao enviar dados para o banco de dados:', error);
    }
  }