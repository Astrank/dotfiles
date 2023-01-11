export default function Publicacion(props) {
    return(
        <article className="flex flex-col gap-4 max-w-2xl">
            <a href="#" className="text-xl font-bold hover:underline">
                {props.title}
            </a>
            <p className="text-gray-500">
                {props.content
                    .split(" ")
                    .slice(0, 15)
                    .join(" ")}
                ...
            </p>
            <div className="font-bold flex gap-2 items-center">
                <a href="#" className="font-lora text-lg text-accent hover:text-accent_light">
                    {props.category}
                </a>·
                <a className="text-sm">{props.author}</a>
            </div>
        </article>
    )
}