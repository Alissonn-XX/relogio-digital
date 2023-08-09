const horas = document.querySelector('#hora');
const minutos = document.querySelector('#minuto');
const segundos = document.querySelector('#segundo');

const relogio = () =>{
    const horaAtual = new Date();
    const horas =  horaAtual.getHours();
    const minutos = horaAtual.getMinutes();
    const segundos = horaAtual.getSeconds();

    return {hoas:horas,minutos:minutos,segundos:segundos}
};

const numHoras = (str) =>{
    
}
const numMinutos = (str) =>{
    
}
const numSegundos = (str) =>{
    

}

// setInterval(()=>{
//     ativo(relogio())
// },1000)



