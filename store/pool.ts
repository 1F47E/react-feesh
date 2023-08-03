import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
// import {
//   Pool,
// } from '../types/pool';

// STORAGE
//

/*
    "height": 2470599,
    "size": 21,
    "amount": 97563011781,
    "weight": 22949,
    "fee": 40165,
*/
interface Pool {
  height: number,
  size: number,
  amount: number,
  weight: number,
  fee: number,
}

export interface PoolState {
  pool: null | Pool,
  updatePool: (r: null | Pool) => void
}

export const usePoolStore = create<PoolState>()(
  devtools(
    persist(
      (set) => ({
        pool: null,
        updatePool: (p:null | Pool) => set(() => ({ pool: p })),
      }),
      {
        name: 'rates-storage',
      }
    )
  )
);
