const summa = 100, 
	kgTomato = 10,
	kgCucumber = 5,
	kgApple = 15;
let nuts = summa - 2*(kgTomato + kgCucumber + kgApple);
console.log ('На орехи мы потратили', nuts, "деняк");
console.log ('На орехи мы потратили больше, чем на овощи и фрукты?', nuts > (2*(kgTomato + kgCucumber + kgApple)));
(nuts > 2*(kgTomato + kgCucumber + kgApple))
	? console.log ('Больше потратили на орехи')
	: console.log ('Больше потратили на овощи и фрукты')

