var numSquares=6;
var colors=generateRandomColor(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");

    numSquares=3;
	colors=generateRandomColor(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.background=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}
	

});
hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");	
	hardBtn.classList.add("selected");

    numSquares=6;
	colors=generateRandomColor(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
			squares[i].style.background=colors[i];
			squares[i].style.display="block";
	}
	
});


resetButton.addEventListener("click", function(){
	//generate new colors
	colors=generateRandomColor(numSquares);
	//select a color 
	pickedColor=pickColor();
	//display the color question
	messageDisplay.textContent="";
	colorDisplay.textContent = pickedColor;
	//change the colors ofnthe squares using for loop
	for(var i=0;i<squares.length;i++)
{
	//add colors to the squares
	squares[i].style.background=colors[i];
}

  h1.style.background="steelblue";  
  resetButton.textContent="New colors!";
}
);

for(var i=0;i<squares.length;i++)
{
	//add colors to the squares
	squares[i].style.background=colors[i];

	//add event listener to every square
	squares[i].addEventListener("click",function(){

	//store the color clicked 
	var clickedColor= this.style.background;

	//compare it with the picked color
	if(clickedColor===pickedColor)
		{
			messageDisplay.textContent="correct";
		   for(var i=0;i<squares.length;i++)
		   {
		    squares[i].style.background=pickedColor;
		   }   
		   h1.style.background=clickedColor;
		   resetButton.textContent="play again?";
		}
		else
		{
			this.style.background="#232323";
			messageDisplay.textContent="wrong"
		}
			});
}
function pickColor()
{
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColor(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomColor())
	}
	return arr;

}
function randomColor()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g +", " + b + ")" ;
}

