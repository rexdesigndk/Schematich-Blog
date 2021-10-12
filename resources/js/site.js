var navbar = document.getElementById('navbar')

window.onscroll = function() {

  if (window.pageYOffset > 20) {
    navbar.classList.add('bg-gray-50', 'dark:bg-gray-700', 'bg-opacity-70', 'top-0', 'fixed', 'backdrop-blur-sm', 'backdrop-saturate-200', 'backdrop-filter')
    navbar.classList.remove('absolute')
  } else {
    navbar.classList.remove('bg-gray-50', 'dark:bg-gray-700', 'bg-opacity-70', 'top-0', 'fixed', 'backdrop-blur-sm', 'backdrop-saturate-200', 'backdrop-filter')
    navbar.classList.add('absolute')
  }
}