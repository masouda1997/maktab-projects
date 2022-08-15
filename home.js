"use strick";

let lStor = JSON.parse(localStorage.getItem("tasks"));


// task left and number
document.getElementById("taskNum").innerText = lStor.length
document.getElementById('taskLeft').innerText = lStor.length
document.getElementById('totaltask').innerText=`Today you have ${lStor.length} task`

//task boxes
let work = document.getElementById('workID')
let workCount = document.getElementById('counterIdWork')
let shopCount = document.getElementById('counterIdShop')
let healthCount = document.getElementById('counterIdHelth')
let personalCount = document.getElementById('counterIdPersonal')
// console.log(lStor);
let wc = pc = shc = hc = 0
// console.log( wc , pc , shc, hc);
for(let i = 0 ; i< lStor.length ; i++){
    if(lStor[i].type === "work"){
        workCount.innerHTML  = `${wc+=1} tasks`
    }
    else if(lStor[i].type === 'Shopping'){
        shopCount.innerHTML  = `${shc+=1} tasks`
    }
    else if(lStor[i].type === 'Personal'){
        personalCount.innerHTML  = `${pc+=1} tasks`
    }
    else if(lStor[i].type === 'Health'){
        healthCount.innerHTML  = `${hc+=1} tasks`
    }
}

let timeline = document.getElementById("timelineId");
// timeline.style.display = "none";
timeArray = ["08:00",'08:30','09:00','09:30',"10:00",'10:30','11:00','11:30',"12:00",'12:30','13:00','13:30',"14:00",'14:30','15:00','15:30',"16:00",'16:30','17:00','17:30',"18:00",'18:30','19:00','19:30','20:00','20:30']

