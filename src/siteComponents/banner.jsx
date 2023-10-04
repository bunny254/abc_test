import banner from "../assets/banner.png";
import { AiOutlineRight, AiFillStar } from "react-icons/ai";
import asgaard from "../assets/asgaard.png";
import outdoor from "../assets/outdoor.png";
import prize from '../assets/prize.png';
import warrant from '../assets/warrant.png';
import free from '../assets/free.png';
import support from '../assets/support.png'

const Banner = () => {
  return (
    <div>
      <div className="hidden xl:grid">
        <div className="flex mt-8 relative">
          <img src={banner} alt="Banner" className="object-cover px-10" />
          <div className="absolute top-28 left-[32%] mt-4 bg-gray-300 w-[40%] h-24">
            <p className="text-6xl font-bold text-center mb-2">
              Product Comparison
            </p>
            <div className="flex justify-center">
              <p className="text-2xl font-semibold">Home</p>
              <AiOutlineRight size="20px" className="mt-2 font-bold" />
              <p className="text-2xl">comparison</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-8">
          <div className="col-span-3 px-24">
            <div className="text-2xl">
              <h1 className="font-semibold">
                Go to Product <br /> page for more <br /> Products
              </h1>
              <h2 className="mt-3">View More</h2>
              <div className="border-t border-4 border-gray-300 w-32" />
            </div>
          </div>
          <div className="col-span-6">
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-3">
                <img src={asgaard} alt="Asgaard Sofa" />
                <p className="font-bold text-2xl mt-3">Asgaard Sofa</p>
                <p className="mt-2 text-xl">Rs. 250,000.00</p>
                <div className="flex mt-2">
                  <div className="flex">
                    <p className="text-xl">4.7 </p>
                    <AiFillStar className="text-yellow-600" size="25px" />
                    <AiFillStar className="text-yellow-600" size="25px" />
                    <AiFillStar className="text-yellow-600" size="25px" />
                    <AiFillStar className="text-yellow-600" size="25px" />
                  </div>
                  |<p className="px-2">204 Reviews</p>
                </div>
              </div>
              <div className="col-span-3">
                <img src={outdoor} alt="Outdoor Sofa Set" />
                <p className="font-bold text-2xl mt-3">Outdoor Sofa Set</p>
                <p className="mt-2 text-xl">Rs. 224,000.00</p>
                <div className="flex mt-2">
                  <div className="flex">
                    <p className="text-xl">4.2</p>
                    <AiFillStar className="text-yellow-600" size="25px" />
                    <AiFillStar className="text-yellow-600" size="25px" />
                    <AiFillStar className="text-yellow-600" size="25px" />
                    <AiFillStar className="text-yellow-600" size="25px" />
                  </div>
                  |<p className="px-2">145 Reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <p className="font-bold text-2xl mt-12">Add A Product</p>
            <button className="rounded p-2 bg-yellow-600 w-72 mt-4">
              <label htmlFor="sofas" className="text-white font-bold px-8 text-xl">Choose a product</label>
              <select className="bg-transparent text-white" name="sofas" id="sofas">
                <option value="volvo"></option>
                <option value="saab">1</option>
              </select>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-12">
          <div className="col-span-3 px-24 border-r border-gray-300">
            <p className="font-bold text-3xl">General</p>
            <p className="font-semibold text-2xl py-2 mt-3">Sales Package</p>
            <p className="font-semibold text-2xl py-2">Model Number</p>
            <p className="font-semibold text-2xl py-2">Secondary Material</p>
            <p className="font-semibold text-2xl py-2">Configuration</p>
            <p className="font-semibold text-2xl py-2">Upholstery Material</p>
            <p className="font-semibold text-2xl py-2">Upholstery Color</p>
            <p className="font-bold text-3xl mt-10">Dimensions</p>
            <p className="font-semibold text-2xl py-2 mt-3">Width</p>
            <p className="font-semibold text-2xl py-2">Height</p>
            <p className="font-semibold text-2xl py-2">Depth</p>
            <p className="font-semibold text-2xl py-2">Weight</p>
            <p className="font-semibold text-2xl py-2">Seat Height</p>
            <p className="font-semibold text-2xl py-2">Leg Height</p>
            <p className="font-bold text-3xl mt-10">Warranty</p>
            <p className="font-semibold text-2xl py-2 mt-3">Warranty Summary</p>
            <p className="font-semibold text-2xl py-2">Warranty Service Type</p>
            <p className="font-semibold text-2xl py-2">Covered in Warranty</p>
            <p className="font-semibold text-2xl py-2">Not Covered in Warranty</p>
            <p className="font-semibold text-2xl py-2">Domestic Warranty</p>
          </div>
          <div className="col-span-3  border-r border-t border-gray-300">
            <p className="text-2xl py-12 px-8 font-semibold">1 sectional sofa</p>
            <p className="text-2xl px-8 font-semibold">TFCBLIGRBL6SRHS</p>
            <p className="text-2xl px-8 font-semibold">Solid Wood</p>
            <p className="text-2xl py-2 px-8 font-semibold">L-shaped</p>
            <p className="text-2xl py-2 px-8 font-semibold">Fabric + Cotton</p>
            <p className="text-2xl py-2 px-8 font-semibold">Bright Grey & Lion</p>
            <p className="text-2xl py-2 px-8 font-semibold">1 Year Manufacturing Warranty</p>

          </div>
          <div className="col-span-3 border-r border-t border-gray-300">
          <p className="text-2xl py-12 px-8 font-semibold">1 Three Seater, 2 Single Seater</p>
            <p className="text-2xl px-8 font-semibold">DTUBIGRBL568</p>
            <p className="text-2xl py-2 px-8 font-semibold">Solid Wood</p>
            <p className="text-2xl py-2 px-8 font-semibold">L-shaped</p>
            <p className="text-2xl py-2 px-8 font-semibold">Fabric + Cotton</p>
            <p className="text-2xl py-2 px-8 font-semibold">Bright Grey & Lion</p>
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
  );
};

export default Banner;
