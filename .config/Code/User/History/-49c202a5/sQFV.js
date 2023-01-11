import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";

export default function Countertops({ products }) {
    return (
        <>
            <Head>
                <title>Countertops | Peel and Stick</title>
                <meta
                    name="description"
                    content="Find out everything about peel and stick vinyls."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto text-neutral-900">
                <Header />
                <h1 className="font-bold text-4xl mt-20">
                    Peel and Stick Countertops
                </h1>
                <div className="grid grid-cols-4 gap-y-20 gap-x-14 py-14">
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
            </main>
        </>
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
