import {AiOutlineRight, AiFillStar} from 'react-icons/ai';
import sofa from '../assets/inside-weather-dbH_vy7vICE-unsplash.jpg';
import {BsFacebook, BsLinkedin, BsTwitter} from 'react-icons/bs';

const SingleProduct = () => {
  return (
    <div>
        <div className='hidden xl:grid'>
            <div className='bg-yellow-50 mt-8'>
                <div className='px-20 flex items-center py-8 '>
                    <p className='px-4 mt-1'>Home</p>
                    <AiOutlineRight size='14px' className='mt-2'/>
                    <p className='mt-1 px-4'>Shop</p>
                    <AiOutlineRight className='mt-2' size='14px'/>
                    <p className='text-3xl px-4'>|</p>
                    <p className='mt-1'>Asgaard sofa</p>
                </div>

            </div>
            <div className='px-24'>
            <div className='grid grid-cols-12 mt-6'>
                <div className='col-span-5'>
                    <div className='flex'>
                        <div className='flex-none w-32'>
                            <div className='grid gap-6 justify-center items-center'>
                            <img src={sofa} alt='Sofa' className='w-20 h-20 rounded justify-center items-center'/>
                            <img src={sofa} alt='Sofa' className='w-20 h-20 rounded justify-center items-center'/>
                            <img src={sofa} alt='Sofa' className='w-20 h-20 rounded justify-center items-center'/>
                            <img src={sofa} alt='Sofa' className='w-20 h-20 rounded justify-center items-center'/>
                            </div>
                        </div>
                        <div className='flex-1 w-64'>
                            <img src={sofa} alt="Sofa" className='rounded object-cover'/>
                        </div>
                    </div>
                </div>
                <div className='col-span-6'>
                    <div className='px-20'>
                    <p className='text-3xl'>Asgaard sofa</p>
                    <p className='mt-2'>Rs. 250,000.00</p>
                    <div className='flex gap-3'>
                        <div className='flex mt-3'>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        </div>
                        <p className='text-2xl'>|</p>
                        <p className='mt-2'>5 Customer Reviews</p>
                    </div>
                    <p className='mt-2'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound. </p>
                    <p>Size</p>
                    <div className='flex gap-3 mt-2'>
                        <div className='bg-yellow-100'><p className='py-1 px-2'>L</p></div>
                        <div><p className='py-1 px-2'>XL</p></div>
                        <div><p className='py-1 px-2'>XS</p></div>
                    </div>
                    <p className='mt-3'>Color</p>
                    <div className='flex mt-2 gap-4'>
                        <div className='bg-purple-400 w-6 h-6 rounded-full'/>
                        <div className='bg-black w-6 h-6 rounded-full'/>
                        <div className='bg-yellow-100 w-6 h-6 rounded-full'/>
                    </div>
                    <div className='flex mt-4 gap-6'>
                        <div className='flex border border-gray-400 w-20 p-2 rounded'>
                            <p className='px-2 text-xl'>-</p>
                            <p className='text-xl'>1</p>
                            <p className='px-2 text-xl'>+</p>
                        </div>
                        <div className='flex border border-gray-400 p-2 rounded'>
                            <p className='px-2 text-xl'>Add To Cart</p>
                        </div>
                        <div className='flex border border-gray-400 p-2 rounded'>
                            <p className='px-2 text-xl'>+ Compare</p>
                        </div>
                    </div>
                    <div className='mt-8 grid gap-4'>
                        <div className='flex gap-16'>
                        <p>SKU</p>
                        <p>: SS001</p>
                        </div>
                        <div className='flex gap-7'>
                        <p>Category</p>
                        <p>: Sofas</p>
                        </div>
                        <div className='flex gap-16'>
                        <p>Tags</p>
                        <p>: Sofa, Chair, Home, Shop</p>
                        </div>
                        <div className='flex gap-16'>
                        <p>Share</p>
                        <div className='flex'>
                        <p>:</p>
                        <div className='flex gap-8'>
                        <BsFacebook size="20px" className='ml-2'/>
                        <BsLinkedin size="20px"/>
                        <BsTwitter size="20px"/>                            
                        </div>
                        </div>
                        </div>
                    </div>

                    </div>

                </div>

            </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct