import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
const Header = () => {

    useEffect(() => {
        let header = document.querySelector('header')
    }, [])

    return(
        <header className="fixed top-0 w-screen">
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-2">
                    <Link href={'/'}>
                        <Image 
                            src={'/img/cbm-color-1.png'}
                            alt={'logo'}
                            width={250}
                            height={90}
                        />
                    </Link>
                    <div className="flex items-center space-x-4">
                            <p className="text-gray-300 font-bold hover:text-green-500">About Us</p>
                            <p className="text-gray-300 font-bold hover:text-green-500">Capabilities</p>
                            <Link href={`/press`}>
                                <a className="font-bold hover:text-green-500">Press</a>
                            </Link>
                            <button className="rounded-lg py-2 px-6 font-bold bg-green-500 text-white hover:bg-black">
                                Contact
                            </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header