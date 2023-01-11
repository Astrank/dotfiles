import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contacto() {
    return (
        <main>
            <Header/>

            <section>
                <h1>Contacto</h1>
                <form
                    className="flex flex-col gap-10 py-10 px-4 md:px-20"
                    action="https://formsubmit.co/46c8e5f4ab3f3c79b050148e5511b3cd"
                    method="POST"
                    id="contacto"
                >
                    <h2 className="text-2xl md:text-3xl font-bold font-lora">
                        Realizar consulta
                    </h2>
                    <div className="flex flex-col gap-4">
                        <input
                            className="p-2 border border-primary rounded"
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            required
                        />
                        <input
                            className="p-2 border border-primary rounded"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                        />
                        <input
                            className="p-2 border border-primary rounded"
                            type="text"
                            name="phone-number"
                            placeholder="Telefono"
                            required
                        />
                        <textarea
                            className="p-2 border border-primary rounded"
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
            </section>

            <Footer/>
        </main>
    )
}