
const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const Janeth: Character = {
    name: 'Janeth',
    hp: 100,
    skills: ['Bash', 'Counter'],
};

Janeth.hometown = 'Rivendell';


console.table(Janeth);

export{};