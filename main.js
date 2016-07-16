
window.onload = function() {
	var boxsize = 15;
	var box = document.getElementById('box');
	for (var i = 0; i < boxsize; ++i) {
		var row = document.createElement('tr');
		for(var j = 0; j < boxsize; ++j) {
			var cell = document.createElement('td');
			cell.setAttribute("id", i + "-" + j);
			cell.setAttribute('onclick','handleCellClick(this)');		
			row.appendChild(cell);
		}
		box.appendChild(row);
	}
}
function getCellValue(x, y) {
	var cell = document.getElementById(y+"-"+x).firstChild;
	console.log(cell);
	return cell ? cell.className : '';
}

var currentStep = 0;
function handleCellClick(cell){
	var idValue = cell.getAttribute("id");
	var x = parseInt(idValue.split("-")[1]);
    var y = parseInt(idValue.split("-")[0]);
	
	if (!cell.hasChildNodes()){
		console.log("x=" + x);
		console.log("y=" + y);
		console.log("this color is " + role.innerHTML);
		var blackCount = 1;
		var whiteCount = 1;
		
		for(var i = x-1;;--i){
			if(getCellValue(i, y) == 'white'){
				++whiteCount;
			}else{
				break;
			}
		}
		for(var i = x+1;;++i){
			if(getCellValue(i, y) == 'white'){
				++whiteCount;
			}else{
				break;
			}					
		}			
		
		for(var i = x-1;;--i){
			if(getCellValue(i, y) == 'black'){
				++blackCount;
			}else{
				break;
			}
		}
		for(var i = x+1;;++i){
			if(getCellValue(i, y) == 'black'){
				++blackCount;
			}else{
				break;
			}					
		}		
				
		for(var j = y-1;;--j){
			if(getCellValue(x,j) == 'black'){
				++blackCount;
			}else{
				break;
			}
		}
		for(var j = y+1;;++j){
			if(getCellValue(x,j) == 'black'){
				++blackCount;
			}else{
				break;
			}
		}
		
		for(var j = y-1;;--j){
			if(getCellValue(x,j) == 'white'){
				++whiteCount;
			}else{
				break;
			}
		}
		for(var j = y+1;;++j){
			if(getCellValue(x,j) == 'white'){
				++whiteCount;
			}else{
				break;
			}
		}
		
				
		
		
		
		
		var div = document.createElement('div');
		if(role.innerHTML == "ºÚÆå"){
			div.setAttribute('class', 'black');
			
			
			role.innerHTML = '°×Æå';
			//step.innerHTML = parseInt(step.innerHTML) + 1; 
		}else{
			div.setAttribute('class','white');
			role.innerHTML = 'ºÚÆå';
			//step.innerHTML = parseInt(step.innerHTML) + 1;
		}
		cell.appendChild(div);
		step.innerHTML = ++currentStep;
		
		if(whiteCount>=5){
			alert('°×ÆåÊ¤');

		}
		if(blackCount>=5){
			alert('ºÚÆåÊ¤');

		}
	}
}




