import { useEffect, useState } from "react";
import Theory from "../public/data.json";

export default function String(props) {
    const [tuning, setTuning] = useState(props.tuning);
    const [stringNotes, setStringNotes] = useState([]);

    useEffect(() => {
        let curFret = tuning + 1;
        
        for (let i = 0; i < Theory.frets; i++) {
            curFret = curFret + i;

            if (curFret == Theory.notes.length) {
                curFret = 0;
            }

            let array = [...stringNotes, Theory.notes[curFret]]
            console.log(Theory.notes[curFret])
        }
    }, [tuning])

    const log = () => { console.log(stringNotes) }

    return (
        <div className="string">
            <button onClick={log}>s</button>
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