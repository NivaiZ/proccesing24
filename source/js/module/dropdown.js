const hoverDropDownHandler = () => {
    const link = document.querySelectorAll(".header-dropdown__link--dropdown");
    link.forEach((element) => {
        const dropdownMenu = element.querySelector(".dropdown-menu");
        element.addEventListener("mouseenter", () => {
            element.classList.add("header-dropdown__show");
            dropdownMenu.classList.add("dropdown-menu__show");
        });

        element.addEventListener("mouseleave", () => {
            element.classList.remove("header-dropdown__show");
            dropdownMenu.classList.remove("dropdown-menu__show");
        });

        element.addEventListener("click", () => {
            event.preventDefault();
            element.classList.toggle("header-dropdown__show");
        });
    });
};


if (document.querySelectorAll("header-dropdown__link--dropdown") !== null) {
    hoverDropDownHandler();
}
