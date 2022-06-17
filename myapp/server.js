const express = require('express');
const app = express();

// Step 3: use a logger

app.use((req, res, next) => {
    const visitTime = new Date();
    console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
    next();
});

// Step 1: Reading endpoint query

app.get('/add', (req, res) => {
    const value1 = req.query.value1;
    const value2 = req.query.value2;
    const result = parseInt(value1) + parseInt(value2)
    console.log("You're using the add calculator");
    res.send("The result of " + value1 + " + " + value2 + " is " + result);
})

app.get('/substract', (req, res) => {
    const value1 = req.query.value1;
    const value2 = req.query.value2;
    const result = parseInt(value1) - parseInt(value2)
    console.log("You're using the substract calculator");
    res.send("The result of " + value1 + " - " + value2 + " is " + result);
})

app.get('/multiply', (req, res) => {
    const value1 = req.query.value1;
    const value2 = req.query.value2;
    const result = parseInt(value1) * parseInt(value2)
    console.log("You're using the multiply calculator");
    res.send("The result of " + value1 + " * " + value2 + " is " + result);
})

app.get('/divide', (req, res) => {
    const value1 = req.query.value1;
    const value2 = req.query.value2;
    const result = parseInt(value1) / parseInt(value2)
    console.log("You're using the divide calculator");
    res.send("The result of " + value1 + " / " + value2 + " is " + result);
})

// Step 2: Reading endpoints parameters

app.get('/add/:firstValue/:secondValue', (req, res) => {
    const firstValue = req.params.firstValue;
    const secondValue = req.params.secondValue;
    const result = parseInt(firstValue) + parseInt(secondValue)
    console.log("You're using the add calculator");
    res.send("The result of " + firstValue + " + " + secondValue + " is " + result);
}) 

app.get('/substract/:firstValue/:secondValue', (req, res) => {
    const firstValue = req.params.firstValue;
    const secondValue = req.params.secondValue;
    const result = parseInt(firstValue) - parseInt(secondValue)
    console.log("You're using the substract calculator");
    res.send("The result of " + firstValue + " - " + secondValue + " is " + result);
}) 

app.get('/multiply/:firstValue/:secondValue', (req, res) => {
    const firstValue = req.params.firstValue;
    const secondValue = req.params.secondValue;
    const result = parseInt(firstValue) * parseInt(secondValue)
    console.log("You're using the multiply calculator");
    res.send("The result of " + firstValue + " * " + secondValue + " is " + result);
}) 

app.get('/divide/:firstValue/:secondValue', (req, res) => {
    const firstValue = req.params.firstValue;
    const secondValue = req.params.secondValue;
    const result = parseInt(firstValue) / parseInt(secondValue)
    console.log("You're using the divide calculator");
    res.send("The result of " + firstValue + " / " + secondValue + " is " + result);
}) 

// app.get('/:operation/:firstValue/:secondValue', (req, res) => {
//     const operation = req.params.operation;
//     const firstValue = req.params.firstValue;
//     const secondValue = req.params.secondValue;

//     console.log("You're using the " + operation + " calculator");
//     if (operation === "divide") {
//         let result = parseInt(firstValue) / parseInt(secondValue)
//         res.send("The result of " + firstValue + " / " + secondValue + " is " + result);
//     } else if (operation === "add") {
//         let result = parseInt(firstValue) + parseInt(secondValue)
//         res.send("The result of " + firstValue + " + " + secondValue + " is " + result);
//     } else if (operation === "multiply") {
//         let result = parseInt(firstValue) * parseInt(secondValue)
//         res.send("The result of " + firstValue + " * " + secondValue + " is " + result);
//     } else if (operation === "substract") {
//         let result = parseInt(firstValue) - parseInt(secondValue)
//         res.send("The result of " + firstValue + " - " + secondValue + " is " + result);
//     } else {res.send("Operation not found or not supported");}
// })




app.listen(3000, () => console.log("Server is up and running"))