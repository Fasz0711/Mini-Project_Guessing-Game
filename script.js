const adivinanzas =
[
    {
        id : 0,
        pregunta: '¿Qué cosa es, que cuanto más grande, menos se ve?',
        respuesta: 'La oscuridad'
    },
    {
        id : 1,
        pregunta: '¿Qué cosa es, que cuanto más se moja, más se seca?',
        respuesta: 'Una toalla'
    },
    {
        id : 2,
        pregunta: '¿Qué cosa es, que si la nombras, desaparece?',
        respuesta: 'El silencio'
    },
    {
        id : 3,
        pregunta: '¿Qué cosa es, que si la cortas nunca crece?',
        respuesta: 'Un hoyo'
    },
    {
        id : 4,
        pregunta: '¿Qué cosa es, que si la nombras, la rompes?',
        respuesta: 'El silencio'
    }
]

const aciertos = document.getElementById('aciertos');
const adivinanza = document.getElementById('adivinanza');
const button = document.getElementById('comprobar');
const userAnswer = document.getElementById('user_input');
const resultado = document.getElementById('resultado');

let cantidadAciertos = 0;
document.addEventListener('DOMContentLoaded', () => {
    randomAdivinanza();
    ;
});
button.addEventListener('click', comprobarRespuesta)

function randomAdivinanza() {
    const randomIndex = Math.floor(Math.random() * adivinanzas.length);
    const index = adivinanzas.findIndex((element) => element.id === randomIndex);
    const pregunta = adivinanzas[index].pregunta;
    adivinanza.textContent = pregunta;
}

function comprobarRespuesta(e) {
    e.preventDefault();
    const userAnswerValue = userAnswer.value;
    const currentPregunta = adivinanza.textContent;
    // devuelve el objeto que cumple con la condición
    const currentAdivinanza = adivinanzas.find((element) => element.pregunta === currentPregunta);
    // devuelve el valor de la propiedad respuesta del objeto
    const respuesta = currentAdivinanza.respuesta;

    if (userAnswerValue.trim() === respuesta.trim()) {
        resultado.style.color = 'green';
        resultado.textContent = '¡Correcto!';
        cantidadAciertos++;
    } else {
        resultado.style.color = 'red';
        resultado.textContent = '¡Incorrecto!';
    }

    randomAdivinanza();
    userAnswer.value = '';
    aciertos.textContent = `Acertadas: ${cantidadAciertos}`;

    setTimeout(() => {
        resultado.textContent = '';
    }, 2000);
}

