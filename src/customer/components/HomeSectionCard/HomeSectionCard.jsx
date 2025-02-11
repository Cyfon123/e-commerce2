import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeSectionCard = ({product,sectionName}) => {
  const navigate = useNavigate();
    const handleItemClick = () => {
        console.log("user clicked");

        if (sectionName === "Men's Kurta") {
            navigate(`/men/clothing/mens_kurta`); 
        }
        else if(sectionName === "Saree")
        {
          navigate(`/women/clothing/saree`);
        }



    };
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg 
    shadow-lg overflow-hidden sm:w-[15rem] sm:h-[18rem] w-[5rem] h-[10rem] mx-3 border border-black'
    onClick={handleItemClick}>

       <div className='h-[13rem] w-[10rem]'>
        <img className='object-cover object-top w-full h-full' src={product.imageUrl} alt="" /> 
       </div>

       <div className='p-4'>
         <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
         {/* <p className='mt-2 text-sm text-gray-500'>{product.title}</p> */}
       </div>
       
    </div>
  )
}

export default HomeSectionCard