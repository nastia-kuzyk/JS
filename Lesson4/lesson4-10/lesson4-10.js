function arrayMinValue(numbers) {
    let min = numbers[0];
    for (let i = 1; i<numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}

    console.log(arrayMinValue([99, 1, -10, 19, 999, -3290, 49011]));