import Head from "next/head";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Satisfy&display=swap"
                    rel="stylesheet"
                />
                <title>Invitaciones Digitales - Æther</title>
            </Head>

            <header className="primary-header">
                <a href="#" className="logo">
                    <img
                        src="assets/svg/aether.svg"
                        alt="logo"
                        className="logo-svg"
                    />
                    <p className="logo-text">Æther</p>
                </a>
            </header>

            <div className="landing | padding-block-700 wide-flow">
                <h1 className="landing-title">
                    Invitaciones digitales para cualquier ocasión
                </h1>
                <p className="landing-text">
                    Creamos sitios personalizados para tu evento. De una manera
                    simple, contemporánea, y dinamicas vas a reemplazar las
                    tarjetas de papel impreso por una opción novedosa.
                </p>
            </div>

            <section className="demo">
                <div className="demo-selectors">
                    <button className="demo-selector">
                        Simple
                    </button>
                    <button className="demo-selector selected">Elegante</button>
                    <button className="demo-selector">Divertida</button>
                    <button className="demo-selector">Temática</button>
                </div>
                <div className="demo-preview">
                        <div className="demo-header">
                            <h3 className="">
                                Casamiento
                            </h3>
                            <div className="demo-nav">
                                <p>UBICACIÓN</p>
                                <p>REGALOS</p>
                                <p>ASDA</p>
                            </div>
                        </div>
                        <div
                            className="demo-main"
                            style={{
                                backgroundImage:
                                    "url(" +
                                    "/assets/nathan-dumlao-As8zq82LBpw-unsplash.jpg" +
                                    ")",
                            }}
                        ></div>
                </div>
            </section>

            <section className="features | padding-block-700 wide-flow">
                <h2 className="features-title">Lorem ipsum dolor sit</h2>
                <div className="even-columns">
                    <div className="feature | flow">
                        <img
                            src="assets/svg/mobile-alt-solid.svg"
                            className="feature-logo"
                        />
                        <h3 className="feature-title">Responsive</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit
                        </p>
                    </div>
                    <div className="feature | flow">
                        <img
                            src="assets/svg/gift-solid.svg"
                            className="feature-logo"
                        />
                        <h3 className="feature-title">Regalos</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit
                        </p>
                    </div>
                    <div className="feature | flow">
                        <img
                            src="assets/svg/compass-regular.svg"
                            className="feature-logo"
                        />
                        <h3 className="feature-title">Ubicación</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit
                        </p>
                    </div>
                    <div className="feature | flow">
                        <img
                            src="assets/svg/spotify-brands.svg"
                            className="feature-logo"
                        />
                        <h3 className="feature-title">
                            Responsive{" "}
                        </h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit
                        </p>
                    </div>
                </div>
            </section>

            <section className="packages | padding-block-700">
                <div id="gratis" className="package">
                    <div id="gratis-header" className="header">
                        <h3>Gratis</h3>
                        <h3>0$</h3>
                    </div>
                    <div className="main">
                        <div className="package-features">
                            <h3 className="package-includes">Incluye:</h3>
                            <ul role="list" className="package-list">
                                <li className="package-item">
                                    <img
                                        src="assets/svg/check-circle-solid.svg"
                                        alt=""
                                        className="paquete-check"
                                    />
                                    <span>Tarjeta digital</span>
                                </li>
                            </ul>
                        </div>
                        <button id="gratis-btn" className="package-btn">
                            EMPEZÁ YA!
                        </button>
                    </div>
                </div>
                <div id="basico" className="package">
                    <div id="basico-header" className="header">
                        <h3>Básico</h3>
                        <h3>3000$</h3>
                    </div>
                    <div className="main">
                        <div className="package-features">
                            <h3 className="package-includes">Incluye:</h3>
                            <ul className="package-list">
                                <li className="package-item">
                                    <img
                                        src="assets/svg/check-circle-solid.svg"
                                        alt=""
                                        className="paquete-check"
                                    />
                                    <span>Tarjeta digital</span>
                                </li>
                            </ul>
                        </div>
                        <button id="basico-btn" className="package-btn">
                            Elegir
                        </button>
                    </div>
                </div>
                <div id="premium" className="package">
                    <div id="premium-header" className="header">
                        <h3>Premium</h3>
                        <h3>5000$</h3>
                    </div>
                    <div className="main">
                        <div className="package-features">
                            <h3 className="package-includes">Incluye:</h3>
                            <ul className="package-list">
                                <li className="package-item">
                                    <img
                                        src="assets/svg/check-circle-solid.svg"
                                        alt=""
                                        className="paquete-check"
                                    />
                                    <span>Tarjeta digital</span>
                                </li>
                            </ul>
                            <ul className="package-list">
                                <li className="package-item">
                                    <img
                                        src="assets/svg/check-circle-solid.svg"
                                        alt=""
                                        className="paquete-check"
                                    />
                                    <span>Pagina Web</span>
                                </li>
                            </ul>
                        </div>
                        <button id="premium-btn" className="package-btn">
                            Elegir
                        </button>
                    </div>
                </div>
            </section>

            <footer className="footer | even-columns padding-block-700">
                <a href="#" className="logo">
                    <img
                        src="assets/svg/aether.svg"
                        alt="logo"
                        className="logo-svg"
                    />
                    <p className="logo-text">Æther</p>
                </a>
                <div className="footer-contact flow">
                    <h3 className="footer-email">
                        invitacion@studio.com
                    </h3>
                    <ul role="list" aria-label="Social Links" className="social-icons">
                        <li>
                            <img
                                src="assets/svg/telegram-plane-brands.svg"
                                alt="telegram"
                                className="social-icon"
                                aria-label="telegram"
                            />
                        </li>
                        <li>
                            <img
                                src="assets/svg/whatsapp-brands.svg"
                                alt="whatsApp"
                                className="social-icon"
                                aria-label="whatsapp"
                            />
                        </li>
                        <li>
                            <img
                                src="assets/svg/instagram-brands.svg"
                                alt="instagram"
                                className="social-icon"
                                aria-label="instagram"
                            />
                        </li>
                    </ul>
                </div>
                <nav className="">
                    <ul className="footer-nav flow" role="list">
                        <li href="">
                            <a href="">Diseños</a>
                        </li>
                        <li href="">
                            <a href="">Funcionalidades</a>
                        </li>
                        <li href="">
                            <a href="">Precio</a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
}
