let inputContent = document.querySelector('#encrypterInput');
let encrypt = document.querySelector('#encrypt'); 
let decrypt = document.querySelector('#decrypt');
let image = document.querySelector('.decryptImage');
let noMessage  = document.querySelector('.noMessage');
let encrypted = document.querySelector('.final-message');
let copy = document.querySelector('.btn-copy');



// array keys.

const keys = [
  ["e", "enter"],
  ['o','ober'],
  ['i','imes'],
  ["a", "ai"],
  ['u', 'ufat']
]
console.log(keys)


//event listener for  encrypt
encrypt.addEventListener('click', () => {
    let content = inputContent.value;
    if(content.length ==0 ){
      Swal.fire({
        title: 'Nada por encriptar, por favor ingresa el texto',
        // text: 'Do you want to continue',
        icon: 'warning',
        // confirmButtonText: 'Cool'
        showConfirmButton: true
        
    })}else{

    let checador = checkInput(content);
    if(checador == true){
        
        setTimeout(() => {
          encrypted.innerText = encripting(content)
        },800)
        
        if(content.length == 0){
          Swal.fire({
            title: 'Nada por encriptar, por favor ingresa el texto',
            // text: 'Do you want to continue',
            icon: 'warning',
            // confirmButtonText: 'Cool'
            showConfirmButton: true
            
          })
        }else{
        Swal.fire({
          title: 'Encripting',
          // text: 'Do you want to continue',
          icon: 'success',
          // confirmButtonText: 'Cool'
          showConfirmButton: false,
          timer:800,
        })
    
        inputContent.value = '';
        
        setTimeout(function(){ 
        image.style.display = 'none'
        noMessage.style.display = 'none'},800);
      }
    }else{
      Swal.fire({
        title: 'Recuerda no usar mayusculas ni simbolos',
        // text: 'Do you want to continue',
        icon: 'warning',
        // confirmButtonText: 'Cool'
        showConfirmButton: true
        
      })
    }

  }

    
})

//event listener para decrypting

decrypt.addEventListener('click', function(e){
  let inputDecrypt = inputContent.value; 
  
  if(inputDecrypt.length == 0){
      e.preventDefault()
      Swal.fire({
        title: 'Ingresa texto para desencriptar',
        // text: 'Do you want to continue',
        icon: 'warning',
        // confirmButtonText: 'Cool'
        showConfirmButton: true,     
      });

      
    }
    
    let checador = checkInput(inputDecrypt);
    if(checador){
      console.log('hi')
      setTimeout(() => {
        encrypted.innerText = decripting(inputDecrypt)
      },800);

      Swal.fire({
        title: 'Decrypting',
        // text: 'Do you want to continue',
        icon: 'success',
        // confirmButtonText: 'Cool'
        showConfirmButton: false,
        timer:800,
      });

     inputContent.value = '';
      setTimeout(function(){ 
        image.style.display = 'none'
        noMessage.style.display = 'none'},800);
    }else{
      Swal.fire({
        title: 'Recuerda no usar mayusculas ni simbolos',
        // text: 'Do you want to continue',
        icon: 'warning',
        // confirmButtonText: 'Cool'
        showConfirmButton: true
        
      })
    }
    
    
    
    
    
    
    
  
})





// event listener para copy.
copy.addEventListener('click', () =>{

    if(encrypted.innerText == ''){  Swal.fire({
        title: 'No existe texto para copiar',
        // text: 'Do you want to continue',
        icon: 'error',
        // confirmButtonText: 'Cool'
        showConfirmButton: false,
        timer: 1300
        
       
      })}else{   Swal.fire({
        title: 'Texto Copiado',
        // text: 'Do you want to continue',
        icon: 'success',
        // confirmButtonText: 'Cool'
        showConfirmButton: false,
        timer: 1300
      })
      let inputcopied = encrypted.innerText
      navigator.clipboard.writeText(inputcopied)
      image.style.display = 'block';
      noMessage.style.display = 'block';
    
    }
    
    encrypted.innerText = ''

})


// fucntins for encrypt

function encripting(text) {
 
    for (let i = 0; i < keys.length; i++) {
      if(text.includes(keys[i][0])) {
        text = text.replaceAll(keys[i][0],keys[i][1])
    }
  }
  return text
}

// falta checar si trabaja bien

function decripting(resultText) {
 
  for (let i = 0; i < keys.length; i++) {
    if(resultText.includes(keys[i][1])) {
      resultText = resultText.replaceAll(keys[i][1],keys[i][0])
  }
}
return resultText
}




//funcion para filtrar simbolos
function checkInput(input){
  const check = /[^a-z 0-9 ]/g.test(input);
  console.log(check);
  if(!check){
      // alert('cumple la regla ')
      return true
  }else{
      // alert('no cummple la regla');
      return false
  }}





