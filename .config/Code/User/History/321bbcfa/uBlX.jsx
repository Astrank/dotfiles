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
                        className="logo_svg"
                    />
                    <p className="logo_text">Æther</p>
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
                <div className="demo_selectors">
                    <button className="demo_selector">
                        Simple
                    </button>
                    <button className="demo_selector selected">Elegante</button>
                    <button className="demo_selector">Divertida</button>
                    <button className="demo_selector">Temática</button>
                </div>
                <div className="demo_preview">
                        <div className="demo_header">
                            <h3 className="">
                                Casamiento
                            </h3>
                            <div className="demo_nav">
                                <p>UBICACIÓN</p>
                                <p>REGALOS</p>
                                <p>ASDA</p>
                            </div>
                        </div>
                        <div
                            className="demo_main"
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
                <h2 className="features_title">Lorem ipsum dolor sit</h2>
                <div className="even-columns">
                    <div className="feature | flow">
                        <img
                            src="assets/svg/mobile-alt-solid.svg"
                            className="feature_logo"
                        />
                        <h3 className="feature_title">Responsive</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit
                        </p>
                    </div>
                    <div className="feature | flow">
                        <img
                            src="assets/svg/gift-solid.svg"
                            className="feature_logo"
                        />
                        <h3 className="feature_title">Regalos</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit
                        </p>
                    </div>
                    <div className="feature | flow">
                        <img
                            src="assets/svg/compass-regular.svg"
                            className="feature_logo"
                        />
                        <h3 className="feature_title">Ubicación</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit
                        </p>
                    </div>
                    <div className="feature | flow">
                        <img
                            src="assets/svg/spotify-brands.svg"
                            className="feature_logo"
                        />
                        <h3 className="feature_title">
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
                    <div id="gratis_header" className="header">
                        <h3>Gratis</h3>
                        <h3>0$</h3>
                    </div>
                    <div className="main">
                        <div className="package_features">
                            <h3 className="package_includes">Incluye:</h3>
                            <ul role="list" className="package_list">
                                <li className="package_item">
                                    <img
                                        src="assets/svg/check-circle-solid.svg"
                                        alt=""
                                        className="paquete_check"
                                    />
                                    <span>Tarjeta digital</span>
                                </li>
                            </ul>
                        </div>
                        <button id="gratis_btn" className="package_btn">
                            EMPEZÁ YA!
                        </button>
                    </div>
                </div>
                <div id="basico" className="package">
                    <div id="basico_header" className="header">
                        <h3>Básico</h3>
                        <h3>3000$</h3>
                    </div>
                    <div className="main">
                        <div className="package_features">
                            <h3 className="package_includes">Incluye:</h3>
                            <ul className="package_list">
                                <li className="package_item">
                                    <img
                                        src="assets/svg/check-circle-solid.svg"
                                        alt=""
                                        className="paquete_check"
                                    />
                                    <span>Tarjeta digital</span>
                                </li>
                            </ul>
                        </div>
                        <button id="basico_btn" className="package_btn">
                            Elegir
                        </button>
                    </div>
                </div>
                <div id="premium" className="package">
                    <div id="premium_header" className="header">
                        <h3>Premium</h3>
                        <h3>5000$</h3>
                    </div>
                    <div className="main">
                        <div className="package_features">
                            <h3 className="package_includes">Incluye:</h3>
                            <ul className="package_list">
                                <li className="package_item">
                                    <img
                                        src="assets/svg/check-circle-solid.svg"
                                        alt=""
                                        className="paquete_check"
                                    />
                                    <span>Tarjeta digital</span>
                                </li>
                            </ul>
                            <ul className="package_list">
                                <li className="package_item">
                                    <img
                                        src="assets/svg/check-circle-solid.svg"
                                        alt=""
                                        className="paquete_check"
                                    />
                                    <span>Pagina Web</span>
                                </li>
                            </ul>
                        </div>
                        <button id="premium_btn" className="package_btn">
                            Elegir
                        </button>
                    </div>
                </div>
            </section>

            <footer className="even-columns footer">
                <a href="#" className="logo">
                    <img
                        src="assets/svg/aether.svg"
                        alt="logo"
                        className="logo_svg"
                    />
                    <p className="logo_text">Æther</p>
                </a>
                <div className="footer_contact flow">
                    <h3 className="">
                        invitacion@studio.com
                    </h3>
                    <ul role="list" aria-label="Social Links" className="social_icons">
                        <li>
                            <img
                                src="assets/svg/telegram-plane-brands.svg"
                                alt="telegram"
                                className="social_icon"
                            />
                        </li>
                        <li>
                            <img
                                src="assets/svg/whatsapp-brands.svg"
                                alt="whatsApp"
                                className="social_icon"
                            />
                        </li>
                        <li>
                            <img
                                src="assets/svg/instagram-brands.svg"
                                alt="instagram"
                                className="social_icon"
                            />
                        </li>
                    </ul>
                </div>
                <nav className="">
                    <ul className="footer_nav flow" role="list">
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
