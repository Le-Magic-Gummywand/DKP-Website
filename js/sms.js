//Post managment
var brugernavn = null;
var opslag = null;

function nyOpslag (){
  opslag = document.getElementById('text').value;
  brugernavn = document.getElementById('user').value;

  if (opslag !="" && brugernavn!="") {
    //Laver selve kassen som teksten og brugernavnet skal stå i
      var box = document.createElement('div');
      box.setAttribute('class', 'opslag');
      document.getElementById("feed").insertAdjacentElement('afterbegin', box)

      //laver div til brugernavnet og indsætter det der står i brugernavns inputtet
        var user = document.createElement('div');
        user.setAttribute('class', 'user');
        box.appendChild(user);

        var userText = document.createElement("P");
        userText.innerText = brugernavn;
        user.appendChild(userText);

      //laver div til text og indsætter det der står i tekst-inputtet
        var text = document.createElement('div');
        text.setAttribute('class', 'text');
        box.appendChild(text);

        var para = document.createElement("P");
        para.innerText = opslag;
        text.appendChild(para);

        document.getElementById('text').value=""
        document.getElementById('user').value=""

        modal.style.display = "none";

    }
  }

//User managment
var brugere=[];
var passwords=[];
var nybruger;
var nytpassword


function opretbruger(){
      var nybruger=document.getElementById("username").value;
      var nytpassword=document.getElementById("password1").value;
      brugere.push(nybruger);
      passwords.push(nytpassword);
      //alert("Bruger tilføjet!");
    }


function login()
{
  var mitnavn=document.getElementById("navn").value;
  var mitpswrd=document.getElementById("pswrd").value;

  brugerindex = brugere.indexOf(mitnavn);
  aktpassword=passwords[brugerindex];
  if (mitpswrd==aktpassword)
  {
    window.open("Website.html","_self");
  }
  else{
    alert("Brugernavnet eller kodeordet var forkert")
  }
}
// Site managment
function openLogin() {
  document.getElementById('login-site').style.display = 'contents';
  document.getElementById('start-site').style.display = 'none';
  document.getElementById('tilmelding-site').style.display = 'none';
}
function openStart() {
  document.getElementById('start-site').style.display = 'contents';
  document.getElementById('tilmelding-site').style.display = 'none';
  document.getElementById('login-site').style.display = 'none';
}
function openTilmelding() {
  document.getElementById('start-site').style.display = 'none';
  document.getElementById('tilmelding-site').style.display = 'contents';
  document.getElementById('login-site').style.display = 'none';
}
