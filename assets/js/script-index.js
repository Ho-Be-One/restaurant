

  	var nom = prompt("Quel est votre nom ?", name);
  	
  	if(nom == null){
	  
	  window.document.getElementById("target-1").innerHTML = "";
	  window.document.getElementById("target").innerHTML = "Bonjour et bienvenue";
	
  	}
	else{
		  window.document.getElementById("target-1").innerHTML = "<b>" + nom + "</b>";
	window.document.getElementById("target").innerHTML = "Bonjour et bienvenue : " + nom;	
	}

