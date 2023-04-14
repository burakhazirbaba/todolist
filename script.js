const inputDiv = document.querySelector('.inputdiv') 
console.log(inputDiv) 

const input = document.querySelector('input') 
console.log(input)

const addButton = document.querySelector('#addbutton') 
console.log(addButton)

const contentDiv = document.querySelector('.contentdiv') 
console.log(contentDiv)

addButton.addEventListener('click', go) 

input.addEventListener('keyup', function(e){
    if (e.keyCode == 13) {
        go() 
    }
})

function go(){
    if (input.value.trim() !== "") { 
    const paragraf = document.createElement('li') 
    const deleteButton = document.createElement('div') 
    const iDidButton = document.createElement('div') 
    deleteButton.classList.add('deleteButton') 
    iDidButton.classList.add('iDidButton') 
    deleteButton.innerText = 'Delete' 
    iDidButton.innerText = 'I Did' 
    paragraf.textContent = input.value  
    contentDiv.appendChild(paragraf) 
    paragraf.appendChild(deleteButton) 
    paragraf.appendChild(iDidButton) 
    input.value = "" 

    deleteButton.addEventListener('click', function(){ 
        contentDiv.removeChild(paragraf)
    })
    iDidButton.addEventListener('click', function(){
        paragraf.classList.toggle('line')
    })
    }
    else {
        alert ('Bir değer giriniz.') 
    }
}