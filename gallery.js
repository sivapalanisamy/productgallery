// JavaScript Document

var imgatt = document.getElementsByTagName("img");
for(var i=0, j=imgatt.length; i < j; i++){	
	imgatt[i].addEventListener('click', function(){		
		var imageAttr = this.src;
		var imageChange = document.getElementById("big-img");
		imageChange.src = imageAttr;	
		
	},false);
}