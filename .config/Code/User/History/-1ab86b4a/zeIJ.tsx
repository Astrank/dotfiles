type KeyProps = {
    chord: string,
}

const Key = ({chord}: KeyProps) => {
    return (
        <button 
            className={`min-w-20 py-5 rounded bg-black text-white`}>
                {chord}
        </button>
    )
}

export default Key;