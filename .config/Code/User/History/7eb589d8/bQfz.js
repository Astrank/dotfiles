import Footer from '../components/Footer'
import Header from '../components/Header'
import Product from '../components/Product'

export default function Wallpapers() {
    return (
        <div className='container mx-auto text-neutral-900'>
            <Header />
            
            <h1 className='font-bold text-5xl'>Peel and Stick Wallpapers</h1>
            
            <div className="grid grid-cols-4 gap-y-20 py-10">
                <Product link="https://amzn.to/3fQMxv0" img="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07PFFY85T&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=peelandstick-20&language=en_US" />
                <Product link="https://amzn.to/3rCkbHE" img="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07483PK35&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=peelandstick-20&language=en_US" />
                <Product link="https://amzn.to/3SRHZDh" img="" />
            </div>

            <Footer />
        </div>
    )
}