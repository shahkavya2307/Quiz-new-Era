const categories = [
    {
        id:"physics",
        name:"Physics",
        icon:"⚛️",
        score : 0
    },
    {
        id:"history",
        name:"History",
        icon:"📜",
        score:0
    },
    {
        id:"coding",
        name:"Coding",
        icon:"💻",
        score:0
    }
]


const questionBank = [
    {
        id:1,
        categoryId:"physics",
        question : "What is the unit of Force?",
        options:["Joule" , "Newton" , "Watt" , "Pascal"],
        correct : 1 //Index of Newton
    },
    {
        id : 2,
        categoryId:"physics",
        question:"Speed is a scaler quantity.",
        options: ["True", "False"],
        correct:0
    },
    {
        id: 3,
        categoryId: "history",
        question: "Who discovered America?",
        options: ["Columbus", "Magellan", "Vasco da Gama", "Cook"],
        correct: 0
    },
    {
        id: 4,
        categoryId: "coding",
        question: "Which keyword creates a constant in JS?",
        options: ["var", "let", "const", "static"],
        correct: 2
    }
]