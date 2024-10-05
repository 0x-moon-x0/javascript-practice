// Activity 1

let steps = ["one", "two", "three"];

// converting the array into an array of HTML strings (each string is a list item)
let stepsHTML = steps.map(function (step) {
    return `<li>${step}</li>`;
});

document.getElementById("myList").innerHTML = stepsHTML.join();

// Activity 2

let grades = ["A", "B", "A"];

function convertGrade(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}

let gpaPoints = grades.map(convertGrade);

// Activity 3

const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

// Activity 4 

let words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const shortWords = words.filter((word) => word.length < 6);

// Activity 5

let numbers = [12, 34, 21, 54];

const luckyNumber = 21;

let luckyIndex = numbers.indexOF(luckyNumber);