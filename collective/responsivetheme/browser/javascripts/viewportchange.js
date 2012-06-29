/*
set_the viewport This is part of the reason why: https://openradar.appspot.com/9025220
*/

function change_viewport(){
    jq('head meta[name=viewport]').remove();
    jq('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=0.66" />');
}


/* on new page check the size */

jq(document).ready(function() {
       change_viewport();  
 }); 

/* if the browser is resized or changed from portrait to landscape, check the document size and
call set_viewport */

jq(document).resize(function() {
       change_viewport();  
}); 