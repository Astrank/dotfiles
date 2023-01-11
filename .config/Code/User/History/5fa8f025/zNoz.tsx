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

            <div className="flex flex-col gap-6 mb-6">
                <h1 className="font-asap text-3xl">Espacio para invitados</h1>
                <p className="font-roboto font-light text-base text-primary-700 leading-8 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at hic magni ipsa facilis accusamus maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur nostrum porro doloribus quis expedita dolorem, ab, veritatis dolores.</p>
            </div>

            <Footer />
        </div>
    )
}