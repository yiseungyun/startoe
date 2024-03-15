import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const localStorage = typeof window !== 'undefined' ? window.localStorage : undefined;
const { persistAtom } = recoilPersist({
  key: 'bookmark',
  storage: localStorage,
});

export const bookmarkState = atom({
  key: 'bookmarkState',
  default: { all: [], template: [], part2: [], part3: [], part4: [], part5: [] },
  effects_UNSTABLE: [persistAtom],
});