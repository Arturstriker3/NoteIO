
import Dexie from 'dexie';

// Função para redirecionar com base na quantidade de notas
function redirectBasedOnNoteCount(notesCount) {
  if (notesCount === 0) {
    // Redirecionar para uma rota se não houver notas
    window.location.href = '/';
  } else {
    // Redirecionar para outra rota se houver notas
    window.location.href = '/notes';
  }
}

// Função principal que carrega as notas e faz o redirecionamento
async function checkAndRedirect() {
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

    // Verificar a quantidade de notas
    const notesCount = Object.keys(notesObject).length;

    // Redirecionar com base na quantidade de notas
    redirectBasedOnNoteCount(notesCount);
  } catch (error) {
    console.error('Erro ao verificar e redirecionar com base nas notas:', error);
  }
}

// Chamar a função principal

export default checkAndRedirect;