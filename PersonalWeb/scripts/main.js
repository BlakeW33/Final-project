


$(document).ready(function(){
	setInterval(function(){
	var dateTime = new Date();
	var minutesTwoDigitsWithLeadingZeros = ("0" + dateTime.getMinutes()).substr(-2);
		$("#milliseconds").text(dateTime.getMilliseconds());
		$("#seconds").text(dateTime.getSeconds());
		$("#minutes").text(minutesTwoDigitsWithLeadingZeros);
		$("#hours").text(dateTime.getHours() %12);
		
		var randColor = "#000000 ".replace(/0/g, function(){return (~~(Math.random()*16)).toString(16);})	

			if ( minutesTwoDigitsWithLeadingZeros %1 === 0 ) {
				document.getElementById("clocks").style.color = 
				randColor
			}
	}, 100);

	});


var btn = document.getElementById("m8");

var links =document.getElementById("links")

var randomColor = "#000000 ".replace(/0/g, function(){return (~~(Math.random()*16)).toString(16);})	

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
 if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}







