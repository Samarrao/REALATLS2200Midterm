let days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
let images = ["monday.png", "tuesday.png", "wednesday.png", "thursday.png", "friday.png", "saturday.png", "sunday.png"];


let lastClick;



for(i=0; i<document.getElementsByClassName("daytab").length; i++){
  document.getElementsByClassName('daytab')[i].addEventListener('click', onClick, false);
  //document.getElementsByClassName("daytab")[i].id = days[i]; //dynamic id generation
}


document.getElementById('monday').classList.toggle('active'); //assigning active to the first menu
document.getElementById('image').innerHTML = "<img src= 'Assets/" + images[0] + "'>"; //pulling in images





function onClick(e){

lastClick = document.getElementsByClassName("active")[0].id;//setting up 'lastclick' function to make sure we can only have one thing clicked
if(lastClick != undefined){
  document.getElementById(lastClick).classList.toggle('active');
  document.getElementById(lastClick +"menu").style.display = "none";
}



//setting up the 'active' state for the menu tabs
if(e.target.tagName == "H1"){
  e.target.parentNode.classList.toggle('active'); //making sure we know what's being clicked
}else{
  e.target.classList.toggle('active');
}


actimage = document.getElementsByClassName('active')[0].id;
console.log(actimage)
document.getElementById(actimage +"menu").style.display = "block";
document.getElementById('image').innerHTML = "<img src= 'Assets/" + actimage + ".png' >";

}
