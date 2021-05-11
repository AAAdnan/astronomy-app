import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Nav from '../../components/Nav';
import { getNasaPhotosByID } from '../../lib/nasa';
import SearchCardInd from '../../components/SearchCardInd'


export default function Photo({ result }) {

    const thumbnailUrl = result.links[0].href

    const location = result.data[0].location

    const description = result.data[0].description

    const id = result.data[0].nasa_id

    return (
        <>
        <Nav />
        <Head>
          <title>Image</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="h-screen flex items-center px-6 lg:px-32 bg-black text-white overflow-hidden">
            <section className="mt-24">
                <SearchCardInd thumbnailUrl={thumbnailUrl} location={location} description={description} id={id}/>
            </section>
        </div>
        </>
    )
  }


export async function getServerSideProps({ params }) {
    const pic = await getNasaPhotosByID(params.id);

    const result = pic[0]

    return {
      props: {
        result,
      },
    };
  }