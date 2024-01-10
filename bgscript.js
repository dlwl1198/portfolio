window.addEventListener('scroll', function() {
    const body = document.querySelector('#container');
    const threshold = 10;                  // 스크롤이 어느 정도 내려갔을 때 색이 바뀔지 정함

    if (window.scrollY > threshold) {
        body.classList.add('bg-color-2');
        body.classList.remove('bg-color-1');
    } else {
        body.classList.add('bg-color-1');
        body.classList.remove('bg-color-2');
    }
}
);

function red(e) {
    e.target.style.backgroundColor = "red"
}

function blue(e) {
    e.target.style.backgroundColor = "blue"
}