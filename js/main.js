var alertWindow = document.querySelector('.alert');
var buttonOpen = document.querySelector('.up');
var buttonClose = document.querySelector('.alert__ok');

buttonOpen.addEventListener('click', function(){
    alertWindow.style.display = "block";
});

buttonClose.addEventListener('click', function(){
    alertWindow.style.display = "none";
})