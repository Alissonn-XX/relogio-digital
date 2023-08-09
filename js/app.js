const horasRelogio = document.querySelector('#hora');
const minutosRelogio = document.querySelector('#minuto');
const segundosRelogio = document.querySelector('#segundo');

const relogio = () =>{
    const horaAtual = new Date();
    const horas =  horaAtual.getHours();
    const minutos = horaAtual.getMinutes();
    const segundos = horaAtual.getSeconds();
    return {horas:horas,minutos:minutos,segundos:segundos}
};

const relogioAtvo = ({horas,minutos,segundos}) => {
   horasRelogio.innerHTML = horas;
   minutosRelogio.innerHTML = minutos;
   segundosRelogio.innerHTML = segundos < 10 ? '0'+segundos : segundos;
}

setInterval(()=>{
    relogioAtvo(relogio())
},100)
