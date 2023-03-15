const question = [{
    'que' : 'Which of the following is a markup language?',
    'a':'HTML',
    'b':'CSS',
    'c':'JavaScript',
    'd':'PHP',
    'correct':'a'
},
{
    'que' : 'What does the abbreviation HTML stand for?',
    'a':'HyperText Markup Language.',
    'b':'HighText Markup Language',
    'c':'HyperText Markdown Language.',
    'd':'None of the above.',
    'correct':'a'
},

{
    'que' : 'How many sizes of headers are available in HTML by default?',
    'a':'5',
    'b':'1',
    'c':'3',
    'd':'6',
    'correct':'d'
},

{
    'que' : 'What is the smallest header in HTML by default?',
    'a':'h1',
    'b':'h2',
    'c':'h6',
    'd':'h4',
    'correct':'d'
},

{
    'que' : 'How to create an ordered list in HTML?',
    'a':'<ul>',
    'b':'<ol>',
    'c':'<href>',
    'd':'<b>',
    'correct':'b'
},

{
    'que' : 'HTML files are saved by default with the extension?',
    'a':'.html',
    'b':'.h',
    'c':'.ht',
    'd':'None of the above',
    'correct':'a'
},

{
    'que' : 'We enclose HTML tags within?',
    'a':'{}',
    'b':'<>',
    'c':'!!',
    'd':'None of the above',
    'correct':'b'
},

{
    'que' : 'How to display preformatted text in HTML?',
    'a':'<p>',
    'b':'<pre>',
    'c':'<hr>',
    'd':'All of the above',
    'correct':'b'
},

{
    'que' : 'Which of the following tags doesn’t require a closing tag?',
    'a':'</br>',
    'b':'</hr>',
    'c':'Both A and B',
    'd':'None of the above',
    'correct':'c'
},


{
    'que' : 'What Year was JavaScript launched ?',
    'a':'1995',
    'b':'1996',
    'c':'1994',
    'd':'none of the above',
    'correct':'a',
}
]
let index = 0;
let total = question.length;
let right = 0;
    wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.Option')
const loadQuestion = () => {
    if(index === total){
        return endQuiz()

    }
    reset()
    const data = question[index]
    console.log(data)
    quesBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;


}

const submitQuiz = () => {
    const data = question[index];
const ans = getAnswer()
// console.log(ans, data.correct)
if(ans == data.correct){
    right++;
}else{
    wrong++;
}
index++;
loadQuestion();
return;
}


const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3> Thank you for playing the qiuze</h3>
    <h2>${right} / ${total} are correct </h2>
    </div>
    `
}


loadQuestion();