const jobRoleText = document.querySelector("#other-title");
const shirtColor = document.querySelector("#color");
const designDrop = document.querySelector("#design");
const paymentSelect = document.querySelector("#payment");
const payPalInfo = document.querySelector("#paypal");
const bitCoinInfo = document.querySelector("#bitcoin");
const creditInfo = document.querySelector("#credit-card");
const selectInput = document.querySelector("#title");
const totalHeading = document.createElement("label");
const activitiesSection = document.querySelector(".activities");
const form = document.querySelector("form");
let totalCost = 0;


const firstLoad = () =>{ 
    const nameText = document.querySelector("#name");

    nameText.focus();
    jobRoleText.style.display = "none";

    checkDesign("Select Theme");

    paymentSelect.firstElementChild.style.display = "none";
    paymentSelect.value = "credit card";
    payPalInfo.style.display = "none";
    bitCoinInfo.style.display = "none";
}

const checkDesign = (design = "Select Theme") =>{
    const newSelectOption = document.createElement("option");
    let ArrSelectOptions = [];
    let selectOptions = document.querySelectorAll("#color option");

    newSelectOption.textContent = "Please Select a T-Shirt theme";
    newSelectOption.value = "select shirt";
    
    if(design === "Select Theme"){
        for(let i =0; i < selectOptions.length; i++){
            selectOptions[i].style.display = "none";
        }
        shirtColor.appendChild(newSelectOption);
        shirtColor.value = "select shirt";
    }
  else{
        for(let i =0; i < selectOptions.length; i++){
            selectOptions[i].style.display = "none";

            if(design === "js puns" && selectOptions[i].textContent.includes("JS Puns")){  
                selectOptions[i].style.display = "block";
                ArrSelectOptions.push(selectOptions[i]);
            }
            else if(design === "heart js" && selectOptions[i].textContent.includes("JS shirt only")){
                selectOptions[i].style.display = "block";
                ArrSelectOptions.push(selectOptions[i]);
            }
    }
    selectOptions[0].parentNode.value = ArrSelectOptions[0].value;
}
}
const validateInput = (target) =>{

    const targetID = target.getAttribute("id");
    let test = "";

    if(targetID === "name"){
        test = /^[a-z]+ ?[a-z]+$/i.test(target.value);
        console.log(test);
        if(!test){
            target.style.borderColor= "red";
        }
        else{
            target.style.borderColor = "rgb(111, 157, 220)";
        }
    }
    
    if(targetID === "mail"){
        test = /[^@]+@[^@]+\.[a-z]/i.test(target.value);
        console.log(test);
        if(!test){
            target.style.borderColor= "red";
        }
        else{
            target.style.borderColor = "rgb(111, 157, 220)";
        }

    }

    // if(currentID === "mail" && !test2){
    //     e.target.style.borderColor= "red";

    // }
    // else if(currentID === "mail" && test){
    //     e.target.style.borderColor = "rgb(111, 157, 220)";
    // }

}

firstLoad();

selectInput.addEventListener("change", (e) =>{
    if(e.target.value === "other"){
        jobRoleText.value = "";
        jobRoleText.style.display = "block";        

    }
    else{
        jobRoleText.style.display = "none";
    }
});

designDrop.addEventListener("change", (e)=>{
     checkDesign(e.target.value);
});

activitiesSection.addEventListener("change", (e) =>{

    const actFieldSet = document.querySelector(".activities");
    const allCheckboxes = document.querySelectorAll(".activities input[type='checkbox']");
    const currentCost = e.target.getAttribute("data-cost");
    
    if(e.target.getAttribute("data-day-and-time")){
        const currentDateAndTimeAttr = e.target.getAttribute("data-day-and-time");
        const currentTimeRange = currentDateAndTimeAttr.match(/\d+/g);
        const currentDay = currentDateAndTimeAttr.match(/(Tues||Wednes)day/)[0];
        
        for(let i =1; i < allCheckboxes.length; i++){
            const listedDateAndTimeAttr = allCheckboxes[i].getAttribute("data-day-and-time");
            const listedTimeRange = listedDateAndTimeAttr.match(/\d+/g);
            const listedDay = listedDateAndTimeAttr.match(/(Tues||Wednes)day/)[0];

            if(e.target.checked === true){
                if(listedDay === currentDay && listedTimeRange[0] === currentTimeRange[0] && e.target.parentNode.textContent !== allCheckboxes[i].parentNode.textContent){
                allCheckboxes[i].disabled = true;
                allCheckboxes[i].parentNode.style.color = "grey";
                }   
            }
            else if(e.target.checked === false){
                
                if(listedDay === currentDay && listedTimeRange[0] === currentTimeRange[0]){
                allCheckboxes[i].disabled = false;
                allCheckboxes[i].parentNode.style.color = "black";
                    }           
            }
        }       
}
    if(e.target.checked === true){
        totalCost += parseInt(currentCost);

    }
    else if(e.target.checked === false){
        totalCost -= parseInt(currentCost);
    }
    totalHeading.textContent = `Total: ${totalCost}$`;
    actFieldSet.appendChild(totalHeading);
});

paymentSelect.addEventListener("change", (e)=>{
    if(e.target.value === "paypal"){
        payPalInfo.style.display = "block";
        bitCoinInfo.style.display = "none";
        creditInfo.style.display = "none";

    
    }
    else if(e.target.value === "bitcoin"){
        payPalInfo.style.display = "none";
        bitCoinInfo.style.display = "block";
        creditInfo.style.display = "none";
    }
    else if(e.target.value === "credit card"){
        payPalInfo.style.display = "none";
        bitCoinInfo.style.display = "none";
        creditInfo.style.display = "block";
    }
});

form.addEventListener("change", (e)=>{

    validateInput(e.target);
    // const test = /^[a-zA-Z]+$/.test(e.target.value);
    // const test2 = /[^@]+@[^@]+\.[a-z]/i.test(e.target.vale);

    // if(currentID === "name" && !test){
    //     e.target.style.borderColor= "red";
    // }
    // else{
    //     e.target.style.borderColor = "rgb(111, 157, 220)";
    // }

    // if(currentID === "mail" && !test2){
    //     e.target.style.borderColor= "red";

    // }
    // else if(currentID === "mail" && test){
    //     e.target.style.borderColor = "rgb(111, 157, 220)";
    // }
});



