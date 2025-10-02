import violin from '../imgs/inst-violin.png'
import sax from '../imgs/inst-sax.png'
import eletricguitar from '../imgs/inst-eletric-guitar.png'
import guitar from '../imgs/inst-guitar.png'
import bass from '../imgs/inst-bass.png'
import flute from '../imgs/inst-flute.png'
import pick from '../imgs/inst-pick.png'
import piano from '../imgs/inst-piano.png'
import keyboard from '../imgs/inst-keyboard.png'
import microphone from '../imgs/inst-microphone.png'


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
                title: 'Guitarra',
                img: eletricguitar,
            },
            { title: 'Baixo', img: bass },
        ],
    },
    {
        id: 1,
        title: 'Teoria musical',
        set: [
            {
                title: 'Do básico ao avançado',
                img: pick,
            },
            {
                title: 'Inicialização instrumental',
                img: pick,
            },
            {
                title: 'Musicalização infantil',
                img: pick,
            },
            {
                title: 'Harmonia',
                img: pick,
            },
        ],
    },
    {
        id: 2,
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
        id: 3,
        title: 'Teclas',
        set: [
            { title: 'Piano', img: piano },
            {
                title: 'Teclado',
                img: keyboard,
            },
        ],
    },
    {
        id: 4,
        title: 'Canto',
        set: [
            { title: 'Canto Popular', img: microphone },
            { title: 'Canto Erudito', img: microphone },
            { title: 'Coral', img: microphone },
        ],
    },
    
];

export default Instruments;