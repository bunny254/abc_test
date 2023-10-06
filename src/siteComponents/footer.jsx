const Footer = () => {
  return (
    <div>
      <div className="hidden xl:grid">
        <div className="grid grid-cols-12 mt-28 bg-white border-t border-gray-400">
          <div className="col-span-4 mt-4 px-24">
            <p className="text-2xl font-bold">Funiro.</p>

            <p className="mt-12 text-xl text-gray-400">
              400 University Drive Suite 200 Coral <br /> Gables,
            </p>
            <p className="text-gray-400">FL 33134 USA</p>
          </div>
          <div className="col-span-2 mt-4">
            <p className="text-xl font-semibold text-gray-400">Links</p>
            <p className="font-bold text-xl py-6">Home</p>
            <p className="font-bold text-xl py-6">Shop</p>
            <p className="font-bold text-xl py-6">About</p>
            <p className="font-bold text-xl py-6">Contact</p>
          </div>
          <div className="col-span-2 mt-4">
            <p className="text-xl font-semibold text-gray-400">Help</p>
            <p className="font-bold text-xl py-6">Payment Options</p>
            <p className="font-bold text-xl py-6">Returns</p>
            <p className="font-bold text-xl py-6">Privacy Policies</p>
          </div>
          <div className="col-span-2 mt-4">
            <p className="text-xl font-semibold text-gray-400">Newsletter</p>
            <div className="flex items-center py-4 gap-2">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Your Email Address"
                className="border-b border-gray-900"
              />
              <p className="font-bold underline mt-2">SUBSCRIBE</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-12 mb-4 w-[80%] ml-24" />
        <div className="px-24 font-semibold text-xl">
          <p>2023 furino. All rights, reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
