import { create } from "zustand";

export const userRoll = create((set)=>({
    role: null,
    getRole: (newRoll) => set({
        role: newRoll,
    })
}))