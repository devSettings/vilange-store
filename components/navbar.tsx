import { HiOutlineMenuAlt4 } from 'react-icons/hi';

const NavBar = () => {
  return (
    <>
      <MobileNavBar />
    </>
  );
};

export default NavBar;

const MobileNavBar = () => {
  return (
    <nav className='m-2 border-[0.1px] backdrop-blur fixed top-0 left-0 right-0 z-50  h-14 flex items-center justify-between rounded-xl px-4 bg-gray-50'>
      <div className='text-xl font-bold ]'>Vilange Store</div>
      <div className='flex items-center gap-x-2'>
        {/* <X strokeWidth={2} className='h-8 w-8' /> */}
        {/* <FaBagShopping strokeWidth={1.5} className='h-6 w-6 text-[#9a3412]' /> */}

        <HiOutlineMenuAlt4 strokeWidth={2} className='h-8 w-8 ' />
      </div>
    </nav>
  );
};
