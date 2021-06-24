$(document).ready(function(){

  $(".fito_icon").click(function(){
  $(this).toggleClass("fito_icon_sun");
  $(".image-fitolab-card1").toggleClass("image-fitolab-card2");
  $(".image-fitolab-card3").toggleClass("image-fitolab-card4");
  });

  $( function() {
    let fito_counter = 1;
    $(".arrow").click(function() {
    fito_counter += 1;
    if (fito_counter == 1) {
        $(".image-fitolab-card3").addClass("image-fitolab-card1");
        $(".image-fitolab-card3").removeClass("image-fitolab-card3");
        $(".image-fitolab-card4").addClass("image-fitolab-card2");
        $(".image-fitolab-card4").removeClass("image-fitolab-card4");
        $(".fito_circle_slider").toggleClass("active_circle");
        $(".name-fito-card p").toggleClass("hidden_element");
        $(".fito_text p").toggleClass("hidden_element");
      }
      if (fito_counter == 2) {
          $(".image-fitolab-card1").addClass("image-fitolab-card3");
          $(".image-fitolab-card1").removeClass("image-fitolab-card1");
          $(".image-fitolab-card2").addClass("image-fitolab-card4");
          $(".image-fitolab-card2").removeClass("image-fitolab-card2");
          $(".fito_circle_slider").toggleClass("active_circle");
          $(".name-fito-card p").toggleClass("hidden_element");
          $(".fito_text p").toggleClass("hidden_element");
        }
        if (fito_counter >= 3) {
          fito_counter = 1;
          $(".image-fitolab-card3").addClass("image-fitolab-card1");
          $(".image-fitolab-card3").removeClass("image-fitolab-card3");
          $(".image-fitolab-card4").addClass("image-fitolab-card2");
          $(".image-fitolab-card4").removeClass("image-fitolab-card4");
          $(".fito_circle_slider").toggleClass("active_circle");
          $(".name-fito-card p").toggleClass("hidden_element");
          $(".fito_text p").toggleClass("hidden_element");
          }
    });
  });

  $(".centre_image_space").hover(function(){
  $(".centre_image_space .centre_circle").toggleClass("hidden_element");
  $(".centre_text_space p").toggleClass("hidden_element");
  $(".building_scheme_below").toggleClass("hidden_element");
  $(".centre_header_space p").toggleClass("hidden_element");
  });

  $(".artificial_intelligence").hover(function(){
  $(".bubble").toggleClass("hidden_element");
  });

  $(".pop_up_close").click(function(){
  $(".grid_pop_up").addClass("hidden_element");
  $(".pop_up_blur").addClass("hidden_element");
  });

  $(".poster_wall").click(function(){
  $(".grid_pop_up").removeClass("hidden_element");
  $(".pop_up_blur").removeClass("hidden_element");
  });

  });
