let lastScrollTop = 0;
const header = document.getElementById('header');
const taskbar = document.getElementById('taskbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.style.top = '-100px'; // hide header
        taskbar.style.display = 'block'; // show nav
    } else {
        // Scrolling up
        header.style.top = '0'; // show header
        taskbar.style.display = 'none'; // hide nav
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
});

