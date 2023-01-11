export default function Footer() {
    return (
        <footer className="grid grid-rows-2 px-4 gap-14 sm:px-10 md:px-14 lg:px-18 xl:px-32 md:grid-rows-none md:grid-cols-2 md:gap-10 justify-center text-primary bg-darkest text-white py-14">
            <div className="flex flex-col gap-6">
                <h1 className="font-bold text-4xl uppercase">Logo</h1>
                <p className="text-sm text-gray-400 max-w-md leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eum. Minus voluptate vitae distinctio aspernatur libero, pariatur amet</p>
                <div className="flex items-center gap-2">
                    <a href="" className="text-sm font-medium text-accent">Saber mas</a>
                    <svg className="h-5 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </div>
            </div>      
            <div className="flex flex-col lg:flex-row gap-14 -order-1 md:order-2">
                <div className="flex flex-col gap-6">
                    <h3 className="text-lg font-semibold">Contacto</h3>
                    <div className="flex items-center gap-4">
                        <img className="h-8" src="assets/email.svg" />
                        <div className="flex flex-col">
                            <span className="uppercase text-gray-400">Escribinos</span>
                            <span>contacto@abogado.com</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <img className="h-8" src="assets/phone.svg" />
                        <div className="flex flex-col">
                            <span className="uppercase text-gray-400">Llamanos</span>
                            <span className="font-bold">0800-888-333</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                        <h3 className="text-lg font-semibold">Seguinos</h3>
                        <ul className="flex gap-6 items-center" role="List" aria-label="Social Icons">
                            <li>
                                <a href="" aria-label="Facebook">
                                    <img className="h-6" src="assets/facebook.svg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="" aria-label="Instagram">
                                    <img className="h-6" src="assets/instagram.svg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="" aria-label="Linked In">
                                    <img className="h-6" src="assets/linkedin.svg" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
            </div>    
        </footer>
    );
}
