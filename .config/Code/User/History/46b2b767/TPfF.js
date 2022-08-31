import { useEffect, useState } from "react";
import Theory from "../public/data.json";

export default function String(props) {
    const [tuning, setTuning] = useState(props.tuning);
    const [stringNotes, setStringNotes] = useState([]);

    useEffect(() => {
        let stringNotes = [];
        let note = tuning;
        console.log(note)
        
        for (let i = 0; i < Theory.frets; i++) {
            note = note + 1;
            
            if (note >= Theory.notes.length) {
                note = 0;
            }

            stringNotes.push(Theory.notes[note]);
        }

        setStringNotes(stringNotes);
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