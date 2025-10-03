
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 5,
    song: 'Why you only call me when you are high?',
    details: {
        author: 'Arctic Monkeys',
        year: 2013
    }
}

const song = 'New song';

const { song:anotherSong, songDuration:duration, details} = audioPlayer;
const { author } = details;

// console.log('Song: ', anotherSong);
// console.log('Duration: ', duration);
// console.log('Author: ', audioPlayer.details.author);
// console.log('Author: ', author);

const [, , trunks='Not found']: string[] = ['Goku', 'Vegeta'];

console.error ('Personaje 3:', trunks );

export  {};