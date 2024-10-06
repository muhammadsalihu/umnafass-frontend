import { useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"
import userIcon from "../assets/icons/user-icon.png"
import cartIcon from "../assets/icons/cart-icon.png"
// import giftsCreated from "../assets/images/gifts-created.png"
import helloIcon from "../assets/icons/hello container.png"
import giftsPack from "../assets/images/giftsPack.png"
import birthdayGiftPack from "../assets/images/birthdayGiftPack.png"
import giftRow1  from "../assets/images/giftRow1.png"
import fastShipping  from "../assets/icons/fastShipping.png"
import secureCheckout  from "../assets/icons/secureCheckout.png"
import helpCenter  from "../assets/icons/helpCenter.png"
import instaSocial1  from "../assets/images/socialInsta1.png"
import instaSocial2  from "../assets/images/socialInsta2.png"
import instaSocial3  from "../assets/images/socialInsta3.png"
import instaSocial4  from "../assets/images/socialInsta4.png"
import instaSocial5  from "../assets/images/socialInsta5.png"
import paypal  from "../assets/images/paypal.png"
import mastercard  from "../assets/images/mastercard.png"
import phone  from "../assets/icons/phone.png"
import email  from "../assets/icons/email.png"
import address  from "../assets/icons/address.png"
import twitter  from "../assets/icons/twitterIcon.png"
import tiktok  from "../assets/icons/tiktokIcon.png"
import facebook  from "../assets/icons/facebookIcon.png"
import instagram  from "../assets/icons/instagramIcon.png"


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
    const goToProduct = () => { 
        const navigate = useNavigate();
        navigate('/shop')
     }

    return (
        <div className="">
        <img src={giftRow1} alt="" />
        <div className="flex flex-col md:flex-row md:justify-between py-6 items-center px-4">
            <p className="">3pc Bedsheets</p>
            <button onClick={goToProduct} className="bg-green-100 text-xs px-8 py-3">Buy Now</button>
        </div>
    </div>
    )
  }

  const SocialMediaSection = () => { 
    return (
        <div className="mb-20 w-full">
                    {/* Follow Us */}
                    <div className="mb-10 flex justify-between w-full items-center px-8 md:px-14 ">
                        <div className="">
                            <p className="text-2xl font-bold mb-2">Follow Us on Instagram</p>
                            <p className="text-xs">Lorem ipsumm, Lorem dis tie lorem ispaohdg</p>
                        </div>
                        
                        <button className="border border-gray-400 text-sm rounded-full px-10 py-2 shadow">Follow Us</button>
                    </div>

                    {/* Instagram Picture */}
                    <div className="flex flex-col lg:flex-row px-14 ">
                        {/* left */}
                        <div className="flex flex-col w-[50%]">
                            <div className="flex">
                                <img src={instaSocial1} alt="insta" />
                                <img src={instaSocial2} alt="insta" />
                            </div>
                            <div className="flex">
                                <img src={instaSocial3} alt="insta" />
                                <img src={instaSocial4} alt="insta" />
                            </div>
                            
                        </div>


                        {/* Right */}
                        <div className="">
                            <img src={instaSocial5} alt="insta" />
                        </div>
                    </div>
                </div>
    )
   }

  const Footer = () => { 
    return (
        <div className="bg-[#10290A] flex flex-col md:flex-row md:justify-between p-10">
                    {/* Column One */}
                    <div className="mb-6">
                        <img className="mb-4" src={logo} alt="logo" />
                        <div className="flex gap-2">
                            <img src={paypal} alt="paypal" />
                            <img src={mastercard} alt="mastercard" />
                        </div>
                    </div>

                    {/* Middle Section  */}
                    <div className="flex flex-col md:gap-8 md:flex-row">
                        {/* Column Two */}        
                        <div className="flex flex-col mb-4">
                            <p className="text-white font-semibold text-lg mb-4">Menu</p>
                            <p className="text-white  text-sm mb-1">Home</p>
                            <p className="text-white  text-sm mb-1">Products</p>
                            <p className="text-white  text-sm mb-1">Gallery</p>
                        </div>

                        {/* Column Three */}
                        <div className="flex flex-col mb-4">
                            <p className="text-white font-semibold text-lg mb-4">Resources</p>
                            <p className="text-white  text-sm mb-1">Store Policies</p>
                            <p className="text-white  text-sm mb-1">Find my order</p>   
                        </div>

                        {/* Column Four */}
                        <div className="flex flex-col mb-4">
                            <p className="text-white font-semibold text-lg mb-4">Contact</p>
                            <div className="flex">
                                <img className="mr-2" src={phone} alt="phone" />    
                                <p className="text-white  text-sm mb-1">08079454558</p>
                            </div>
                            <div className="flex">
                                <img className="mr-2" src={email} alt="email" />    
                                <p className="text-white  text-sm mb-1">sales@umnafass.com</p>
                            </div>
                            <div className="flex">
                                <img className="mr-2" src={address} alt="address" />    
                                <p className="text-white  text-sm mb-1">Abuja, Nigeria</p>
                            </div>
                        </div>
                    </div>
                    


                    {/* Column Five */}
                    <div className="flex flex-col">
                        <p className="text-white font-semibold text-lg mb-4">Social Media</p>
                        <div className="flex gap-4">
                            <img className="mr-2" src={instagram} alt="instagram" />    
                            <img className="mr-2" src={twitter} alt="twitter" />    
                            <img className="mr-2" src={tiktok} alt="tiktok" />    
                            <img className="mr-2" src={facebook} alt="facebook" />    
                        </div>
                        
                        
                    </div>
                </div>
    )
   }

   const Buttons = () => { 
    return (
        <div className="grid  mb-14">
            <button className="border border-gray-400 text-sm rounded-full px-10 py-2 shadow">Customize a Gift Now</button>
            <button className="border border-gray-400 text-sm rounded-full px-10 py-2 shadow">Follow Us</button>
            <button className="bg-green-900 text-sm text-white rounded-full px-10 py-2 shadow">Get your custom gift now</button>
            <button className="bg-green-500 text-sm text-white rounded-full px-10 py-2 shadow">Buy Now</button>
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

    const handleProfile = () => { 
        navigate('/profile')
     }
    return (
        <div className="w-full h-screen">
            {/* Header */}
            <div className="flex-col md:flex-row   bg-[#0F220C] h-[20%] md:h-[10%] flex justify-between items-center py-2 md:py-0 px-24 text-white w-full">
                <div className="cursor-pointer mb-1" onClick={goToHome}>
                    <img src={logo} alt="umnafass-gifts-logo" />
                </div>

                <div className="flex gap-10">
                    <a href="/about" onClick={goToAbout}>About</a>
                    <a href="/contact" onClick={goToContact}>Contact</a>
                    <a href="/shop" onClick={goToStore}>Shop</a>
                    {/* <a href="/dashboard" onClick={goToDashboard}>Dashboard</a> */}
                </div>

                <div className="flex gap-5">
                    <img className="cursor-pointer" onClick={handleProfile} src={userIcon} alt="user-icon" />
                    <img className="cursor-pointer" onClick={handleProfile} src={cartIcon} alt="cart-icon" />
                </div>
            </div>

            {/* Main Layout */}
            <div className="h-[90%]">
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

                        {/* 2nd Row */}
                        <div className="flex-col md:flex-row flex gap-4">
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

                {/* Fast Shipping, Secured Checkout, Help Center */}
                <div className="flex flex-col items-center gap-4  py-8 px-4 md:flex-row md:justify-center">
                    {/* Fast Shipping */}
                    <div className="gap-4 p-2 flex ">
                        <img src={fastShipping} alt="fast-shipping" />
                        <div className="flex flex-col">
                            <p className="text-sm font-bold">Fast Shipping</p>
                            <p className="text-gray text-xs">Get your gift delivered in 24h</p>
                        </div>
                    </div>

                    {/* Secured Checkout */}
                    <div className="gap-4  p-2 flex ">
                        <img src={secureCheckout} alt="fast-shipping" />
                        <div className="flex flex-col">
                            <p className="text-sm font-bold">Secured Checkout</p>
                            <p className="text-gray text-xs">Get your gift delivered in 24h</p>
                        </div>
                    </div>

                    {/* Help Center */}
                    <div className="gap-4  p-2 flex ">
                        <img src={helpCenter} alt="fast-shipping" />
                        <div className="flex flex-col">
                            <p className="text-sm font-bold">Fast Shipping</p>
                            <p className="text-gray text-xs">Get your gift delivered in 24h</p>
                        </div>
                    </div>
                </div>

                {/* Buttons Section */}
               <Buttons />


                {/* Social Media Section */}
                <SocialMediaSection />

                {/* Footer Section */}
                <Footer />
                
            </div>
      
        </div>
    )
 }


 export default Home;