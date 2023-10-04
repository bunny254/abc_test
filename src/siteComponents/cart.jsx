import banner from "../assets/banner.png";
import { AiOutlineRight} from "react-icons/ai";
import {RiDeleteBin7Fill} from 'react-icons/ri';
import sofa from '../assets/inside-weather-dbH_vy7vICE-unsplash.jpg'
import prize from '../assets/prize.png';
import warrant from '../assets/warrant.png';
import free from '../assets/free.png';
import support from '../assets/support.png'

const Cart = () => {
  return (
    <div>
        <div className='hidden xl:grid'>
        <div className="flex mt-8 relative">
          <img src={banner} alt="Banner" className="object-cover px-10" />
          <div className="absolute top-28 left-[32%] mt-4 bg-gray-300 w-[40%] h-24">
            <p className="text-6xl font-bold text-center mb-2">
            Cart
            </p>
            <div className="flex justify-center items-center">
              <p className="text-2xl font-semibold">Home</p>
              <AiOutlineRight size="18px" className="mt-2 font-bold" />
              <p className="text-xl mt-1">Cart</p>
            </div>
          </div>
        </div>
        <div className="px-20">
            <div className="grid grid-cols-12 mt-8 gap-8">
                <div className="col-span-9">
                    <div className="flex gap-28 font-semibold bg-orange-100">
                        <p className="ml-44 py-2">Product</p>
                        <p className="py-2">Price</p>
                        <p className="py-2">Quality</p>
                        <p className="py-2">Subtotal</p>
                    </div>
                    <div className="mt-10 flex">
                        <div className="w-28 h-20">
                            <img src={sofa} alt="Sofa" className="rounded"/>
                        </div>
                        <div className="flex gap-14">
                            <p className="ml-14">Asgaard sofa</p>
                            <p className="ml-5">Rs. 250,000.00</p>
                            <div className="border border-gray-200 h-8 w-8 flex items-center justify-center">
                                <p className="p-1">1</p>
                            </div>
                            <div className="flex ml-20">
                            <p>Rs.250,000.00</p>
                            <RiDeleteBin7Fill size="25px" className="text-orange-100"/>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-span-3 bg-orange-100 h-80">
                    <div className="grid justify-center items-center">
                        <p className="font-bold py-4 text-xl">Cart Total</p>
                        <div className="flex gap-10 mt-8">
                            <p className="font-semibold">Subtotal</p>
                            <p>Rs. 250,000.00</p>
                        </div>
                        <div className="flex gap-10 mt-8">
                            <p className="font-semibold">Total</p>
                            <p className="text-yellow-400 font-bold">Rs. 250,000.00</p>
                        </div>
                        <button className="mt-6 mb-4 py-1 rounded border border-black">
                            <p className="p-2">Check Out</p>
                        </button>
                    </div>
                </div>
            </div>

        </div>
        <div className="bg-orange-100 grid grid-cols-12 h-64 mt-12 justify-center items-center">
          <div className="col-span-3 ml-24">
            <div className="flex">
              <img src={prize} alt="High Quality" />
              <div className="px-3">
                <p className="text-2xl font-bold">High Quality</p>
                <p className="text-2xl">crafted from top materials</p>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex">
              <img src={warrant} alt="High Quality" />
              <div className="px-3">
                <p className="text-2xl font-bold">Warranty Protection</p>
                <p className="text-2xl">Over 2 years</p>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex">
              <img src={free} alt="High Quality" />
              <div className="px-3">
                <p className="text-2xl font-bold">Free Shipping</p>
                <p className="text-2xl">Order over $150</p>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex">
              <img src={support} alt="High Quality" />
              <div className="px-3">
                <p className="text-2xl font-bold">24/7 Support</p>
                <p className="text-2xl">Dedicated support</p>
              </div>
            </div>
          </div>
          
        </div>
        </div>
    </div>
  )
}

export default Cart