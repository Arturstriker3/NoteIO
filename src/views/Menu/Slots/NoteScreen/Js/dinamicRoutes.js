
import loadNotesFromIndexDB from '@/views/Menu/Slots/NoteScreen/Js/noteLoad';

// Função para redirecionar com base na quantidade de notas
function redirectBasedOnNoteCount(notesCount) {
  if (notesCount < 1) {
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
    // Carregar notas do IndexDB
    const componentInstance = {};
    await loadNotesFromIndexDB(componentInstance);

    // Verificar a quantidade de notas
    const notesCount = Object.keys(componentInstance.notes).length;

    // Redirecionar com base na quantidade de notas
    redirectBasedOnNoteCount(notesCount);
  } catch (error) {
    console.error('Erro ao verificar e redirecionar com base nas notas:', error);
  }
}

// // Chamar a função principal
// checkAndRedirect();

export default checkAndRedirect;