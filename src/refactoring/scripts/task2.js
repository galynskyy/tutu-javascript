function drawRating(vote) {
    if ((vote < 0) || (vote > 100)) throw new SyntaxError("Данные некорректны");

    var stars =  Math.ceil( vote / 20 );
    
    stars = (stars == 0) ? 1 : stars;
    
    return stars;
}

// Проверка работы результата
console.log(drawRating(0) ); // ★☆☆☆☆
console.log(drawRating(1) ); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★