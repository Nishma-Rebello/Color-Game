var colors=generateColors(6);
var selectedColor=generateSelectedColor();
var squares=document.querySelectorAll(".square");


var colorDisplay=document.getElementById("colorDisplay");
var message=document.getElementById("message");
var reset=document.getElementById("reset");
var bar=document.getElementById("bar");

var easyBtn=document.getElementById("easyBtn");
var hardBtn=document.getElementById("hardBtn");


colorDisplay.textContent="RGB"+selectedColor.substr(3,selectedColor.length);
var pickedColor;

easyBtn.addEventListener("click",function()
{
message.textContent="";
easyBtn.classList.add("selected");
hardBtn.classList.remove("selected");
bar.style.backgroundColor="steelblue";
colors=generateColors(3);
changeColors();
selectedColor=generateSelectedColor();
colorDisplay.textContent="RGB"+selectedColor.substr(3,selectedColor.length);
});


hardBtn.addEventListener("click",function()
{
message.textContent="";
bar.style.backgroundColor="steelblue";
easyBtn.classList.remove("selected");
hardBtn.classList.add("selected");
colors=generateColors(6);
changeColors();
selectedColor=generateSelectedColor();
colorDisplay.textContent="RGB"+selectedColor.substr(3,selectedColor.length);
});



changeColors();

reset.addEventListener("click",function()
{
	
	if(easyBtn.classList=="selected")
	{
		colors=generateColors(3);
	}

	if(hardBtn.classList=="selected")
	{
		colors=generateColors(6);
	}

	changeColors();

	message.textContent="";
	bar.style.backgroundColor="steelblue";
	selectedColor=generateSelectedColor();
	colorDisplay.textContent="RGB"+selectedColor.substr(3,selectedColor.length);
});


function changeColors()
{
	for(var i=0; i<squares.length; i++)
	{

		if(colors[i])
		{
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}

		else
		{
			squares[i].style.display="none";
		}

		squares[i].addEventListener("click",function()
		{

			pickedColor=this.style.backgroundColor;
			if(selectedColor===pickedColor)
			{
		    correct();
			}

			else
			{
		    this.style.backgroundColor="black";
		    message.textContent="TRY AGAIN!!";
			}
		});

	}
}

function correct()
{
	for(i=0; i<colors.length; i++)
	{
		squares[i].style.backgroundColor=pickedColor;
	}

	bar.style.backgroundColor=pickedColor;
	message.textContent="WAY TO GO!!";
	reset.textContent="PLAY AGAIN?";

}

function generateColors(num)
{
	var arr=[];

	for(var i=0; i<num; i++)
	{
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		var newColor="rgb(" + r + ", " + g + ", " + b +")";
		arr.push(newColor);
	}
	return arr;
}

function generateSelectedColor()
{
var random=Math.floor(Math.random()*colors.length);
return colors[random];
}