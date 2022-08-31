import { useEffect, useState } from "react";
import Theory from "../public/data.json";

export default function String(props) {
    const [tuning, setTuning] = useState(props.tuning);
    const [stringNotes, setStringNotes] = useState([]);

    useEffect(() => {
        let notes = [];
        let curFret = tuning;
        console.log(curFret)
        
        for (let i = 0; i < Theory.frets; i++) {
            // If current fret is bigger than the notes list length go back to start (C)
            curFret = curFret + 1 >= Theory.notes.length ? curFret + 1 : 0;

            notes.push(Theory.notes[curFret]);
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