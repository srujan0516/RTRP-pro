document.addEventListener("DOMContentLoaded", function () {
    const getHelpBtn = document.getElementById("getHelpBtn");
    const volunteerShopBtn = document.getElementById("volunteerShopBtn");

    // Navigate to the respective pages when buttons are clicked
    getHelpBtn.addEventListener("click", function () {
        window.location.href = "getHelp.html";
    });

    volunteerShopBtn.addEventListener("click", function () {
        window.location.href = "volunteerShop.html";
    });
});
