/*$( ".cross" ).hide();
$( ".menu" ).hide();

$( ".hamburger" ).click(function() {
	$( ".menu" ).slideToggle( "slow", function() {
		$( ".hamburger" ).hide();
		$( ".cross" ).show();
	});
});

$( ".cross" ).click(function() {
	$( ".menu" ).slideToggle( "slow", function() {
		$( ".cross" ).hide();
		$( ".hamburger" ).show();
	});
});*/


$(function(){
  
  $( ".cross" ).hide();
  $( ".menu" ).hide();

$( ".hamburger" ).click(function() {
 $( ".menu" ).slideToggle( "slow", function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
});
});
  
  $( ".cross" ).click(function(){
   $( ".hamburger" ).show(); 
    $( ".cross" ).hide();
    $( ".menu" ).hide();
  });
  
});