jQuery(document).ready(function ($) {
	$(".popup-link").on('click', function (e){
		var popupID = $(this).parents('.team-card').attr('data-popup');
		$('.popup-container').hide();
		$('#popup-'+popupID).css({'margin-top': $(window).scrollTop()});
		$('#popup-'+popupID).show();
		$('.background-black').show();
	});
	$('.popup__action a').on('click', function (e){
		$('.popup-container').hide();
		$('.background-black').hide();
	});
	$('.popup-container').on('click', function (e) {
		if(!$(e.target).is('.popup') && !$(e.target).is($('.popup').find('*'))){
			$('.popup-container').hide();
			$('.background-black').hide();
		}
	});
	$('.menu-icon').on('click', function (e){
		$('.menu-icon').toggleClass('opened');
		$('nav').toggleClass('opened');
	})
	$('.menu-link').on('click', function (e){
		$('.menu-link').removeClass('active');
		if($(this).hasClass('rede-link')){
			$('.menu-link.rede-link').addClass('active');
		}
		if($(this).hasClass('contact-link')){
			$('.menu-link.contact-link').addClass('active');
		}
		if($(this).hasClass('project-link')){
			$('.menu-link.project-link').addClass('active');
		}
		if($(this).hasClass('team-link')){
			$('.menu-link.team-link').addClass('active');
		}
	});
	$('.lang-link').on('mouseover', function (e) {
		if($(this).hasClass('pt')){
			$('.arrow-right.lang').css({'margin-top': "8px"});
		}
		if($(this).hasClass('en')){
			$('.arrow-right.lang').css({'margin-top': "45px"});
		}

	});
	$('.lang-link').on('mouseleave', function (e) {
		if($('.lang-link.active').hasClass('pt')){
			$('.arrow-right.lang').css({'margin-top': "8px"});
		}
		if($('.lang-link.active').hasClass('en')){
			$('.arrow-right.lang').css({'margin-top': "45px"});
		}

	});
	
	$('.menu-link').on('mouseover', function (e) {
		if($(this).hasClass('rede-link')){
			$('.arrow-right.main').css({'margin-top': "8px"});
		}
		if($(this).hasClass('project-link')){
			$('.arrow-right.main').css({'margin-top': "45px"});
		}
		if($(this).hasClass('team-link')){
			$('.arrow-right.main').css({'margin-top': "80px"});
		}
		if($(this).hasClass('contact-link')){
			$('.arrow-right.main').css({'margin-top': "115px"});
		}

	});
	$('.menu-link').on('mouseleave', function (e) {
		if($('.menu-link.active').hasClass('rede-link')){
			$('.arrow-right.main').css({'margin-top': "8px"});
		}
		if($('.menu-link.active').hasClass('project-link')){
			$('.arrow-right.main').css({'margin-top': "45px"});
		}
		if($('.menu-link.active').hasClass('team-link')){
			$('.arrow-right.main').css({'margin-top': "80px"});
		}
		if($('.menu-link.active').hasClass('contact-link')){
			$('.arrow-right.main').css({'margin-top': "115px"});
		}

	});
	(function init(){
		if($('.lang-link.active').hasClass('rede-link')){
			$('.arrow-right.main').css({'margin-top': "8px"});
		}
		if($('.lang-link.active').hasClass('project-link')){
			$('.arrow-right.main').css({'margin-top': "45px"});
		}
		if($('.lang-link.active').hasClass('team-link')){
			$('.arrow-right.main').css({'margin-top': "80px"});
		}
		if($('.lang-link.active').hasClass('contact-link')){
			$('.arrow-right.main').css({'margin-top': "115px"});
		}
		if($('.lang-link.active').hasClass('pt')){
			$('.arrow-right.lang').css({'margin-top': "8px"});
		}
		if($('.lang-link.active').hasClass('en')){
			$('.arrow-right.lang').css({'margin-top': "45px"});
		}
	})();
	$(window).on('scroll', function (e) {
		$('.menu-icon').removeClass('opened');
		$('nav').removeClass('opened');
		if($(window).scrollTop() > $('.banner').outerHeight()){
			$('nav').show();
		}else if($(window).width()>984){
			$('nav').hide();
		}
	});
});