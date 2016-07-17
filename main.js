var boxsize = 15;
window.onload = function() {
	//��ʼ������
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
		// ������Ϊ
		var previousChessColor;
		var div = document.createElement('div');
		if(role.innerHTML == "����"){
			div.setAttribute('class', 'black');
			previousChessColor = '����';
			role.innerHTML = '����';
			//step.innerHTML = parseInt(step.innerHTML) + 1; 
		}else{
			div.setAttribute('class','white');
			previousChessColor = '����';
			role.innerHTML = '����';
			//step.innerHTML = parseInt(step.innerHTML) + 1;
		}
		cell.appendChild(div);
		step.innerHTML = ++currentStep;
		
		//�ж�Ӯ
		var steps = [[1, 0], [0, 1], [1, 1], [1, -1]];
		for(var i = 0; i < 4; i++) {
			if(judgeChessWin(x, steps[i][0], y, steps[i][1])){
				alert(previousChessColor + "Ӯ��");
				//��������
			}
		}
		
	}
}

//�õ���Ԫ����ɫ
function getCellColor(x, y) {
	if(outOfRange(x, y)) {
		return '';
	}
	var cell = document.getElementById(y+"-"+x).firstChild;
	return cell ? cell.className : '';
}
//�ж��Ƿ�Խ��
function outOfRange(x, y) {
	return x < 0 || x >= boxsize || y < 0 || y >= boxsize;
}
//��������ĳ�������ϵ���������
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
//�ж�cell��ĳ��������ɫ��ĳ�������ϵ�����		
function judgeChessWin(x, xstep, y, ystep){
	var chessColor = getCellColor(x, y);
	var count = 0;
	count += caculateChess(chessColor, x, xstep, y, ystep);
	count += caculateChess(chessColor, x, -xstep, y, -ystep);
	return count > 5;
}	





