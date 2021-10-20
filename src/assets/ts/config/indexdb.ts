import { openDB } from 'idb';

const c = console.log;

// name, version, cb
const connection = openDB('posts-store', 1, {
  upgrade(db, oldVersion, newVersion, transaction) {
    if (!db.objectStoreNames.contains('posts')) {
      db.createObjectStore('posts', { keyPath: 'id' });
    }
    if (!db.objectStoreNames.contains('sync-posts')) {
      db.createObjectStore('sync-posts', { keyPath: 'id' });
    }
  },
});

export const writeData = async (st: string, data: Record<string, any>) => {
  const db = await connection;
  const tx = db.transaction(st, 'readwrite'); // Transaction
  const store = tx.objectStore(st);
  store.put(data);
  return tx.done;
};
export const readAllData = async (st: string) => {
  const db = await connection;
  const tx = db.transaction(st, 'readonly');
  const store = tx.objectStore(st);
  return store.getAll();
};

export const clearAllData = async (st: string) => {
  const db = await connection;
  const tx = db.transaction(st, 'readwrite');
  const store = tx.objectStore(st);
  store.clear();
  return tx.done;
};

export const deleteItemFromData = async (st: string, id: string) => {
  const db = await connection;
  const tx = db.transaction(st, 'readwrite');
  const store = tx.objectStore(st);

  store.delete(id);
  c('Item deleted', id);
  return tx.done;
};
