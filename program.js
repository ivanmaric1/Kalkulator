let plus = []
let minus = []
let puta = []
let dijeljeno = []

document.querySelector('.plus').addEventListener('click', function(e) {
    let unos = document.querySelector('.numInput').value
    plus.push(Number(unos))
    document.querySelector('.numInput').value = ''
})

document.querySelector('.minus').addEventListener('click', function(e) {
    let unos = document.querySelector('.numInput').value
    minus.push(Number(unos))
    document.querySelector('.numInput').value = ''
})

document.querySelector('.puta').addEventListener('click', function(e) {
    let unos = document.querySelector('.numInput').value
    puta.push(Number(unos))
    document.querySelector('.numInput').value = ''
})

document.querySelector('.dijeljeno').addEventListener('click', function(e) {
    let unos = document.querySelector('.numInput').value
    dijeljeno.push(Number(unos))
    document.querySelector('.numInput').value = ''
})

document.querySelector('.jednako').addEventListener('click', function(e) {
    let NoviUnos = document.querySelector('.numInput').value
    let rezultat;

    if(plus.length % 2 === 1) {
        plus.push(Number(NoviUnos))
        rezultat = plus[plus.length - 1] + plus[plus.length - 2] 
        document.querySelector('.numInput').value = rezultat
    } else if (minus.length % 2 === 1) {
        minus.push(Number(NoviUnos))
        rezultat = minus[minus.length - 2] - minus[minus.length - 1] 
        document.querySelector('.numInput').value = rezultat
    }
    else if (puta.length % 2 === 1) {
        puta.push(NoviUnos)
        rezultat = puta[puta.length - 1] * puta[puta.length - 2] 
        document.querySelector('.numInput').value = rezultat
    }
    else {
        dijeljeno.push(Number(NoviUnos))
        rezultat = dijeljeno[dijeljeno.length - 2] / dijeljeno[dijeljeno.length - 1] 
        document.querySelector('.numInput').value = rezultat
    }
})

document.querySelector('.reset').addEventListener('click', function(e) {
    document.querySelector('.numInput').value = ''
    let plus = []
    let minus = []
    let puta = []
    let dijeljeno = []
})