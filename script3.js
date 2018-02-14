var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var x = 100;
var y = 100;


var message = 'Happy Valentines Day';
var messageX = canvas.width / 2;
var messageY = canvas.height / 2;
c.textAlign = 'center';
c.font = '30px Calibri';
c.fillStyle = 'purple';
c.fillText(message, messageX, messageY);


function makeHeart(){
	
	var colors = ['#c11736', '#ea536f', '#d0193b', '#e421bf', '#600c50', '#f5a9e6', '#870931', '#570620',
	 	'#f4e4ec', '#d0193b', '#eaccdc', '#e1b3cb', '#cd83aa', '#c36b9a', '#8f3967', '#763055', '#9b2c3a',
	  	'#d0193b', '#812430', '#c94253', '#d87783', '#812570', '#b6349e', '#d878c6', '#d0193b','#ebbae2',
	 	'#900', '#c00', '#f77', '#690238', '#ab045b', '#d0193b', 'hotpink', 'purple', 'red', 'mediumorchid', 
	 	'mediumvioletred', 'deeppink', 'lightcoral', 'mediumpurple', 'darkmagenta', 'lavender'];
	var colorsLength = colors.length;
	var randomNumber = Math.floor(Math.random() * colorsLength) + 1;

	for (var i = 0; i < 1; i++){
		var heart = '\u2764';
		c.beginPath();
		c.font = '30px Calibri';
		c.fillStyle = colors[randomNumber];
		c.fillText(heart, x, y);

		x = (Math.random() * canvas.width) - 40;
		y = (Math.random() * canvas.height) - 40;		

	}
		
}


setInterval(function(){
	makeHeart();
}, 1000);




























