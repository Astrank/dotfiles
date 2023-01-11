import String from "./String";
import Theory from "../public/data.json";
import { useEffect, useState } from "react";

const Fretboard = () => {
    const [strings, setStrings] = useState(Theory.strings);
    const [selectedNote, setSelectedNote] = useState<number>(0);
    const [selectedScale, setSelectedScale] = useState<number>(0);

    const [scaleChords, setScaleChords] = useState<string[]>([]);
    const [scaleNotes, setScaleNotes] = useState<number[]>([]);
    const [notes, setNotes] = useState<boolean[]>([true, false, false, false, false, false, false]);
    let notes = [true, false, false, false, false, false, false]

    useEffect(() => {
        let notes = [selectedNote];
        let chords = [];
        let current = selectedNote;
        const pattern = Theory.scales[selectedScale].pattern;

        // Generate scale notes
        pattern.slice(0, 6).map(s => {
            current = current + s;

            if (current >= Theory.notes.length) {
                current = current - Theory.notes.length;
            }

            notes.push(current)
        });

        // Generate scale chords
        pattern.slice(0.6).map((n, i) => {
            let thirds = [];
            let count = i;

            for (let index = 0; index < 4; index++) {
                thirds.push(pattern[count])

                count++;
                if(count >= pattern.length) {
                    count = 0;
                }
            }

            const asd = [thirds[0] + thirds[1], thirds[2] + thirds[3]];

            if(JSON.stringify(asd) === JSON.stringify(Theory.chords.major)) { 
                chords.push(Theory.notes[notes[i]].toUpperCase()); 
            }
            else if(JSON.stringify(asd) === JSON.stringify(Theory.chords.minor)) { 
                chords.push(Theory.notes[notes[i]].toLowerCase()); 
            }
            else if(JSON.stringify(asd) === JSON.stringify(Theory.chords.aug)) { 
                chords.push(Theory.notes[notes[i]].toUpperCase() + "aug"); 
            }
            else if(JSON.stringify(asd) === JSON.stringify(Theory.chords.dim)) { 
                chords.push(Theory.notes[notes[i]].toUpperCase() + "dim"); 
            }
        })

        setScaleNotes(notes);
        setScaleChords(chords);
    }, [selectedNote, selectedScale]);

    return (
        <>
            <div className="flex flex-col gap-8">
                <div className="flex gap-4 justify-center items-center">
                    <select
                        name="notes"
                        className="p-1 cursor-pointer"
                        onChange={(e) => setSelectedNote(parseInt(e.target.value))}
                    >
                        {Theory.notes.map((note, i) => (
                            <option value={i} key={i}>
                                {note}
                            </option>
                        ))}
                    </select>
                    <select
                        name="scales"
                        className="p-1 cursor-pointer"
                        onChange={(e) =>
                            setSelectedScale(parseInt(e.target.value))
                        }
                    >
                        {Theory.scales.map((scale, i) => (
                            <option value={i} key={i}>
                                {scale.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    {strings.map((tuning, i) => (
                        <String key={i} tuning={tuning} />
                    ))}
                </div>
                <div className="flex gap-6 justify-center items-center text-xl">
                    {Theory.degrees.map((note, i) => (
                        <button 
                            key={i} 
                            className={`min-w-20 py-5 rounded ${notes[i] ? note : "bg-black text-white"}`}
                            onClick={() => notes[i] = !notes[i]}>
                                {scaleChords[i]}</button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Fretboard;
