// All the Code for All Students Page Goes Here
let LSData=JSON.parse(localStorage.getItem("admission"))||[];

 function man(a){
  console.log(a)
 }

 
 
renderDOM(LSData,["Accept","Reject"],onclick);

 function onclick(ele,index){
     
      LSData=LSData.filter(function(el,i){
        if(i==index){

           let LSData2=JSON.parse(localStorage.getItem("admission-"+ele.toLowerCase()))||[];
           LSData2.push(el);
           localStorage.setItem("admission-"+ele.toLowerCase(),JSON.stringify(LSData2));
        }
       
        return i != index;
      })
      renderDOM(LSData,["Accept","Reject"],onclick);
      localStorage.setItem("admission",JSON.stringify(LSData));
 }
  

let filte=document.getElementById("filter");
filte.addEventListener("change",function(){
    let filtered=LSData.filter(function(el){
        if(filte.value=="all"){
            return el;
        }
         else if(filte.value==""){
            return el;
        }
      else{
            return filte.value==el.course;
        }
       
    })
   
      renderDOM(filtered);
})




