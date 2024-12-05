import { create } from "zustand";

export const userRoll = create((set)=>({
    role: 'super admin',
    getRole: (newRoll) => set({
        role: newRoll,
    })
}))