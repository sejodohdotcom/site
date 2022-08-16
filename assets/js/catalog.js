/*
Template Name: Xpeedo - landing page Html Template.
Author: GrayGrids
*/

(function () {
    //===== Prealoder

    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }

    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }



        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };


    var catalogObj = [
        {
            img_url: "./assets/images/catalog/1.png",
            preview_url: "https://sejodohdotcom.github.io/widi-agum/#%20"
        },
        {
            img_url: "./assets/images/catalog/2.png",
            preview_url: "https://sejodohdotcom.github.io/arum-agin/"
        },
        {
            img_url: "./assets/images/catalog/3.png",
            preview_url: "https://sejodohdotcom.github.io/riska-tomi/#%20"
        },
        {
            img_url: "./assets/images/catalog/4.png",
            preview_url: "https://sejodohdotcom.github.io/putri-david/"
        }
    ];

    function renderCatalog(data) {

        let renderCatalogElements = data.map((item) => {

            return (

                '<div class="col-12 col-sm-4 col-lg-3 mb-5 mb-sm-5"><div class="card text-bg-dark"><img src="'+ item.img_url +'" class="card-img" alt="..."> <div class="card-img-overlay d-flex align-items-end justify-content-center"> <div class="button"> <a class="btn" href="'+ item.preview_url +'" target="_blank">Preview<i class="lni lni-arrow-right"></i></a> </div></div></div></div>'

            )

        });

        $("#catalog-render").html(renderCatalogElements);

    };

    renderCatalog(catalogObj);
    $("#price-selected").on("change", function(){
        if($('input[name="price_theme"]:checked')){
            $(this).val("true");
        }else {
            $(this).val("false");
        }
        console.log($(this).val())
    });

})();