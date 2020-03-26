let spremnik = [];


document.querySelector('.plus').addEventListener('click', function(e) {
    
    let noviBroj = document.querySelector('.numInput').value
    spremnik.push(noviBroj)
    
    document.querySelector('.jednako').style.backgroundColor = 'red';

 
})


document.querySelector('.jednako').addEventListener('click', function(e) {
    let reza = 0;
    for(let i = 0; i++; i < spremnik.length) {
        reza += spremnik[i]
    }
    
    document.querySelector('.numInput').value = `= ${reza}`;
})



document.querySelector('.reset').addEventListener('click', function(e) {
    spremnik = [];
    document.querySelector('.numInput').value = '';
})



 