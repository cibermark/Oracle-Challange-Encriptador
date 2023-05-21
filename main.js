let areaTexto = document.querySelector('#text');
    const encript = document.querySelector('#encrypt');
    const copy = document.querySelector('#copy');
    let translated = document.querySelector('.encriptado');
    const decryptbtn = document.querySelector('#decrypt');

    encript.addEventListener('click', ()=>{

        let content =  areaTexto.value
        console.log(content);
        translated.value =  encripting(content)

        areaTexto.value = ""

    });


    function  encripting(string){
       let splited =  string.split(' ')
       console.log( splited)
       let arr = []
       
       for(let i=0; i<splited.length; i++){
        let word  = splited[i].split('')
        
            for(let j=0; j<word.length; j++){
                 arr.push(word[j] += randomLeters())
            }
            if([i] < splited.length - 1 ){
                arr.push(' ') 
            }
         
            
       }

       console.log(splited, arr)

       return arr.join('')    
    }



    function randomLeters (){
        const array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        let letters= ''
        letters+= array[randomNumbers()]
        letters+=array[randomNumbers()]
        return letters

    }


    function randomNumbers() {
        let randomNumber = Math.floor(Math.random() * 25)
        return randomNumber
    }

    console.log(randomLeters())


    // Event lsitener para boton copiar

    copy.addEventListener('click', ()=>{
        translated.select() //esto solo funciona con inputs
        document.execCommand('Copy')
        translated.value = ''
    })



    //Event listener  decrypt

    decryptbtn.addEventListener('click', ()=>{
        let textoEncriptado = areaTexto.value
        let splited = decrypt(textoEncriptado)
        areaTexto.value = '' 
        
    });

    // funcion para desencriptar

    function decrypt(text){
        let split = text.split(' ')
       let traducido =[]  
        for(let i=0; i<split.length; i++){
            let palabra = split[i].split('');
            for(let j=0; j<palabra.length; j+=3){
                traducido.push(palabra[j])
            }
            if([i] < split.length - 1 ){
                traducido.push(' ') 
            }
        }

      
        console.log(traducido + ' traducido')

        let final = traducido.join('')
        console.log(final)
        translated.value = final}