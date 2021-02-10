$(document).ready(function(){
    $(' #top-sale .owl-carousel').owlCarousel({
      loop:true, 
      dots:false,
      nav:true,
      responsive:{
        0:{
          items:2
        },
        768:{
          items:4
        }
      }
    
    });
    // isotop filter 
        var items =   $('.grid').isotope({
          // options
          itemSelector: '.grid-item',
          layoutMode: 'fitRows'
        });
        // filter items 
        $(".button-group").on("click","button",function(){
  
          let filterValue = $(this).attr("data-filter");
          items.isotope({filter: filterValue});
        })
        $(' #new-phones .owl-carousel').owlCarousel({
            loop:true, 
            dots:true,
            nav:false,
            responsive:{
              0:{
                items:2
              },
              768:{
                items:4
              }
            }
          
          });
          //letest model 
          $(' #letest-blog .owl-carousel').owlCarousel({
            loop:true, 
            dots:true,
            nav:false,
            responsive:{
              0:{
                items:2
              },
              768:{
                items:3
              }
            }
          
          });



        let $upKey = $(".qty .qty-up");
        let $upDown = $(".qty .qty-down");
        // let $Input = $(".qty .qty-input");

        $upKey.click(function(){
          let $Input = $(`.qty-input[data-id='${$(this).data("id")}']`);
          if($Input.val() > 0 && $Input.val() < 9){
          
            $Input.val(function(i , data){

              return ++ data;
            });
          }
          
        });
        $upDown.click(function(){
          $Input = $(`.qty-input[data-id='${$(this).data("id")}']`);
          if($Input.val() > 1 && $Input.val() <= 9){

            $Input.val(function(i , data){

              return -- data;
            });
          }
          
        });
  });