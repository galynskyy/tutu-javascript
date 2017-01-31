"use strict"

function checkSyntax(str) {
	var brackets = "[]{}()<>";
	var result = [];
	var position;

	for(var i = 0; i < str.length; i++) {
		
		position = brackets.indexOf(str[i]);
		if(position == -1) {
			continue;
		}

		if(position % 2 == 0) {
			result.push(position + 1); 
		} else {
			if(result.pop() !== position) {
				return 1;
			}
		}
	}
	
	return result.length === 0 ? 0 : 1;
}

try {
	test(checkSyntax, ["---(++++)----"], 0);
	test(checkSyntax, [""], 0);
	test(checkSyntax, ["before ( middle []) after "], 0);
	test(checkSyntax, [") ("], 1);
	test(checkSyntax, ["} {"], 1);
	test(checkSyntax, ["<(   >)"], 1);
	test(checkSyntax, ["(  [  <>  ()  ]  <>  )"], 0);
	test(checkSyntax, ["   (      [)"], 1);

	console.info("Congratulations! All tests success passed.");
} catch(e) {
	console.error(e);
}

function test(call, args, count, n) {
	let r = (call.apply(n, args) === count);
	console.assert(r, `Finded items count: ${count}`);
	if (!r) throw "Test failed!";
}