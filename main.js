$(document).ready(function() {

	var 
		currentId = null,
		currentTab = null,
		tabContainerHeight = 70;

	checkTabContainerPosition();
	findCurrentTabSelector();
	

	$('.et-hero-tab').click(function(event) { 
		onTabClick(event, $(this)); 
	});


	$(window).scroll(function() { onScroll() });
	$(window).resize(function() { onResize() });
	
	function onTabClick(event, element) {
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
	};
	
	function onScroll() {
		checkTabContainerPosition();
   	findCurrentTabSelector();
	};
	
	function onResize() {
		if (currentId) {
			setSliderCss();
		}
	};
	
	function checkTabContainerPosition() {
		let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - tabContainerHeight;
		if($(window).scrollTop() > offset) {
			$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
		} 
		else {
			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
		}
	};

	var
		currentId,
		currentTab;

	function findCurrentTabSelector(element) {
		var
			newCurrentId,
			newCurrentTab;

		$('.et-hero-tab').each(function() {
			var
				tabElement = $(this);
				id = tabElement.attr('href'),
				offsetTop 	 = tabElement.offset().top - tabElement.tabContainerHeight,
				offsetBottom = tabElement.offset().top + tabElement.height() - tabElement.tabContainerHeight;
			
			if ( ($(window).scrollTop() > offsetTop) && ($(window).scrollTop() < offsetBottom) ) {
				newCurrentId = id;
				newCurrentTab = $(this);
			};
		});
		
		if(currentId != newCurrentId || currentId === null) {
			console.log('дратути');
			currentId = newCurrentId;
			currentTab = newCurrentTab;
			setSliderCss();
		}
	};
	
	function setSliderCss() {
		console.log('тест');

		var
			width = 0,
			left = 0;

		if (currentTab) {
			width = currentTab.css('width');
			left = currentTab.offset().left;
		};
		$('.et-hero-tab-slider').css('width', width);
		$('.et-hero-tab-slider').css('left', left);
	};




});