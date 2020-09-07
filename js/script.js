const form = document.querySelector("form");
let totalCost;

const firstLoad = () =>{ 
    const nameText = document.querySelector("#name");
    const jobRoleText = document.querySelector("#other-title");
    const paymentSelect = document.querySelector("#payment");
    const payPalInfo = document.querySelector("#paypal");
    const bitCoinInfo = document.querySelector("#bitcoin");
    const totalHeading = document.createElement("label");
    const actFieldSet = document.querySelector(".activities");

    totalCost = 0;
    totalHeading.className = "activitiesCost";
    actFieldSet.appendChild(totalHeading);
    totalHeading.style.display = "none";
    nameText.focus();
    jobRoleText.style.display = "none";

    checkDesign("Select Theme");

    paymentSelect.firstElementChild.style.display = "none";
    paymentSelect.value = "credit card";
    payPalInfo.style.display = "none";
    bitCoinInfo.style.display = "none";
}

const checkDesign = (design) =>{
    const newSelectOption = document.createElement("option");
    const shirtColor = document.querySelector("#color");
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
const validateInput = (target, targetID) =>{
    const activities = document.querySelector(".activities");
    const allCheckboxes = document.querySelectorAll(".activities input[type='checkbox']");
    let test = "";
    let numOfChecked = 0;

    if(targetID === "name"){
        test = /^[a-z]+ ?[a-z]+$/i.test(target.value);

        if(!test){
            target.style.borderColor= "red";
        }
        else{
            target.style.borderColor = "rgb(111, 157, 220)";
        }
    }
    
    if(targetID === "mail"){
        test = /[^@]+@[^@]+\.[a-z]/i.test(target.value);

        if(!test){
            target.style.borderColor= "red";
        }
        else{
            target.style.borderColor = "rgb(111, 157, 220)";
        }
    }

    if(targetID === "cc-num"){
        test = /\d{10,13}/.test(target.value);

        if(!test){
            target.style.borderColor= "red";
        }
        else{
            target.style.borderColor = "rgb(111, 157, 220)";
        }
    }

    if(targetID === "zip"){
        test = /\d{5}/.test(target.value);

        if(!test){
            target.style.borderColor= "red";
        }
        else{
            target.style.borderColor = "rgb(111, 157, 220)";
        }

    }

    if(targetID === "cvv"){
        test = /\d{3}/.test(target.value);

        if(!test){
            target.style.borderColor= "red";
        }
        else{
            target.style.borderColor = "rgb(111, 157, 220)";
        }

    }

    for(let i = 0; i < allCheckboxes.length; i++){
        if(allCheckboxes[i].checked){
            numOfChecked++;
        }
    }

    if(numOfChecked === 0){
        activities.style.color = "red";
    }
    else{
        activities.style.color = "inherit";
    }
}

firstLoad();

form.addEventListener("change", (e)=>{
    const targetID = e.target.getAttribute("id");
    const targetClass = e.target.getAttribute("class");
    const allCheckboxes = document.querySelectorAll(".activities input[type='checkbox']");
    if(targetID === "title"){
        const jobRoleText = document.querySelector("#other-title");
        
        if(e.target.value === "other"){
            jobRoleText.value = "";
            jobRoleText.style.display = "block";        
        }
        else{
            jobRoleText.style.display = "none";
        }
    }
    else if(targetID === "design"){
        checkDesign(e.target.value);
    }
    else if(e.target.parentNode.parentNode.getAttribute("class") === "activities"){
        const actFieldSet = document.querySelector(".activities");
        const currentCost = e.target.getAttribute("data-cost");
        const activitiesCost = document.querySelector(".activitiesCost");
        
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
        activitiesCost.textContent = `Total: ${totalCost}$`;
        activitiesCost.style.display = "block";
    }
    else if(targetID ==="payment"){
        const payPalInfo = document.querySelector("#paypal");
        const bitCoinInfo = document.querySelector("#bitcoin");
        const creditInfo = document.querySelector("#credit-card");

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
    }
    validateInput(e.target, targetID);
});



