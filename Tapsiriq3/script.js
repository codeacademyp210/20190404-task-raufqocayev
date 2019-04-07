"use strict";


let carsArr = [];

let onlyletters = /^[a-zA-Z]+$/;
let onlynumbers = /([\d]{4})/;

let manuIn = document.forms['carForm']['manuIn'];
let modelIn = document.forms['carForm']['modelIn'];
let yearIn = document.forms['carForm']['yearIn'];

let wrapper = document.querySelector(".carlist")

let carUl = document.querySelector(".carlist");


function CarObj(manu, model, release) {
    this.manu = manu;
    this.model = model;
    this.release = release;
}


let id = 1;

let nowDate = new Date()


function formValidation() {
    if (manuIn.value == "" || modelIn.value == "" || yearIn.value == "") {
        alert("Please fill out all the form");
        return false
    }
    if (!manuIn.value.match(onlyletters)) {
        alert("Manufacturer must contain only letters");
        return false
    }
    if (!yearIn.value.match(onlynumbers)) {
        alert("Please insert only number to release with 4 digit");
        return false
    }
    if (yearIn.value >= nowDate.getFullYear()) {
        alert("Release date cannot be more than" + " " + nowDate.getFullYear());
        return false
    }

    let addedCar = new CarObj(manuIn.value, modelIn.value, yearIn.value);

    carsArr.push(addedCar);

    displayCars()

    return false
}


function displayCars() {
    let newLi = document.createElement("li");
    newLi.textContent = (id++) + "." +
        manuIn.value + "-" + modelIn.value + "-" +
        yearIn.value;
    newLi.classList.add("list-group-item");
    let delbtn = document.createElement("button");
    delbtn.textContent = ("Delete");
    delbtn.classList.add("btn", "btn-outline-warning", "deleted", "ml-5");
    newLi.appendChild(delbtn);
    newLi.addEventListener("click", function () {
        manuIn.setAttribute("value", newLi.textContent)
    })
    delbtn.addEventListener("click", function () {
        let myId = delbtn.parentNode; {
            myId.remove()
            carsArr.splice(carsArr[i], 1);
            console.log(myId)
        };
    })
    wrapper.appendChild(newLi);
};