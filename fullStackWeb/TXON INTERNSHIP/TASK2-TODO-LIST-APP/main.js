
const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")
const submit=document.querySelector(".submit")
const input=document.getElementsByTagName("input")

submit.addEventListener(
    "click",
    function() {
        {
       
            addToDo(item.value);
      resetValue();
           
        }
    }
)
const resetValue=()=>{
    item.value="";
}
const addToDo = (item) => {

    const listItem = document.createElement("li");
    listItem.innerHTML = `
         ${item}
        <i class="fas fa-times"></i>
    `; 
   

    listItem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function() {
            listItem.remove()
        }
    )
    toDoBox.appendChild(listItem)
  
}