const TitleBar = (props) => {
    return(
        <div className="w-full bg-gray-800 text-white px-4 py-4 lg:py-8">
            <h1 
            dangerouslySetInnerHTML={{__html:props.title }}
            className="font-bold text-5xl text-center"
            />
              
        </div>
    )
}

export default TitleBar