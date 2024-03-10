let lieml = document.querySelectorAll(".textlist ul li");
lieml.forEach(function (li, index) {
    
    li.addEventListener("click", function () {
        lieml.forEach(function (lr) {

            lr.classList.remove("active");
        });

        li.classList.add("active");
    });
});
