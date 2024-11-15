import { create } from "zustand";

export const userRoll = create((set)=>({
    role: 'mentor',
    getRole: (newRoll) => set({
        role: newRoll,
    })
}))