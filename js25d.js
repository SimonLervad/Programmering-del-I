'use strict';
console.log('Truth table for disjunction');
console.log('var1\tvar2\tvar1 && var2')
var var1 = true;
console.log(var1 + '\t' + var1 + '\t' + var1);
console.log(var1 + '\t' + !var1 + '\t' + var1);
console.log(!var1 + '\t' + var1 + '\t' + var1);
var var1 = false;
console.log(var1 + '\t' + var1 + '\t' + var1);
