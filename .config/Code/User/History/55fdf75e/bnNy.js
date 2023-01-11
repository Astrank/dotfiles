export default function Product(props) {
    return (
        <a href="https://amzn.to/3MepVAN" className="flex flex-col gap-4 jusify-center items-center" target="_blank">
            <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07483PK35&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=peelandstick-20&language=en_US" />
            <img src="https://ir-na.amazon-adsystem.com/e/ir?t=peelandstick-20&language=en_US&l=li3&o=1&a=B07483PK35" width="1" height="1" border="0" alt="" style={{border: "none !important", margin: "0px !important"}} />
            <span className='bg-neutral-900 text-white py-3 px-6 self-center' target="_blank">Buy on Amazon $32</span>
        </a>
    )
}