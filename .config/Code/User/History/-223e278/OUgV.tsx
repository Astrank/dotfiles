import React, { useState, useContext, createContext, SetStateAction } from "react";
import Theory from "../public/data.json";

type TheoryContextType = {
    note: number,
    setNote: (number) => any,
    scale: number,
    setScale: (number) => any,
}

const TheoryContext = createContext({} as TheoryContextType);

export function TheoryProvider({ children }: {children : React.ReactNode}) {
    const [note, setNote] = useState<number>(0);
    const [scale, setScale] = useState<number>(0);

    return <TheoryContext.Provider value={{ note, setNote, scale, setScale }}>{children}</TheoryContext.Provider>;
}

export function useTheory() {
    return useContext(TheoryContext);
}