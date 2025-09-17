class Cinderella{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
};
class Prince {
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
};
const cinderellas = [
    new Cinderella ('Anna', 18, 36),
    new Cinderella ('Maria', 25, 39),
    new Cinderella ('Olha', 23, 39),
    new Cinderella ('Khrystyna', 24, 37),
    new Cinderella ('Yuliia', 19, 38),
    new Cinderella ('Oksana', 18, 35),
    new Cinderella ('Nadiia', 19, 38),
    new Cinderella ('Nataliia', 21, 37),
    new Cinderella ('Larysa', 23, 38),
    new Cinderella ('Lidiia', 19, 37),
];
const prince = new Prince('Lev', 26, 35);

const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.slipper);

prince.wife = cinderellaMain;

console.log(cinderellas);
console.log(prince);