import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type InstagramData = {
    id: string,
    media_url: string,
    permalink: string,
    caption: string,
}

export default function Instagram() {
    const [instagramData, setInstagramData] = useState<InstagramData[]>([]);
    const token = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;
    const url = `https://graph.instagram.com/me/media?fields=id,media_url,caption,permalink&limit=6&access_token=${token}`;

    useEffect(() => {
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => setInstagramData(data.data))
            .catch(error => error)
    }, [])
    
    return (
        <>
            {instagramData.length > 0 &&
                <div className="mx-4 md:mx-10 lg:mx-14 xl:mx-44">
                    <h2 className="font-asap text-2xl text-primary-900 mb-8">Ultimas publicaciones de Instagram</h2>
                    {instagramData.map(data => (
                        <Link href={data.permalink} className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-center items-center" key={data.id}>
                            <Image
                                src={data.media_url}
                                fill
                                alt={data.caption}
                                className="object-cover bg-neutral-200 aspect-square"
                            />
                        </Link>
                    ))}
                </div>}
        </>
    )
}