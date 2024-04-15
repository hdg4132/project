window.onload = function() {
    var toTopButton = document.createElement('div');
    toTopButton.innerHTML = '<a href="#header"><img src="./img/btnTop.png" alt="Top"></a>';
    toTopButton.style.position = 'fixed';
    toTopButton.style.bottom = '20px';
    toTopButton.style.right = '20px';
    toTopButton.style.zIndex = '999';
    toTopButton.style.cursor = 'pointer';
    document.body.appendChild(toTopButton);
    toTopButton.addEventListener('click', function() {
    window.scrollTo({top :0, behavior:'smooth'});
    });
};



