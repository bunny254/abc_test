//Importing assets and Dependencies

import { Link } from "react-router-dom";
import banner from "../assets/banner.png";
import { AiOutlineRight } from "react-icons/ai";
import prize from "../assets/prize.png";
import warrant from "../assets/warrant.png";
import free from "../assets/free.png";
import support from "../assets/support.png";

//Creating Checkout Component

const Checkout = () => {
  return (
    <div>
      <div className="flex mt-8 relative">
        <img src={banner} alt="Banner" className="object-cover px-10" />
        <div className="absolute top-28 left-[32%] mt-4 bg-gray-300 w-[40%] h-24">
          <p className="text-6xl font-bold text-center mb-2">Checkout</p>
          <div className="flex justify-center items-center">
            <Link to="/">
              <p className="text-2xl font-semibold">Home</p>
            </Link>
            <AiOutlineRight size="18px" className="mt-2 font-bold" />
            <p className="text-xl mt-1">Checkout</p>
          </div>
        </div>
      </div>
      <div className="px-10">
        <div className="grid grid-cols-12 mt-8 gap-32">
          <div className="col-span-4">
            <div className="px-20">
              <p className="font-bold text-3xl">Billing details</p>
              <div className="grid grid-cols-8 mt-8 gap-10">
                <div className="col-span-4">
                  <p>First Name</p>
                  <input
                    className="border border-gray-200 w-36 rounded p-4 mt-2"
                    type="text"
                    name="first_name"
                    id="first_name"
                  />
                </div>
                <div className="col-span-4">
                  <p>Last Name</p>
                  <input
                    className="border border-gray-200 w-36 rounded p-4 mt-2"
                    type="text"
                    name="last_name"
                    id="last_name"
                  />
                </div>
                <div className="col-span-8">
                  <p>Company Name (Optional)</p>
                  <input
                    className="border border-gray-200 w-full rounded p-4 mt-2"
                    type="text"
                    name="last_name"
                    id="last_name"
                  />
                </div>
                <div className="col-span-8">
                  <p>Country/Region</p>
                  <input
                    className="border border-gray-200 w-full rounded p-4 mt-2"
                    type="text"
                    name="last_name"
                    id="last_name"
                  />
                </div>
                <div className="col-span-8">
                  <p>Street address</p>
                  <input
                    className="border border-gray-200 w-full rounded p-4 mt-2"
                    type="text"
                    name="last_name"
                    id="last_name"
                  />
                </div>
                <div className="col-span-8">
                  <p>Town / City</p>
                  <input
                    className="border border-gray-200 w-full rounded p-4 mt-2"
                    type="text"
                    name="last_name"
                    id="last_name"
                  />
                </div>
                <div className="col-span-8">
                  <p>Province</p>
                  <input
                    className="border border-gray-200 w-full rounded p-4 mt-2"
                    type="text"
                    name="last_name"
                    id="last_name"
                  />
                </div>
                <div className="col-span-8">
                  <p>Zip code</p>
                  <input
                    className="border border-gray-200 w-full rounded p-4 mt-2"
                    type="text"
                    name="last_name"
                    id="last_name"
                  />
                </div>
                <div className="col-span-8">
                  <p>Phone</p>
                  <input
                    className="border border-gray-200 w-full rounded p-4 mt-2"
                    type="text"
                    name="last_name"
                    id="last_name"
                  />
                </div>
                <div className="col-span-8">
                  <p>Email address</p>
                  <input
                    className="border border-gray-200 w-full rounded p-4 mt-2"
                    type="text"
                    name="last_name"
                    id="last_name"
                  />
                </div>
                <div className="col-span-8">
                  <input
                    className="border border-gray-200 w-full rounded p-4 mt-2"
                    type="text"
                    name="last_name"
                    id="last_name"
                    placeholder="Additional information"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-7">
            <div className="grid grid-cols-6 py-5">
              <div className="col-span-3">
                <p className="font-bold">Product</p>
                <div className="flex gap-2 mt-2">
                  <p>Asgaard sofa </p>
                  <p className="font-bold">x 1</p>
                </div>
                <p className="font-semibold mt-8">Subtotal</p>
                <p className="font-semibold mt-2">Total</p>
              </div>
              <div className="col-span-3">
                <p className="font-bold">Subtotal</p>
                <p className="mt-2">Rs. 250,000.00</p>
                <p className="mt-8">Rs. 250,000.00</p>
                <p className="mt-2 font-bold text-xl">Rs. 250,000.00</p>
              </div>
              <div className="col-span-6 border-t border-gray-300 mt-3">
                <div className="flex mt-4 gap-2">
                  <div className="h-4 w-4 rounded-full bg-black mt-1" />
                  <p>Direct Bank Transfer</p>
                </div>
                <p className="mt-3">
                  Make your payment directly into our bank account. Please use
                  your order ID as the payment refenecnce. Your order will not
                  be shipped until the funds have cleared in our account.
                </p>
                <div className="grid mt-4">
                  <div className="flex">
                    <input
                      class="relative float-left mr-1 mt-2 h-3 w-3 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="radio"
                      name="flexRadioDefault"
                      id="radioDefault02"
                      checked
                    />
                    <label
                      class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                      for="radioDefault02"
                    >
                      Cash on Delivery
                    </label>
                  </div>
                  <div className="flex">
                    <input
                      class="relative float-left mr-1 mt-2 h-3 w-3 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="radio"
                      name="flexRadioDefault"
                      id="radioDefault"
                      checked
                    />
                    <label
                      class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                      for="radioDefault"
                    >
                      Mpesa
                    </label>
                  </div>
                </div>
                <p className="mt-3">
                  Your personal data will be used to support your experience
                  throughtout this website, to manage access to your account,
                  and for other purposes described in our privacy policy
                </p>
                <div className="flex mt-6 justify-center">
                  <button className="w-64 p-2 rounded border border-black">
                    <p>Place order</p>
                  </button>
                </div>
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
    </div>
  );
};

export default Checkout;
