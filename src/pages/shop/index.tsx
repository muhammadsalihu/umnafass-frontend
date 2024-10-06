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

 const ProductPreview = () => { 
   const navigate = useNavigate();
  const goToProduct = () => { 
    navigate('/product')
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


const Shop = () => { 
    return (
      <div className="w-full h-screen">
          <Header /> 
          <div className="bg-[#F0FBEA] p-20 flex flex-col items-center ">
            <div className="mb-20">
              <div className=" flex flex-col justify-center items-center">
                <h1 className="text-[#10290A] text-6xl font-semibold font-sora text-green-600 mb-4">Shop</h1>
                <p className="text-xs">Lorem ipsum dolor sit amet consectetur. Habitasse maecenas eu aliquam sed quisque. Pulvinar nibh pharetra augue vitae tempus natoque mattis pulvinar dolor.</p>
              </div>
            </div>

            <div className="flex md:flex-row flex-col gap-4">
              <ProductPreview />
              <ProductPreview />
              <ProductPreview />
            </div>
  

            
            

              
          </div>
      </div>
    
    )
 }


 export default Shop;