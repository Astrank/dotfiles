export default function Button(text: string) {
    return (
        <button type="submit" className="bg-secondary-400 text-sm px-5 md:px-6 py-3 mt-4 self-end hover:bg-secondary-200">
            {text}
        </button>
    )
}