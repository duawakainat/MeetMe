
console.log('juj');

// $('.progress-bar').click(function (e) {
//     $('body').css("background", "red")


// });
$('.Db_btn_1').click(function (e) {
    $('.Db_btn_2').css('background-color', 'white')
    $('.Db_btn_2').css('color', 'black')
    $('.Db_btn_1').css('background-color', '#ffffff1A')
    $('.Db_btn_1').css('color', 'white')
});
$('.Db_btn_2').click(function (e) {
    $('.Db_btn_1').css('background-color', '#ffffff1A')
    $('.Db_btn_1').css('color', 'white')
    $('.Db_btn_2').css('background-color', '#fff')
    $('.Db_btn_2').css('color', 'black')
});
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

    loop: true,
    margin: 10,
    nav: true,
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

    loop: true,
    margin: 10,
    nav: true,
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

    loop: true,
    margin: 10,
    nav: true,
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
$(".dropdown-toggle").hover(function(){
    $(".dropdown-menu").show();
    console.log('toogle');
  });
  $(".dropdown-toggle").mouseout(function(){
    $(".dropdown-menu").hide();
    console.log('toogle');
  });
// .dropdown-toggle{
    
// }