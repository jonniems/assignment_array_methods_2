//Opdracht A:
const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

const findSpiderMan = function (array) {
    return array.find(function (superhero) {
        return superhero.name === "Spiderman";
    });
};

console.log(findSpiderMan(superheroes));
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

//Opdracht B:
const doubleArrayValues = function (array) {
    let newArray = [];
    array.forEach(function (element) {
        newArray.push(element * 2);
    });
    return newArray;
};

console.log(doubleArrayValues([1, 2, 3]));
// result should be [2, 4, 6]

//Opdracht C:
const containsNumberBiggerThan10 = function (array) {
    return array.some(function (element) {
        return element > 10;
    });
};

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
// result should be true
console.log(containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]));
// result should be false

//Opdracht D:
const isItalyInTheGreat7 = function (array) {
    return array.includes("Italy")
};

console.log(isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']));
// result should be true

//Opdracht E:
const tenfold = function (array) {
    let newArray = [];
    array.forEach(function (element) {
        newArray.push(element * 10);
    });
    return newArray;
};

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));

//Opdracht F:
const isBelow100 = function (array) {
    return array.every(function (element) {
        return element < 100;
    });
};

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]));

//Opdrcht G:
const bigSum = function (array) {
    return array.reduce((item, currentTotal) => {
        return item + currentTotal
    }, 0)
};

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]));