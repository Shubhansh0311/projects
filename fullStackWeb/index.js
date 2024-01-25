// toast for the item added to the cart 

const showToast = () => {
  // alert("item added")
  var toastElList = [].slice.call(document.querySelectorAll('.toast'))
  var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl);
  })
  toastList.forEach(toast => toast.show())

}


// tooltip for the hovering effect 
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


//moving from one page to another on clicking over the image
function goToProductDetail() {
  window.location.href = "/product.html"
  // alert("function called")
}

// form validation
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()



function likeClick(){
const likescon=document.getElementsByClassName(".likeIcon");
console.log(likescon);
}