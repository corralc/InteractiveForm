const jobRoleText = document.querySelector("#other-title");
const shirtColor = document.querySelector("#color");
const designDrop = document.querySelector("#design");


const firstLoad = () =>{ 
    const nameText = document.querySelector("#name");

    nameText.focus();
    jobRoleText.style.display = "none";
    checkDesign("Select Theme");
}

const checkDesign = (design = "Select Theme") =>{
    const newSelectOption = document.createElement("option");
    let ArrSelectOptions = [];

    newSelectOption.textContent = "Please Select a T-Shirt theme";
    newSelectOption.value = "select shirt";
    
    let selectOptions = document.querySelectorAll("#color option");
    
    
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
    

};



firstLoad();

const selectInput = document.querySelector("#title");


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


