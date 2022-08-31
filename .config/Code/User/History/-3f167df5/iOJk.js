import String from "./String";
import Theory from "../public/data.json";
import { useEffect, useState } from "react";

export default function Fretboard() {
    const [strings, setStrings] = useState(Theory.strings);
    const [selectedScale, setSelectedScale] = useState(Theory.scales[0]);
    const [scaleNotes, setScaleNotes] = useState(null);

    // Set scale notes
    useEffect(() => {

    })

    return (
        <>
            <div className="fretboard">
                <select name="scales" id="" defaultValue={0} onChange={e => setSelectedScale(Theory.scales[e.target.value])}>
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