
import Link from "next/link"

const CapabilitiesBaits = (props) => {
    const caps = [
        {title:`Process Development`,img: `https://breakthroughmedicines.com/wp-content/uploads/2020/11/Process-Dev-300x189.jpg`},
        {title:`Testing and Analytical Services`,img: `https://breakthroughmedicines.com/wp-content/uploads/2020/11/Analytical-Method-Development-and-Testing-1024x645.jpg`},
        {title:`Plasmid DNA`,img: `https://breakthroughmedicines.com/wp-content/uploads/2020/11/Plasmid-DNA-300x189.jpg`},
        {title:`Adeno-Associated Virus`,img: `https://breakthroughmedicines.com/wp-content/uploads/2020/11/Adeno-Associated-Virus-300x189.jpg`},
        {title:`Lentivirus`,img: `https://breakthroughmedicines.com/wp-content/uploads/2020/11/Lentivirus-1024x645.jpg`},
        {title:`AdenoVirus`,img: `https://breakthroughmedicines.com/wp-content/uploads/2020/11/Adenovirus-300x189.jpg`},
        {title:`Cell Banking`,img: `https://breakthroughmedicines.com/wp-content/uploads/2020/11/Cell-Banking-300x189.jpg`},
        {title:`Cell Processing`,img: `https://breakthroughmedicines.com/wp-content/uploads/2020/11/Cell-Processing-1024x645.jpg`},
    ]
    return(
        <div className="container mx-auto max-w-6xl mb-16">
            <div className="flex flex-wrap -mx-2 items-stretch">
                {caps.map((cap,i) => (
                    <div key={i} className="w-1/2 lg:w-1/4 px-2 mb-4">
                        <Link href={`/`}>
                            <article className="min-h-[250px] group relative overflow-hidden cursor-pointer bg-gray-800 text-white h-full flex flex-col justify-end p-4 lg:p-8 lg:pt-32">
                                <div 
                                    style={{backgroundImage: `url(${cap.img})`}} 
                                    className="group-hover:scale-110 scale-100 transition duration-200 absolute inset-0 bg-cover bg-center" 
                                />
                                <div 
                                    className="absolute inset-0 bg-gray-800 opacity-50 group-hover:opacity-75"
                                    />
                                <h3 className=" relative font-bold text-xl">
                                    {cap.title}
                                </h3>

                            </article>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CapabilitiesBaits