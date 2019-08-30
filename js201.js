'use strict';
var Year = Number(prompt('Hvilket årstal er vi i?'));
console.log((Year%4==0)&&(Year%100!=0)||(Year%400==0));