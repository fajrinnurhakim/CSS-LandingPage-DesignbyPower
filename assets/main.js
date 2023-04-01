console.log("javascript ready...");

//! responsive navigation bar
const showMobileNav = () => {
    var navbar = document.getElementById("navigasi1");
    navbar.className === "navigasi"
        ? (navbar.className += " responsive")
        : (navbar.className = "navigasi");
};
