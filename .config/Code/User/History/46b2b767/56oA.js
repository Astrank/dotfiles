import { useEffect, useState } from "react";
import Theory from "../public/data.json";

export default function String(props) {
    const [tuning, setTuning] = useState(props.tuning);
    const [stringNotes, setStringNotes] = useState([]);

    useEffect(() => {
        setStringNotes([]);
        let curFret = tuning;
        
        for (let i = 0; i < Theory.frets; i++) {
            curFret = curFret + 1;

            if (curFret >= Theory.notes.length) {
                curFret = 0;
            }

            console.log(Theory.notes[curFret]);
            setStringNotes([...stringNotes, Theory.notes[curFret]]);
        }
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