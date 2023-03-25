let num1;
let num2;
let num3;
x = document.getElementById("demo1").innerHTML = (Math.round(Math.random(num1)*20));
y = document.getElementById("demo2").innerHTML = (Math.round(Math.random(num2)*20));
z = document.getElementById("demo3").innerHTML = (Math.round(Math.random(num3)*20));

var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.getElementById("stat2").innerHTML = alpha.charAt(x);

var largest = Math.max(x,y,z);

if (largest == x){
	rating = "Chocolates";
}

else if (largest == y){
	rating = "Gummies";
}

else {
	rating = "Lollipops";
}

document.getElementById("stat1").innerHTML = rating + " ("+largest+")";

var hour = Math.ceil(y*z/60);

document.getElementById("stat3").innerHTML = y*z + " mins, or " + hour + " hours";