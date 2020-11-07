
window.onload=function superherosearch(){


	document.getElementsByClassName("btn")[0].addEventListener("click", function(){

    var searchinput = document.getElementById("hero").value;

	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
    	if (this.readyState == 4 && this.status == 200){
      	document.getElementById("result").innerHTML = request.responseText;
    }
  }
	request.open("GET", "http://localhost:8080/superheroes.php?query="+searchinput);
	request.send();
})

}





