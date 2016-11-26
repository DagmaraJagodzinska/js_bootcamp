// plik scripts.js
var name = prompt('Wpisz swoje imię');
alert('Witaj, ' + name);
console.log('Witaj, ' + name);

var a = prompt('Podaj a');
var h = prompt('Podaj h');
triangleArea = a*h/2;
console.log ('Pole trójkąta o podstawie a= ' + a + ' i wysokości h= ' + h + ' wynosi ' +triangleArea);

var a = prompt('Podaj a');
var b = prompt('Podaj b');
value = (a*a) + (2 * a * b) - (b*b);
console.log('Wynik drugiego działania wynosi ' + value);

if (value>0) {
	console.log('Wynik jest dodatni');
}
else {
	console.log('Wynik jest ujemny');
}