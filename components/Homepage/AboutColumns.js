const HomepageAboutColumns = () => {
    const cols = [
        {title: 'Who We Are', para:`We are a collection of global experts in development, manufacturing, science, and data building an innovative platform company to bring Advanced Therapies to market faster with exceptional quality`},
        {title: 'Our Mission', para:`Save lives by mastering and accelerating the development and manufacturing of Advanced Therapies        `},
        {title: 'Values', para:`Our goal is to be the #1 Advanced Therapies CDMO, utilizing our deep scientific and manufacturing experience, large-scale manufacturing infrastructure, and comprehensive analytical platforms        `}
    ]
    return(
        <div className="container max-w-6xl mx-auto py-8 lg:py-16">
            <div className="flex flex-wrap -mx-4">
                {cols.map((col,i) => (
                    <div key={i} className="w-full md:w-1/2 lg:w-1/3 px-4">
                        <h3 className="text-center font-bold text-green-500 text-3xl">
                            {col.title}
                        </h3>
                        <p className="text-center mt-2 mx-4">
                            {col.para}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomepageAboutColumns