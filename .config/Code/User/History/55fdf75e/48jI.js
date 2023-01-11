export default function Product(props) {
    return (
        <a
            href={props.link}
            className="flex flex-col gap-4 jusify-center items-center"
            target="_blank"
        >
            <img border={0} src={props.img} />
            <span className="self-center ">
                {props.title}
                <svg
                    className="w-5 h-5 ml-2 inline"
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
            </span>
        </a>
    );
}
