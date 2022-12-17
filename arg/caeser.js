//Main Algorithm, in the actual thing, will take question from question.txt in backend
//Can do random shift if you want just lmk

//This caeser shifts in ascii
function caeserCipher(question, shift){
    let resultArray = []
    for (i = 0; i < question.length; i++){
        let char = question.charCodeAt(i) + shift
        while (char > 122){
            char = (char - 122) + 96
        }
        resultArray.push(String.fromCharCode(char))
    }
    console.log(resultArray.join('')+ shift)
}

question = 'What city are we in?'
caeserCipher(question, 1)