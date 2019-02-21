(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
var d = new Date();

var day = d.getDay();
var monthe = d.getMonth();
var year = d.getFullYear();
var heure = d.getHours();
var minut = d.getMinutes();

var date_1 =  year + " - " + monthe + " - "+  day+ " / "+ heure +" : "+ minut;
var date_2 =  year+ " - " + monthe + " - "+ day + " / "+ 22 + " : "+ 0;

if(date_1 < date_2){
	document.getElementById("openClose").innerHTML = "ouverts";
	document.getElementById("targetBruxelles").innerHTML = "Ouvert";
	document.getElementById("targetNamur").innerHTML = "Ouvert";
	document.getElementById("targetAnvers").innerHTML = "Ouvert";
	}
	else
	{
	document.getElementById("openClose").innerHTML = "fermés";
	document.getElementById("targetBruxelles").innerHTML = "Fermé";
	document.getElementById("targetNamur").innerHTML = "Fermé";
	document.getElementById("targetAnvers").innerHTML = "Fermé";
	}   

})();

(function() {
	  // les noms de jours / mois
     var jours = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
     var mois = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre");
     // on recupere la date
     var date = new Date();
   
     // on construit le message
     var message = jours[date.getDay()] + " ";   // nom du jour
     message += date.getDate() + " ";   // numero du jour
     message += mois[date.getMonth()] + " ";   // mois
     message += date.getFullYear();
       
     var heure = date.getHours();
     var minutes = date.getMinutes();;


     document.getElementById("target").innerHTML = message + ", " + heure+ " : " + minutes;
	

    // your code here

})();
