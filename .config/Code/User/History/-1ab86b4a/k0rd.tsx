type KeyProps = {
    chord: string,
    degree: string,
}

const Key = ({chord, degree}: KeyProps) => {
    return (
        <button 
            className={`min-w-20 py-5 rounded bg-black text-white ${degree}`}>
                {chord}
        </button>
    )
}

export default Key;