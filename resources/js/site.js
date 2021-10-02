var navbar = document.getElementById('navbar')

window.onscroll = function() {

  if (window.pageYOffset > 5) {
    navbar.classList.add('bg-gray-50', 'bg-opacity-70', 'top-0', 'fixed', 'backdrop-blur-md', 'backdrop-saturate-200', 'backdrop-filter', 'bg-opacity-90')
    navbar.classList.remove('absolute')
  } else {
    navbar.classList.remove('bg-gray-50', 'bg-opacity-70', 'top-0', 'fixed', 'backdrop-blur-md', 'backdrop-saturate-200', 'backdrop-filter', 'bg-opacity-90')
    navbar.classList.add('absolute')
  }
}