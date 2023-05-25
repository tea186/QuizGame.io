// questions changed
const Questions = [
    {
        id: 0,
        q: "What is the capital of England?",
        a: [
            { text: "Paris", isCorrect: false },
            { text: "Rome", isCorrect: false },
            { text: "Madrid", isCorrect: false },
            { text: "London", isCorrect: true }
        ]
    },
    {
        id: 1,
        q: "Which country is famous for the Taj Mahal?",
        a: [
            { text: "China", isCorrect: false },
            { text: "Egypt", isCorrect: false },
            { text: "India", isCorrect: true },
            { text: "Japan", isCorrect: false }
        ]
    },
    {
        id: 2,
        q: "What is the official language of Brazil?",
        a: [
            { text: "Portuguese", isCorrect: true },
            { text: "Spanish", isCorrect: false },
            { text: "English", isCorrect: false },
            { text: "French", isCorrect: false }
        ]
    },
    {
        id: 3,
        q: "Which city is known as the 'Eternal City'?",
        a: [
            { text: "Athens", isCorrect: false },
            { text: "Istanbul", isCorrect: false },
            { text: "Cairo", isCorrect: false },
            { text: "Rome", isCorrect: true },
        ]
    },
    {
        id: 4,
        q: "Which country is famous for the Great Barrier Reef?",
        a: [
            { text: "Mexico", isCorrect: false },
            { text: "Australia", isCorrect: true },
            { text: "Canada", isCorrect: false },
            { text: "Sweden", isCorrect: false }
        ]
    }
];

// Set start
var start = true;

// Iterate
function iterate(id) {

    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    // Getting the question
    const question = document.getElementById("question");


    // Setting the question text
    question.innerText = Questions[id].q;

    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');


    // Providing option text
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;

    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    var selected = "";

    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "lightgreen";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    });

    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgreen";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    });

    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgreen";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    });

    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgreen";
        selected = op4.value;
    });


    // Grabbing the evaluate button
    const evaluate = document.getElementsByClassName("evaluate");

    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "Correct"; /* change wording */
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "Try Again!"; /* wording color */
            result[0].style.color = "red";
        }
    })
}

if (start) {
    iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
    start = false;
    if (id < Questions.length - 1) { /* allow for more qestions */
        id++;
        iterate(id);
        console.log(id);
    }

})