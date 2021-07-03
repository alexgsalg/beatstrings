import violin from '../imgs/inst-violin.png'
import sax from '../imgs/inst-sax.png'
import eletricguitar from '../imgs/inst-eletricguitar.png'
import guitar from '../imgs/inst-guitar.png'
import bass from '../imgs/inst-bass.png'
import piano from '../imgs/inst-piano.png'
import pick from '../imgs/inst-pick.png'


const Instruments = [
    {
        id: 0,
        title: 'Erudito',
        set: [
            {
                title: 'Violino',
                img: violin,
            },
            { title: 'Saxophone', img: sax },
            {
                title: 'Teclado / Piano',
                img: piano,
            },
        ],
    },
    {
        id: 1,
        title: 'Popular',
        set: [
            {
                title: 'Guitar',
                img: eletricguitar,
            },
            { title: 'Violão', img: guitar },
            { title: 'Baixo', img: bass },
        ],
    },
    {
        id: 2,
        title: 'Teoria musical',
        set: [
            {
                title: 'Inicialização',
                img: pick,
            },
            {
                title: 'Teoria avançada',
                img: pick,
            },
            {
                title: 'Musicalização infantil',
                img: pick,
            },
        ],
    },
];

export default Instruments;