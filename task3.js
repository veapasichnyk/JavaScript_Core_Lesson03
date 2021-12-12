function find(arr, value) {
    if (arr.includes(value)) {
        return arr.indexOf(value);
    } else {
        return -1;
    }
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let value = "Apple";
console.log(find(fruits, value));