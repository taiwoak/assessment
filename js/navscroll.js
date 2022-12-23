
window.onscroll = () => {scrollNavBar()};

scrollNavBar = () => {
    // Target Element
    const header = document.querySelector("header");

    if (document.documentElement.scrollTop > 100) {
        header.classList.add("on-scroll");
    } else {
        header.classList.remove("on-scroll");
    }

}