import String from "./String";
import Theory from "../public/data.json";
import { useEffect, useState } from "react";

const Fretboard = () => {
    const [strings, setStrings] = useState(Theory.strings);
    const [selectedNote, setSelectedNote] = useState(0);
    const [selectedScale, setSelectedScale] = useState(Theory.scales[0]);
    const [selectedScaleNotes, setSelectedScaleNotes] = useState([]);

    // Generate selected scale notes
    useEffect(() => {
        console.log(`scale: ${selectedScale}, note: ${selectedNote}`);
        let notes = [selectedNote];
        let current = selectedNote;

        selectedScale.pattern.map((p) => {
            current = current + p;

            if (current >= Theory.notes.length) {
                current = current - Theory.notes.length;
            }

            notes.push(current);
        });

        setSelectedScaleNotes(notes);
    }, [selectedNote, selectedScale]);

    return (
        <>
            {selectedScaleNotes.map((note, i) => (
                <span key={i}>{Theory.notes[note]} </span>
            ))}
            <div className="fretboard">
                <div>
                    <select
                        name="notes"
                        className="notes"
                        onChange={(e) => setSelectedNote(e.target.value)}
                    >
                        {Theory.notes.map((note, i) => (
                            <option value={i} key={i}>
                                {note}
                            </option>
                        ))}
                    </select>
                    <select
                        name="scales"
                        className="scales"
                        onChange={(e) =>
                            setSelectedScale(Theory.scales[e.target.value])
                        }
                    >
                        {Theory.scales.map((scale, i) => (
                            <option value={i} key={i}>
                                {scale.name}
                            </option>
                        ))}
                    </select>
                </div>
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
    );
};

export default Fretboard;
