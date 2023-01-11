import { useState, useEffect, useRef } from "react";

const Metronome = () => {
    const firstRender = useRef(true);
    const [bpm, setBpm] = useState<number>(60);
    const [playing, setPlaying] = useState<boolean>(false);
    const [context, setContext] = useState<AudioContext>(undefined);
    const [buffer, setBuffer] = useState<AudioBuffer>(undefined);
    const [currentTime, setCurrentTime] = useState<number>(0);

    const scheduleNote = (beatNumber, time) => {
        // create an oscillator
        const osc = context.createOscillator();
        const envelope = context.createGain();
            
        osc.frequency.value = (beatNumber % 4 == 0) ? 1000 : 800;
        envelope.gain.value = 1;
        envelope.gain.exponentialRampToValueAtTime(1, time + 0.001);
        envelope.gain.exponentialRampToValueAtTime(0.001, time + 0.02);

        osc.connect(envelope);
        envelope.connect(context.destination);
        
        osc.start(time);
        osc.stop(time + 0.03);
    }

    const scheduler = () => {
        // while there are notes that will need to play before the next interval, schedule them and advance the pointer.
        while (nextNoteTime < audioContext.currentTime + scheduleAheadTime ) {
            scheduleNote(currentQuarterNote, nextNoteTime);

            // Advance current note and time by a quarter note (crotchet if you're posh)
            nextNoteTime += (60.0 / tempo); // Add beat length to last beat time
        
            currentQuarterNote++;    // Advance the beat number, wrap to zero
            if (currentQuarterNote == 4) {
                currentQuarterNote = 0;
            }
        }
    }

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            initContext();
            return;
        }

        if (playing) {
            setCurrentTime(context.currentTime);
            play();
        }
    }, [playing]);
      
    const play = () => {
        setCurrentTime(currentTime + 60 / bpm);
        let source = context.createBufferSource();
        source.buffer = buffer;
        source.connect(context.destination);
        //source.onended = playing ? play : undefined;
        source.loop = true;
        source.start(currentTime);
    }

    const initContext = async () => {
        const audioContext = new AudioContext();
        const audioBuffer = await fetch("click.wav")
            .then(res => res.arrayBuffer())
            .then(arrayBuffer => 
                audioContext.decodeAudioData(arrayBuffer)
            )
        
        setContext(audioContext);
        setBuffer(audioBuffer);
    }

    return (
        <div className="flex items-center justify-between my-20 text-white px-8 py-6 mx-72 bg-neutral-800 rounded">
            <span className="uppercase font-bold text-2xl">Metronome</span>
            <div className="flex gap-10">
                <input type="range" name="" id="" min={20} max={300} value={bpm} onChange={(e) => setBpm(Number(e.target.value))} />
                <div className="flex gap-2">
                    <button onClick={() => bpm >= 20 ? setBpm(bpm - 1) : ""}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>
                    </button>
                    <input type="number" value={bpm} className="border border-neutral-800 text-neutral-800 w-14 text-center px-3 rounded" onChange={(e) => setBpm(Number(e.target.value))} />
                    <button onClick={() => bpm < 300 ? setBpm(bpm + 1) : ""}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </div>

                {playing ?
                    <button onClick={() => setPlaying(false)}>
                        <svg className="w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    : <button onClick={() => setPlaying(true)}>
                        <svg className="w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                        </svg>
                    </button>}
                
            </div>
        </div>
    )
}

export default Metronome;