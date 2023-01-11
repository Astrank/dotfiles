type KeyProps = {
    chord: string,
    note: string,
}

const Key = ({chord, note}: KeyProps) => {
    return (
        <button 
            className={`min-w-20 py-5 rounded bg-black text-white ${note}`}>
                {chord}
        </button>
    )
}

export default Key;