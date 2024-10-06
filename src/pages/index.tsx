import { useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"
import userIcon from "../assets/icons/user-icon.png"
import cartIcon from "../assets/icons/cart-icon.png"
// import giftsCreated from "../assets/images/gifts-created.png"
import helloIcon from "../assets/icons/hello container.png"
import giftsPack from "../assets/images/giftsPack.png"
import birthdayGiftPack from "../assets/images/birthdayGiftPack.png"
import giftRow1  from "../assets/images/giftRow1.png"


const Hero = () => { 
    return (
        <div className="bg-green-100 py-20 px-10 flex flex-col justify-center items-center mb-10">
            <img src={helloIcon} alt="" />
            <h1 className="text-3xl font-bold font-sora ">Your best gift ideas all in one place</h1>
        </div>
    )
 }
 {/* Cards */}
const Cards = () => { 
    return (
        <div className="flex flex-col lg:flex-row gap-4">
        <div className="bg-[#F0D294] py-14 px-14">
            <h2 className="text-2xl font-semibold">Get Instant custom office gifts pack.</h2>
            <p className="text-lg">Get office gifts that include notebooks, tea mugsKeyholders, water bottle flask etc.</p>
            <button className="text-center bg-black text-white px-4 py-2 rounded">Buy Now</button>
            <img src={giftsPack} alt="gift-pack" />
        </div>
        <div className=" bg-[#F0D294] py-14 px-14">
            <h2 className="text-2xl font-semibold">Birthday set at 10% discount. </h2>
            <p className="text-lg">Get office gifts that include notebooks, tea mugsKeyholders, water bottle flask etc.</p>
            <button className="text-center bg-black text-white px-4 py-2 rounded">Buy Now</button>
            <div>
            <img className="" src={birthdayGiftPack} alt="birthday-gift-pack" />
            </div>
            
        </div>
    </div>
    )
 }

 const ProductPreview = () => { 
    return (
        <div className="">
        <img src={giftRow1} alt="" />
        <div className="flex flex-col md:flex-row md:justify-between py-6 items-center px-4">
            <p className="">3pc Bedsheets</p>
            <button className="bg-green-100 text-xs px-8 py-3">Buy Now</button>
        </div>
    </div>
    )
  }

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
            <div className="h-[90%]">
                    <div className="text-center py-2 bg-green-100 w-full">Sales! Sales! Sales</div>
                    <Hero />
                    <Cards />

                 {/* Prodcuts Preview */}
                <div className="bg-black-400 mb-8 flex gap-3 justify-center sm:my-20">
                    <a href="#">All</a>
                    <a href="#">Popular Products</a>
                    <a href="#">Throw Pillows</a>
                    <a href="#">Bedsheets</a>
                    <a href="#">Gift Set</a>
                </div>

                 {/* Products Components  */}
                    <div className="flex flex-col px-10 justify-center items-center gap-14">
                        {/* 1st Row */}
                        <div className="flex gap-4">
                        <ProductPreview />
                        <ProductPreview />
                        <ProductPreview />
                        <ProductPreview />
                        </div>

                        {/* 2nd Row */}
                        <div className="flex gap-4">
                            <img src={giftRow1} alt="" />
                            <img src={giftRow1} alt="" />
                            <img src={giftRow1} alt="" />
                            <img src={giftRow1} alt="" />
                        </div>

                        {/* 3rd Row */}
                        <div className="flex gap-4">
                            <ProductPreview />
                            <ProductPreview />
                            <ProductPreview />
                            <ProductPreview />
                        </div>
                    </div> 

                {/* Gifts Created */}
                <div className="bg-green-100 flex flex-col justify-center align-center py-20">
                    <p className="text-center mb-4 text-4xl font-semibold">Over 1000 custom gifts created!</p>
                    <button className="text-center bg-black text-white text-xs px-4 py-2 rounded">Get your custom gift now</button>
                </div> 
            </div>


               
        </div>
    )
 }


 export default Home;