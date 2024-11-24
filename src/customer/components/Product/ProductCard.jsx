import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${product.id}`)} className='productCard sm:w-[15rem] w-[8rem] md:m-3 m-1 transition-all cursor-pointer'>
      
       <div className='sm:h-[20rem] h-[10rem]'>
        <img className='h-full w-full object-cover object-left-top'
        src={product.imageUrl} alt={product.title}/>
       </div>

       <div className='textPart bg-white p-3'>

        <div>
            <p className='font-bold opacity-60'>{product.brand}</p>
            {/* <p className="hidden sm:block">{product.title}</p> */}
            <p className="text-xs sm:text-sm sm:line-clamp-none line-clamp-2">{product.title}</p>
        </div>

        <div className='sm:flex sm:items-center sm:space-x-2'>
            <p className='font-semibold sm:inline'>Rs.{product.discountPrice}</p>
            <p className='line-through opacity-50 sm:inline'>Rs.{product.price}</p>
            <p className='text-green-600 font-semibold sm:inline'>{product.discountPercent}% off</p>
        </div>

       </div>
    </div>

  )
}

export default ProductCard