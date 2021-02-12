export default ({ app }, inject) => {
  inject('wind', {
    buttons: {
      base: {
        blank: '',
        primary:
          'border-transparent bg-purple-600 shadow-md w-full my-auto flex justify-center py-2 px-2 border text-sm font-medium rounded-md transition duration-150 ease-in-out hover:bg-purple-500 hover:border-purple-700 active:bg-purple-700 text-white transition duration-150 ease-in-out',
      },
    },
  })
}
