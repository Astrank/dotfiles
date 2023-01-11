import { useEffect, useState } from "react";
import Theory from "../public/data.json";
import { useTheory } from "../utils/Theory";
import Note from "./Note";

type StringProps = {
    defaultTuning: number,
}

const String = ({ defaultTuning }: StringProps) => {
    const [tuning, setTuning] = useState<number>(defaultTuning);
    const [stringNotes, setStringNotes] = useState<string[]>([]);
    const [noteIndexes, setNoteIndexes] = useState([]);
    const { scaleNotes, highlightedNotes } = useTheory();

    {/* Fill string notes */}
    useEffect(() => {
        let notes = [];
        let noteIndexes = [];
        let noteIndex = tuning;
        
        for (let i = 0; i < Theory.frets; i++) {
            noteIndex++;

            if (noteIndex >= Theory.notes.length) {
                noteIndex = 0;
            }

            notes.push(Theory.notes[noteIndex]);
            noteIndexes.push(noteIndex);
        }

        setStringNotes(notes);
        setNoteIndexes(noteIndexes);
    }, [tuning])

    return (
        <div className="flex gap-4 h-full">
            <select name="nut" className="cursor-pointer px-2 rounded bg-neutral-800 text-white mr-2" onChange={e => setTuning(Number(e.target.value))} defaultValue={tuning}>
                {Theory.notes.map((note, i) => (
                    <option value={i} key={i}>
                            {note}
                    </option> 
                ))}
            </select>
            {stringNotes.length > 0 && 
                stringNotes.map((note, i) => (
                    <Note note={note} highlighted={false} />
            ))}
        </div>
    )
}

export default String;