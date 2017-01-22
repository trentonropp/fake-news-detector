 

$( document ).ready(function() {
    $( "#submit" ).click(function() {
        window.location.href='loading.html';
        
    });
    


  $( "gears.gif" ).fadeOut( "slow", function() {
    // Animation complete.
  });
    
 //   $.get( "/getInfo","someURL here",  function( data ) {
     
//   });
    $.getJSON('https://spreadsheets.google.com/feeds/list/1sxbm87xt8qLtqdeATXVekCIxcxobadw20c-ZFUsg-rk/od6/public/values?alt=json', function(data) {
    $('#button1').append(data.feed.entry[0]['gsx$slider1']['$t']);
    $('#button2').append(data.feed.entry[0]['gsx$slider2']['$t']);
    $('#button3').append(data.feed.entry[0]['gsx$slider3']['$t']);
    $('#button4').append(data.feed.entry[0]['gsx$slider4']['$t']);
    $('#button5').append(data.feed.entry[0]['gsx$slider5']['$t']);
  //console.log(data);
 //loop
    
     //
 });
    
});


          


