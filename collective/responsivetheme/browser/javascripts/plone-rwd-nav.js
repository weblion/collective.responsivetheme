/* Sample scripts for RWD nav patterns 
   (c) 2012 Maggie Wachs, Filament Group, Inc - http://filamentgroup.com/examples/rwd-nav-patterns/GPL-LICENSE.txt
   Last updated: March 2012
   Dependencies: jQuery
  Changes made by Rob Porter - WebLion
  Last Updated: April 2012
*/

function below_600(){
      // on load add the li if less than 600 px wide and the nav-menu class
      if(window.location.hash != '#portal-globalnav') {
        if ($(window).width() < 600) { 
            //$("#portal-globalnav").prepend('<li class="navigation-pulldown">Navigation</li>');
            $("#portal-globalnav").prepend('<button type="button" class="navigation-button">Show Navigation</button>');
            $('#portal-top').addClass('nav-menu');
            $(".nav-primary").prepend('<span class="nav-section" />');
            // toggle the menu items' visiblity. it gives the parent the class .expanded
            $('.nav-primary').find('span.nav-section').bind('click focus', function(){
                $(this).parent().toggleClass('expanded');
                });
            $('button.navigation-button').bind('click', function() {
               $('.nav-primary').toggleClass('expanded');
               }); 
            $("button.navigation-button").toggle(function()  {  
               $(this).text("Hide Navigation");  
               },  
               function() {  
                $(this).text("Show Navigation"); 
               }  
               );
        }
     }
}

$(document).ready(function() {
    // add a div around globalnav
    $('ul#portal-globalnav').wrap('<div class="nav-primary" />');
    if ( $(".navigation-button").length == 0 ) {
        below_600();
    }
    $(window).resize(function() {
    // if window is smaller than 600px put in the extra li
    if ($(window).width() <= 600) { 
         // check to see if we have this particular li.. if not add it
         if ( $(".navigation-button").length == 0 ) {
           below_600(); 
         }
     } 
    // if window is bigger take away li
    if ($(window).width() > 600) {
         // check and see if .navigation-button is there.. if so remove it
         if ( $(".navigation-button").length > 0 ) {
             $('#portal-top').removeClass('nav-menu'); 
             $('.navigation-button').remove();
             $('.nav-section').remove();
         }
    }

});

      });

