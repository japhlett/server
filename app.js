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
Reading and write to a file synchronously
*/

/*let textIn = fs.readFileSync('./Files/input.txt', 'utf-8')
console.log(textIn)

let content = `Data read from input.txt: ${textIn}. \nDate Created: ${new Date()}`

fs.writeFileSync('./Files/output.txt', content)*/


/*
Reading and write to a file asynchronously
*/

fs.readFile('./Files/start.txt', 'utf-8',(err, data) =>{
    console.log(data)
    fs.readFile(`./Files/${data}.txt`,'utf-8',(err1, data1) => {
        console.log(data1)
        fs.readFile('./Files/append.txt', 'utf-8', (err2, data2) =>{
            console.log(data2)
            fs.writeFile('Files/output.txt', `${data1}\n\n ${data2}\n\n ${new Date()}`, (err3, data3) =>{
                console.log('File written successfully')
            })
        })
    })
})

console.log('Reading file....')