$( document ).ready(function() {
    // alert("works");

    setTimeout(function(){ 
    	$('.element').removeClass('hidden'); }, 100);

    var tl = new TimelineMax();
    tl.from('.back-of-building', 0.5, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut, delay: 0.2})
    	.from('.dark-building', 0.8, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut, delay: 0})
		.from('.middle-roof-dark', 0.8, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut, delay: -0.4})
		.from('.middle-roof-rectangle', 0.8, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut, delay: -0.8})
		.from('.top-roof-dark', 0.8, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut, delay: -0.4})
		.from('.top-roof-rectangle', 0.8, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut, delay: -0.8})
		.staggerFrom('.window2', 0.2, {scaleY: 0}, -0.05)
		 // .staggerFrom('.window', 0.2, {scaleY: 0}, -0.03)
		 .staggerFrom('.long-window', 0.2, {scaleY: 0}, -0.04)
		 .from('.door', 0.7, {scaleX: 0, transformOrigin: "center", ease: Bounce.easeOut, delay: 0})
		 // .staggerFrom('.window', 0.2, {scaleX: 0}, -0.1)
		 
    	// .from('.black-monitor', 0.6, {scaleY: 0, transformOrigin: "bottom", ease: Circ.easeOut, delay: 0.4})
    	// .from('.orange-square', 0.5, {scale: 0})
    	// .staggerFrom('#Layer_1 > g:nth-child(1) > g path', 0.2, {scaleX: 0}, -0.1)

    	.from('.light-building', 0.8, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut, delay: -2.2})
    	.from('.bottom-light-roof', 0.8, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut, delay: -1.8})
    	.from('.light-top-roof', 0.8, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut, delay: -1.6})
    	.from('.light-triangle', 0.8, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut, delay: -1.4})


    	var bl = new TimelineMax();
    	bl.staggerFrom('.window', 0.2, {scaleY: 0, delay: 2.4}, -0.05)

    });