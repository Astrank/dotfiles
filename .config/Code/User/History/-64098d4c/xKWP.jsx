export default function Publicacion(props) {
    return(
        <article className="flex flex-col gap-4 max-w-2xl">
            <a href="#" className="text-xl font-bold">
                {props.title}
            </a>
            <p className="text-gray-500">
                {props.content
                    .split(" ")
                    .slice(0, 24)
                    .join(" ")}
                ...
            </p>
            <div>
                <a href="#" className="font-bold font-lora text-accent underline">
                    {props.category}
                </a>
                <span className="font-bold text-sm"> · {props.author}</span>
            </div>
        </article>
    )
}