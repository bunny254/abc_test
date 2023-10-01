import banner from '../assets/banner.png';

const Banner = () => {
  return (
    <div>
        <div className='hidden xl:flex'>
            <div className='flex mt-8'>
                <img src={banner} alt="Banner" className='px-10'/>
            </div>
        </div>
    </div>
  )
}

export default Banner