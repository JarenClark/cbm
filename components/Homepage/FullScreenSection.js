const FullScreenSection = (props) => {
    const bg = ``
    return(
        <section className=" bg-teal-500 text-white w-screen min-h-screen flex justify-center items-center">
            <div className="container min-h-[600px]">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 px-4">
                        <h2 className="text-5xl font-bold">
                            Section Header
                        </h2>
                        <p>
                            Lorem Ipsum Dolor Sit Amet 
                        </p>
                        <button
                         className="mt-8 rounded-full px-6 py-2 bg-white border-white border-2 text-teal-500 font-bold hover:bg-teal-500 hover:text-white transition duration-200">
                             Click Me
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