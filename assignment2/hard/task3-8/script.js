const form= document.getElementById(
    'signForm'
)

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    let valid =true
    form.querySelectorAll('input').forEach(input=>{
        const error=input.nextElementSibling
        error.textContent=''
        if (!input.checkValidity()){
            valid=false
            if (input.validity.valueMissing)error.textContent="This field is required"
            else if (input.validity.typeMismatch) error.textContent='Invalid Format'
            else if (input.validity.tooShort) error.textContent='Must be at least${input.minLength} characters '
        }

    
    
    
    })

    if (valid){
        alert('form submuited en jakshy')
        form.reset()
    }




})