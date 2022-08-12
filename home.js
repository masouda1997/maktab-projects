"use strick";

let obj = JSON.parse(localStorage.getItem("tasks"));

let timeline = document.getElementById("timelineId");
// timeline.style.display = "none";
timeArray = ["08:00",'08:30','09:00','09:30',"10:00",'10:30','11:00','11:30',"12:00",'12:30','13:00','13:30',"14:00",'14:30','15:00','15:30',"16:00",'16:30','17:00','17:30',"18:00",'18:30','19:00','19:30','20:00','20:30']


for (let i = 0;  i <= 24 ; i++) {
    let div = document.createElement("div");
    div.className = "timeline-box";
    const currentTask = obj.find(item => item.time === timeArray[i] )
    div.innerHTML = `<div class='timeline-box'>
                                ${currentTask?
                                `<div class='road-box'>
                                    <div class="circle-color1"></div>
                                    <h3>${currentTask.title}</h3>
                                    <p>${currentTask.description}</p>
                                </div>`:''}
                                <div>
                                    <span class='sub-text'>${timeArray[i]}</span>
                                    <div class='line'></div>
                                </div>
                            </div>`;
        timeline.appendChild(div)
        
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

for (let j = 0; j < obj.length; j++) {
    let div = document.createElement("div");
    div.className = "timeline-box";
    if(timeArray[j] === obj[j].time){
            div.innerHTML = `<div class='timeline-box'>
                                <div class='road-box'>
                                    <h3>${obj[j].title}</h3>
                                    <p>${obj[j].description}</p>
                                </div>
                                <div>
                                    <span class='sub-text'>${obj[j].time}</span>
                                    <div class='line'></div>
                                </div>
                            </div>`;
            timeline.appendChild(div)
        }
}*/