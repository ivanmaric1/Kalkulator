let spremnik;

document.querySelector('.plus').addEventListener('click', function(e) {
    spremnik = document.querySelector('.numInput').value

    console.log(spremnik)
})




document.querySelector('.reset').addEventListener('click', function(e) {
    spremnik = 0;
})



