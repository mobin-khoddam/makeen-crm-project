import { create } from "zustand";

export const userRoll = create((set)=>({
    role: 'admin',
    getRole: (newRoll) => set({
        role: newRoll,
    })
}))