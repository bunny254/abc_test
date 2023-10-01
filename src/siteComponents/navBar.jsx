import logo from '../assets/furniro.png';
import {FaRegUser} from 'react-icons/fa';
import {BiSearch} from 'react-icons/bi';
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai';
const NavBar = () => {
  return (
    <div>
        <nav className='hidden xl:grid'>
            <div className='grid grid-cols-12 mt-6 items-center'>
                <div className='col-span-2 px-24'>
                    <div className='flex gap-4'>
                        <img src={logo} alt='Logo'/>
                        <h1 className='font-bold text-4xl'>Furniro</h1>
                    </div>
                </div>
                <div className='col-span-4 col-start-5'>
                    <div className='flex gap-28 text-2xl font-semibold'>
                    <p>Home</p>
                    <p>Shop</p>
                    <p>About</p>
                    <p>Contact</p>
                    </div>
                </div>
                <div className='col-span-4 px-28'>
                    <div className='flex gap-16'>
                        <FaRegUser size="38px"/>
                        <BiSearch size="40px"/>
                        <AiOutlineHeart size="40px"/>
                        <AiOutlineShoppingCart size="40px"/>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar 