

let tbody=document.querySelector("tbody");


function renderDOM(data,arr,onclick){
   
    tbody.innerHTML="";
    data.forEach(function(el,index){
        let tr=document.createElement("tr");
    let name=document.createElement("td");
    name.innerText=el.name;

    let email=document.createElement("td");
    email.innerText=el.email;
    
    let phone=document.createElement("td");
    phone.innerText=el.phone;

    let gender=document.createElement("td");
    gender.innerText=el.gender;

    let course=document.createElement("td");
    course.innerText=el.course;
    tr.append(name,email,course,gender,phone);
    
    if(arr!=undefined){
        arr.forEach(function(ele,index){
            let button=document.createElement("td");
            button.innerText=ele;
            tr.append(button);
            button.addEventListener("click",function(){
                onclick(ele,index);
                
            })
        })
    };

    tbody.append(tr);
    });

};
 





