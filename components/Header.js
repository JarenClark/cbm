import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Hamburger } from "./SVG"

const Header = () => {

    const topMenuItems = [
        {name:'Capabilities',link:'/'},
        {name:'The Difference',link:'/'},
        {name:'Our DNA',link:'/'},       
        {name:'Careers',link:'/'},
        {name:'Partners',link:'/'},

    ]


    const [position, setPosition] = useState(window.pageYOffset)
    const [visible, setVisible] = useState(true) 
    useEffect(()=> {
        const handleScroll = () => {
           let moving = window.pageYOffset
           
           setVisible(position > moving);
           setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return(() => {
           window.removeEventListener("scroll", handleScroll);
        })
    })

    
    const visClass = visible ? `translate-y-0`: `-translate-y-32`

    return(
        <div className="fixed top-0 w-screen">
            <header className={`container mx-auto transform duration-500 ${visClass}`}>
                <div className="flex justify-between items-center py-2">
                    <div className="inline-flex items-center">
                    <Link href={'/'}>
                        <a className="block">
                            <Image 
                                src={'/img/cbm-color-1.png'}
                                alt={'logo'}
                                width={250}
                                height={90}
                            />
                        </a>
                    </Link>
                    <ul className="flex items-center space-x-4 mx-4">
                        {topMenuItems.map((item,i) => (
                            <li key={i} className="font-bold uppercase text-white hover:text-blue-900">{item.name}</li>
                        ))}
                    </ul>

                    </div>
                    <div className="px-4">
                        <button className={`
                        font-bold
                        flex items-center
                        rounded-full px-4 py-2
                        space-x-2 
                        text-white bg-black bg-opacity-20
                        hover:bg-blue-900 hover:bg-opacity-100`}>
                             <Hamburger />
                            <span>DISCOVER MORE</span>
                        </button>
                    </div>

                </div>
            </header>
        </div>
    )
}

export default Header