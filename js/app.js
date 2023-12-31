const horasRelogio = document.querySelector('#hora');
const minutosRelogio = document.querySelector('#minuto');
const segundosRelogio = document.querySelector('#segundo');
const btn = document.querySelector('#btn-3d')

const relogio = () =>{
    const horaAtual = new Date();
    const horas =  horaAtual.getHours();
    const minutos = horaAtual.getMinutes();
    const segundos = horaAtual.getSeconds();
    return {horas:horas,minutos:minutos,segundos:segundos}
};

const relogioAtvo = ({horas,minutos,segundos}) => {
   horasRelogio.innerHTML = horas;
   minutosRelogio.innerHTML = minutos < 10 ? '0'+minutos : minutos;
   segundosRelogio.innerHTML = segundos < 10 ? '0'+segundos : segundos;
}

btn.addEventListener('click',()=>{
    document.getElementById('relogio3d').classList.toggle('ativo')
})

setInterval(()=>{
    relogioAtvo(relogio())
},1000)
