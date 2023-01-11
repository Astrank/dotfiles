import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";

export default function Wallpapers({ products }) {
    return (
        <div className="container mx-auto text-neutral-900">
            <Header />

            <h1 className="font-bold text-4xl mt-14">
                Peel and Stick Wallpapers
            </h1>

            <div className="grid grid-cols-4 gap-y-20 gap-x-14 py-10">
                {products &&
                    products.length > 0 &&
                    products.map((product) => (
                        <Product
                            key={product.link}
                            title={product.title}
                            link={product.link}
                            img={product.image}
                        />
                    ))}
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
