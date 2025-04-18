// side bar

$(document).ready(function () {
    $(".menu-item-btn").click(function () {
        $(".menu-item").removeClass("active-item")
        $(this).closest(".menu-item").toggleClass("active-drop")
        $(this).closest(".menu-item").addClass("active-item")
        $(this).closest(".menu-item").find(".drop-menu").slideToggle(300);
    });

    $(".more-drop-btn").click(function () {     
        $(this).closest(".drop-menu-item").toggleClass("clicked-item")
        $(this).closest(".drop-menu-item").find(".more-drop").slideToggle(300);
    });
})