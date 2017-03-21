



var hlists=document.querySelector(".hotel-list");
var as=document.querySelectorAll(".hotel-list .as");
var litems=document.querySelectorAll(".lists-items");
var active=document.querySelectorAll(".active");
 console.log(active)

for(var i=0;i<as.length;i++){
	as[i].index=i;
	as[i].addEventListener("touchstart",function(){
		for(var j=0;j<litems.length;j++){
			litems[j].style.height=0+"rem";
		}
		litems[this.index].style.height=5.8+"rem";
	
		
	})

	// litems[this.index].style.height=0+"rem";

	

}