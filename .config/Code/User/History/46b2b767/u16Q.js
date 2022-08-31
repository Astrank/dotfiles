import { useEffect, useState } from "react";
import Theory from "../public/data.json";

export default function String(props) {
    const [tuning, setTuning] = useState(props.tuning);
    const [stringNotes, setStringNotes] = useState([]);

    {/* Fill string notes */}
    useEffect(() => {
        let notes = [];
        let noteIndex = tuning;
        
        for (let i = 0; i < Theory.frets; i++) {
            noteIndex++;

            if (noteIndex >= Theory.notes.length) {
                noteIndex = 0;
            }

            notes.push(Theory.notes[noteIndex]);
        }

        setStringNotes(notes);
    }, [tuning])

    return (
        <div className="string">
            <select name="nut" className="nut" onChange={e => setTuning(e.target.value)} defaultValue={tuning}>
                {Theory.notes.map((note, i) => (
                    <option value={i} key={i}>
                            {note}
                    </option> 
                ))}
            </select>
            {stringNotes.length > 0 && stringNotes.map((note, i) => (
                <div className="note" key={i}>
                    <span>{note}</span>
                    <span className="actual-string"></span>
                </div>
            ))}
        </div>
    )
}