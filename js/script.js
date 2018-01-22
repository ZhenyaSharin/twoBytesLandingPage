var menu = $('.burger-menu');
var burger = $('.hamburger-hill');
var exit = $('.head-nav-close');

burger.on('click', function(event) {
	// menu.removeClass('burger-settings');
	menu.css({'display':'flex'});
	menu.toggleClass('burger-menu-active');
	exit.css({'display':'block'});
	event.preventDefault();
});
exit.on('click', function(event) {
	menu.toggleClass('burger-menu-active');
	exit.css({'display':'none'});
	menu.css({'display':'none'});
	event.preventDefault();
});