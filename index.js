const ratingElements = document.querySelectorAll(".rating");


const btnEle = document.getElementById("btn");
const contEle = document.getElementById("container");


let selectedRating = "";


ratingElements.forEach((ratingEle) => {
    ratingEle.addEventListener("click", (event)=>{
        //console.log(event.target.innerText || event.target.parentNode.innerText);  // we use parent node because when we clicked on emoji we didnt get any output but when we clicked over small (happy / unhappy etc) we got output
        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    });
});


btnEle.addEventListener("click", ()=>{
    if(selectedRating !== ""){   
        // backtick makes it dynamic
        contEle.innerHTML = ` 
        <strong> Thank you !  </strong> 
        <br>
        <br>

        <strong> Feedback : ${selectedRating} </strong>
        <br><br>
        <p> We will use this feedback to improve our customer support. </p>
        
        ` 
    }

})


function removeActive(){
    ratingElements.forEach((ratingEle)=>{
        ratingEle.classList.remove("active");
    })
}


