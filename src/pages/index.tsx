import { useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"

const Home = () => {
    const navigate = useNavigate(); 

    const goToAbout = () => { 
        navigate('/about')
     }

    const goToContact = () => { 
        navigate('/contact')
     }

    const goToStore = () => { 
        navigate('/store')
     }

    const goToDashboard = () => { 
        navigate('/dashboard')
     }
    return (
        <div className="w-full h-screen">
            {/* Header */}
            <div className="bg-green-800 h-[10%]">
                <img src={logo} alt="umnafass-gifts-logo" />
            </div>

            {/* Main Layout */}
            <div className="bg-yellow-400 h-[90%]">
                <div className="flex flex-col justify-center items-center h-screen">
                    <h1 className="mb-4 text-8xl font-semibold font-sora text-green-600">Hello Umnafass!</h1>
                        <div className="flex gap-3">
                            <a href="#" onClick={goToAbout}>About</a>
                            <a href="/contact" onClick={goToContact}>Contact</a>
                            <a href="/store" onClick={goToStore}>Store</a>
                            <a href="/dashboard" onClick={goToDashboard}>Dashboard</a>
                        </div>
                    </div>
                </div>
        </div>
    )
 }


 export default Home;