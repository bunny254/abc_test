import { Link } from "react-router-dom";
import banner from "../assets/banner.png";
import { AiOutlineRight, AiFillClockCircle } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import prize from '../assets/prize.png';
import warrant from '../assets/warrant.png';
import free from '../assets/free.png';
import support from '../assets/support.png';

const Contact = () => {
  return (
    <div>
      <div className="flex mt-8 relative">
        <img src={banner} alt="Banner" className="object-cover px-10" />
        <div className="absolute top-28 left-[32%] mt-4 bg-gray-300 w-[40%] h-24">
          <p className="text-6xl font-bold text-center mb-2">Contact</p>
          <div className="flex justify-center">
            <Link to="/"><p className="text-2xl font-semibold">Home</p></Link>
            <AiOutlineRight size="20px" className="mt-2 font-bold" />
            <p className="text-2xl">Contact</p>
          </div>
        </div>
      </div>
      <div className="grid mt-16">
        <div className="flex justify-center">
          <h1 className="font-bold text-2xl">Get In Touch With Us</h1>
        </div>
        <div>
          <p className="text-center">
            For more information about our Product & Services. Please feel free
            to drop us <br /> an email. Our staff are always there to help you
            out. Do not hesitate.
          </p>
        </div>
      </div>
      <div className="px-32">
        <div className="grid grid-cols-12 mt-6 gap-28">
          <div className="col-span-3 gap-10">
            <div>
              <div className="flex gap-3">
                <FaLocationDot size="28px" />
                <div>
                  <p className="font-bold">Address</p>
                  <p>
                    236 5th SE Avenue, <br /> New York NY011110, <br /> United
                    States
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-3">
                <BsFillTelephoneFill size="28px" />
                <div>
                  <p className="font-bold">Phone</p>
                  <p>
                    Mobile +(84) 546-6789 <br /> Mobile +(84) 546-6789
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <AiFillClockCircle size="28px" />
                <div>
                  <p className="font-bold">Working Time</p>
                  <p>
                    Monday - Friday : 9:00-22:00 <br /> Saturday-Sunday:
                    9:00-21:00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div>
              <p>Your Name</p>
              <input
                className="border border-gray-200 w-full rounded p-4 mt-2"
                type="text"
                name="first_name"
                id="first_name"
              />
            </div>
            <div>
              <p className="mt-4">Email address</p>
              <input
                className="border border-gray-200 w-full rounded p-4 mt-2"
                type="text"
                name="first_name"
                id="first_name"
              />
            </div>
            <div>
              <p className="mt-4">Subject</p>
              <input
                className="border border-gray-200 w-full rounded p-4 mt-2"
                type="text"
                name="first_name"
                id="first_name"
              />
            </div>
            <div>
              <p className="mt-4">Message</p>
              <input
                className="border border-gray-200 w-full h-36 rounded p-4 mt-2"
                type="text"
                name="first_name"
                id="first_name"
              />
            </div>
            <div className="mt-5">
                <button className="rounded px-6 py-2 bg-yellow-200 w-48">
                    <p className="text-white font-bold">Submit</p>
                </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-orange-100 grid grid-cols-12 h-64 mt-12 justify-center items-center gap-12">
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
  );
};

export default Contact;
