import { atom } from 'recoil';

export const bookmarkState = atom({
  key: 'bookmarkState',
  default: {
    template: [],
    part2: [],
    part3: [],
    part4: [],
    part5: []
  }
});