let foobar = (users) =>{
    for (const user of users) {
        document.write(`<li>${user.id}, ${user.name}, ${user.age}</li>`);

    }
}
foobar([
    {id:1, name:"Ivan", age: 30},
    {id:2, name: "Vasya", age: 25},
    {id:3, name:"Maria", age: 33},
    {id:4, name:"Anna", age: 35},
    {id:5, name:"Andrey", age: 20}
])