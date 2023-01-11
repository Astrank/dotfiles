import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"

import { CommentsProvider } from "../utils/Comments"

export default function EscrituraGrupal() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Head>
                <title>Invitados | Verónica Metélico</title>
                <meta
                    name="description"
                    content="Cuentos y Reflexiones | Verónica Metélico"
                />
            </Head>

            <Header />

            <div className="flex flex-col gap-6 text-primary-900 mx-4 my-8 md:mx-10 lg:mx-14 xl:mx-44 mb-auto">
                <div className="flex flex-col gap-6 mb-6">
                    <h1 className="font-asap text-3xl">Espacio para invitados</h1>
                    <p className="font-roboto font-light text-base text-primary-700 leading-8 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at hic magni ipsa facilis accusamus maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur nostrum porro doloribus quis expedita dolorem, ab, veritatis dolores.</p>
                </div>

                <div className="group flex flex-col gap-3" key={invitado.slug}>
                    <h2 className="font-asap text-2xl group-hover:text-primary-700 mb-2">{invitado.title}</h2>
                    <p className="font-roboto font-light text-md text-primary-700 leading-8 md:hidden text-justify">
                        ...
                    </p>
                    <p className="font-roboto font-light text-md text-primary-700 leading-8 hidden md:block text-justify">
                        ...
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    )
}