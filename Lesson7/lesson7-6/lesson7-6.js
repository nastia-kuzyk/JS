function Car(mode, producer, year, maxSpeed, engineVolume) {
    this.mode = mode;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info= function(){
        for (const kay in this){
            console.log(kay, this[kay]);
        }
    };
    this.increaseMaxSpeed = function(newSpeed){
        if (newSpeed > 0)
        this.maxSpeed = this.maxSpeed+newSpeed;
    };
    this.changeYear = function (newYear){
        if (year > 1815)
            this.year = newYear;
    };
    this.addDriver = function (driver){
        if (driver)
            this.driver = driver;
    };
}
const car = new Car('BMW X5', 'BMW Group ', 2010, 220, 2);
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2020);
car.addDriver({});
console.log(car);