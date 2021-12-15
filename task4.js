function filterRange(array, a, b) {
    var result = [];
    var i;
    for (i = 0; i != array.length; i++)
        if (i >= a && i <= b)
            result.push(array[i]);
    return result;
}

const array = [1, 3, 4, 7, 35, 5, 8, 9];
var a = 3;
var b = 5;
console.log(filterRange(array, a, b));
