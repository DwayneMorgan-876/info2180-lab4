
window.onload=function superherosearch(){


	document.getElementsByClassName("btn")[0].addEventListener("click", function(){

    var searchinput = document.getElementById("hero").value;
    var displayresult=document.getElementById("result");

	var xhrequest = new XMLHttpRequest();
	var heroalert =xhrequest.responseText;

	xhrequest.onreadystatechange = function(){
		if(this.readyState==XMLHttpRequest.DONE){
    	if (this.readyState == 4 && this.status == 200){
      	var heroalert =xhrequest.responseText;
      	alert(heroalert);
      	displayresult.innerHTML = xhrequest.responseText;
    }
   }
 }

	xhrequest.open("GET", "http://localhost:8080/superheroes.php?query="+searchinput, true);
	xhrequest.send();
})

}





