import String from "./String";
import Theory from "../public/data.json";
import { useState } from "react";

export default function Fretboard() {
    const [strings, setStrings] = useState(Theory.strings);
    const [scaleNotes, setScaleNotes] = useState(null);

    return (
        <>
            <div className="fretboard">
                <select name="scales" id="" defaultValue={0}>
                    {Theory.scales.map((scale, i) => (
                        <option value={i} key={i}>{scale.name}</option>
                    ))}
                </select>
                {strings.map((tuning, i) => (
                    <String key={i} tuning={tuning} />
                ))}
            </div>
            <div className="keyboard">
                {Theory.notes.map((note, i) => (
                    <button key={i}>{note}</button>
                ))}
            </div>
        </>
    )
}