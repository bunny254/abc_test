import homeBanner from "../assets/homeBanner.jpg";
import sofa from "../assets/inside-weather-dbH_vy7vICE-unsplash.jpg";

const Home = () => {
  return (
    <div>
      <div className="hidden xl:grid">
        <div className="relative mt-4">
          <img
            className=" h-[50%] w-full object-cover"
            src={homeBanner}
            alt="Home Banner"
          />
          <div className="absolute bg-yellow-100 w-[30%] h-[25%] top-10 right-52">
            <div className="p-4">
              <p className="text-black font-bold">New Arrival</p>
              <h1 className="text-4xl font-bold text-yellow-600">
                Discover Our
                <br /> New Collection
              </h1>
              <p className="mt-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora repellendus assumenda odio animi nemo quas.
              </p>
              <button className="bg-yellow-600 w-40 p-2 mt-3">
                <p className="text-white">BUY NOW</p>
              </button>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl">Browse The Range</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              inventore, a vero voluptate incidunt nisi molestiae.
            </p>
          </div>
          <div className="px-20 mt-6">
            <div className="grid grid-cols-12 gap-10">
              <div className="col-span-3 col-start-2">
                <img src={sofa} alt="Product 1" />
                <p className="text-center font-semibold">Dining</p>
              </div>
              <div className="col-span-3">
                <img src={sofa} alt="Product 2" />
                <p className="text-center font-semibold">Living</p>
              </div>
              <div className="col-span-3">
                <img src={sofa} alt="Product 3" />
                <p className="text-center font-semibold">Bedroom</p>
              </div>
            </div>
          </div>
          <div className="px-10 mt-8">
        <div className="grid grid-cols-12 gap-6">
            <div className="col-start-6 col-span-6">
                <h1 className="font-bold text-2xl">Our Products</h1>
            </div>
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
        <div className="flex justify-center mt-4">
        <button className="px-1 py-2 w-48 border-yellow-100 border"><p className="text-yellow-400">Show More</p></button>
        </div>
            <div className="flex justify-center mt-12">
                <div>
                <p className="text-center">share your setup with</p>
                <p className="font-bold text-3xl">#FuniroFurniture</p>
                </div>        
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-4">
                    <div className="flex gap-3">
                            <img src={sofa} alt="Gallery" className="w-16 h-96 object-cover"/>
                            <img src={sofa} alt="Gallery" className="h-96"/>
                    </div>
                    <div className="flex gap-3 mt-3">
                            <img src={sofa} alt="Gallery" className="w-40 h-96 object-cover"/>
                            <img src={sofa} alt="Gallery" className="h-60"/>
                    </div>
                </div>
                <div className="col-span-8 px-4">
                    <div className="flex gap-3">
                            <img src={sofa} alt="Gallery" className="w-60 h-96 object-cover mt-16"/>
                            <img src={sofa} alt="Gallery" className="w-60 h-96 object-cover mt-8"/>
                            <img src={sofa} alt="Gallery" className="w-60 h-96 object-cover mt-4"/>
                            
                    </div>
                    <div className="flex gap-3 mt-3 ml-64">
                            <img src={sofa} alt="Gallery" className="w-40 h-96 object-cover"/>
                            <img src={sofa} alt="Gallery" className="h-60"/>
                    </div>
                </div>

            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
