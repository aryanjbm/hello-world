var mat=[];
var m=4;
var n=4;

var xdir=[0,0,1,-1];
var ydir=[1,-1.0,0];
function bfs(s,d){
	queue=[s];
	
	
	while(queue.length!=0){
		var u=queue.shift();
		var currX=u[0];
		var currY=u[1];
		mat[currX][currY]==1;
		for(var i=0;i<4;i++){
			if(currX+xdir[i]<n && currY+ydir[i]<n && currX+xdir[i]>=0 && currY+ydir[i]>=0){
				if(mat[currX+xdir[i]][currY+ydir[i]]==0){
					
					if(currX+xdir[i]===d[0] && currY+ydir[i]===d[1])
						return true;
					
					
					queue.push([currX+xdir[i],currY+ydir[i]]);
					mat[currX+xdir[i]][currY+ydir[i]]=1;
				}
				
			}
		}
			
		
	}
	
	return false;
	
}







for(var i=0;i<n;i++){
	mat.push([]);
	for(var j=0;j<n;j++){
		mat[i].push(0);
		
	}
}

var board=document.createElement("div");
var table = document.createElement("table");
board.appendChild(table);

for(var i=0;i<n;i++){
var row=document.createElement("tr");
for(var j=0;j<n;j++){
var col =document.createElement("td");
var text=document.createTextNode(mat[i][j]);

col.appendChild(text);
	row.appendChild(col);
}
	table.appendChild(row);
}
board.appendChild(table);
document.body.appendChild(board);


