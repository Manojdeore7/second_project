// All the Code for the Admitted page goes here

let LSData=JSON.parse(localStorage.getItem("admission-accept"))||[];

renderDOM(LSData);
