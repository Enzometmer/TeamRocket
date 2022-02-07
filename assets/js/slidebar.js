// OUVERTURE DES SOUS CATEGORIES 


var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}


$("#leftside-navigation.parent > a > i").click(function (e) {
    e.preventDefault();
    var toClose = $("#leftside-navigation ul").not($(this).parents("ul"));
    toClose.slideUp();
    toClose.parent().removeClass("open");
    if (!$(this).parent().next().is(":visible")) {
        var toOpen = $(this).parent().next()
        toOpen.slideDown();
        toOpen.parent().not(".open").addClass("open");
    }
    e.stopPropagation();
});

