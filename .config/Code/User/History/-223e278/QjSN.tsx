import React, { useState, useContext, createContext, useEffect } from "react";
import Theory from "../public/data.json";

type TheoryContextType = {
    note: number,
    setNote: (number) => any,
    scale: number,
    setScale: (number) => any,
    scaleChords: string[],
}

const TheoryContext = createContext({} as TheoryContextType);

export function TheoryProvider({ children }: {children : React.ReactNode}) {
    const [note, setNote] = useState<number>(0);
    const [scale, setScale] = useState<number>(0);
    const [scaleChords, setScaleChords] = useState<string[]>([]);
    const [scaleNotes, setScaleNotes] = useState<number[]>([]);
    const [highlightedNotes, setHighlightedNotes] = useState<boolean[]>([true, false, false, false, false, false, false]);

    useEffect(() => {
        let notes = [note];
        let chords = [];
        let current = note;
        const pattern = Theory.scales[scale].pattern;

        // Generate scale notes
        pattern.slice(0, 6).map(s => {
            current = current + s;

            if (current >= Theory.notes.length) {
                current = current - Theory.notes.length;
            }

            notes.push(current)
        });

        // Generate scale chords
        pattern.slice(0.6).map((n, i) => {
            let thirds = [];
            let count = i;

            for (let index = 0; index < 4; index++) {
                thirds.push(pattern[count])

                count++;
                if(count >= pattern.length) {
                    count = 0;
                }
            }

            const asd = [thirds[0] + thirds[1], thirds[2] + thirds[3]];

            if(JSON.stringify(asd) === JSON.stringify(Theory.chords.major)) { 
                chords.push(Theory.notes[notes[i]].toUpperCase()); 
            }
            else if(JSON.stringify(asd) === JSON.stringify(Theory.chords.minor)) { 
                chords.push(Theory.notes[notes[i]].toLowerCase()); 
            }
            else if(JSON.stringify(asd) === JSON.stringify(Theory.chords.aug)) { 
                chords.push(Theory.notes[notes[i]].toUpperCase() + "aug"); 
            }
            else if(JSON.stringify(asd) === JSON.stringify(Theory.chords.dim)) { 
                chords.push(Theory.notes[notes[i]].toUpperCase() + "dim"); 
            }
        })

        setScaleNotes(notes);
        setScaleChords(chords);
    }, [note, scale])

    const toggleHighlight = (note: number) => {
        let clone = highlightedNotes;
        const newValue = !highlightedNotes[note];
        clone.splice(note, 1, newValue)
        setHighlightedNotes()
    }

    return <TheoryContext.Provider value={{ note, setNote, scale, setScale, scaleChords }}>{children}</TheoryContext.Provider>;
}

export function useTheory() {
    return useContext(TheoryContext);
}