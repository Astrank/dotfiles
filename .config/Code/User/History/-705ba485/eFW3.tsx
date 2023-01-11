import { useEffect, useState } from "react";
import Theory from "../public/data.json";
import { useTheory } from "../utils/Theory";

export default function String(props) {
    const [tuning, setTuning] = useState(props.tuning);
    const [stringNotes, setStringNotes] = useState([]);
    const [noteIndexes, setNoteIndexes] = useState([]);
    const { scaleNotes } = useTheory();

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
            <select name="nut" className="cursor-pointer pl-2" onChange={e => setTuning(e.target.value)} defaultValue={tuning}>
                {Theory.notes.map((note, i) => (
                    <option value={i} key={i}>
                            {note}
                    </option> 
                ))}
            </select>
            {stringNotes.length > 0 && stringNotes.map((note, i) => (
                <div key={i} className="bg-neutral-800 text-white text-sm rounded-full w-7 h-7 flex justify-center items-center">
                    <div className="note">
                        <span className={scaleNotes.includes(noteIndexes[i]) ? "" : "hidden"}>{note}</span>
                    </div>
                    <span className="actual-string"></span>
                </div>
            ))}
        </div>
    )
}