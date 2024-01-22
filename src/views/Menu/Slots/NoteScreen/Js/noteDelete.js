
import Dexie from 'dexie';
import { loadNotesFromIndexDB } from './noteLoad'; // Importe a função correta

export async function deleteNoteHelper(componentInstance, { id, timestamp }) {
    try {
      // Armazenar temporariamente os dados da nota
      componentInstance.noteToDelete = { id, timestamp };
  
      // Abrir o modal ou qualquer outra lógica de confirmação desejada
      componentInstance.openModal();
    } catch (error) {
      console.error('Erro ao preparar a exclusão da nota:', error);
    }
  }
  
  export async function handleDeleteHelper(componentInstance) {
    try {
      // Excluir a nota do IndexedDB
      const db = new Dexie('LocalNotes');
      db.version(1).stores({
        notes: '++id, text, potential, category, reminder, timestamp',
      });
  
      // Utilizar os dados armazenados temporariamente
      const { id, timestamp } = componentInstance.noteToDelete;
      await db.notes.where({ id, timestamp }).delete();
  
      // Limpar os dados temporários
      componentInstance.noteToDelete = null;
  
      // Fechar o modal após a exclusão
      componentInstance.closeModal();
  
      // Atualizar o estado com as notas após a exclusão
      await loadNotesFromIndexDB(componentInstance);
    } catch (error) {
      console.error('Erro ao excluir a nota:', error);
    }
  }