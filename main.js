Main = {};
Main.WordArray = [];
Main.WordUArray = [];

Main.Lives = 6;
Main.NumberInWordBank = 10;

Main.Word = "test";
Main.WordU = "";


//Functions go here

Main.PullWord = function(){
	Main.Word = Words.List[(Math.floor(Math.random()*Main.NumberInWordBank))];
}
Main.SetUnderline = function(){
	Main.PullWord();
	for(i=0; i < Main.Word.Length; i++){
		Main.WordArray[i] = Main.Word.charAt(i);
		Main.WordUArray[i] = "_";
	}
	Main.WordU = Main.WordUArray.join("");
	document.getElementById("WORD").innerHTML = Main.WordU;
	document.getElementById("numLetters").innerHTML = Main.Word.length;
}

Main.UpdateLetter = function(letter){
	Main.Changes = 0;
	for(i=0; i < Main.Word.length; i++){
		Main.WordArray[i] = Main.Word.charAt(i);
		if(Main.Word.charAt(i) == letter){
			Main.WordUArray[i] = letter;
			Main.Changes += 1;
		}
	}

	if(Main.Changes < 1){
		Main.Lives -=1;
		document.getElementById("lives").innerHTML = Main.Lives;
	}

	if(Main.Lives == 6){
		document.getElementById('main_img').src='img/0.jpg'
	}

	if(Main.Lives == 5){
		document.getElementById('main_img').src='img/1.jpg'
	}

	if(Main.Lives == 4){
		document.getElementById('main_img').src='img/2.jpg'
	}

	if(Main.Lives == 3){
		document.getElementById('main_img').src='img/3.jpg'
	}

	if(Main.Lives == 2){
		document.getElementById('main_img').src='img/4.jpg'
	}

	if(Main.Lives == 1){
		document.getElementById('main_img').src='img/5.jpg'
	}

	if(Main.Lives == 0){
		document.getElementById('main_img').src='img/6.jpg'
	}

	Main.WordU = Main.WordUArray.join("");
	document.getElementById("WORD").innerHTML = Main.WordU;

	Main.Word1 = Main.WordArray.join("");
	Main.Word2 = Main.WordUArray.join("");

	if(Main.Word1 == Main.Word2){
		alert("You Won! Loading A New Word");
		window.location.reload();
	}

	if(Main.Lives < 1){
		document.getElementById("WORD").innerHTML == Main.Word1;
		alert("You Have Run Out Of Lives, Please Try Again.");
		window.location.reload();
	}
}

Main.PullWord();
Main.SetUnderline();