const searchInput = document.getElementById("search");
const items = document.querySelectorAll(".box");




searchInput.addEventListener("input", function () {

    const filter=searchInput.value.toLowerCase();
    

    items.forEach(item=>{
        const text = item.textContent.toLowerCase();
        if(text.includes(filter)){
            item.classList.remove("hidden");
        }
        else{
            item.classList.add("hidden")
        }
    });

}


);
