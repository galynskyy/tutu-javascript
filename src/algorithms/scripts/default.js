var pans = 2;
var pancake = 3;
var sides = 2;
var time = 1;
var capacity = 1;

function fry(){
    return (pancake * sides * time) / (pans * capacity);
}

console.log(fry() + " minutes");