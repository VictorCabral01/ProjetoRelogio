
function zero (n){

    return n >= 10  ? n : `0${n}`

}



setInterval(() =>{


const data = new Date()



const hora = zero(data.getHours(0-23))
const minuto = zero(data.getMinutes(0-60))
const segundo = zero(data.getSeconds(0-60))


document.getElementById('hora').innerHTML =  `<span class="hora">${hora}</span> <span class="separador">:</span> <span class="hora">${minuto}</span><span class="separador">  : </span><span class="hora">${segundo}</span> `


},00000);
