export default function Product(props) {
    return (
        <a href="https://amzn.to/3MepVAN" className="flex flex-col gap-4 jusify-center items-center" target="_blank">
            <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07483PK35&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=peelandstick-20&language=en_US" />
            <img src="https://ir-na.amazon-adsystem.com/e/ir?t=peelandstick-20&language=en_US&l=li3&o=1&a=B07483PK35" width="1" height="1" border="0" alt="" style={{border: "none !important", margin: "0px !important"}} />
            <span className='bg-neutral-900 text-white py-3 px-6 self-center'>
                Buy on Amazon $32
                <svg className="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </span>
        </a>
    )
}