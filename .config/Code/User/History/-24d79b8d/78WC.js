import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
    return (
        <>
            <Head>
                <title>Peel and Stick</title>
                <meta
                    name="description"
                    content="Find out everything about peel and stick vinyls."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto text-neutral-900 flex flex-col gap-8">
                <Header />

                <section>
                    <h1 className="font-bold text-5xl">
                        Find all about Peel and Stick Vinyls
                    </h1>
                    <p className="text-lg mt-8 leading-9 max-w-3xl">
                        Peel and Stick vinyls are a new way to refresh your
                        home. They offer beutiful and durable designs at a low
                        cost and no hassle.{" "}
                        <a href="#faq" className="font-bold hover:underline">
                            Learn more &rarr;
                        </a>
                    </p>
                </section>

                <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <Link href="/wallpapers">
                        <a className="hover:underline">
                            <Image
                                src="/images/sven-brandsma-kiV82HqGyTo-unsplash.webp"
                                width={600}
                                height={400}
                                objectFit="cover"
                                alt="Peel and Stick wallpaper image"
                            />
                            <h2 className="font-bold my-4">
                                Wallpapers &rarr;
                            </h2>
                        </a>
                    </Link>

                    <Link href="/tiles">
                        <a className="hover:underline">
                            <Image
                                src="/images/cj-infantino-bhIQEe_26mk-unsplash.webp"
                                width={600}
                                height={400}
                                alt="Peel and Stick floor tiles image"
                            />
                            <h2 className="font-bold my-4">
                                Floor tiles &rarr;
                            </h2>
                        </a>
                    </Link>

                    <Link href="/countertops">
                        <a className="hover:underline">
                            <Image
                                src="/images/roam-in-color-zzMb7jacyBc-unsplash.webp"
                                width={600}
                                height={400}
                                objectFit="cover"
                                alt="Peel and Stick countertops image"
                            />
                            <h2 className="font-bold my-4">
                                Countertops &rarr;
                            </h2>
                        </a>
                    </Link>

                    <Link href="/backsplash">
                        <a className="hover:underline">
                            <Image
                                src="/images/edgar-castrejon-CX8ooha2yLA-unsplash.webp"
                                width={600}
                                height={400}
                                alt="Peel and Stick backsplash image"
                            />
                            <h2 className="font-bold my-4">
                                Backsplash &rarr;
                            </h2>
                        </a>
                    </Link>
                </section>

                <section className="my-8 flex flex-col gap-14" id="faq">
                    <div>
                        <h2 className="font-bold text-2xl">
                            What Are Peel and Stick Tiles?
                        </h2>
                        <p className="mt-4 leading-7">
                            <strong>
                                Peel and stick tiles are a stylish, yet
                                inexpensive, way to upgrade your home at a
                                fraction of the cost of other tiles. Also known
                                as self-adhesive vinyl tiles, they are a thin,
                                layered material that can be fitted on walls,
                                backsplashes, and floors. They come in a wide
                                range of designs and patterns, just like regular
                                tiles would, and in terms of quality and
                                durability, they largely depend on the quality
                                and price of the tiles.They have become an
                                increasingly popular option among homeowners who
                                want to revamp their homes on a budget. However,
                                peel and stick tiles are suitable for rental
                                places because they are easy to install, remove,
                                and replace without replacing the subfloor.
                            </strong>
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl">
                            Are Peel and Stick Tiles Waterproof?
                        </h2>
                        <p className="mt-4 leading-7">
                            <strong>
                                Peel and stick tiles are waterproof, as they're
                                made of multi-layer vinyl that makes them water
                                and moisture-resistant in humid environments.
                                But if water is left on them, it can penetrate
                                the gaps and damage the wall or subfloor. Avoid
                                this by covering the tiles with a sealant or
                                clean up any spillage.
                            </strong>
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl">
                            How to Apply Peel and Stick Vinyls?
                        </h2>
                        <p className="mt-4 leading-7">
                            Peel and stick wallpaper offers an affordable,
                            DIY-friendly alternative to traditional
                            wallcoverings. The self-adhesive backing
                            doesn&apos;t require any messy paste, and if you
                            make a mistake while applying, you can pull it off
                            and start over. However, installing temporary
                            wallpaper isn&apos;t as simple as peeling off the
                            backing and sticking it to the wall. You&apos;ll
                            need to do some prep work to ensure it adheres
                            properly to the wall. A few tools and tricks will
                            also come in handy to help you get the smoothest
                            finish possible. Follow these step-by-step
                            instructions on how to apply peel-and-stick
                            wallpaper to achieve bubble-free, long-lasting
                            results.
                        </p>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}
