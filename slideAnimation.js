 

$( document ).ready(function() {
    $( "#submit" ).click(function() {
        window.location.href='loading.html';
    });
    $( "#button1" ).click(function() {
        window.location.href='http://i.imgur.com/A5pmUn4.png';
    });
    $( "#button2" ).click(function() {
        window.location.href='http://www.huffingtonpost.com/entry/obama-pledge-of-allegiance_us_57c9bc7ae4b0e60d31defd6d';
    });
    $( "#button3" ).click(function() {
        window.location.href='http://abcnews.com.co/obama-executive-order-bans-pledge-of-allegiance-in-schools/';
    });
    $( "#button4" ).click(function() {
        window.location.href='http://www.factcheck.org/2016/09/obama-did-not-ban-the-pledge/';
    });
    $( "#button5" ).click(function() {
        window.location.href='http://www.cnn.com/2013/09/04/us/pledge-of-allegiance-fast-facts/';
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


          


