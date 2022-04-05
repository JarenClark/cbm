import Layout from "../../../components/Layout"
import datify from "../../api/utils/datify"
import Link from "next/link"
const PressPost = ({post, otherPosts}) => {
    return(
        <Layout>
            <div className="container mx-auto py-8 lg:py-20 max-w-6xl">
                <div className="flex flex-wrap -mx-4">
                    <div className="px-4 lg:px-8 w-full lg:w-2/3">
                        <div className="lg:pr-20">

                            <h1 
                                className="text-5xl font-bold mb-4"
                                dangerouslySetInnerHTML={{__html:post.title.rendered}} 
                            />

                            <time>{datify(post.date)}</time>   

                            <div className="richtext" dangerouslySetInnerHTML={{__html:post.content.rendered}} />
                        </div>
                    </div>
                    <div className="px-4 w-full lg:w-1/3">
                        <div className="flex items-center justify-center relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div style={{height: `1px`}} className="bg-green-500 w-full" />
                            </div>
                            <div className="bg-white px-4 relative">
                                <p className="text-green-500 font-bold">
                                    Recent Press
                                </p>
                            </div>

                        </div>

                        <ul>
                        {otherPosts.map((item,i) => (
                            <li 
                                className="py-3"
                            key={i}>
                                <Link href={`/press/${item.slug}`}>
                                    <a 
                                    dangerouslySetInnerHTML={{__html:item.title.rendered}}
                                    className="font-bold text-xl hover:text-green-500" />
                                </Link>
                                <div>
                                    <time className="text-gray-400 text-sm">{datify(item.date)}</time>
                                </div>
                            </li>
                        ))}
                    </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PressPost

export async function getStaticProps({ params: { slug }}) {

    const req = await fetch(`https://breakthroughmedicines.com/wp-json/wp/v2/press?slug=${slug}`)
    let posts = await req.json()
    const post = await posts[0]

    const req2 = await fetch(`https://breakthroughmedicines.com/wp-json/wp/v2/press`)
    let otherPosts = await req2.json()
    otherPosts = otherPosts.filter(p => p.id != post.id).slice(0, 5)


    return {
        props: {
            post,
            otherPosts
        }
    }
}

export async function getStaticPaths() {
    const req = await fetch(`https://breakthroughmedicines.com/wp-json/wp/v2/press?per_page=10`)
    let posts = await req.json()
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((posts) => ({
        params: { slug: posts.slug },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' }
}