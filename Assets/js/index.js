$(window).on('load',function(){
	setTimeout(function(){ // allowing 2.5 secs to fade out loader
	$('.page-loader').fadeOut('slow');
	},2500);
});
/*====Dark mode toggler====*/
function darkToggle(){
	const element= document.body;
	element.classList.toggle('dark-mode')
}