for (let i = 0; i <= 24; i++) {
    let div = document.createElement("div");
    div.className = "timeline-box";
    const currentTask = lStor.find((item) => item.time === timeArray[i]);
    console.warn('sss',currentTask);
    if(currentTask != undefined){

        if(currentTask.type === "work"){
            div.innerHTML = `<div class='timeline-box' id="tb">
                                    ${
                                        currentTask? `<div class='road-box'  id = 'wId'>
                                        <div class="circle-color1"></div>
                                        <h3>${currentTask.title}</h3>
                                        <p>${currentTask.description}</p>
                                    </div>`: ""
                                    }
                                    <div>
                                        <span class='sub-text'>${
                                            timeArray[i]
                                        }</span>
                                        <div class='line'></div>
                                    </div>
                                </div>`;
            timeline.appendChild(div);
            let boxColor=document.getElementById('wId')
            // let hoverColor=document.querySelector('#wId')
            let circleColor = document.querySelector('.circle-color1')

            console.log(boxColor);
            boxColor.style.backgroundColor = "whitesmoke";
            circleColor.style.backgroundColor = "#42AAFD"
            boxColor.addEventListener('mouseover',function(){
                boxColor.style.backgroundColor = "#42AAFD"
                circleColor.style.backgroundColor = "white"
            })
            boxColor.addEventListener('mouseleave',function(){
                boxColor.style.backgroundColor = "whitesmoke"
                circleColor.style.backgroundColor = "#42AAFD"
            })
    
            }
        else if(currentTask.type === "Shopping"){
            div.innerHTML = `<div class='timeline-box' id="tb">
                                    ${
                                        currentTask? `<div class='road-box' id='shId'>
                                        <div class="circle-color2"></div>
                                        <h3>${currentTask.title}</h3>
                                        <p>${currentTask.description}</p>
                                    </div>`: ""
                                    }
                                    <div>
                                        <span class='sub-text'>${
                                            timeArray[i]
                                        }</span>
                                        <div class='line'></div>
                                    </div>
                                </div>`;
            timeline.appendChild(div);
            let boxColor=document.querySelector('#shId')
            // let hoverColor=document.querySelector('.road-box')
            let circleColor = document.querySelector('.circle-color2')


            console.log('mybox',boxColor);
            boxColor.style.backgroundColor = "whitesmoke";
            circleColor.style.backgroundColor = "#CD42FD"
            boxColor.addEventListener('mouseover',function(){
                boxColor.style.backgroundColor = "#CD42FD"
                circleColor.style.backgroundColor = "white"
                })
            boxColor.addEventListener('mouseleave',function(){
                boxColor.style.backgroundColor = "whitesmoke"
                circleColor.style.backgroundColor = "#CD42FD"
                })
            }
        else if(currentTask.type === "Personal"){
            div.innerHTML = `<div class='timeline-box' id="tb">
                                    ${
                                        currentTask? `<div class='road-box'  id = 'pId'>
                                        <div class="circle-color3"></div>
                                        <h3>${currentTask.title}</h3>
                                        <p>${currentTask.description}</p>
                                    </div>`: ""
                                    }
                                    <div>
                                        <span class='sub-text'>${
                                            timeArray[i]
                                        }</span>
                                        <div class='line'></div>
                                    </div>
                                </div>`;
            timeline.appendChild(div);
            let boxColor=document.getElementById('pId')
            // let hoverColor=document.querySelector('.road-box')
            let circleColor = document.querySelector('.circle-color3')

            console.log(boxColor);
            boxColor.style.backgroundColor = "whitesmoke";
            circleColor.style.backgroundColor = "#01BACC"

            boxColor.addEventListener('mouseover',function(){
                boxColor.style.backgroundColor = "#01BACC"
                circleColor.style.backgroundColor = "white"
                })
            boxColor.addEventListener('mouseleave',function(){
                boxColor.style.backgroundColor = "whitesmoke"
                circleColor.style.backgroundColor = "#01BACC"
                })
            }
        else if(currentTask.type === "Health"){
            div.innerHTML = `<div class='timeline-box' id="tb">
                                    ${
                                        currentTask? `<div class='road-box'  id = "hId">
                                        <div class="circle-color4"></div>
                                        <h3>${currentTask.title}</h3>
                                        <p>${currentTask.description}</p>
                                    </div>`: ""
                                    }
                                    <div>
                                        <span class='sub-text'>${
                                            timeArray[i]
                                        }</span>
                                        <div class='line'></div>
                                    </div>
                                </div>`;
            timeline.appendChild(div);
            let boxColor=document.getElementById('hId')
            // let hoverColor=document.querySelector('.road-box')
            let circleColor = document.querySelector('.circle-color4')
            
            console.log(boxColor);
            boxColor.style.backgroundColor = "whitesmoke";
            circleColor.style.backgroundColor = "#EE2375"
            boxColor.addEventListener('mouseover',function(){
                boxColor.style.backgroundColor = "#EE2375"
                circleColor.style.backgroundColor = "white"
                })
            boxColor.addEventListener('mouseleave',function(){
                boxColor.style.backgroundColor = "whitesmoke"
                circleColor.style.backgroundColor = "#EE2375"
                })
            }
        }
    else{
        div.innerHTML = `<div class='timeline-box' id="tb">
                                <div>
                                    <span class='sub-text'>${
                                        timeArray[i]
                                    }</span>
                                    <div class='line'></div>
                                </div>
                            </div>`;
        timeline.appendChild(div);
        }
    }


/*for (let i = 0;  i <= 24 ; i++) {
    let div = document.createElement("div");
    div.className = "timeline-box";
    // div.innerHTML="<p>hello</p>
    div.innerHTML = `<div class='timeline-box'>
                        <div>
                            <span class='sub-text'>${timeArray[i]}</span>
                            <div class='line'></div>
                        </div>
                    </div>`
        timeline.appendChild(div)
}

for (let j = 0; j < lStor.length; j++) {
    let div = document.createElement("div");
    div.className = "timeline-box";
    if(timeArray[j] === lStor[j].time){
            div.innerHTML = `<div class='timeline-box'>
                                <div class='road-box'>
                                    <h3>${lStor[j].title}</h3>
                                    <p>${lStor[j].description}</p>
                                </div>
                                <div>
                                    <span class='sub-text'>${lStor[j].time}</span>
                                    <div class='line'></div>
                                </div>
                            </div>`;
            timeline.appendChild(div)
        }
}*/

let roadBox = document.getElementsByClassName("road-box")
console.log(roadBox);
function clf(){
    roadBox[0].remove()
    console.log(lStor);
    delete lStor
    delete lStor
    console.log(lStor);
    window.localStorage.removeItem(0)
}