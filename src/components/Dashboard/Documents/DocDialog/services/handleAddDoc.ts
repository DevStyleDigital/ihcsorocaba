import type { iDocument } from 'types/iDocument';
import { fetcher } from '@services/fetchers';

export async function handleAddDoc(
  newDoc: { links: iDocument['links']; type: iDocument['type'] },
  onDbUpdate: (res: any) => void,
) {
  fetcher
    .post('/api/documents', newDoc)
    .then((res) => onDbUpdate(res))
    .catch((err) => console.error(err));
}
