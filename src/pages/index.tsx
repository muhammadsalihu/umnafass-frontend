import { useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"
import userIcon from "../assets/icons/user-icon.png"
import cartIcon from "../assets/icons/cart-icon.png"
import giftsCreated from "../assets/images/gifts-created.png"

const Home = () => {
    const navigate = useNavigate(); 

    const goToHome = () => { 
        navigate('/')
     }
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
    const handleProfile = () => { 
        navigate('/profile')
     }
    return (
        <div className="w-full h-screen">
            {/* Header */}
            <div className="bg-[#0F220C] h-[10%] flex justify-between items-center px-24 text-white">
                <div className="cursor-pointer" onClick={goToHome}>
                    <img src={logo} alt="umnafass-gifts-logo" />
                </div>

                <div className="flex gap-10">
                    <a href="/about" onClick={goToAbout}>About</a>
                    <a href="/contact" onClick={goToContact}>Contact</a>
                    <a href="/store" onClick={goToStore}>Store</a>
                    <a href="/dashboard" onClick={goToDashboard}>Dashboard</a>
                </div>

                <div className="flex gap-5">
                    <img className="cursor-pointer" onClick={handleProfile} src={userIcon} alt="user-icon" />
                    <img className="cursor-pointer" onClick={handleProfile} src={cartIcon} alt="cart-icon" />
                </div>
            </div>

            {/* Main Layout */}
                <div className="bg-yellow-400 h-[90%]">
                    <div className="text-center py-2 bg-green-100 w-full">Happy Independence Day!</div>
                   <div className="flex justify-between px-10 items-center ">
                        <h1>Gifts By Umnafass</h1>
                        <img src={giftsCreated} alt="umnafass-here" />
                    </div>
                </div>
        </div>
    )
 }


 export default Home;