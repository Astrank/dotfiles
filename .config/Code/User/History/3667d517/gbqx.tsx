import { useEffect } from "react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Link from "next/link"
import Head from "next/head";
import Markdown from "react-markdown";
import escrituras from "../../public/data/escritura-grupal.json";
import { useAuth } from "../../utils/Auth";

import { EscrituraGrupal as EscrituraGrupalType } from "../../types/EscrituraGrupal";
import { useEscrituraGrupal } from "../../utils/EscrituraGrupal";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

type EscrituraGrupalProps = {
  escritura: EscrituraGrupalType,
};

const EscrituraGrupal: NextPage<EscrituraGrupalProps> = ({ escritura }) => {
  const { getStories, unsubscribe, stories } = useEscrituraGrupal();
  const { user, isAdmin } = useAuth();

  const dayjs = require('dayjs')
  const relativeTime = require('dayjs/plugin/relativeTime')
  require('dayjs/locale/es')
  dayjs.extend(relativeTime);

  useEffect(() => {
    getStories(escritura.slug);

    return () => {unsubscribe && unsubscribe()}
  }, [])

  return (
    <div className="min-h-screen text-primary-900 ">
      <Head>
        <title>{`${escritura.title} | Verónica Metélico`}</title>
        <meta
          name="description"
          content="Cuentos y Reflexiones | Verónica Metélico"
        />
      </Head>

      <Header />

      <section className="flex flex-col gap-10 my-10 mx-4 md:mx-10 lg:mx-14 lg:my-20 lg:mx-44">
          <div className="flex justify-between">
            <Link href="/escritura-grupal" className="flex gap-2 items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" className="h-3">
                    <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                </svg>
                <span>Volver a Escritura Grupal</span>
            </Link>
          </div>
          <h1 className="font-asap text-3xl">{escritura.title}</h1>
          <Markdown className="flex flex-col gap-6 font-roboto font-light leading-7 md:text-lg text-primary-700 text-justify md:leading-8">
              {escritura.content}
          </Markdown>
      </section>

      <section className="flex flex-col gap-4">
        {stories
          .filter(story => story.approved)
          .sort((a,b) => (a.publish_date > b.publish_date) ? 1 : ((b.publish_date > a.publish_date) ? -1 : 0))
          .map(story => (
            <div>
              <p>{story.content}</p>
              <div>
                  <span className='font-bold'>{story.authorName}</span>
                  <span className='text-primary-700'> · {dayjs(story.publish_date).locale("es").fromNow()}</span>
              </div>
            </div>
        ))}
      </section>
      
      {user && isAdmin &&
        <section className="flex flex-col gap-4">
          {stories
            .filter(story => !story.approved)
            .sort((a,b) => (a.publish_date > b.publish_date) ? 1 : ((b.publish_date > a.publish_date) ? -1 : 0))
            .map(story => (
              <div>
                <p>{story.content}</p>
                <div>
                  <span className='font-bold'>{story.authorName}</span>
                  <span className='text-primary-700'> · {dayjs(story.publish_date).locale("es").fromNow()}</span>
                </div>
                <button>Aprobar</button>
              </div>
          ))}
        </section>}

      <section className="flex flex-col mx-4 md:mx-10 lg:mx-14 lg:my-20 lg:mx-44">
        <textarea name="" id="" rows={5} className="p-2 text-primary-700 outline-none border border-primary-700" placeholder="Continuación de la historia" />
        <button 
            className="bg-secondary-400 text-sm px-5 md:px-6 py-3 mt-4 self-end hover:bg-secondary-200">
                Enviar
        </button>
      </section>

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = (context) => {
  const escritura = escrituras.find((escritura) => escritura.slug === context.params?.slug);

  return {
    props: {
      escritura: escritura,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: escrituras.map((escritura) => ({ params: { slug: escritura.slug } })),
    fallback: false,
  };
};

export default EscrituraGrupal;
