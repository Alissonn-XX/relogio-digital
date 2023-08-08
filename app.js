const arrayClass =['nove', 'oito','sete', 'seis', 'cinco', 'quatro', 
'tres', 'dois', 'um', 'zero'];

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


const ativo=(num)=>{
    return console.log(num.segundos)
}


// setInterval(()=>{
//     ativo(relogio())
// },1000)




const numHoras = (str) =>{
  
}
const numMinutos = (str) =>{
  
}
const numSegundos = (str) =>{


}


const objetoNumeros=[
[
    'topo',
    'esquerdo-alto',
    'esquerdo-baixo',
    'direita-alto',
    'direita-baixo',
    'baixo',
],
   [
      ' direita-alto',
      'direita-baixo'
   ]
,
[
    'topo',
    'direita-alto',
    'meio',
    'esquerda-baixo',
    'baixo',
]
,
[
    'topo',
    'direita-alto',
    'meio',
    'direita-baixo',
    'baixo',
]
,
[ 

    'esquerda-alto',
    'direita-alto',
    'meio',
    'direita-baixo',
]
,
[ 

    'topo',
    'esquerda-alto',
    'meio',
    'direita-baixo',
    'baixo',
]

,
[ 

    'topo',
    'esquerda-alto',
    'esquerda-baixo',
    'meio',
    'direita-baixo',
    'baixo',
]

,
[ 
    'topo',
   ' direita-alto',
    'direita-baixo',
]
,
[ 
    'topo',
    'esquerda-alto',
    'esquerda-baixo',
    'meio',
   ' direita-alto',
    'direita-baixo',
    'baixo',
]
,


]

const n = Array.from(minutos.children[1].children)

n.forEach(item =>console.log(item))


const numeroNove = {
    topo:'topo',
    esquerdaAlto:'esquerda-alto',
    direitaAlto:'direita-alto',
    meio:'meio',
    direitaBaixo:'direita-baixo',
    baixo:'baixo',
}


