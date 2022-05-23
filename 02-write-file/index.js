const path = require('path');
const fs = require('fs');
const readline = require('readline');
const { stdin, stdout, stderr } = process;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
fs.open(path.join(__dirname, 'yourtext.txt'), 'w', (err) => {
    if(err) throw err;
});
stdout.write('Пожалуйста, добавьте информацию к созданному файлу\n');
rl.on('SIGINT', () => {
    console.log('Спасибо, удачи!'); 
    rl.close();   
  });
let funcOfData = function() {
    rl.question('', (data) => {
    if (data === 'exit') {
        stdout.write('Спасибо, удачи!\n'); 
        rl.close();      
    } else {
        fs.appendFile(path.join(__dirname, 'yourtext.txt'), `${data}\n`, (err) =>{if(err) throw err});
        console.log('данные записаны. Если хотите дополнить файл новыми данными, введите их в консоль. Если хотите завершить работу программы, введите "exit"');
        funcOfData();
    }
})
}
funcOfData();