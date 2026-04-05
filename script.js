const makeChange = (c) => {
  // your name here
	amount = Number(c);
	const coins = [
		{key : q , value : 25},
		{key : d , value : 10},
		{key : n , value :  5},
		{key : p , value :  1}
	]
	const result = {q:0, d:0, n:0, p:0};

	for(let coin of coins){
		result[coins.key] = Math.floor(amount/coins.value);
		amount = amount % coins.value;
	}
	return result;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
