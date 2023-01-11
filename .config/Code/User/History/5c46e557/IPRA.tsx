import String from "./String";
import Degree from "./Degree";
import Theory from "../public/data.json";
import { useEffect, useState } from "react";
import { useTheory } from "../utils/Theory";

const Fretboard = () => {
    const [strings, setStrings] = useState(Theory.strings);
    const [selectedNote, setSelectedNote] = useState<number>(0);
    const [selectedScale, setSelectedScale] = useState<number>(0);
    const { note, setNote, scale, setScale, scaleChords } = useTheory();

    //const [scaleChords, setScaleChords] = useState<string[]>([]);
    const [scaleNotes, setScaleNotes] = useState<number[]>([]);
    const [notes, setNotes] = useState<boolean[]>([true, false, false, false, false, false, false]);

    return (
        <>
            <div className="flex flex-col gap-8">
                <div className="flex gap-4 justify-center items-center">
                    <select
                        name="notes"
                        className="p-1 cursor-pointer"
                        onChange={(e) => setNote(parseInt(e.target.value))}
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
                            setScale(parseInt(e.target.value))
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
                    {Theory.degrees.map((degree, i) => (
                        <Degree key={i} degree={i} chord={i} />
                    ))}
                    {/* <button 
                        key={i} 
                        className={`min-w-20 py-5 rounded ${notes[i] ? note : "bg-black text-white"}`}
                        onClick={() => setNotes(notes.splice(i, 0, !notes[i]))}>
                            {scaleChords[i]}</button> */}
                </div>
            </div>
        </>
    );
};

export default Fretboard;
