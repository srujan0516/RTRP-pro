document.addEventListener("DOMContentLoaded", function () {
    const cancelButtons = document.querySelectorAll(".cancel-btn");

    cancelButtons.forEach(button => {
        button.addEventListener("click", function () {
            const confirmation = confirm("Are you sure you want to cancel this request?");
            if (confirmation) {
                this.closest(".request-card").remove();
            }
        });
    });
});
