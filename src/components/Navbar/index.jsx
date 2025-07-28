import { useNavigate } from 'react-router-dom'
import MenuDesktop from './components/MenuDesktop'
import MenuMobile from './components/MenuMobile'
import TopInfo from './components/TopInfo'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <>
      <TopInfo />
      <div className='shadow-md w-full'>
        <div className='max-w-screen-2xl mx-auto px-6 lg:px-20 h-[76px] flex items-center justify-between gap-4'>
          <img
            src='/images/tutamlogo2.jpg'
            className='h-[45px] w-[45px] sm:h-[50px] sm:w-[50px] md:h-[55px] md:w-[55px] cursor-pointer'
            onClick={() => navigate('/')}
          />
          <MenuDesktop />
          <MenuMobile />
        </div>
      </div>
    </>
  )
}

export default Navbar
