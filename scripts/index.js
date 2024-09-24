document.querySelector('.searchbar').addEventListener('focus', function() {
    document.querySelector('.ship').style.display = 'none';
});

document.querySelector('.searchbar').addEventListener('blur', function() {
    document.querySelector('.ship').style.display = 'inline';
});
