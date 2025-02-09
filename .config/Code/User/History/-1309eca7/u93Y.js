import propiedades from '../../public/data/propiedades.json';
import Image from 'next/image';
import Head from 'next/head'
import styles from '../../styles/Propiedad.module.css'

export default function BlogPost({ propiedad }) {
    return (
        <>
            <Head>
                <title>{`${propiedad.nombre} - Milanesi Propiedades`}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.propiedad}>
                <Image src={`/${propiedad.cover}`} width={600} height={500} />
                <h3>{propiedad.nombre}</h3>
            </div>
        </>
    )
  }

export async function getStaticProps(context) {
    return {
        props: {
            propiedad: propiedades.find(propiedad => propiedad.slug === context.params.slug)
        }
     }
}
  
export async function getStaticPaths() {
    return {
        paths: propiedades.map(propiedad => ({ params: { slug: propiedad.slug } })),
        fallback: false
    }
}