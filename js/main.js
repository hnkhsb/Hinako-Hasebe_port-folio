$(function () {
  // $("#slideShow").slick({
  //   // 自動再生
  //   autoplay: true,
  //   // 再生スピード
  //   autoplaySpeed: 5000, // ミリ秒
  //   // ページ遷移のスピード
  //   speed: 2000,
  //   // ページ送りの表示
  //   dots: false,
  //   // マウスホバー時にスライドを止めない
  //   pauseOnHover: false,
  //   // ドット選択時にスライドを止めない
  //   pauseOnFocus: false,
  //   // フェード
  //   fade: true,
  //   arrows: false,
  //   // slidesToShow: 1,
  //   // slideToScroll: 1,
  // // });
  // $("#slideShow").slick({
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   dots: true,
  //   dotsClass: "slick-dots2",
  //   infinite: true,
  //   speed: 500,
  //   fade: true,
  //   cssEase: "linear",
  //   pauseOnFocus: false,
  // });

  //   ハンバーガーメニューーーーーーーーーーーーーーーーーー
  // $("#menuBtn").on("click", function () {
  //   console.log("click!");
  //   $("#menuSlide").toggleClass("active");
  //   $("#menuBtnTop").toggleClass("active");
  //   $("#menuBtnUnder").toggleClass("active");
  //   $(".menu_filter").toggleClass("fade-in");
  // });
  // //  top-page_top-btn------
  // $(".top_btn_car").hover(
  //   function () {
  //     $(".top_btn_car>img").attr("src", "icon/icon_903030.png");
  //   },
  //   function () {
  //     $(".top_btn_car>img").attr("src", "icon/icon_fff4e3.png");
  //   }
  // );
  // pageTop------------------------------

  $("#toTheTop").on("click", function () {
    // console.log("click");
    var topPosY = $("#top").offset().top;
    // event.preventDefault();
    $("body,html").animate(
      {
        scrollTop: topPosY,
      },
      500
    );

    // aタグの解除
    return false;
  });

  $("#topNav a").on("click", function () {
    // console.log("click");

    var navId = $(this).attr("href");
    // console.log(navId);
    var pos = $(navId).offset().top;

    $("body,html").animate({ scrollTop: pos - 80 }, 500);

    // aタグの解除
    return false;
  });
  $("#footerNav a").on("click", function () {
    // console.log("click");

    var navId = $(this).attr("href");
    console.log(navId);
    var pos = $(navId).offset().top;

    $("body,html").animate({ scrollTop: pos - 80 }, 500);

    // aタグの解除
    return false;
  });

  $(window).on("scroll", function () {
    const dy = $(this).scrollTop() + $(window).height();
    const worksPosY = $("#works").offset().top;
    const worksH1PosY = $("#worksH1").offset().top;
    const aboutPosY = $("#about").offset().top;
    const aboutH1PosY = $("#aboutH1").offset().top;
    const contactPosY = $("#contact").offset().top;
    const contactH1PosY = $("#contactH1").offset().top;
    const footerPosY = $("#footer").offset().top;

    // console.log(worksH1);

    // toTheTop-----
    if (dy > aboutPosY - 160) {
      $("#toTheTop").addClass("active");
    }
    if (dy < aboutPosY - 160) {
      $("#toTheTop").removeClass("active");
    }
    if (dy > footerPosY) {
      $("#toTheTop").removeClass("active");
    }
    // sectionName------
    if (worksH1PosY > worksPosY) {
      $("#worksH1").addClass("active");
    }
    if (worksH1PosY < worksPosY) {
      $("#worksH1").removeClass("active");
    }
    if (worksH1PosY > aboutPosY - 160) {
      $("#worksH1").removeClass("active");
    }

    if (aboutH1PosY > aboutPosY - 80) {
      $("#aboutH1").addClass("active");
    }
    if (aboutH1PosY < aboutPosY) {
      $("#aboutH1").removeClass("active");
    }
    if (aboutH1PosY > contactPosY - 160) {
      $("#aboutH1").removeClass("active");
    }

    if (contactH1PosY > contactPosY - 80) {
      $("#contactH1").addClass("active");
    }
    if (contactH1PosY < contactPosY) {
      $("#contactH1").removeClass("active");
    }
  });
});
