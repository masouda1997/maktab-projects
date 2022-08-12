'use strick'




// to get radio input value we use a function

let categury 
function setCat(elem) {
    categury = elem.value
}

function getData(){
    
    // function would be called by button "add task"
    // get inputs value
    const dataObject = {}
    dataObject.title = document.getElementById('inputId').value
    dataObject.date = document.getElementById('dateId').value
    dataObject.time = document.getElementById('timeId').value
    dataObject.type = categury
    dataObject.description = document.querySelector('#textareaID').value
    
    /* my way to get radio value 
        const radioInputName = document.getElementsByName('my-radio')
        for (let i = 0; i < radioInputName.length; i++) {
            if(radioInputName[i].checked){
                console.log(radioInputName[i]);
            }
        }*/

    // console.log(objectData);
    const taskArray = JSON.parse(localStorage.getItem('tasks') || '[]')
    console.log(taskArray);
    taskArray.push(dataObject)
    localStorage.setItem("tasks",JSON.stringify(taskArray))
}
