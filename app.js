import readline from "readline";
import fs from "fs";
import { text } from "express";

/*
Reading input and writing output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter your name:", (name) =>{
    console.log("You entered: "+name);
    rl.close();
})

rl.on("close", ()=>{
    console.log("Interface closed");
    process.exit(0);
})
*/

/*
Reading and write to a file
*/

let textIn = fs.readFileSync('./Files/input.txt', 'utf-8')
console.log(textIn)

let content = `Data read from input.txt: ${textIn}. \nDate Created: ${new Date()}`

fs.writeFileSync('./Files/output.txt', content)