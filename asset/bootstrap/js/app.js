
console.log('juj');


console.log('kainat');
$(document).ready(function () {
    $(".tabs li").on('click', function () {
        var category = $(this).data('filter');

        if (category === 'all') {
            // Show all items
            $(".item").show();
        } else {
            // Hide all items
            $(".item").hide();
            // $(".item").fadeIn(300);

            // Split the selected categories and show items that match any of them
            var selectedCategories = category.split(" ");
            for (var i = 0; i < selectedCategories.length; i++) {
                $(".item[data-category*='" + selectedCategories[i] + "']").show();
            }
        }
    });
});

$('.first-one').owlCarousel({
    dots: false,
    loop: true,
    margin: 10,
    nav: false,
    navSpeed: 100,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        778: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})

$('.fitst_owl').owlCarousel({
    dots: false,
    loop: true,
    margin: 10,
    nav: false,

    navSpeed: 100,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        778: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})

$('.third_owl').owlCarousel({
    dots: false,
    loop: true,
    margin: 10,
    nav: false,
    navSpeed: 100,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        778: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})

$(".dropdown").hover(function () {
    $(".dropdown-menu").css('display', 'block');
    console.log('toogle');
});
$(".dropdown").mouseleave(function () {
    $(".dropdown-menu").css('display', 'none')
    console.log('toogle');
});
$(".dropdown-menu-blog").css('display', 'none')
$(".dropdown_blog").hover(function () {
    $(".dropdown-menu-blog").css('display', 'block');
    console.log('toogle');
});
$(".dropdown_blog").mouseleave(function () {
    $(".dropdown-menu-blog").css('display', 'none')
    console.log('toogle');
});



$(document).ready(function () {
    var images = []; // Array to store image sources
    var currentIndex = 0; // Index of the currently displayed image

    // Store image sources in the array
    $(".popup-trigger img").each(function () {
        images.push($(this).attr("src"));
    });

    function showImage(index) {
        // Display the image at the specified index
        $(".popup-image").attr("src", images[index]);
        currentIndex = index;
    }

    $(".popup-trigger").hover(
        function () {
            $(this).find(".hover-element").css("opacity", .8);
        },
        function () {
            $(this).find(".hover-element").css("opacity", 0);
        }
    );

    $(".popup-trigger").click(function () {
        var imgSrc = $(this).find("img").attr("src");
        currentIndex = images.indexOf(imgSrc);
        showImage(currentIndex);
        $(".image-popup").show();
    });

    $("#close-popup").click(function () {
        $(".image-popup").hide();
    });

    $("#prev-image").click(function () {
        // Show the previous image
        if (currentIndex > 0) {
            showImage(currentIndex - 1);
        }
    });

    $("#next-image").click(function () {
        // Show the next image
        if (currentIndex < images.length - 1) {
            showImage(currentIndex + 1);
        }
    });
});




$(document).ready(function () {
    $("#button1").click(function () {
        swapColors($("#button1"), $("#button2"));
    });

    $("#button2").click(function () {
        swapColors($("#button2"), $("#button1"));
    });

    function swapColors(button1, button2) {
        var button1BgColor = button1.css("background-color");
        var button1TextColor = button1.css("color");
        var button2BgColor = button2.css("background-color");
        var button2TextColor = button2.css("color");

        button1.css({
            "background-color": button2BgColor,
            "color": button2TextColor
        });

        button2.css({
            "background-color": button1BgColor,
            "color": button1TextColor
        });
    }
});



