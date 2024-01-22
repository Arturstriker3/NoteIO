
import Dexie from 'dexie';

// Função anônima que inicializa o banco de dados Dexie
const initDatabase = async () => {
  try {
    // Inicialize o Dexie para acessar o IndexDB
    const db = new Dexie('LocalNotes');

    // Definir a estrutura da tabela (quando não restaurado do backend)
    db.version(1).stores({
      notes: '++id, text, potential, category, reminder, timestamp',
    });

    console.log('Banco de dados Dexie inicializado.');
  } catch (error) {
    console.error('Erro ao inicializar o banco de dados Dexie:', error);
  }
};

export default initDatabase;