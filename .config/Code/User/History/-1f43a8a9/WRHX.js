import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Obra() {
    return (
        <>
            <Head>
                <title>Obra | Verónica Metélico</title>
                <meta
                    name="description"
                    content="Cuentos y Reflexiones | Verónica Metélico"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <div className="flex flex-col gap-8 text-primary-900 mx-4 my-20 lg:mx-44">
                <div className="flex gap-6">
                    <button className="bg-secondary-400 font-darker_grotesque text-md px-5 lg:text-xl md:px-6 py-2">
                        Cuentos
                    </button>
                    <button className="bg-secondary-400 font-darker_grotesque text-md px-5 lg:text-xl md:px-6 py-2">
                        Reflexiones
                    </button>
                </div>
                <div className="flex flex-col gap-4 my-6">
                    <a href="#" className="self-start">
                        <h1 className="font-asap text-2xl">Titulo titulo</h1>
                    </a>
                    <a href="#">
                        <p className="font-roboto text:md md:text-lg text-primary-700 leading-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nisi at hic magni ipsa facilis accusamus
                            maxime. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Minima consectetur nostrum porro
                            doloribus quis expedita dolorem, ab, veritatis
                            dolores...
                        </p>
                    </a>
                </div>
            </div>

            <Footer />
        </>
    );
}
