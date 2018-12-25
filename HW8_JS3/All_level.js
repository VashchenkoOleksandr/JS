//http://zhesha.github.io

//Думав робити через оператор switch але нічого не виходило. 
//Знайшов кращий варіант з використанням function

restart ();
stepToNorth ();
function stepToNorth () {
    if (isFree ('north')) {
        if (north () == 'end') return 0;
        stepToEast ();
    } else { 
        stepToWest ();
    }
}

function stepToSouth () {
    if (isFree ('south')) {
        if (south () == 'end') return 0;
        stepToWest ();
    } else {
        stepToEast ();  
    } 
}    

function stepToWest () {
    if (isFree ('west')) {
        if (west () == 'end') return 0;
        stepToNorth ();
    } else { 
        stepToSouth ();
    }
}

function stepToEast () {
if (isFree ('east')) {
    if (east () == 'end') return 0;
    stepToSouth ();
} else {
    stepToNorth ();
}
} 


//Варіант проходження лабіринту №2
restart ();
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

// debugger; ЦЕ ПРОСТО ЧУДО 
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

    let map_numbers = [];
    
    for (let i = 0; i < arr_width; i++) {
        map_numbers.push([]);
        for (let j = 0; j < arr_heigth; j++) {
            map_numbers [i].push(-1);
            if (level_map [i][j] == ' ') {
                map_numbers [i][j] = 0;
            }
            if (level_map [i][j] == '*') {
                    map_numbers [i][j] = 1;
            }
        }
    };

    let exit = [[end_position_i, end_position_j]];
    let way;
    while (exit.length != 0) {
        way = exit.shift();
        if (way[0] + 1 < arr_width && map_numbers[way[0] + 1][way[1]] == 0) {
            map_numbers[way[0] + 1][way[1]] = map_numbers[way[0]][way[1]] + 1;
            exit.push([way[0] + 1, way[1]]);
        }
        if (way[0] - 1 >= 0 && map_numbers[way[0] - 1][way[1]] == 0) {
            map_numbers[way[0] - 1][way[1]] = map_numbers[way[0]][way[1]] + 1;
            exit.push([way[0] - 1, way[1]]);
        }
        if (way[1] + 1 < arr_heigth && map_numbers[way[0]][way[1] + 1] == 0) {
            map_numbers[way[0]][way[1] + 1] = map_numbers[way[0]][way[1]] + 1;
            exit.push([way[0], way[1] + 1]);
        }
        if (way[1] - 1 >= 0 && map_numbers[way[0]][way[1] - 1] == 0) {
            map_numbers[way[0]][way[1] - 1] = map_numbers[way[0]][way[1]] + 1;
            exit.push([way[0], way[1] - 1]);
        }
    }
    
    let i = start_i;
    let j = start_j;
    
    while (!(i == end_position_i && j == end_position_j)) {
        (i + 1 < arr_width && map_numbers [i + 1][j] == map_numbers [i][j] - 1)
            ? ( south (), i++)
            : (i - 1 >= 0 && map_numbers [i - 1][j] == map_numbers [i][j] - 1)
            ? (north (), i--) 
            : (j + 1 < arr_heigth && map_numbers [i][j + 1] == map_numbers [i][j] - 1)
            ? (east (), j++) 
            : (west (), j--)
    }
}