import { useNavigate } from "react-router-dom"
import logo from "../../assets/logo.png"
import userIcon from "../../assets/icons/user-icon.png"
import cartIcon from "../../assets/icons/cart-icon.png"

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

const Contact = () => { 
    return (
        <div className="w-full h-screen">
          <Header />

          {/* Body */}
          <div className="w-full text-center flex justify-center flex-col items-center">
            <div className="flex flex-col p-10 items-center w-1/2 mb-8">
              <h1 className="text-6xl font-semibold font-sora text-[#10290A]">Contact Us </h1>
              <p className="text-xs">Visit us at Independence Way in Kaduna and 2XL Mall in Abuja</p>
            </div>

            <div className="p-10 bg-[#F0FBEA] rounded-xl ">
              <div className="flex gap-4 mb-4">
                <input className="py-2 px-4 rounded-full" type="text" placeholder="Name"/>
                <input className="py-2 px-4 rounded-full" type="phone" placeholder="Phone Number"/>
              </div>
              <div className="flex mb-4">
                <input className="w-full py-2 px-4 rounded-full" type="text" placeholder="musaj@umnafass.com"/>
              </div>
              <div className="text-start mb-4">
                <label htmlFor="message" className="text-sm font-sora">Your Message</label>
                <textarea className="h-44 w-full py-2 px-4 rounded-lg"  placeholder="Your message goes here..." id="message"/>
              </div>

              <button className="w-full text-center bg-green-900 text-sm text-white rounded-full px-10 py-2 shadow">Send Message</button>
            </div>
          </div>
        </div>
    )
 }


 export default Contact;