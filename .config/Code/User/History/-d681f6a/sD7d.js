import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Estudio() {
    return (
        <main className='text-primary'>
            <Header/>

            <section className=''>
                <div className='py-20 bg-gradient-to-r from-accent to-accent_light px-3 sm:px-10 md:px-14 lg:px-18 xl:px-32'>
                    <h2 className="text-2xl md:text-3xl font-bold font-lora">
                        Contacto
                    </h2>
                    <hr className="divider mt-2 border-0" />
                </div>
            </section>
            
            <Footer/>
        </main>
    )
}