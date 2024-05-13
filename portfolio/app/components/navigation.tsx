const NavigationBar = () => {
  return (
    <nav className='bg-gradient-to-b from-blue-500 to-gray-800 py-4'>
      <div className='container mx-auto px-4 lg:px-0 flex items-center justify-between'>
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
          <a
            href='/'
            className='font-bold text-xl lg:text-3xl hover:text-gray-200'
          >
            Portfolio
          </a>
        </div>
        <div className='block lg:hidden'>
          <button
            className='flex items-center px-3 py-2 border rounded text-gray-200 border-gray-200 hover:text-white hover:border-white'
            aria-label='Toggle Menu'
          >
            <svg
              className='h-4 w-4 fill-current'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M0 0h20v2H0V0zm0 8h20v2H0V8zm0 8h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div className='w-full lg:flex lg:items-center lg:w-auto'>
          <div className='text-sm lg:flex-grow'>
            <a
              href='/'
              className='block mt-4 lg:inline-block lg:mt-0 text-white mr-4 hover:text-gray-200'
            >
              Home
            </a>
            <a
              href='/projects'
              className='block mt-4 lg:inline-block lg:mt-0 text-white mr-4 hover:text-gray-200'
            >
              Projects
            </a>
            <a
              href='/contact'
              className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200'
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
