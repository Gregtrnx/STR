document.querySelector('.searchbar').addEventListener('focus', function() {
    document.querySelector('.ship').style.display = 'none';
});

document.querySelector('.searchbar').addEventListener('blur', function() {
    document.querySelector('.ship').style.display = 'inline';
});

document.querySelector('.icon').addEventListener('click', function() {
    this.classList.add('clicked');
    
    // Retirer la classe après l'animation pour pouvoir cliquer à nouveau
    setTimeout(() => {
        this.classList.remove('clicked');
    }, 150); // Durée de 150ms pour correspondre à la transition
});

document.querySelector('form>*').addEventListener('click', function() {
    this.classList.add('clicked');
    
    // Retirer la classe après l'animation pour pouvoir cliquer à nouveau
    setTimeout(() => {
        this.classList.remove('clicked');
    }, 150); // Durée de 150ms pour correspondre à la transition
});
