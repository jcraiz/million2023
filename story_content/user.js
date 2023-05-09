function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6cIH3Yxcknt":
        Script1();
        break;
      case "61qcY9ZMMY6":
        Script2();
        break;
      case "6a3nxu2YXvl":
        Script3();
        break;
  }
}

function Script1()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script2()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyU8jJzbCHSnkgBWMWfo4vH7mDjLCuRjzzbJwILf27BG0jDpW7O0vRofpYZ_gj9t0ih/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "Nombre" : player.GetVar("Nombre"),
 "ID_user" : player.GetVar("ID_user"),
 "Cargo" : player.GetVar("Cargo"),
 "Tiempo" : player.GetVar("Tiempo"),
 "score" : player.GetVar("score")
}
}

function Script3()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
 
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
},
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

