const question = [
{
        'que':'Which of the following is the markup language',
         'a':'HTML',
         'b':'CSS',
         'c':'JavaScript',
         'd':'PHP',
         'correct':'a'

    },
    {
        'que':'What year was js launched',
         'a':'1996',
         'b':'1995',
         'c':'1994',
         'd':'none of the above',
         'correct':'b'

    } , 
    {
        'que':'What dose CSS stands for',
         'a':'Hypertext markup language',
         'b':'Cascading Style Sheet',
         'c':'Jason Object Notation',
         'd':'none of the above',
         'correct':'b'

    }
]
let index = 1;
const quebox = document.getElementById('quebox')
const optionInputs = document.querySelectorAll('.option')
const loadQuestion = () => {
    const data = question[index]
    console.log(data)
quebox.innerText = `${index+1}) ${data.que}`
optionInputs[0].nextElementSibling.innerText = data.a
optionInputs[1].nextElementSibling.innerText = data.b;
optionInputs[2].nextElementSibling.innerText = data.c;
optionInputs[3].nextElementSibling.innerText = data.d;

}
loadQuestion()