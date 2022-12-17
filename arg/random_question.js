//Questions can be changed in question.txt and can rename question.txt to whatever you want but remember to change the name inside every encoder file
//Let us know when backend is completed to can edit accordingly but this is the main random, question and answer will be backend and just send question to user then user send answer to backend and confirm with answer

var fs = require('fs');

file = 'question.txt'


function random_question(file){
    questions = fs.readFileSync(file, 'utf-8')
    const arr = questions.split(/\r?\n/)
    for(i = 0; i < arr.length ;i++){
        if (arr[i].length == 0){
            arr.splice(i, 1)
        }
      }
    const randomQuestion = arr[Math.floor(Math.random() * arr.length)];
    console.log(randomQuestion)
}

random_question(file)