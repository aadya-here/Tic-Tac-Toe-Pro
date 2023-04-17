const tiles = document.querySelectorAll('.tile');
const btn = document.querySelector('#reset');
let player = document.querySelector('display');
let h = document.querySelector('h3');
let animatedX = document.getElementById('forAnimation');
let isGameOver = false;

let score = ['', '', '', '', '', '', '', '', ''];

let t1 = document.getElementById('1');
let t2 = document.getElementById('2');
let t3 = document.getElementById('3');
let t4 = document.getElementById('4');
let t5 = document.getElementById('5');
let t6 = document.getElementById('6');
let t7 = document.getElementById('7');
let t8 = document.getElementById('8');
let t9 = document.getElementById('9');
let currPlayer = 'X';

for (let tile of tiles) {
    // console.log(tile.id);
    tile.disabled = false;
    if (isGameOver == false && tile.disabled == false) {
        tile.addEventListener('click', () => {
            if (tile.disabled == false) {
                tile.innerText = currPlayer;
                //score[tile.index()] = currPlayer;
                tile.disabled = true;
                tile.style.pointerEvents = "none";
                switchPlayer();
                if (currPlayer == 'X') {
                    tile.classList.add('playerX');
                }
                else {
                    tile.classList.add('playerO');
                }
                check();
                if(isGameOver) {
                    doGameOver();
                }
            }          
        }
        )
    }
}

const fadeOutAnimation = [
    {
        transform: 'scale(1)',
        opacity: '100%',
        color: '#44E5E7',

    },
    {
        transform: 'scale(25)',
        opacity: '0%',
        color: '#44E5E7',
    }
];
const fadeOutTiming = {
    duration: 500,
    iterations: 1,
  }

function doGameOver() {
    for(let tile of tiles) {
        tile.style.pointerEvents = "none";
    }
    h.animate(fadeOutAnimation, fadeOutTiming);
    // console.log("doGameOver");
}

// reset button code
btn.addEventListener('click', () => {
    let i = 0;
    isGameOver = false;
    // console.log("reset");
    for (let tile of tiles) {
        tile.style.pointerEvents = "auto";
        tile.disabled = false;
        tile.innerText = '';
        tile.classList.remove('playerX', 'playerO');
        i++;
    }
    animatedX.style.display = "none";
    h.innerText = `Player ${currPlayer}'s Turn`;
})

function switchPlayer() {
    currPlayer = (currPlayer == 'X' ? 'O' : 'X');
    h.innerText = `Player ${currPlayer}'s Turn`;
}

function check() {
    // console.log("check");
    let areAllDisabled = true;
    for(let tile of tiles) {
        if(tile.disabled == false) {
            areAllDisabled = false;
            break;
        }
    }
    // score[tile];
    if (t1.innerText == t2.innerText && t1.innerText == t3.innerText && t1.innerText != '') {
        doOver();
    }
    else if (t4.innerText == t5.innerText && t4.innerText == t6.innerText && t6.innerText != '') {
        doOver();
    }
    else if (t7.innerText == t8.innerText && t7.innerText == t9.innerText && t9.innerText != '') {
        doOver();
    }
    else if (t1.innerText == t4.innerText && t4.innerText == t7.innerText && t7.innerText != '') {
        doOver();
    }
    else if (t2.innerText == t5.innerText && t2.innerText == t8.innerText && t8.innerText != '') {
        doOver();
    }
    else if (t3.innerText == t6.innerText && t9.innerText == t6.innerText && t6.innerText != '') {
        doOver();
    }
    else if (t3.innerText == t5.innerText && t3.innerText == t7.innerText && t7.innerText != '') {
        doOver();
    }
    else if (t1.innerText == t5.innerText && t1.innerText == t9.innerText && t9.innerText != '') {
        doOver();
    }
    else if(areAllDisabled) {
        h.innerText = 'TIE';
        isGameOver = true;
    }    
}

function doOver() {
    // console.log("doOver");
    let tempCurrPlayer = (currPlayer == 'X' ? 'O' : 'X');
    h.innerText = `Player ${tempCurrPlayer} Wins`;
    isGameOver = true;

}