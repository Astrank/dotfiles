import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";

export default function Wallpapers(products) {
    return (
        <div className="container mx-auto text-neutral-900">
            <Header />

            <h1 className="font-bold text-5xl">Peel and Stick Wallpapers</h1>

            <div className="grid grid-cols-4 gap-y-20 py-10">
                <Product
                    title="Cream Grassweave"
                    link="https://amzn.to/3fQMxv0"
                    img="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07PFFY85T&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=peelandstick-20&language=en_US"
                />
                <Product
                    title="Wheat Grasscloth"
                    link="https://amzn.to/3rCkbHE"
                    img="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07483PK35&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=peelandstick-20&language=en_US"
                />
                <Product
                    title="Breezy"
                    link="https://amzn.to/3SRHZDh"
                    img="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07RBND6P3&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=peelandstick-20&language=en_US"
                />
                <Product
                    title="Brown and Taupe Brick"
                    link="https://amzn.to/3EpBqDs"
                    img="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08RF2N548&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=peelandstick-20&language=en_US"
                />
                <Product
                    title="Maui"
                    link="https://amzn.to/3Vda0Ha"
                    img="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07FR8HXYR&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=peelandstick-20&language=en_US"
                />
                <Product
                    title="Reclaimed Shiplap"
                    link="https://amzn.to/3fRevH7"
                    img="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07482XYMS&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=peelandstick-20&language=en_US"
                />
                <Product
                    title="Blue Weathered Planks"
                    link="https://amzn.to/3fNTahI"
                    img="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09GCYH532&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=peelandstick-20&language=en_US"
                />
            </div>

            <Footer />
        </div>
    );
}

export const getStaticProps = async () => {
    const products = await import("../public/data/products.json").then(
        (res) => res.default
    );

    return {
        props: { products },
    };
};
