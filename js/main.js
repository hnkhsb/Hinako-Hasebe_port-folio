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
  // });
  $("#slideShow").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    dotsClass: "slick-dots2",
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    pauseOnFocus: false,
  });

  //   ハンバーガーメニューーーーーーーーーーーーーーーーーー
  $("#menuBtn").on("click", function () {
    console.log("click!");
    $("#menuSlide").toggleClass("active");
    $("#menuBtnTop").toggleClass("active");
    $("#menuBtnUnder").toggleClass("active");
    $(".menu_filter").toggleClass("fade-in");
  });
  //  top-page_top-btn------
  $(".top_btn_car").hover(
    function () {
      $(".top_btn_car>img").attr("src", "icon/icon_903030.png");
    },
    function () {
      $(".top_btn_car>img").attr("src", "icon/icon_fff4e3.png");
    }
  );
  // pageTop------------------------------

  $("#pageTop > a").on("click", function () {
    console.log("click");

    // event.preventDefault();
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );

    // aタグの解除
    return false;
  });

  $(window).on("scroll", function () {
    const dy = $(this).scrollTop() + $(window).height();
    const newsPosY = $(".news > h1").offset().top + 40;
    const featurePosY = $(".feature > h1").offset().top + 40;
    const setPosY = $(".set > h1").offset().top + 40;
    const rankingPosY = $(".ranking > h1").offset().top + 40;
    const gearPosY = $(".gear > h1").offset().top + 40;
    const howtoPosY = $(".how-to > h1").offset().top + 40;

    // console.log(carPosY);
    // console.log(newsPosY);
    // console.log(featurePosY);
    // console.log(setPosY);
    // console.log(rankingPosY);
    // console.log(gearPosY);
    // console.log(howtoPosY);

    if (dy > newsPosY) {
      $(".news>.car-icon_btn_common").addClass("slide_btn");
      $(".news>ol").addClass("fade-in-left");
    }
    if (dy > featurePosY) {
      $("#pageTop").addClass("fade-in");
      $(".feature>ul").addClass("fade-in-left");
      $(".feature>.car-icon_btn_common").addClass("slide_btn");
    } else {
      $("#pageTop").removeClass("fade-in");
    }
    if (dy > setPosY) {
      $(".set>.car-icon_btn_common").addClass("slide_btn");
      $(".set>ul").addClass("fade-in-left");
    }
    if (dy > rankingPosY) {
      $(".ranking>.car-icon_btn_common").addClass("slide_btn");
    }
    if (dy > gearPosY) {
      $(".gear>.car-icon_btn_common").addClass("slide_btn");
    }
    if (dy > howtoPosY) {
      $(".how-to>.car-icon_btn_common").addClass("slide_btn");
    }
  });
});
