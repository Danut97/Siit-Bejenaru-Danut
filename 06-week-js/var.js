let gameContainer = document.querySelector("#gameContainer")
let player  = document.querySelector('#player');
let moveBy = 8;

window.addEventListener('load', () => {
    player.style.position = 'absolute';
    player.style.left = 0;
    player.style.top = 0;
});


window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            player.style.left = parseInt(player.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            player.style.left = parseInt(player.style.left) + moveBy + 'px';
            break;
        case 'ArrowUp':
            player.style.top = parseInt(player.style.top) - moveBy + 'px';
            break;
        case 'ArrowDown':
            player.style.top = parseInt(player.style.top) + moveBy + 'px';
            break;
    }
});