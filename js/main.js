
var correctClicked;
var wrongClicked;
var noneClicked=true;

  window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
  function(/* function */ callback, /* DOMElement */ element){
     window.setTimeout(callback, 1000 / 60);
  };
})();




jQuery(document).ready(function($){

	var countCorrect = 0;
	var countWrong = 0;
	var resetCount = 0;

	//var questions = [];

	
	
	$('#rocket').fadeTo('fast',1);

	$('.speedneedle').transition({ rotate: '94deg' }, 500, 'ease');

	$('.screen').addClass("up");

	
	$('.rulesbutton').click(function(){
		$('.rules').fadeToggle();

	});


	function ifos(){

		$('.question').hide();
		$('.wrong').fadeTo('fast', 1);


		var chosenOne = (Math.floor(Math.random()*11));

		//questions.push[chosenOne];


		if (chosenOne === 0) {
			$('.gamebox').show();
			$('.arbol').delay(500).fadeTo('fast',1 , function(){


			}); 
		} else if (chosenOne === 1) {
			$('.gamebox').show();
			$('.casa').delay(500).fadeTo('fast',1 , function(){


			});  

		}else if (chosenOne === 2) {
			$('.gamebox').show();
			$('.sombrero').delay(500).fadeTo('fast',1 , function(){

			});  

		}else if (chosenOne === 3) {
			$('.gamebox').show();
			$('.cielo').delay(500).fadeTo('fast',1 , function(){

			});  

		}else if (chosenOne === 4) {
			$('.gamebox').show();
			$('.avion').delay(500).fadeTo('fast',1 , function(){
				
			});  

		}else if (chosenOne === 5) {
			$('.gamebox').show();
			$('.helado').delay(500).fadeTo('fast',1 , function(){
				
			});  

		}else if (chosenOne === 6) {
			$('.gamebox').show();
			$('.vestido').delay(500).fadeTo('fast',1 , function(){

			});  

		}else if (chosenOne === 7) {
			$('.gamebox').show();
			$('.caballo').delay(500).fadeTo('fast',1 , function(){

			});  

		}else if (chosenOne === 8) {
			$('.gamebox').show();
			$('.pajaro').delay(500).fadeTo('fast',1 , function(){
				$('.gamebox').show();
			});  

		}else if (chosenOne === 9) {
			$('.gamebox').show();
			$('.perro').delay(500).fadeTo('fast',1 , function(){

			});  

		} else if (chosenOne === 10) {
			$('.gamebox').show();
			$('.cascada').delay(500).fadeTo('fast',1 , function(){

			});  

		} 	

		//console.log(countCorrect);
		//console.log(chosenOne);
		//console.log(countWrong);
		//console.log(countWrong);

	}; // end ifos();


	//console.log(countCorrect);




	
	if (countCorrect ===0){

	$('.play').show();
		
	$('.play').click(function(){

	
	$('.intro').hide();


		ifos();


		});  



	}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// /////////////////////////////////               ///////C///////O///////R///////R///////E///////C///////T////////////////////// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////     ////////////  /////////
	





	$('.correct').click(function(){

		wringClicked=false;
		correctClicked=true;
		noneClicked=false;

	countCorrect ++;	

	$('.distance').addClass("distance-" + countCorrect);
			

	ifos();
	

		
	$('.screen').removeClass("down");
	$('.screen').addClass("up");


	$('#rocket').transition({ rotate: '0deg', top:60+'%' }, 500, 'ease');   //IE 10 . Yes transition



	


	if (countCorrect === 10){  
		
	
		
		$('#rocket').transition({ y: -300, x: +850}, 500, 'in');
			
		$('#rocket').fadeTo(1,0);


		$('#rocket').transition({ y: 0, x:0});


		window.setTimeout(function(){$('.gamebox').hide();}, 2200);

		window.setTimeout(function(){$('.playagainwin').show();}, 2200);

			
	} else {
	
	$('.rock').delay(500).transition({ y: +300, x: -680 });
	 $(".rock").queue(function () {
	 	$(this).hide();
		$(this).transition({ y: 0, x: 0 });
		$(this).delay(1000).fadeTo('fast',1);
		$(this).dequeue();
	});


	$('#rocket').transition({ y: +70, x: +50, rotate: -15 });
	$('#rocket').delay(400).transition({ y: 0, x: 0, rotate:0 });

	}

	});   // // end of correct.click



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// ////////////////////////////////////////////////////////////W///////R///////O//////N//////G//////////////////////////////////////////////////////////////////  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////     ////////////      /////////////////

	

	$('.wrong').click(function(){

		correctClicked=false;
		wrongClicked=true;
		noneClicked=false;

		countWrong ++;
		

		$(this).fadeTo('slow', 0);



				
		$('.screen').removeClass("up");
		$('.screen').addClass("down");



		if (countWrong === 1) {
			$('#rocket').transition({ rotate: '30deg',top:55+'%' }, 500, 'ease');   //IE 10 . Yes transition
			$('.speedneedle').transition({ rotate: '25deg' }, 500, 'ease');
		} else if (countWrong === 2){
			$('#rocket').transition({ rotate: '60deg',top:48+'%'  }, 500, 'ease');
			$('.speedneedle').transition({ rotate: '-30deg' }, 500, 'ease');
		} else if (countWrong === 3){
			$('#rocket').transition({ rotate: '90deg',top:40+'%'  }, 500, 'ease');
			$('.speedneedle').transition({ rotate: '-95deg' }, 500, 'ease');
		}



		

		if (countWrong === 4&&resetCount != 1){
				
			$('.tail').fadeTo(300,0);

			$('.speedneedle').transition({ rotate: '-145deg' }, 500, 'ease');
			
			$('#rocket').delay(300).transition({ rotate: '+340deg', scale: '0.1',top:33+'%',left:170 }, 3000, 'ease');

			$('#rocket').fadeTo(1,0);


			$('#rocket').transition({ rotate:0, scale: '1' });


			$('.question').delay(3000).fadeTo('slow', 0);





			window.setTimeout(function(){$('.gamebox').hide();}, 2700);

			window.setTimeout(function(){$('.playagainloose').show();}, 2700);

		} else if (countWrong === 4&&resetCount === 1) {


			$('#rocket').fadeTo(100,0);
			$('#rocket').transition({ rotate:0, scale: '1' });


///////////////////////////////////////////////////|\
	var canvas2 = document.getElementById("canvas2");
		
			var ctx = canvas.getContext("2d");

			var ww = $(window).width()/1.3;

			canvas.width =ww;
			canvas.height = 430;

			var fuego = new Image();
			fuego.src = "img/fuego.png";

			var spriteWidthww  = ww,
			    spriteHeightww = 430,
			    pixelsLeftww   = 0,
			    pixelsTopww    = 0,
			    canvasPosXww   = 0,
			    canvasPosYww   = 0;

		ctx.drawImage(fuego,
		pixelsLeftww,
		pixelsTopww,
		spriteWidthww,
		spriteHeightww,
		canvasPosXww,
		canvasPosYww,
		spriteWidthww,
		spriteHeightww);				     ////  ?	
										   ////  ?
/////////////////////////////////////////////  ?


			window.setTimeout(function(){$('.gamebox').hide();}, 2700);

			window.setTimeout(function(){$('.playagainloose').show();}, 2700);

		}




	});   // end of wrong.click


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// /////////  R   E   S   E   T   ////////// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


		$('.again').click(function(){

		correctClicked=false;
		wrongClicked=false;
		noneClicked=true;

		countCorrect = 0;
		countWrong = 0;
		resetCount ++;
		

		$('.playagainloose, .playagainwin').hide();


		$('#rocket').transition({ rotate: '0deg', top:60+'%',left:100 }, 100, 'ease');
		$('.tail').fadeTo(100,1);
		$('#rocket').fadeTo(100,1);
		$('.speedneedle').transition({ rotate: '94deg' }, 500, 'ease');

		$('.screen').removeClass("gameover gameover-1 gameover-2 gameover-3 gameover-4 gameover-5");

		$('.screen').addClass("up");
		
		$('.distance').removeClass("distance-1 distance-2 distance-3 distance-4 distance-5 distance-6 distance-7 distance-8 distance-9 distance-10");



		$('#rocket').fadeTo('fast',1);
		
		ifos();


		});   // end reset

	var canvas = document.getElementById("canvas");


		
			var ctx = canvas.getContext("2d");


			var w = $(window).width()/1.3;


			canvas.width = 1000;
			canvas.height = 430;

			var space = new Image();
			space.src = "img/space.png";


			var spriteWidth  = w,
			    spriteHeight = 430,
			    pixelsLeft   = 0,
			    pixelsTop    = 0,
			    canvasPosX   = 0,
			    canvasPosY   = 0;

			var spacebwards = new Image();
			spacebwards.src = "img/spacebwards.png";

			var spriteWidthw  = w,
			    spriteHeightw = 430,
			    pixelsLeftw   = 0,
			    pixelsTopw    = 0,
			    canvasPosXw   = 0,
			    canvasPosYw   = 0;



function animate() {

if(!wrongClicked||correctClicked){
  setTimeout(function(){
    requestAnimFrame(animate);
  },80);

}else if(wrongClicked&&countWrong===1){
   setTimeout(function(){
    requestAnimFrame(animate);
  },100);
}else if(wrongClicked&&countWrong===2){
   setTimeout(function(){
    requestAnimFrame(animate);
  },130);
}else if(wrongClicked&&countWrong===3){
   setTimeout(function(){
    requestAnimFrame(animate);
  },170);
}else if(wrongClicked&&countWrong===4){
   setTimeout(function(){
    requestAnimFrame(animate);
  },170);
}else {
   setTimeout(function(){
    requestAnimFrame(animate);
  },80);
}



  draw();

}//end animate


animate();


function draw(){

	pixelsLeft+=1000;
	if(pixelsLeft>4000){
		pixelsLeft=0;
	}

	pixelsLeftw+=1000;
	if(pixelsLeftw>4000){
		pixelsLeftw=0;
	}

	if(noneClicked){
		ctx.drawImage(space,
		pixelsLeft,
		pixelsTop,
		spriteWidth,
		spriteHeight,
		canvasPosX,
		canvasPosY,
		spriteWidth,
		spriteHeight);
	}else if(correctClicked){
		ctx.drawImage(space,
		pixelsLeft,
		pixelsTop,
		spriteWidth,
		spriteHeight,
		canvasPosX,
		canvasPosY,
		spriteWidth,
		spriteHeight);
	} else if(wrongClicked){
		ctx.drawImage(spacebwards,
		pixelsLeftw,
		pixelsTopw,
		spriteWidthw,
		spriteHeightw,
		canvasPosXw,
		canvasPosYw,
		spriteWidthw,
		spriteHeightw);

	}

}

});  // end ready








