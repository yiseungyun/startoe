import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const localStorage = typeof window !== 'undefined' ? window.localStorage : undefined;
const { persistAtom } = recoilPersist({
  key: 'userInfo',
  storage: localStorage,
});

export const userState = atom({
  key: 'userState',
  default: 'null',
  effects_UNSTABLE: [persistAtom],
});