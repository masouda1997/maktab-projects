"use strick";

let lStore = JSON.parse(localStorage.getItem('tasks'))
console.log(lStore);





let rows =document.querySelector('.section-rows')
let table = document.createElement('table')
for (let i = 0; i < lStore.length; i++) {
    table = document.createElement('table')
    table.className = 'task-list'
    table.id = 'row'
    console.log(table);
    
    if(lStore[i].type === 'work'){
            table.innerHTML=`<tr onclick="change() class="tr">
                                <td class="first">
                                    <button onclick="hov()">
                                        <img src="assets/edit.png" alt="edt">
                                    </button>
                                </td>
                                <td class='second'>
                                    <h3 id='h'>${lStore[i].title}</h3>
                                    <p>${lStore[i].description}</p>
                                </td>
                                <td class='third'>
                                    <div class="circle1"></div>
                                    <div class="trash" style="display: none;"><img src="assets/trash.png" alt="trash"></div>
                                </td>
                            </tr>`
                rows.appendChild(table)
                let circleColor = table.querySelector('.circle1')
                circleColor.style.backgroundColor = "#42AAFD"
    }else if(lStore[i].type === 'Shopping'){
                table.innerHTML=`<tr onclick="change()">
                                    <td>
                                        <img src="assets/edit.png" alt="edt">
                                    </td>
                                    <td>
                                        <h3 id='h'>${lStore[i].title}</h3>
                                        <p>${lStore[i].description}</p>
                                    </td>
                                    <td>
                                        <div class="circle2"></div>
                                    </td>
                                </tr>`
                rows.appendChild(table)
                let circleColor = table.querySelector('.circle2')
                circleColor.style.backgroundColor = "#CD42FD"
    }else if(lStore[i].type === 'Personal'){
                table.innerHTML=`<tr onclick="change()">
                                    <td>
                                        <img src="assets/edit.png" alt="edt">
                                    </td>
                                    <td>
                                        <h3 id='h'>${lStore[i].title}</h3>
                                        <p>${lStore[i].description}</p>
                                    </td>
                                    <td>
                                        <div class="circle3"></div>
                                    </td>
                                </tr>`
                rows.appendChild(table)
                let circleColor = table.querySelector('.circle3')
                circleColor.style.backgroundColor = "#01BACC"
    }else if(lStore[i].type === 'Health'){
                table.innerHTML=`<tr onclick="change()">
                                    <td>
                                        <img src="assets/edit.png" alt="edt">
                                    </td>
                                    <td>
                                        <h3 id='h'>${lStore[i].title}</h3>
                                        <p>${lStore[i].description}</p>
                                    </td>
                                    <td>
                                        <div class="circle4"></div>
                                    </td>
                                </tr>`
                rows.appendChild(table)
                let circleColor = table.querySelector('.circle4')
                circleColor.style.backgroundColor = "#EE2375"
    }
    // old way
        // myrow.addEventListener('click',function(){
        //     div.innerHTML = `
        //                     <div class="dl-txt">
        //                         <h3>Do you want to delete:</h3>
        //                         <p>${lStore[i].title}</p>
        //                     </div>
        //                     <div class="dl-img">
        //                         <button>
        //                             <img src="assets/trash.png" alt="">
        //                         </button>
        //                     </div>` 
        //     rows.append(div)
        // })
        // myrow.addEventListener('mouseleave',function(){
        //     div.innerHTML=`<div class="tl-img">
        //                         <img src="assets/edit.png" alt="edit">
        //                     </div>
        //                     <div class="tl-txt">
        //                         <h3>${lStore[i].title}</h3>
        //                         <p>${lStore[i].description}</p>
        //                     </div>
        //                     <div class="tl-circle">
        //                         <div class="circle1"></div>
        //                     </div>`
        //     rows.appendChild(div)
        //     let circleColor = document.querySelector('.circle1')
        //     circleColor.style.backgroundColor = "#42AAFD"
        //})
        //
}

function hov(){
    document.querySelector('.third').style.display = 'none'
    document.querySelector('.trash').style.display = 'unset'
    document.querySelector('.second').style.backgroundColor = 'pink'
    document.querySelector('.first').style.backgroundColor = 'pink'

}


// search bar ===================================================
let filter = document.getElementById('filter')
filter.addEventListener('keyup',filterItems)
function filterItems(e) {
    var text = e.target.value.toLowerCase();

    let mytable = document.getElementsByTagName('table')

    Array.from(mytable).forEach(function (td) {
        var itemName = td.querySelector('#h').textContent
        if (itemName.toLowerCase().indexOf(text) != -1) {
            td.style.display = "block";
        } else {
            td.style.display = "none";
        }
    });
}

// delete ==========================================================
let tables = document.getElementsByTagName("table")
console.log('sss',tables);
// tables.addEventListener('click', change)
function change(e) {
    console.log(e.target);
    if (e.target.classList.contains("task-list")) {
        //it means if the button
        if (confirm("Are you sure?")) {
            var div = e.target.parentElement;
            tables.removeChild(div);
        }
    }
}


// function change(){
//     console.log('notting');
//     // table.innerHTML=`<tr class="delete-box">
//     //                     <td class="col-font">
//     //                         <h3>daily UI Challenge</h3>
//     //                         <p>Create TO-DO list</p>
//     //                     </td>
//     //                     <td class="trash-icon">
//     //                         <img src="assets/trash.png">
//     //                     </td>
//     //                 </tr>`
//     // rows.insertAdjacentElement('beforebegin',table)
// }
// console.log(row);

// function deletbox(elem,arr,i,result){
//     elem.innerHTML = `
//     <div class="dl-txt">
//         <h3>Do you want to delete:</h3>
//         <p>>${arr[i].title}</p>
//     </div>
//     <div class="dl-img">
//         <button>
//             <img src="assets/trash.png" alt="">
//         </button>
//     </div>` 
//     result.appendChild(elem)
// }



