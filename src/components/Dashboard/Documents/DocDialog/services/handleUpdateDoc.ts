import type { iDocument } from 'types/iDocument';
import { fetcher } from '@services/fetchers';

export async function handleUpdateDoc(
  updatedDoc: { links: iDocument['links']; type: iDocument['type'] },
  id: iDocument['id'],
  onDbUpdate: (res: any) => void,
) {
  fetcher
    .put(`/api/documents/${id}`, updatedDoc)
    .then((res) => onDbUpdate(res))
    .catch((err) => console.error(err));
}
