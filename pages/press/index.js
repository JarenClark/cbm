import Layout from "../../components/Layout";
import axios from "axios";
import Masonry from 'react-masonry-css'
import Image from 'next/image'
import Link from "next/link";
import { TitleBar } from '../../components/Common'
import datify from "../api/utils/datify";
const PressIndex = ({ posts }) => {


    return(
        <>
            <Layout>
                <TitleBar  title={'Press'}/>
                <div className="container mx-auto py-8 lg:py-16 max-w-6xl">

                    <Masonry
                        breakpointCols={3}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {posts.map((post,i) => (
                            <article
                                key={i} 
                                className="group hover:shadow-2xl cursor-pointer  bg-white border-2 border-solid rounded-lg"
                            >
                                <Link href={`/press/${post.slug}`}>
                                    <a className="p-4 lg:p-8 flex flex-col items-center">

                                        <Image 
                                        className="mx-auto"
                                            src={'/img/cbm-color-1.png'}
                                            alt={'logo'}
                                            width={250}
                                            height={90}
                                        />
                                        <div className="flex justify-center">
                                        <time className="text-sm py-2 text-center">
                                            {datify(post.date)}
                                        </time>
                                        </div>


                                        <h3 className="group-hover:underline font-bold text-2xl text-center leading-tight" dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                                                 
                                    </a>
                                </Link>
                            </article>
                        ))}
                    </Masonry>
                </div>
            </Layout>
        </>
    )
}

export default PressIndex

export async function getStaticProps({ params }) {
    // const { data } = await axios.get('https://breakthroughmedicines.com/wp-json/wp/v2/press', {
    //     header: {Accept: "application/json"}
    // })
    // const posts = await data.json()
    // console.log(data)
    // const posts = data.json()
    const req2 = await fetch(`https://breakthroughmedicines.com/wp-json/wp/v2/press?per_page=9`)
    let posts = await req2.json()
    return {
        props: {
            posts
        }
    }
}