const dropdowns = document.querySelectorAll('.dropdown');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
const dropdownMenus = document.querySelectorAll('.dropdown-menu');

const showClass = 'show';

function handleDropdownEnter() {
    const thisDropdown = this;
    thisDropdown.classList.add(showClass);
    thisDropdown.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'true');
    thisDropdown.querySelector('.dropdown-menu').classList.add(showClass);
}

function handleDropdownLeave() {
    const thisDropdown = this;
    thisDropdown.classList.remove(showClass);
    thisDropdown.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
    thisDropdown.querySelector('.dropdown-menu').classList.remove(showClass);
}

function handleDropdownItemClick() {
    const thisDropdown = this.closest('.dropdown');
    if (thisDropdown) {
        thisDropdown.classList.remove(showClass);
        thisDropdown.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
        thisDropdown.querySelector('.dropdown-menu').classList.remove(showClass);
    }
}

window.addEventListener('load', function() {
    if (window.matchMedia('(min-width: 768px)').matches) {
        dropdowns.forEach(function(dropdown) {
            dropdown.addEventListener('mouseenter', handleDropdownEnter);
            dropdown.addEventListener('mouseleave', handleDropdownLeave);
        });
    } else {
        dropdowns.forEach(function(dropdown) {
            dropdown.removeEventListener('mouseenter', handleDropdownEnter);
            dropdown.removeEventListener('mouseleave', handleDropdownLeave);
        });
    }

    dropdownMenus.forEach(function(menu) {
        menu.querySelectorAll('.dropdown-item').forEach(function(item) {
            item.addEventListener('click', handleDropdownItemClick);
        });
    });
});

window.addEventListener('resize', function() {
    if (window.matchMedia('(min-width: 768px)').matches) {
        dropdowns.forEach(function(dropdown) {
            dropdown.addEventListener('mouseenter', handleDropdownEnter);
            dropdown.addEventListener('mouseleave', handleDropdownLeave);
        });
    } else {
        dropdowns.forEach(function(dropdown) {
            dropdown.removeEventListener('mouseenter', handleDropdownEnter);
            dropdown.removeEventListener('mouseleave', handleDropdownLeave);
        });
    }
});