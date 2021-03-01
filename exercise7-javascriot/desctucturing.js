const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

// const player = obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;

// Use this instead of above
const { player, experience } = obj;
let { wizardLevel } = obj;




const name = 'jon snow';

const obj2 = {
    [names]: 'hello',
    ['ray' + 'smith']: 'hihi'
}


const a = 'Simon';
const b = true;
const c = {};

const obj3 = {
    a,
    b,
    c
}