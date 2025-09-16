import { create } from "zustand";

export interface SelectionData {
  from: number;
  to: number;
  text: string;
  html?: string;
}

export interface SelectionContext {
  text: string;
}

interface SelectionState {
  selection: SelectionData | null;
  setSelection: (value: SelectionData | null) => void;
  getSelectionContext: (opts?: { max?: number }) => SelectionContext | null;
}

export const useSelectionStore = create<SelectionState>((set, get) => ({
  selection: null,
  setSelection: (value) => set({ selection: value }),
  getSelectionContext: (opts) => {
    const selection = get().selection;
    if (!selection) return null;
    const max = opts?.max ?? 200;
    const text =
      selection.text.length > max
        ? `${selection.text.slice(0, max)}…`
        : selection.text;
    return { text };
  }
}));
