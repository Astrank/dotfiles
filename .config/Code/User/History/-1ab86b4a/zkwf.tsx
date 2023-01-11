import { useEffect, useRef, useState } from "react";

type KeyProps = {
    chord: number,
    degree: string,
}

const Degree = ({chord, degree}: KeyProps) => {
    const firstRender = useRef(true);
    const [isActive, toggleActive] = useState<boolean>(false);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        
        if (degree == "tonic") {
            toggleActive(true);
        }
    }, []);

    return (
        <button 
            className={`min-w-20 py-5 rounded bg-black text-white ${isActive ? degree : ""}`}
            onClick={() => toggleActive(!isActive)}>
                {chord}
        </button>
    )
}

export default Degree;