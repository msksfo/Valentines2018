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

var heartsArray = [];

for (var i = 0; i < 30; i++){
	x = Math.floor(Math.random() * canvas.width);
	y = Math.floor(Math.random() * canvas.height);
	heartsArray[i] = new Heart(x, y);
}


function Heart(x, y){
	var heart = '\u2764';
	var colors = ['#c11736', '#ea536f', '#d0193b', '#e421bf', '#600c50', '#f5a9e6', '#870931', '#570620',
	 	'#f4e4ec', '#d0193b', '#eaccdc', '#e1b3cb', '#cd83aa', '#c36b9a', '#8f3967', '#763055', '#9b2c3a',
	  	'#d0193b', '#812430', '#c94253', '#d87783', '#812570', '#b6349e', '#d878c6', '#d0193b','#ebbae2',
	 	'#900', '#c00', '#f77', '#690238', '#ab045b', '#d0193b', 'hotpink', 'purple', 'red', 'mediumorchid', 
	 	'mediumvioletred', 'deeppink', 'lightcoral', 'mediumpurple', 'darkmagenta', 'lavender'];
	var colorsLength = colors.length;
	var randomNumber = Math.floor(Math.random() * colorsLength) + 1;

	this.x = x
	this.y = y;

	this.show = function(){
		c.beginPath();
		c.font = '30px Calibri';
		c.fillStyle = colors[randomNumber];
		c.fillText(heart, this.x, this.y);
	}

	this.fall = function(){
		this.y = this.y + 1;
		if (this.y > canvas.height + 15){
			this.y = -2
		}
	}
	
}

function draw(){
	for(var i = 0; i < heartsArray.length; i++){
		heartsArray[i].show();
		heartsArray[i].fall();
	}
}



function animate(){

	window.requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);
	
	draw();

	
	
	c.fillText(message, messageX, messageY);
	c.fillStyle = '#d0193b';

}

animate();



























