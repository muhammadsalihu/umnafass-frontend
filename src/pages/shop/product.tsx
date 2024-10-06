import { useNavigate } from "react-router-dom"
import logo from "../../assets/logo.png"
import userIcon from "../../assets/icons/user-icon.png"
import cartIcon from "../../assets/icons/cart-icon.png"
import giftRow1  from "../../assets/images/giftRow1.png"

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



const Product = () => { 
    return (
      <div className="w-full h-screen">
          <Header /> 
          <div className="bg-[#F0FBEA] p-20 flex flex-col items-center ">
            <div className="mb-20">
              <div className=" flex flex-col justify-center items-center">
                <h1 className="text-[#10290A] text-6xl font-semibold font-sora text-green-600 mb-4">Product</h1>
                <p className="text-xs">Lorem ipsum dolor sit amet consectetur. Habitasse maecenas eu aliquam sed quisque. Pulvinar nibh pharetra augue vitae tempus natoque mattis pulvinar dolor.</p>
              </div>
            </div>

            
            <div className="flex gap-10 md:flex-row flex-col">
              {/* Left */}
              <div>
                <img src={giftRow1} alt="gift" />
              </div>

              {/* Right */}
              <div>
                <p className="font-bold text-lg">Customized Coffee Mug</p>
                <p className="font-sora text-xs">Lorem ipsum dolor sit amet consectetur. Habitasse maecenas eu aliquam sed quisque. Pulvinar nibh pharetra augue vitae tempus natoque mattis pulvinar dolor.</p>
                <p className="font-space-grotesk my-4 text-3xl font-semibold">NGN 10,000</p>

                <p className="mb-1">Product Information</p>
                <p className="font-sora font-light text-xs">Lorem ipsum dolor sit amet consectetur. Habitasse maecenas eu aliquam sed quisque. Pulvinar nibh pharetra augue vitae tempus natoque mattis pulvinar dolor.</p>

                <button className="my-4 w-full bg-green-900 text-sm text-white rounded-full px-10 py-2 shadow">Add to Cart</button>
              </div>
            </div>
          </div>
      </div>
    
    )
 }


 export default Product;