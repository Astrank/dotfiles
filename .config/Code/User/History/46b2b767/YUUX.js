import { useEffect, useState } from "react";
import Theory from "../public/data.json";

export default function String(props) {
    const [tuning, setTuning] = useState(props.tuning);
    const [stringNotes, setStringNotes] = useState([]);

    useEffect(() => {
        let notes = [];
        let noteIndex = tuning;
        
        for (let i = 0; i < Theory.frets; i++) {
            noteIndex = noteIndex + 1;
            
            console.log(noteIndex);
            console.log(Theory.notes.length)
            console.log(noteIndex >= Theory.notes.length)
            
            if (noteIndex >= Theory.notes.length) {
                noteIndex = 0;
            }

            notes.push(Theory.notes[noteIndex]);
        }

        setStringNotes(notes);
    }, [tuning])

    return (
        <div className="string">
            <select name="nut" id="" onChange={e => setTuning(e.target.value)} defaultValue={tuning}>
                {Theory.notes.map((note, i) => (
                    <option value={i} key={i}>
                            {note}
                    </option> 
                ))}
            </select>
            {stringNotes.length > 0 && stringNotes.map((note, i) => (
                <div className="note" key={i}>{note}</div>
            ))}
        </div>
    )
}