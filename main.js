var boxsize = 15;
window.onload = function() {
	//初始化棋盘
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

var currentStep = 0;
function handleCellClick(cell){ 
	var idValue = cell.getAttribute("id");
	var x = parseInt(idValue.split("-")[1]);
    var y = parseInt(idValue.split("-")[0]);
	
	if (!cell.hasChildNodes()){
		// 落子行为
		var previousChessColor;
		var div = document.createElement('div');
		if(role.innerHTML == "黑棋"){
			div.setAttribute('class', 'black');
			previousChessColor = '黑棋';
			role.innerHTML = '白棋';
			//step.innerHTML = parseInt(step.innerHTML) + 1; 
		}else{
			div.setAttribute('class','white');
			previousChessColor = '白棋';
			role.innerHTML = '黑棋';
			//step.innerHTML = parseInt(step.innerHTML) + 1;
		}
		cell.appendChild(div);
		step.innerHTML = ++currentStep;
		
		//判断赢
		var steps = [[1, 0], [0, 1], [1, 1], [1, -1]];
		for(var i = 0; i < 4; i++) {
			if(judgeChessWin(x, steps[i][0], y, steps[i][1])){
				alert(previousChessColor + "赢了");
				//禁用棋盘
			}
		}
		
	}
}

//拿到单元格颜色
function getCellColor(x, y) {
	if(outOfRange(x, y)) {
		return '';
	}
	var cell = document.getElementById(y+"-"+x).firstChild;
	return cell ? cell.className : '';
}
//判断是否越界
function outOfRange(x, y) {
	return x < 0 || x >= boxsize || y < 0 || y >= boxsize;
}
//计算落子某个方向上的棋子数量
function caculateChess(chessColor, x, xstep, y, ystep){
	var nextX = x + xstep;
	var nextY = y + ystep;
	var nextColor = getCellColor(nextX, nextY);
	var count = 1;
	while(nextColor == chessColor && count < 5){
		count++;
		nextX = nextX + xstep;
		nextY = nextY + ystep;
		nextColor = getCellColor(nextX, nextY);
	}
	return count;
}
//判断cell中某个落子颜色在某个方向上的数量		
function judgeChessWin(x, xstep, y, ystep){
	var chessColor = getCellColor(x, y);
	var count = 0;
	count += caculateChess(chessColor, x, xstep, y, ystep);
	count += caculateChess(chessColor, x, -xstep, y, -ystep);
	return count > 5;
}	





