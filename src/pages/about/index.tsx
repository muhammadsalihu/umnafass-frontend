import { useNavigate } from "react-router-dom"
import logo from "../../assets/logo.png"
import userIcon from "../../assets/icons/user-icon.png"
import cartIcon from "../../assets/icons/cart-icon.png"
import giftLady  from "../../assets/images/giftLady.png"

export const Header = () => { 
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
    <div className="flex-col md:flex-row   bg-[#0F220C] h-[15%] md:h-[10%] flex justify-between items-center py-2 md:py-0 px-24 text-white w-full">
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
  )
 }
const About = () => { 
    return (
      <div className="w-full h-screen">
          <Header /> 
          <div className="bg-[#F0FBEA] p-20 flex flex-col items-center ">
            <div className="">
              <div className=" flex flex-col justify-center items-center">
                <h1 className="text-[#10290A] text-6xl font-semibold font-sora text-green-600 mb-4">Our Story</h1>
                <p className="text-xs">Lorem ipsum dolor sit amet consectetur. Habitasse maecenas eu aliquam sed quisque. Pulvinar nibh pharetra augue vitae tempus natoque mattis pulvinar dolor.</p>
              </div>
            </div>
            

            <div className="p-10 gap-6 mb-20 bg-[#F0FBEA] flex flex-col md:flex-row">
              <img src={giftLady} alt="gift-lady" />
              <div>
                <h1 className="text-6xl font-semibold font-sora text-[#10290A]">Curating premium gifts for everyone</h1>
                <p className="text-xs">Lorem ipsum dolor sit amet consectetur. Habitasse maecenas eu aliquam sed quisque. Pulvinar nibh pharetra augue vitae tempus natoque mattis pulvinar dolor.</p>
              </div>
              
            </div>

            <div className="bg-[#FCF9FB] flex flex-col md:flex-row gap-4 p-10">
              <div>
                <h1 className="text-6xl font-semibold font-sora text-[#10290A]">A mission to make gift products accessible </h1>
                <p className="text-xs">Lorem ipsum dolor sit amet consectetur. Habitasse maecenas eu aliquam sed quisque. Pulvinar nibh pharetra augue vitae tempus natoque mattis pulvinar dolor.</p>
              </div>
              <img src={giftLady} alt="gift-lady" /> 
            </div>
          

              
          </div>
      </div>
    
    )
 }


 export default About;