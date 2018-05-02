// Challenge

// With JavaScript, use document.querySelector() to obtain a programmatic reference to your DOM <article> element that you created. 
let missionStatement = document.querySelector(".article")
// With that reference, update its contents with another sub-component that displays a fictitious mission statement for your representative.
missionStatement = document.write("Our mission is to get rid of all grasshoppers in the fifth district.")



// Advanced Challenge
// In JavaScript, there is a method that creates a new attribute node for any DOM element.
//  Discover that method and use it to create a custom attribute named congressional-district 
//  and its value should be your congressional district number. 
//  Then attach that attribute to the <article> container you made for your representative component.


let cd = document.createAttribute("congressional-district").value= "District number 5"
let cdDom = document.querySelector(".article").setAttribute(cd)





