$(".product-card ul li").each(
    function(item) {
      var color_src = $(this).attr("color-src");
      console.log(color_src);
      $(this).css("background-image", `url(${color_src})`);
      console.log(`url(${color_src})`);
    }
  );

  $(".product-card ul li").each(
    function(item){
      $(this).click(
        function(){
          $(this).parents(".product-card").find("ul li").removeClass("active");
          $(this).addClass("active");
          var img_src = $(this).attr("product-src");
          $(this).parents(".product-card").find("img").attr("src", img_src);
        }
      )
    }
  );