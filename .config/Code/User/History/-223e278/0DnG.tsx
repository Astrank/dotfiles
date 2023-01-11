import React, { useState, useContext, createContext, SetStateAction } from "react";
import Theory from "../public/data.json";

type TheoryContextType = {
    note: number,
    setNote: (number) => any,
}

const TheoryContext = createContext({} as TheoryContextType);

export function TheoryProvider({ children }: {children : React.ReactNode}) {
    const [note, setNote] = useState<number>(0);
    const [selectedNote, setSelectedNote] = useState<number>(0);
    const [selectedScale, setSelectedScale] = useState<number>(0);

    /* const setNote = (note: number) => {
        setSelectedNote(note);
    }

    const setScale = (scale: number) => {
        setSelectedScale(scale);
    } */

    return <TheoryContext.Provider value={{ note, setNote }}>{children}</TheoryContext.Provider>;
}

export function useTheory() {
    return useContext(TheoryContext);
}