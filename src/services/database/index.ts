import { database } from '@services/firebase/admin';

type Response<T> = T & { id: string };

interface Database {
  in: (path: string) => {
    add: <T>(obj: T, insidePath?: string) => Promise<Response<T>>;
    get: <T, U extends string | undefined>(
      id: U,
    ) => U extends string
      ? Promise<Response<T> | null>
      : Promise<Response<T>[]>;
    put: <T>(id: string, data: T) => Promise<Response<T>>;
    del: (id: string) => Promise<any>;
  };
}

export const db: Database = {
  in: (path) => {
    const collection = database.collection(path);

    return {
      add: async (obj, insidePath) => {
        if (insidePath) {
          const res = await collection.doc(insidePath).set(obj);
          return { res, data: obj };
        }
        const res = await collection.add(obj);
        return { id: res.id, ...((await res.get()).data() as any) };
      },
      get: async (id) => {
        if (id) {
          const res = await collection.doc(id).get();
          if (!res.exists) return null;
          return { id: res.id, ...(res.data() as any) };
        }
        const data = await collection.get();
        return data.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as any),
        }));
      },
      put: async (id, data) => {
        const doc = collection.doc(id);
        await doc.update(data).catch((err) => {
          if (err.code === 5) doc.set(data);
        });

        return { id, ...(data as any) };
      },
      del: async (id) => {
        const res = await collection.doc(id).delete();
        return res;
      },
    };
  },
};
