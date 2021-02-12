export default ({ app }, inject) => {
  inject('wind', {
    links: {
      base: {
        warning:
          'flex active:text-yellow-700 font-medium text-yellow-600 hover:text-yellow-800 transition duration-150 ease-in-out h-full',
        primary:
          'bg-red-500 flex active:text-primary-700 font-medium text-primary-600 hover:text-primary-800 transition duration-150 ease-in-out h-full',
        danger:
          'flex active:text-danger-500 font-medium text-danger-500 hover:text-danger-600 transition duration-150 ease-in-out h-full',
      },
    },
    buttons: {
      base: {
        blank: '',
        pill: 'flex text-sm px-5 py-1 rounded-full border focus:outline-none',
        pillOption:
          'border rounded-lg py-2 px-4 text-center text-sm cursor-pointer hover:bg-primary-700 hover:text-white focus:outline-none',
        tab:
          'flex mr-4 py-7 px-1 text-center border-b-2 font-medium text-sm leading-5 focus:outline-none text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300',
        tabSelected:
          'flex mr-4 py-7 px-1 text-center border-b-2 font-medium text-sm leading-5 focus:outline-none text-primary-600 border-primary-400',
        neutral:
          'focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out',
        navPrimary: 'flex text-primary-700 select-none focus:outline-none',
        subNav:
          'duration-150 ease-in-out flex focus:bg-primary-700 focus:outline-none font-medium hover:bg-primary-600 hover:text-white items-center leading-5 mt-2 px-2 py-2 rounded-md text-sm transition w-full',
        nav:
          'w-full flex items-center px-2 py-2 text-sm leading-5 font-medium text-white focus:outline-none transition ease-in-out duration-150',
        primary:
          'border-transparent bg-primary-600 shadow-md w-full my-auto flex justify-center py-2 px-2 border text-sm font-medium rounded-md transition duration-150 ease-in-out hover:bg-primary-500 hover:border-primary-700 active:bg-primary-700 text-white transition duration-150 ease-in-out',
        primaryInverted:
          'shadow-md w-full my-auto flex justify-center py-2 px-2 border text-sm font-medium rounded-md transition duration-150 ease-in-out w-full inline-flex justify-center py-2 px-4 border border-primary-300 rounded-md bg-white text-sm font-medium text-primary-500 hover:text-primary-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out',
        alert:
          'shadow-md w-full my-auto flex justify-center py-2 px-2 border text-sm font-medium rounded-md transition duration-150 ease-in-out w-full inline-flex justify-center py-2 px-4 border border-yellow-300 rounded-md bg-white text-sm font-medium text-yellow-500 hover:text-yellow-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out',
        danger:
          'border-transparent bg-danger-500 shadow-md w-full my-auto flex justify-center py-2 px-2 border text-sm font-medium rounded-md transition duration-150 ease-in-out hover:bg-danger-600 hover:border-danger-700 active:bg-danger-700 text-white',
        dangerInverted:
          'shadow-md w-full my-auto flex justify-center py-2 px-2 border text-sm font-medium rounded-md transition duration-150 ease-in-out w-full inline-flex justify-center py-2 px-4 border border-danger-300 rounded-md bg-white text-sm font-medium text-danger-500 hover:text-danger-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out',
        // tarun code start here
        secondary:
          'border-transparent bg-primary-600 shadow-md py-2 px-4 flex border text-sm font-medium rounded-md transition duration-150 ease-in-out hover:bg-primary-500 hover:border-primary-700 active:bg-primary-700 text-white transition duration-150 ease-in-out',
        // end here
      },
    },
  })
}
