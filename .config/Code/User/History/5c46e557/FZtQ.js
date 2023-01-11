import String from "./String";
import Theory from "../public/data.json";
import { useEffect, useState } from "react";

export default function Fretboard() {
    const [strings, setStrings] = useState(Theory.strings);
    const [selectedNote, setSelectedNote] = useState(0);
    const [selectedScale, setSelectedScale] = useState(Theory.scales[0]);
    const [selectedScaleNotes, setSelectedScaleNotes] = useState([]);

    // Set scale notes
    useEffect(() => {
        let current = selectedNote;

        selectedScale.pattern.map(p => {
            setSelectedScaleNotes([...selectedScaleNotes]);
            
            /*current = current + p;

            if(current >= Theory.notes.length) {
                current = current - Theory.notes.length;
            }*/
        });
    })

    return (
        <>
            {selectedScaleNotes && selectedScaleNotes.map((note, i) => (
                <p key={i}>{note}</p>
            ))}
            <div className="fretboard">
                <select name="notes" id="" defaultValue={0} onChange={e => setSelectedNote(e.target.value)}>
                    {Theory.notes.map((note, i) => (
                        <option value={i} key={i}>{note}</option>
                    ))}
                </select>
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