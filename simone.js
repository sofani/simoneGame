
var userSeq = [];
var simoneSeq = [];
var id, color, level = 0;
var boardSound = [

  "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
  "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",
  "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",
  "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"

];

$(document).ready(function() {
  
	$(".start").click(function() {
		level++;
		startSequance();
	});
  // $(".pad").click(function() {
  //      id = $(this).attr("id");
  //      color = $(this).attr("class").split(" ")[1];
  //      addClassSound(id, color);

  //  });


});
function startSequance() {
    $(".display").text(level);
    getRandomNumber();
    var i = 0;
    id = simoneSeq[i];
    color = $("#"+id).attr("class").split(" ")[1];
    console.log(id + " "+ color);
    addClassSound(id, color);
    i++;
    if (i == simoneSeq.length) {
    	clearInterval(myInterval);
    }

}
function getRandomNumber() {
	var random = Math.floor(Math.random() * 4);
	simoneSeq.push(random);
}
function addClassSound(id, color) {
   $("#"+id).addClass(color+"-active");

   //playSound(id);
   setTimeout(function() {

   }, 500);
}


// function playSound(id) {

// }