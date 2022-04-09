const FullScreenSection = (props) => {
    const bg = ``
    return(
        <section className=" bg-teal-500 text-white w-screen min-h-screen flex justify-center lg:py-32">
            <div className="container min-h-[600px]">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 px-4 lg:pr-20">
                        <h2 className="text-5xl font-bold">
                            CBM is the CDMO <br/>for a generation of breakthrough medicines
                        </h2>
                        <p className="mt-8 font-light">
                            CBM is on a mission to <span className="font-bold">develop, manufacture, and deliver</span> advanced therapies to patients in need. Our end-to-end platform is designed to support the developemnt of your advanced therapies.
                        </p>
                        <button
                         className="mt-8 rounded-full px-6 py-2 bg-white border-white border-2 text-teal-500 font-bold hover:bg-teal-500 hover:text-white transition duration-200">
                             EXPLORE OUR CAPABILITIES
                        </button>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FullScreenSection