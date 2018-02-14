var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var heart = '\u2764';

var message = 'Happy Valentines Day';
var messageX = canvas.width / 2;
var messageY = canvas.height / 2;
c.textAlign = 'center';
c.font = '30px Calibri';

c.fillText(message, messageX, messageY);
c.fillStyle = 'purple';

var x = Math.random() * canvas.width;
var y = 0;


var colors = ['#c11736', '#ea536f', '#e421bf', '#600c50', '#f5a9e6', '#870931', '#570620'];
var colorsLength = colors.length;
var randomNumber = Math.random() * colors.length;



function animate(){

	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);
	
	c.beginPath();
	c.fillText(heart, x, y);

	if (y > canvas.height + 15){
		y = -2;
	}

	y += 1;
	

	

	c.fillText(message, messageX, messageY);
	c.fillStyle = '#d0193b';

}

animate();


