// Board and panel definitions
let board = [];
let panel = document.getElementsByName('panel');

// Panel movement direction
const UP = 1;
const DOWN = 2;
const LEFT = 3;
const RIGHT = 4;


// Panel image
let imageFile = ['p0.jpg', 'p2.jpg', 'p4.jpg', 'p8.jpg',
    'p16.jpg', 'p32.jpg', 'p64.jpg', 'p128.jpg',
    'p256.jpg', 'p512.jpg', 'p1024.jpg', 'p2048.jpg'
];


// Called when index.html is loaded.
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


// Click method for down button.
document.getElementById('id_down').onclick = () => {
    onFling(DOWN);
}


// Click method for left button.
document.getElementById('id_left').onclick = () => {
    onFling(LEFT);
}


// Click method for right button.
document.getElementById('id_right').onclick = () => {
    onFling(RIGHT);
}


// Click method for restart button.
document.getElementById('id_restart').onclick = () => {
    initBoard();
    dispBoard();
}

let wait = false;


// Processing when the direction button is clicked.
//  If post-processing is scheduled, processing will be interrupted.
//  Pre-pack the panel.
//  Combine panels with the same value after pre-packing.
//  If there is a gap due to compositing, pre-pack it again.
//  Display the board.
//  Schedule post-processing after 1 second.
function onFling(direction) {
    if (wait == true) return;
    prePackPanel(direction);
    combinePanel(direction);
    prePackPanel(direction);
    dispBoard();
    wait = true;
    // 1000
    // Execute afterOnFling() after 1000ms(1sec).
    setTimeout(afterOnFling, 1000);
}