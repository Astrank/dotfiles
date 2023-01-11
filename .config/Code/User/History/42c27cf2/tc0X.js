import Header from '../components/Header'

export default function Contacto() {
    return (
        <main className='mx-40'>
            <Header />

            <h1>Contacto</h1>

            <form
                className="flex flex-col"
                action="https://formsubmit.co/46c8e5f4ab3f3c79b050148e5511b3cd"
                method="POST"
                id="contacto"
            >
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold font-lora">
                        Realizar consulta
                    </h2>
                </div>
                <div className="flex flex-col gap-4">
                    <input
                        className="p-2"
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        required
                    />
                    <input
                        className="p-2"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        className="p-2"
                        type="text"
                        name="phone-number"
                        placeholder="Telefono"
                        required
                    />
                    <textarea
                        className="p-2"
                        name="message"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Mensaje"
                        required
                    ></textarea>
                </div>
                <button
                    className="bg-primary text-white px-6 py-4 rounded self-start"
                    type="submit"
                >
                    Realizar consulta
                </button>
            </form>
        </main>
    )
}