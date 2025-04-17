// side bar

$(document).ready(function () {
    $(".menu-item-btn").click(function () {
        $(".menu-item").removeClass("active-item")
        $(this).closest(".menu-item").toggleClass("active-drop")
        $(this).closest(".menu-item").addClass("active-item")
        $(this).closest(".menu-item").find(".drop-menu").slideToggle(300);
    });

})