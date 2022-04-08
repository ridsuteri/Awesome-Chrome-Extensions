let board = [];
let panel = document.getElementsByName('panel');


const UP = 1;
const DOWN = 2;
const LEFT = 3;
const RIGHT = 4;


let imageFile = ['p0.jpg', 'p2.jpg', 'p4.jpg', 'p8.jpg',
    'p16.jpg', 'p32.jpg', 'p64.jpg', 'p128.jpg',
    'p256.jpg', 'p512.jpg', 'p1024.jpg', 'p2048.jpg'
];



window.onload = () => {
    if (loadBoard() == false) {
        initBoard();
    }
    dispBoard();
}


// Click method for up button.
document.getElementById('id_up').onclick = () => {
    onFling(UP);
}


document.getElementById('id_down').onclick = () => {
    onFling(DOWN);
}



document.getElementById('id_left').onclick = () => {
    onFling(LEFT);
}



document.getElementById('id_right').onclick = () => {
    onFling(RIGHT);
}


document.getElementById('id_restart').onclick = () => {
    initBoard();
    dispBoard();
}

let wait = false;



function onFling(direction) {
    if (wait == true) return;
    prePackPanel(direction);
    combinePanel(direction);
    prePackPanel(direction);
    dispBoard();
    wait = true;

    setTimeout(afterOnFling, 1000);
}


function afterOnFling() {
    if (checkWin()) {
        alert('You Win.');
        initBoard();
        dispBoard();
        wait = false;
    } else {
        setPanel();
        dispBoard();
        if (checkLoss()) {

            setTimeout(youLoss, 1000);
        } else {
            saveBoard();
            wait = false;
        }
    }
}


function youLoss() {
    alert('You Loss.');
    initBoard();
    dispBoard();
    wait = false;
}

function initBoard() {
    for (let x = 0; x < 4; x++) {
        board[x] = [];
        for (let y = 0; y < 4; y++) {
            board[x][y] = 0;
        }
    }

    setPanel();
    setPanel();
}


function dispBoard() {
    for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 4; y++) {
            panel[x * 4 + y].src = imageFile[board[x][y]];
        }
    }
}


function prePackPanel(direction) {
    let i = 0;
    if (direction == DOWN || direction == UP) {
        for (let y = 0; y < 4; y++) {
            let tmp = [0, 0, 0, 0];
            if (direction == DOWN) {
                i = 3;
                for (let x = 3; x >= 0; x--) {
                    if (board[x][y] == 0) {
                        continue;
                    }
                    tmp[i--] = board[x][y];
                }
            } else {
                i = 0;
                for (let x = 0; x < 4; x++) {
                    if (board[x][y] == 0) {
                        continue;
                    }
                    tmp[i++] = board[x][y];
                }
            }
            for (let x = 0; x < 4; x++) {
                board[x][y] = tmp[x];
            }
        }
    } else {
        for (let x = 0; x < 4; x++) {
            let tmp = [0, 0, 0, 0];
            if (direction == RIGHT) {
                i = 3;
                for (let y = 3; y >= 0; y--) {
                    if (board[x][y] == 0) {
                        continue;
                    }
                    tmp[i--] = board[x][y];
                }
            } else {
                i = 0;
                for (let y = 0; y < 4; y++) {
                    if (board[x][y] == 0) {
                        continue;
                    }
                    tmp[i++] = board[x][y];
                }
            }
            for (let y = 0; y < 4; y++) {
                board[x][y] = tmp[y];
            }
        }
    }
}


function combinePanel(direction) {
    if (direction == DOWN || direction == UP) {
        for (let y = 0; y < 4; y++) {
            if (direction == DOWN) {
                for (let x = 3; x > 0; x--) {
                    if (board[x][y] == 0) continue;
                    if (board[x][y] == board[x - 1][y]) {
                        board[x][y]++;
                        board[x - 1][y] = 0;
                    }
                }
            } else {
                i = 0;
                for (let x = 0; x < 3; x++) {
                    if (board[x][y] == 0) continue;
                    if (board[x][y] == board[x + 1][y]) {
                        board[x][y]++;
                        board[x + 1][y] = 0;
                    }
                }
            }
        }
    } else {
        for (let x = 0; x < 4; x++) {
            if (direction == RIGHT) {
                for (let y = 3; y > 0; y--) {
                    if (board[x][y] == 0) continue;
                    if (board[x][y] == board[x][y - 1]) {
                        board[x][y]++;
                        board[x][y - 1] = 0;
                    }
                }
            } else {
                i = 0;
                for (let y = 0; y < 3; y++) {
                    if (board[x][y] == 0) continue;
                    if (board[x][y] == board[x][y + 1]) {
                        board[x][y]++;
                        board[x][y + 1] = 0;
                    }
                }
            }
        }
    }
}

function setPanel() {
    let zeroX = [];
    let zeroY = [];
    for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 4; y++) {
            if (board[x][y] == 0) {
                zeroX.push(x);
                zeroY.push(y);
            }
        }
    }
    if (zeroX.length == 0) return;
    let i = Math.floor(Math.random() * zeroX.length);
    board[zeroX[i]][zeroY[i]] = 1;
}


function checkWin() {
    for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 4; y++) {
            if (board[x][y] == 11) return true;
        }
    }
    return false;
}



function checkLoss() {
    for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 4; y++) {
            if (board[x][y] == 0) return false;
        }
    }
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == board[i][j + 1]) return false;
            if (board[j][i] == board[j + 1][i]) return false;
        }
    }
    return true;
}



function saveBoard() {
    localStorage['board'] = board;
}


function loadBoard() {
    let savedBoard = localStorage['board'];
    if (savedBoard == null) return false;
    savedBoard = savedBoard.split(',');
    let i = 0;
    for (let x = 0; x < 4; x++) {
        board[x] = [];
        for (let y = 0; y < 4; y++) {
            board[x][y] = savedBoard[i++];
        }
    }
    return true;
}