import Dexie from 'dexie';

// Função principal que carrega as notas e faz o redirecionamento
export async function checkAndRedirect() {
  try {
    const db = new Dexie('LocalNotes');
    db.version(1).stores({
      notes: '++id, text, potential, category, reminder, timestamp',
    });

    // Buscar todas as notas no IndexDB
    const allNotes = await db.notes.toArray();

    // Se houver pelo menos uma nota, redirecionar para /notes
    if (allNotes.length > 0) {
      window.location.href = '/notes';
    }
  } catch (error) {
    console.error('Erro ao verificar e redirecionar com base nas notas:', error);
  }
}