import Dexie from 'dexie';
import clone from 'clone';

// Função que gera um ID único
const generateUniqueId = async (db) => {
  try {
    // Consulte o último ID no IndexDB
    const lastNote = await db.notes.orderBy('id').last();

    // Incrementar o ID
    const newId = lastNote ? lastNote.id + 1 : 0;

    return newId;
  } catch (error) {
    console.error('Erro ao gerar ID único:', error);
  }
};

// Função que salva uma nota no IndexedDB
const saveNoteToIndexDB = async (db, note) => {
  try {
    // Clone profundo da nota para evitar o DataCloneError
    const clonedNote = clone(note);

    // Adicione a nota clonada à tabela
    await db.notes.add(clonedNote);

    // Redirecione para a rota '/notes'
    // Aviso: Aqui, você não tem acesso à instância Vue, então não pode usar $router diretamente
    // Considere passar a rota como um argumento ou usar uma abordagem diferente
    console.log('Nota salva no IndexDB:', clonedNote);
  } catch (error) {
    console.error('Erro ao salvar a nota no IndexDB:', error);
  }
};

// Exportar a função saveNote como padrão
export default async (vm) => {
  try {
    const db = new Dexie('LocalNotes');

    // Inicialize o Dexie para acessar o IndexDB
    db.version(1).stores({
      notes: '++id, text, potential, category, reminder, timestamp',
    });

    // Gerar um ID único e um timestamp antes de salvar a nota
    vm.note.id = await generateUniqueId(db);
    vm.note.timestamp = new Date().toISOString();

    // Implementar a lógica para salvar a nota no IndexDB
    await saveNoteToIndexDB(db, vm.note);

    // Limpar o formulário após salvar
    vm.resetForm();
  } catch (error) {
    console.error('Erro ao salvar a nota:', error);
  }
};