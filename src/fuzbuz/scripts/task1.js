"use strict";

function dscount(str, firstChar, secondChar) {
    var count = 0;
    str = str.toLowerCase();
    firstChar = firstChar.toLowerCase();
    secondChar = secondChar.toLowerCase();

    for(var i = 0; i < str.length - 1; i++){
        if(str.charAt(i) == firstChar && str.charAt(i + 1) == secondChar) {
            count++;
        }
    }
    return count;
} 

try {
    test(dscount, ['ab___ab__', 'a', 'b'], 2);
    test(dscount, ['___cd____', 'c', 'd'], 1);
    test(dscount, ['de_______', 'd', 'e'], 1);
    test(dscount, ['12_12__12', '1', '2'], 3);
    test(dscount, ['_ba______', 'a', 'b'], 0);
    test(dscount, ['_a__b____', 'a', 'b'], 0);
    test(dscount, ['-ab-аb-ab', 'a', 'b'], 2);
    test(dscount, ['aAa', 'a', 'a'], 2);

    console.info("Congratulations! All tests success passed.");
} catch(e) {
    console.error(e);
}

// Простая функция тестирования
function test(call, args, count, n) {
    let r = (call.apply(n, args) === count);
    console.assert(r, `Finded items count: ${count}`);
    if (!r) throw "Test failed!";
}