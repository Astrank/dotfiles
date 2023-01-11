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
                            What Are Peel and Stick Tiles Made From?
                        </h2>
                        <p className="mt-4 leading-7">
                            <strong>
                                Peel and stick tiles are a type of vinyl
                                flooring made of several layers of vinyl, also
                                known as polyvinyl chloride (PVC). Other
                                compounds are added to these layers of material
                                to increase the tiles' durability, hardness, and
                                flexibility.If you have opted for tiles that
                                look like stone or wooden materials, you might
                                also find that the material used is enriched
                                with mineral particles to give the tiles the
                                right natural-looking texture.Depending on the
                                quality of tiles used, you might find that
                                -luxury vinyl flooring- (LVF) is sometimes used.
                                This type of flooring is relatively new, and,
                                unlike regular vinyl, it boasts a harder, more
                                flexible backing that allows it to be
                                semi-rigid.
                            </strong>
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl">
                            Do Peel and Stick Tiles Stay Waterproof?
                        </h2>
                        <p className="mt-4 leading-7">
                            <strong>
                                One of the reasons that make peel and stick
                                tiles so attractive is that you can use them
                                anywhere around the house. Depending on the
                                types of tiles you choose, your floors should
                                stay waterproof for many years.Generally,
                                higher-quality tiles are resistant to moisture
                                that can repel water, which means that you can
                                set them up in humid locations, such as the
                                bathroom or kitchen. Self-adhesive vinyl tiles
                                can also withstand spills and outdoor moisture
                                that is tracked in from shoes and boots.
                                However, it is important not to leave water on
                                them for long durations.Peel and stick tiles
                                don't require grout for installation, which is
                                why this type of flooring is so appealing, but
                                this lack of grout creates a gap between the
                                tiles. Due to these gaps, water can seep through
                                the flooring and damage the subfloor.To prevent
                                this, there are three simple options:
                            </strong>
                        </p>
                        <ul>
                            <li>
                                Clean up any spills as soon as you notice them
                                to keep water from reaching the subfloor.
                            </li>
                            <li>
                                Cover the tiles with a sealant to prevent water
                                from running through the gaps between the tiles.
                            </li>
                            <li>
                                Add an ideal underlayment between the tiles and
                                the subfloor to protect them from water
                                infiltration.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl">
                            Where Can You Use Peel and Stick Tiles?
                        </h2>
                        <p className="mt-4 leading-7">
                            <strong>
                                Most peel and stick tiles have a degree of water
                                and moisture resistance. Depending on your peel
                                and stick tiles’ quality, you could apply them
                                in the rooms in the house with the highest
                                humidity levels, including flooring, backsplash,
                                and walls in the shower, kitchen, or bathroom.
                            </strong>
                        </p>
                        <p>
                            Check the manual that comes with your tiles and
                            speak to an expert, especially if you want to
                            position them in a high-humidity area.
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl">
                            Installing Peel and Stick Tiles: What You Need To
                            Know
                        </h2>
                        <p className="mt-4 leading-7">
                            <strong>
                                If you want to create a water-resistant floor,
                                you should understand how to install the tiles
                                to obtain the best results. Generally, the
                                adhesive on these tiles is strong enough for you
                                to stick them directly on most underlayments.
                            </strong>
                        </p>
                        <p>
                            Alternatively, you can stick the self-adhesive tiles
                            directly onto a smooth, clean floor, which some
                            homeowners opt to do, once the floor has been
                            adequately prepared.
                        </p>
                        <p>
                            The adhesive on peel and stick tiles are usually
                            strong enough so you can't adjust the tiles once
                            they are stuck onto the floor. You'll need to plan,
                            get them ready, and keep a steady hand throughout
                            the process. Lay the tiles out in the pattern you
                            want before removing the backing, so that all you
                            need to do is remove the backing on only the tile
                            you're working with.
                        </p>
                        <p>
                            If you notice that your peel and stick tiles start
                            to become loose over time, it could be that the
                            floor underneath is grainy, dusty, or uneven. If you
                            want them to last longer, you might consider
                            investing in a suitable underlayment that allows you
                            to enjoy a clean and smooth surface for your tiles.
                        </p>
                        <p>
                            You can find out more about installing peel and
                            stick tiles in the video below:
                        </p>
                        <p>VIDEO</p>
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl">
                            Benefits of Peel and Stick Tiles
                        </h2>
                        <p className="mt-4 leading-7">
                            <strong>
                                Many reasons have made peel and stick tiles so
                                popular. Here are some of the benefits to
                                consider:
                            </strong>
                        </p>
                        <ul>
                            <li>
                                They are inexpensive, especially compared to
                                standard tiles, and at an average price of $15
                                per square meter, these tiles don't require
                                installation or maintenance.
                            </li>
                            <li>
                                They are durable and resistant to wear and tear.
                            </li>
                            <li>
                                They are easy to install, with or without
                                underlayment.
                            </li>
                            <li>
                                They are easy to remove and replace if needed.
                            </li>
                            <li>
                                They are water-resistant, making them a suitable
                                and inexpensive choice for high-humidity
                                environments, such as kitchens and bathrooms.
                            </li>
                            <li>
                                <strong>
                                    They come in a variety of colors, patterns,
                                    and designs.
                                </strong>
                                Since the vinyl is color-safe, you can enjoy the
                                original pattern for a long time.
                            </li>
                            <li>
                                They create a noise buffer, making your home
                                more soundproof.
                            </li>
                            <li>
                                They are comfortable to walk on because they
                                spring slightly against the underfoot,
                                especially if you have added a layer of
                                underlayment.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl">
                            Drawbacks of Peel and Stick Tiles
                        </h2>
                        <p className="mt-4 leading-7">
                            If you have been looking for a waterproof, highly
                            resistant type of flooring, peel and stick tiles are
                            the right option for your needs. However, they have
                            some drawbacks that are worth considering:
                        </p>
                        <ul>
                            <li>
                                They require an even, clean, and flawless
                                underlayment to be long-lasting, which can also
                                prevent the subfloor from becoming damaged by
                                water and spills.
                            </li>
                            <li>The glue used by these tiles can be toxic.</li>
                            <li>
                                They might not be made with environment-friendly
                                materials, and they are not recyclable.
                            </li>
                            <li>
                                The lack of grout can leave gaps uncovered,
                                through which water can infiltrate and damage
                                the subfloor.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl">
                            How Much Do Peel and Stick Tiles Cost?
                        </h2>
                        <p className="mt-4 leading-7">
                            One of the best characteristics that have made these
                            tiles so appealing is their reduced cost, but how
                            much you will spend on self-adhesive tiles truly
                            depends on their quality, design, and texture.
                        </p>
                        <p>
                            Some factors to keep in mind when trying to revamp
                            your home on a budget include:
                        </p>
                        <ul>
                            <li>
                                They are priced by square feet and depending on
                                the quality, you might pay a few cents to
                                several dollars per square foot.
                            </li>
                            <li>
                                The average price of peel and stick tiles is
                                around{" "}
                                <a href="https://www.fixr.com/costs/install-vinyl-flooring">
                                    $1-$1.5 per square foot
                                </a>
                                .
                            </li>
                            <li>
                                Certain types of tiles, such as those that mimic
                                stone or hardwood texture, might be more
                                expensive.
                            </li>
                            <li>
                                <strong>
                                    Some waterproof tiles might be more
                                    expensive.
                                </strong>{" "}
                                However, if you want to put them in the shower
                                or use them as a kitchen backsplash, you might
                                need to be willing to spend a little more per
                                square foot.
                            </li>
                        </ul>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}
