var P1arr = [];
var P2arr = [];

var winningChecks = [,
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],[2,5,8],[2,4,7],[0,4,8]];

var r1 = [0,1,2];
var r2 = [3,4,5];
var r3 = [6,7,8];

var winning = {
}

var matrix = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
            ];


var player = 'X';
var table = document.querySelector('.block');
console.log(table);
table.addEventListener('click', captureClick);


function captureClick (ev) {
    console.log(ev.target.dataset.j);
    var getLocation = matrix[ev.target.dataset.i][ev.target.dataset.j];
    if (getLocation === ''){
        player = swapPlayer();
        ev.target.textContent = player;
        matrix[ev.target.dataset.i][ev.target.dataset.j] = 1;
        console.log(matrix);
        //run winning considitions check
    } else {

    }
    
    // populateArray(ev);

}

function swapPlayer() {
    return player === 'X'? 'O' : 'X';
}

function checkWinningCondition () {

}

// function populateArray(ev) {
//     if (player === 'X') {
//         if (ev.target.className === 'cell1') {
//             r1++;
//         } else if () {

//         }
//     } else {

//     }

// }