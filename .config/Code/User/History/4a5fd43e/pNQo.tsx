/* import { useState, useEffect, useRef } from "react";

const Metronome = () => {
    const firstRender = useRef(true);
    const [bpm, setBpm] = useState<number>(60);
    const [playing, setPlaying] = useState<boolean>(false);
    const [context, setContext] = useState<AudioContext>(undefined);
    const [buffer, setBuffer] = useState<AudioBuffer>(undefined);
    const [currentTime, setCurrentTime] = useState<number>(0);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            initContext();
            return;
        }
    });

    const toggle = () => {
        if (!playing) {
            setCurrentTime(context.currentTime);
            setPlaying(true);
            play();
        } else {
            setPlaying(false)
        }
    }
      
    const play = () => {
        setCurrentTime(currentTime + 60 / bpm);
        let source = context.createBufferSource();
        source.buffer = buffer;
        source.connect(context.destination);
        source.onended = playing ? play : undefined;
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
                    <button onClick={() => toggle()}>
                        <svg className="w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    : <button onClick={() => toggle()}>
                        <svg className="w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                        </svg>
                    </button>}
                
            </div>
        </div>
    )
}

export default Metronome; */

import React, { useState, useEffect } from 'react';

function Metronome() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [tempo, setTempo] = useState(120);

  useEffect(() => {
    let timerId;

    if (isPlaying) {
      // If the metronome is playing, schedule the next click
      // using the current tempo
      timerId = setInterval(() => {
        playClick();
      }, 60000 / tempo);
    } else {
      // If the metronome is not playing, stop the timer
      clearInterval(timerId);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [isPlaying, tempo]);

  function playClick() {
    // Create an audio context
    const audioContext = new AudioContext();

    // Create an oscillator and gain node
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    // Connect the oscillator to the gain node and the gain node to the audio context
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Set the oscillator type and frequency, and start it
    oscillator.type = 'sawtooth';
    oscillator.frequency.value = 240;
    oscillator.start();

    // Set the gain to a high value briefly to create a "click" sound,
    // then immediately set it back to 0 to stop the sound
    gainNode.gain.value = 1;
    setTimeout(() => {
      gainNode.gain.value = 0;
    }, 10);
  }

  function startMetronome() {
    setIsPlaying(true);
  }

  function stopMetronome() {
    setIsPlaying(false);
  }

  function handleTempoChange(event) {
    setTempo(event.target.value);
  }

  return (
    <div>
      <button onClick={startMetronome}>Start</button>
      <button onClick={stopMetronome}>Stop</button>
      <input type="range" min="60" max="240" value={tempo} onChange={handleTempoChange} />
    </div>
  );
}

export default Metronome;