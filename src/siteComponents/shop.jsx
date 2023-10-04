import banner from "../assets/banner.png";
import { AiOutlineRight} from "react-icons/ai";
import {VscSettings} from "react-icons/vsc";
import {BsFillGridFill} from 'react-icons/bs';
import {CiGrid31} from 'react-icons/ci';
import sofa from '../assets/inside-weather-dbH_vy7vICE-unsplash.jpg'

const Shop = () => {
  return (
    <div>
        <div className='hidden xl:grid'>
        <div className="flex mt-8 relative">
          <img src={banner} alt="Banner" className="object-cover px-10" />
          <div className="absolute top-28 left-[32%] mt-4 bg-gray-300 w-[40%] h-24">
            <p className="text-6xl font-bold text-center mb-2">
              Shop
            </p>
            <div className="flex justify-center items-center">
              <p className="text-2xl font-semibold">Home</p>
              <AiOutlineRight size="18px" className="mt-2 font-bold" />
              <p className="text-xl mt-1">Shop</p>
            </div>
          </div>
        </div>
        <div className="bg-yellow-50 ml-10 w-[94.5%]">
            <div className="p-10">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-4">
                        <div className="flex items-center">
                        <VscSettings size="28px" color="black"/>
                        <p className="ml-1">Filter</p>
                        <BsFillGridFill size="20px" color="black" className="ml-4"/>
                        <CiGrid31 size="25px" color="black" className="ml-4"/>
                        <div className="border-l border-gray-500 px-3 ml-4">
                            <p>Showing 1-16 of 32 results</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div className="flex justify-end gap-5 items-center">
                            <p className="font-semibold">Show</p>
                            <div className="bg-white">
                                <p className="p-2">16</p>
                            </div>
                            <p className="font-semibold">Sort by</p>
                            <div className="bg-white">
                                <p className="p-2">Default</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="px-10 mt-8">
        <div className="grid grid-cols-12 gap-6">
            <div className="col-span-3">
                <div className="relative z-10">
                    <img src={sofa} alt="Yellow Sofa"/>
                    <div className="absolute flex top-4 right-4 bg-red-300 rounded-full h-14 w-14 justify-center items-center">
                        <p className="text-white font-semibold">-30%</p>
                    </div>
                </div>
                <div className="bg-gray-100 px-4 py-3">
                    <p className="font-semibold">Syltherine</p>
                    <p>Stylish cafe chair</p>
                    <p className="font-semibold">Rp 2,500,000</p>
                </div>
            </div>
            <div className="col-span-3">
                <div>
                    <img src={sofa} alt="Yellow Sofa"/>
                </div>
                <div className="bg-gray-100 px-4 py-3">
                    <p className="font-semibold">Syltherine</p>
                    <p>Stylish cafe chair</p>
                    <p className="font-semibold">Rp 2,500,000</p>
                </div>
            </div>
            <div className="col-span-3">
                <div>
                    <img src={sofa} alt="Yellow Sofa"/>
                </div>
                <div className="bg-gray-100 px-4 py-3">
                    <p className="font-semibold">Syltherine</p>
                    <p>Stylish cafe chair</p>
                    <p className="font-semibold">Rp 2,500,000</p>
                </div>
            </div>
            <div className="col-span-3">
                <div>
                    <img src={sofa} alt="Yellow Sofa"/>
                </div>
                <div className="bg-gray-100 px-4 py-3">
                    <p className="font-semibold">Syltherine</p>
                    <p>Stylish cafe chair</p>
                    <p className="font-semibold">Rp 2,500,000</p>
                </div>
            </div>
            
        </div>
        </div>
        <div className="px-10 mt-14 flex items-center justify-center gap-8">
            <div className="bg-yellow-600 rounded gap-4">
            <p className="px-4 py-2 text-white">1</p>
            </div>
            <div className="bg-yellow-100 rounded gap-4">
            <p className="px-4 py-2 text-black">2</p>
            </div>
            <div className="bg-yellow-100 rounded gap-4">
            <p className="px-4 py-2 text-black">3</p>
            </div>
            <div className="bg-yellow-100 rounded gap-4">
            <p className="px-4 py-2 text-black">Next</p>
            </div>
        </div>
        </div>
    </div>
  )
}



export default Shop
