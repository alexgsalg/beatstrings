import violin from '../imgs/inst-violin.png'
import sax from '../imgs/inst-sax.png'
import eletricguitar from '../imgs/inst-eletricguitar.png'
import guitar from '../imgs/inst-guitar.png'
import bass from '../imgs/inst-bass.png'
import flute from '../imgs/inst-flute.png'
import pick from '../imgs/inst-pick.png'


const Instruments = [
    {
        id: 0,
        title: 'Cordas',
        set: [
            {
                title: 'Violino',
                img: violin,
            },
            { title: 'Violão', img: guitar },
            {
                title: 'Guitar',
                img: eletricguitar,
            },
            { title: 'Baixo', img: bass },
        ],
    },
    {
        id: 1,
        title: 'Sopro',
        set: [
            { title: 'Saxophone', img: sax },
            {
                title: 'Flauta doce',
                img: flute,
            },
        ],
    },
    {
        id: 2,
        title: 'Teoria musical',
        set: [
            {
                title: 'Musicalização infantil',
                img: pick,
            },
            {
                title: 'Inicialização instrumental',
                img: pick,
            },
            {
                title: 'Básico ao avançado',
                img: pick,
            },
        ],
    },
];

export default Instruments;