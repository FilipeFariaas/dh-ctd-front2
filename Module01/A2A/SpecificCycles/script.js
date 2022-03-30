const person1 = {

    name: `Filipe`,
    age: 22,
    profession: `dev to be`

};

for (let characteristic in person1) {

    console.log(person1[characteristic]);

};

const persons = [`Beatriz`, `Claudete`, `Filipe`, `Samuel`];

for (let person of persons) {

    console.log(person);

};