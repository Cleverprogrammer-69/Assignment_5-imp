import inquirer from 'inquirer';
//Q1
console.log("hello world");
//Q2
let temperature = 12;
if (temperature < 20)
    console.log("It's cold!");
//Q3
let apples = 10;
let appleGiven = 3;
console.log(`I gave ${appleGiven} apples from ${apples}, so i have ${apples - appleGiven} apples.`);
//Q4
let firstName = "Abdullah", lastName = " Arshad";
let fullName = firstName + lastName;
console.log(`My name is ${fullName}`);
//Q5
if (5 > 3)
    console.log("Yes");
else
    console.log("No");
//Q6
const calculateArea = (radius) => Math.PI * radius * radius;
console.log(calculateArea(4.5));
//Q7
for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}
//Q8
let temperatures = [34, 42, 23, 16, 2, -5];
let max = temperatures[0];
for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > max)
        max = temperatures[i];
}
console.log("Maximum temperature in array is " + max + " Celsius");
//Q9
async function adultOrNot() {
    let prompt1 = await inquirer
        .prompt([
        {
            type: "input",
            name: "age",
            message: "What is your age?",
        },
    ]);
    if (prompt1.age < 18)
        console.log("You're minor");
    else
        console.log("You're an adult");
}
await adultOrNot();
//Q10
const positiveInArray = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0)
            count++;
    }
    return count;
};
console.log(`Positive numbers in array are : ${positiveInArray([3, 4, -4, 1, -8])}`);
//Q11
function wordsStartByA(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].startsWith("a") || array[i].startsWith("A"))
            newArray.push(array[i]);
    }
    return newArray;
}
console.log(wordsStartByA(["Apple", "orange", "airplane", "albino", "appricote"]));
//Q12
let fruits = ["apple", "banana", "orange", "mango"];
for (let i = 1; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//Q13
const squaredNumbers = (numbers) => numbers.map(number => number * number);
console.log(squaredNumbers([2, 3, 4, 1, 6, 0]));
//q14
const reversedArray = (numbers) => {
    let reversedArray = [];
    for (let i = numbers.length - 1; i >= 0; i--) {
        reversedArray.push(numbers[i]);
    }
    return reversedArray;
};
console.log(reversedArray([1, 2, 4, 12, 90]));
//Q15
let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
let minCount = 0;
let maxCount = 0;
for (let i = 0; i < scores.length; i++) {
    if (scores[i] < 5) {
        minCount++;
    }
    if (scores[i] > 10) {
        maxCount++;
    }
}
console.log(`Score fell bellow 5, ${minCount} times, and socre rised above 10,${maxCount} times`);
//Q16
const removeFalse = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== false) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};
console.log(removeFalse([false, null, undefined, false, true, false, true, NaN, 0, ""]));
//Q17
let nums1 = [1, 2, 3];
let nums2 = [4, 5, 6];
for (let i = 0; i < nums2.length; i++) {
    nums1.push(nums2[i]);
}
console.log(nums1);
//Q18
const sumOfElements = (numbers) => {
    let sum = 0;
    for (let element of numbers) {
        sum = sum + element;
    }
    return sum;
};
console.log(sumOfElements([1, 24, 53, 23, 15]));
//q19
const findNumber = (numbers, n) => {
    // numbers.filter(number=>n===number)
    return numbers.findIndex(number => number === n);
};
console.log("Number is present at ", findNumber([3, 42, 5, 2, 35, 0], 0));
//q20
const smallInteger = (numbers) => {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min)
            min = numbers[i];
    }
    return min;
};
console.log("Smallest integer :", smallInteger([1, 2, 5, -8, -0.99999, -0.999989]));
//q21
const calculateProduct = (numbers) => {
    let product = 1;
    for (let i = 0; i < numbers.length; i++) {
        product = product * numbers[i];
    }
    return product;
};
console.log(calculateProduct([1, 2, 4, 2, 3]));
//q22
const filterByLength = (strings, n) => {
    let newArray = [];
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > n)
            newArray.push(strings[i]);
    }
    return newArray;
};
console.log(filterByLength(["apple", "banana", "orange", "mango"], 5));
//q23
const findDuplicates = (numbers) => {
    return numbers.filter((item, index) => numbers.indexOf(item) !== index);
};
console.log(findDuplicates([2, 1, 1, 3, 2, 5]));
//q24
const incrementAll = (numbers) => {
    return numbers.map(number => number + 1);
};
console.log(incrementAll([1, 2, 3, 4, 5]));
//Q25
const countOccurrences = (numbers) => {
    let occurrences = {};
    for (let i = 0; i < numbers.length; i++) {
        if (occurrences[numbers[i]]) {
            occurrences[numbers[i]]++;
        }
        else {
            occurrences[numbers[i]] = 1;
        }
    }
    return occurrences;
};
console.log(countOccurrences([1, 2, 3, 4, 52, 1, 3, 2]));
//Q26
const isSorted = (numbers) => {
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] > numbers[i + 1]) {
            return false;
        }
    }
    return true;
};
console.log(isSorted([1, 2, 3, 4, 5]));
//q27
const formatingNames = (names) => {
    if (names.length === 0) {
        return "";
    }
    else if (names.length === 1) {
        return names[0];
    }
    else {
        const to2ndLast = names.slice(0, -2).join(", ");
        const lastTwo = names.slice(-2).join(" and ");
        return `${to2ndLast}, ${lastTwo}`;
    }
};
console.log(formatingNames(['Abdullah', "hammad", "Noor", "John", "muneeb"]));
//q28
const toCelsius = (temps) => {
    let celsius = [];
    for (let i = 0; i < temps.length; i++) {
        celsius.push((temps[i] - 32) * 5 / 9);
    }
    return celsius;
};
console.log(toCelsius([32, 65, 100]));
//q29
const minMaxAverage = (numbers) => {
    let infoOfNumbers = {
        min: numbers[0],
        max: numbers[0],
        average: 0
    };
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < infoOfNumbers.min)
            infoOfNumbers.min = numbers[i];
        if (numbers[i] > infoOfNumbers.max)
            infoOfNumbers.max = numbers[i];
        infoOfNumbers.average = infoOfNumbers.average + numbers[i];
    }
    infoOfNumbers.average = infoOfNumbers.average / numbers.length;
    return infoOfNumbers;
};
console.log(minMaxAverage([2, 3, 52, 45234, 123, 1241, -23221]));
//q30
const swapElements = (arr, index1, index2) => {
    if (index1 < 0 ||
        index1 >= arr.length ||
        index2 < 0 ||
        index2 >= arr.length) {
        throw new Error("Indices are out of range");
    }
    const newArray = [...arr];
    const temp = newArray[index1];
    newArray[index1] = newArray[index2];
    newArray[index2] = temp;
    return newArray;
};
console.log(swapElements([2, 3, 52, 53, 23], 3, 4));
//q31
const characterCount = (string, c) => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === c)
            count++;
    }
    return count;
};
console.log(characterCount("abdullah", "a"));
//q32
const Todo = [
    {
        id: 1,
        taskName: "Grocery",
        completed: true,
    },
    {
        id: 2,
        taskName: "Reading",
        completed: false,
    },
    {
        id: 3,
        taskName: "Coding",
        completed: true,
    },
    {
        id: 4,
        taskName: "Maintaining codebase",
        completed: false,
    },
];
const todoFilter = (Todo) => {
    let filteredTodo = [];
    for (let i = 0; i < Todo.length; i++) {
        if (!Todo[i].completed)
            filteredTodo.push(Todo[i]);
    }
    return filteredTodo;
};
console.log(todoFilter(Todo));
//q33
console.log(smallInteger([2, 3, 1, 41, 1, 3]));
//q34
console.log(reversedArray([34, 23, 632, 12]));
