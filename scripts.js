/**
 * @author
 */

/*
 * This is an array of all of our images (in order)
 */

var images = ["drain_0m.png", "drain_50m.png", "drain_100m.png", "drain_200m.png", "drain_500m.png", "drain_1km.png", "drain_2km.png", "drain_3km.png", "drain_5km.png", "drain_ed.png", "drain_nl.png"
];
/* Index of the current image in our images array */
var index = 0;

/*set button events here*/
function setNav() {

	 /*console.log("setNav");
	*/
	$(".button.next").on("click", function() {
		console.log("click!!!");
		index = index + 1;
		
		updateImage();
	});	
	
	$(".button.prev").on("click", function() {
		console.log("click!!!!");
		
		index = index - 1;
		updateImage();
	});
}

/* change the image her */
function updateImage() {
	$(".image-holder").html(
		"<img src='images/"+images[index]+"'/>"
	);
}

$(document).ready(function() {
	/*
	 * target image-holder and write html within markup, then define source
	 * adding strings in a url format[??]
	 * "string/variable/string to put first image into image holder
	 */
	$(".image-holder").html(
		"<img src='images/"+images[index]+"'/>"
	);
	
		setNav();
	
});
