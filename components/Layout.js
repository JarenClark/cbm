import Header from "./Header"
import Footer from './Footer'
const Layout = ({children}) => {
    return(
        <div className="flex flex-col min-h-screen justify-between">
            <div>
                <Header />
                <main>
                    {children}
                </main>
            </div>

            <Footer />
        </div>
    )
}
export default Layout