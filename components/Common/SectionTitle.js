const SectionTitle = (props) => {
    return(
        <>
            {props.title &&
                <div className="container mx-auto mb-8 max-w-6xl">
                    <div className="flex justify-center relative">
                        <div className="absolute inset-0 flex items-center">
                            <div style={{height: `4px`}} className="bg-gray-800 w-full"></div>
                        </div>
                        <div className="px-4 relative bg-white">
                            <h2 
                                className="font-bold text-gray-800 text-center text-xl lg:text-3xl"
                                dangerouslySetInnerHTML={{__html:props.title}} 
                            />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default SectionTitle