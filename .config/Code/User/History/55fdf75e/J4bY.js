import Image from "next/image";

export default function Product(props) {
    return (
        <a
            href={props.link}
            className="flex flex-col gap-4 jusify-center items-center relative"
            target="_blank"
        >
            <div className="relative w-full aspect-h-1 aspect-w-1">
                <Image
                    src={`https:${props.img}`}
                    objectFit="cover"
                    layout="fill"
                />
            </div>
            <div className="w-full px-1 flex justify-between">
                <span className="self-center font-bold">{props.title}</span>
                <svg
                    className="w-6 h-6 ml-2 inline"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                </svg>
            </div>
        </a>
    );
}
