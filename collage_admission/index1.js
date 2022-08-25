let LSData=JSON.parse(localStorage.getItem("admission"))||[];


let form=document.querySelector("form");

let name=document.querySelector("#name");
let email=document.querySelector("#email");
let phone=document.querySelector("#phone");
let gender=document.querySelector("#gender");
let course=document.querySelector("#course");
let submit=document.querySelector("submit");
form.addEventListener("submit",function(event){
event.preventDefault();
    let obj={
        name:name.value,
        email:email.value,
        phone:phone.value,
      gender:gender.value,
      course:course.value,

    };
    LSData.push(obj);
    console.log(LSData);
    localStorage.setItem("admission",JSON.stringify(LSData));

})
