//Так і не зміг вирішити питання як читати лабіринт з консолі
let level_map;
let start_i;
let start_j;
let level;
//Взяв всі мапи та старт точки з файлу http://zhesha.github.io/robohub/robohub/levels.js
for (level = 1; level < 8; level++) {
    switch(level) {
        case 1:
            start_i = 3;
            start_j = 1;
            level_map = [
                ['#','#','#'],
                ['#','*','#'],
                ['#',' ','#'],
                ['#',' ','#'],
                ['#','#','#']
            ]; 
            break;
        case 2:
            start_i = 1;
            start_j = 1;
            level_map = [
                ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'],
                ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','*','#'],
                ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#']
            ];  
            break;
        case 3:
            start_i = 1;
            start_j = 1;
            level_map = [
                ['#','#','#','#','#','#','#','#','#','#'],
                ['#',' ','#','#','#','#','#','#','#','#'],
                ['#',' ',' ','#','#','#','#','#','#','#'],
                ['#','#',' ',' ','#','#','#','#','#','#'],
                ['#','#','#',' ',' ','#','#','#','#','#'],
                ['#','#','#','#',' ',' ','#','#','#','#'],
                ['#','#','#','#','#',' ',' ','#','#','#'],
                ['#','#','#','#','#','#',' ',' ','#','#'],
                ['#','#','#','#','#','#','#',' ','*','#'],
                ['#','#','#','#','#','#','#','#','#','#']
            ];
            break;
        case 4:            
            start_i = 1;
            start_j = 1;
            level_map = [
                ['#','#','#','#','#','#','#','#','#'],
                ['#',' ','#','#','#','#','#','#','#'],
                ['#',' ',' ',' ',' ','#','#','#','#'],
                ['#','#','#','#',' ','#','#','#','#'],
                ['#','#','#','#',' ',' ','#','#','#'],
                ['#','#','#','#','#',' ','#','#','#'],
                ['#','#','#','#','#',' ','#','#','#'],
                ['#','#','#','#','#',' ',' ',' ','#'],
                ['#','#','#','#','#','#','#','*','#'],
                ['#','#','#','#','#','#','#','#','#']
            ];
            break;
        case 5:
            start_i = 1;
            start_j = 1;
            level_map = [
                ['#','#','#','#','#','#','#','#','#'],
                ['#',' ',' ',' ',' ',' ',' ',' ','#'],
                ['#','#','#','#','#','#','#',' ','#'],
                ['#',' ',' ',' ','#',' ',' ',' ','#'],
                ['#',' ','#',' ','#',' ','#','#','#'],
                ['#',' ','#',' ','#',' ','#','#','#'],
                ['#',' ','#',' ',' ',' ','#','#','#'],
                ['#',' ','#','#','#','#','#','#','#'],
                ['#',' ',' ',' ',' ',' ',' ','*','#'],
                ['#','#','#','#','#','#','#','#','#']
            ];
            break;
        case 6:
            start_i = 1;
            start_j = 1;
            level_map = [
                ['#','#','#','#','#','#','#','#','#'],
                ['#',' ','#',' ',' ',' ',' ',' ','#'],
                ['#',' ','#','#',' ','#','#',' ','#'],
                ['#',' ','#',' ',' ','#','#',' ','#'],
                ['#',' ','#',' ','#','#','#',' ','#'],
                ['#',' ','#',' ','#',' ',' ',' ','#'],
                ['#',' ',' ',' ','#',' ','#',' ','#'],
                ['#','#','#',' ','#',' ','#','#','#'],
                ['#',' ',' ',' ','#',' ',' ','*','#'],
                ['#','#','#','#','#','#','#','#','#']
            ];
            break;
        case 7:
            start_i = 1;
            start_j = 1;
            level_map = [
                ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'],
                ['#',' ','#',' ',' ',' ',' ',' ','#','#','#','#','#','#','#','#','#','#'],
                ['#',' ','#',' ','#',' ','#',' ',' ','#','#','#','#','#','#','#','#','#'],
                ['#',' ','#','#','#',' ','#','#',' ',' ',' ','#','#','#','#','#','#','#'],
                ['#',' ',' ','#',' ',' ',' ','#',' ','#',' ','#','#','#','#','#','#','#'],
                ['#',' ',' ','#',' ',' ',' ','#',' ','#',' ','#','#','#','#','#','#','#'],
                ['#',' ','#','#','#',' ','#','#',' ',' ',' ','#','#','#','#','#','#','#'],
                ['#',' ',' ',' ','#',' ','#',' ',' ','#','#','#','#','#','#','#','#','#'],
                ['#',' ','#',' ','#',' ','#',' ','#','#','#','#','#','#','#','#','#','#'],
                ['#',' ','#',' ','#',' ','#',' ','#','#','#','#','#','#','#','#','#','#'],
                ['#',' ',' ',' ','#',' ','#',' ','#','#','#','#','#','#','#','#','#','#'],
                ['#',' ','#','#','#',' ','#',' ','#','#','#','#','#','#','#','#','#','#'],
                ['#',' ',' ',' ',' ',' ','#',' ','#','#','#',' ','#','#','#','#','#','#'],
                ['#','#','#',' ','#','#','#',' ','#','#','#',' ','#','#','#','#','#','#'],
                ['#',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#'],
                ['#',' ','#','#','#',' ','#','#','#','#','#',' ','#','#','#',' ','#','#'],
                ['#',' ','#','#',' ',' ','#','#','#','#','#',' ','#','#','#',' ','#','#'],
                ['#',' ',' ','#',' ','#','#','#','#','#','#','#','#','#','#',' ','#','#'],
                ['#',' ','#','#',' ','#','#','#','#','#','#','#','#','#','#',' ','#','#'],
                ['#','#','#',' ',' ','#','#','#','#','#','#','#','#','#','#',' ','#','#'],
                ['#','#',' ',' ','#','#','#','#','#','#','#','#','#','#','#',' ','#','#'],
                ['#',' ',' ','#','#','#','#','#','#','#','#','#','#','#','#',' ','#','#'],
                ['#',' ','#','#','#','#','#','#','#','#','#','#','#','#','#',' ','#','#'],
                ['#',' ','#','#','#','#','#','#','#','#','#','#','#','#','#',' ','*','#'],
                ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#']
            ];
            break;
    };

    exit(start_i, start_j, level_map);

};

function exit(start_i, start_j, level_map) {

//Спочатку думав просто порахувати де знаходиться вихід з лабіринту але вирішив написати код який шукає вихід з лабіринту символ "*"
let end_position_i, end_position_j;
let start_position_i = start_i;
let start_position_j = start_j;
let arr_width = level_map.length;
let arr_heigth = level_map [0].length;
    
    for (let i = 0; i < arr_width; i++) {
        for (let j = 0; j < arr_heigth; j++) {
            if (level_map [i][j] == '*') {
                end_position_i = i;
                end_position_j = j;
            }
        }
    };
    
};





//Далі буду намагатись використовувати або хвильовий алгоритм або правило однієї руки


let status;
while (isFree ('north')) {
    north ();
};

if ("next") {
        status = 1;
    };

while (status != 1) {
    east ();
    if ("next") {
        status = 1;
    } else if (isFree ('south')) {
        south ();
        west ();
        north ();
        if (isFree ('south')) {
            south ();
            west ();
        };
    };
};



while (isFree('east') || isFree('west') || isFree('south') || isFree('north')) {
if (isFree ('north')) {
    north ();
} else if (isFree ('east')) {
    east ();
} else if (isFree ('south')) {
    south ();
} else if (isFree ('west')) {
    west ();
}
}




while () {
    if (isFree ('north')) {
        while (isFree ('north')) {
            north ();	
        }
    } else if (isFree ('east')) {
        while (isFree ('east')) {
            east ();	
        }
    } else if (isFree ('south')) {
        while (isFree ('south')) {
            east ();	
        }
    } else if (isFree ('weast')) {
        while (isFree ('weast')) {
            east ();	
        }
    }
}





//Розібратися з кодом
this.checkPoints= function(p)
{	
  var count = p.length;
  points = new Array();
  //если закончен расчёт, тикаем
  if(count==0 || bEnd) return;
    //обходим точки
    for(i=0;i<count;++i
    {
      //если достигли конца, то тикаем
      if(p[i].i == endPoint.i && p[i].j == endPoint.j)
      {
	bEnd = true;
	return;
      }
      //var x = 0;
      //var y = 0;
      //проверяем окружные 8 клеток
      for( y=-1;y<=1;++y)
	for( x=-1;x<=1;++x)
	  if(!(x==0&&y==0))
	    //проверка на выход за пределы поля
	    if(checkPointLimit(p[i].i+y,p[i].j+x))
	      if(mas[p[i].i+y][p[i].j+x] ==0)
		//проверка на препятствия
	        if(checkPointObstacle(p[i].i+y, p[i].j+x,p[i].i, p[i].j))
		  //проверка значения
		  if(checkPointValue (p[i].i+y,p[i].j+x,  mas[p[i].i][p[i].j]+((Math.abs(x)==Math.abs(y))?1.6:1), points))
                    //если надо, рисуем волны
		    if(showPriority && typeOfDrawing == 1) 
		    {
			var ar = new Array();
			ar[0]={i:p[i].i+y, j:p[i].j+x};
			delay+=10;
			timer = setTimeout( function(ar ) {return function(){self.drawPointsAsynchron(ar)}}(ar), delay);
		    }
    }
    //повторяем для новых клеток
    this.checkPoints(points);
}
