class Car{
  constructor (mode, producer, year, maxSpeed, engineVolume) {
      this.mode = mode;
      this.producer = producer;
      this.year = year;
      this.maxSpeed = maxSpeed;
      this.engineVolume = engineVolume;
  }
   drive(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    info(){
        for (const kay in this){
            console.log(kay, this[kay]);
        }
    };
    increaseMaxSpeed(newSpeed){
        if (newSpeed > 0)
            this.maxSpeed = this.maxSpeed+newSpeed;
    };
    changeYear (newYear){
        if (newYear > 1815)
            this.year = newYear;
    };
    addDriver(driver){
        if (driver)
            this.driver = driver;
    };
};
const car = new Car('BMW X5', 'BMW Group ', 2010, 220, 2);
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2020);
car.addDriver({});
console.log(car);