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

toggleNavDropdown = document.getElementById('toggleNavDropdown')
navDropdown = document.getElementById('navDropdown')

toggleNavDropdown.addEventListener('click', function() {
    navDropdown.classList.toggle("hidden")
});

window.onclick = function(event) {
    if (!event.target.matches('.toggle-nav-dropdown') && event.target.id != 'navDropdown') {
    let navDropdownMenu = document.getElementsByClassName("nav-dropdown");
    for (let i = 0; i < navDropdownMenu.length; i++) {
        if (!navDropdownMenu[i].classList.contains('hidden')) {
            navDropdownMenu[i].classList.add('hidden');
        }
    }
    }
}