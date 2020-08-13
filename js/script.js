const jobRoleText = document.querySelector("#other-title");


const firstLoad = () =>{ 
    const nameText = document.querySelector("#name");
    
    
    nameText.focus();
    jobRoleText.style.display = "none";

}

firstLoad();

const selectInput = document.querySelector("#title");

if(selectInput.value === "other"){
    
    console.log("Other has been selected");

}


selectInput.addEventListener("change", (e) =>{
    if(e.target.value === "other"){
        jobRoleText.value = "";
        jobRoleText.style.display = "block";        

    }
    else{
        jobRoleText.style.display = "none";
    }
});


