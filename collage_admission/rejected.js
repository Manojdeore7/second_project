// All the Code for the Rejected page goes here
// All the Code for the Admitted page goes here

let LSData=JSON.parse(localStorage.getItem("admission-reject"))||[];

renderDOM(LSData);
