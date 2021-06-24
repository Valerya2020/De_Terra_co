$(document).ready(function(){

  $(".fito_icon").click(function(){
  $(this).toggleClass("fito_icon_sun");
  $(".image-fitolab-card1").toggleClass("image-fitolab-card2");
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
      }
      if (fito_counter == 2) {
          $(".image-fitolab-card1").addClass("image-fitolab-card3");
          $(".image-fitolab-card1").removeClass("image-fitolab-card1");
          $(".image-fitolab-card2").addClass("image-fitolab-card4");
          $(".image-fitolab-card2").removeClass("image-fitolab-card2");
        }
        if (fito_counter >= 3) {
          let fito_counter = 0;
          }
    });
  });

  });
