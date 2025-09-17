function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let Users=[
    new User(1, 'Oleksandr', 'Ivankiv', 'oleksandr@gmail.com', '+380965677467'),
    new User(2, 'Andrii', 'Kovalenko', 'andrii@gmail.com', '+380436733879'),
    new User(3, 'Oksana', 'Onyshchenko', 'oksana@gmail.com', '+380479234569'),
    new User(4, 'Petro', 'Stetsenko', 'petro@gmail.com', '+380357934569'),
    new User(5, 'Pavlo', 'Harashchenko', 'pavlo@gmail.com', '+380973456782'),
    new User(6, 'Tetiana', 'Ivashchenko', 'tetiana@gmail.com', '+380682345678'),
    new User(7, 'Yuliia', 'Yaroshenko', 'yuliia@gmail.com', '+380778123897'),
    new User(8, 'Olha', 'Borysenko', 'olha@gmail.com', '+380578360834'),
    new User(9, 'Olha', 'Shevchenko', 'olha@gmail.com', '+380894723456'),
    new User(10, 'Mariia', 'Marynych', 'mariia@gmail.com', '+380684673579')
]
console.log(Users)