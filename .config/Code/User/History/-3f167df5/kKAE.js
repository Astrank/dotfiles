import String from "./String";
import Theory from "../public/data.json";
import { useEffect, useState } from "react";

export default function Fretboard() {
    const [strings, setStrings] = useState(Theory.strings);
    const [selectedNote, setSelectedNote] = useState(0);
    const [selectedScale, setSelectedScale] = useState(Theory.scales[0]);
    const [selectedScaleNotes, setSelectedScaleNotes] = useState([]);

    // Generate selected scale notes
    useEffect(() => {
        let notes = [selectedNote];
        let current = selectedNote;

        selectedScale.pattern.map(p => {
            console.log(selectedNote)
            current = current + p;

            if(current >= Theory.notes.length) {
                current = current - Theory.notes.length;
            }

            notes.push(current);
        });

        setSelectedScaleNotes(notes);
    }, [selectedNote])

    return (
        <>
            <div className="fretboard">
                <select name="notes" id="" onChange={e => setSelectedNote(e.target.value)}>
                    {Theory.notes.map((note, i) => (
                        <option value={i} key={i}>{note}</option>
                    ))}
                </select>
                <select name="scales" id="" onChange={e => setSelectedScale(Theory.scales[e.target.value])}>
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