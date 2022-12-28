document.onmousemove = animateCircles;

		var colors = ['#bf7182ff','#f9eceeff','#74ad5a'];

	
	
	//alert ("The first color is: " + colors[0] + "\nThe second color is: " + colors[1] + "\nThe third color is: " + colors[2]) ;
	

	//The purpose of the function is to animate the mouse

		function animateCircles (event) {
			let circle = document.createElement("div");
			circle.setAttribute("class", "circle"); //setAttribute needs name and value
			document.body.appendChild(circle); //Add to the DOM with appendChild

			circle.style.left = event.clientX + 'px'; //Left & top used to center to the mouse pointer
			circle.style.top = event.clientY + 'px'; //Left & top used to center to the mouse pointer

			var color = colors[Math.floor(Math.random() * colors.length)]; //Math.floor rounds down to the nearest integer and Math.random returns random integers
			circle.style.borderColor = color;

			circle.style.transition = "all 0.5s linear 0s"; //Animation timing

			circle.style.left = circle.offsetLeft - 20 + 'px';
			circle.style.top = circle.offsetTop - 20 + 'px';

			circle.style.width = "50px";
			circle.style.height = "50px";
			circle.style.borderWidth = "5px";
			circle.style.opacity = 0; //This stops the circles once the mouse is stationary
			
			setTimeout(function() {
                circle.remove();
            }, 500);
		}