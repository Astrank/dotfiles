type ButtonProps = {
    text: string,
    type: "submit" | "reset" | "button",
    onClick?: () => void;
}

export default function Button({ text, type }: ButtonProps) {
    return (
        <button 
            type={type || undefined} className="bg-secondary-400 text-sm px-5 md:px-6 py-3 mt-4 self-end hover:bg-secondary-200">
            {text}
        </button>
    )
}