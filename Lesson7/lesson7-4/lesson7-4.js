function Client (id, name, surname , email, phone, order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
};
let clients=[
    new Client(1, 'Mariia', 'Marynych', 'mariia@gmail.com', '+380684673579', [{title:'Blender', price: 5685 }]),
    new Client(2, 'Tetiana', 'Ivashchenko', 'tetiana@gmail.com', '+380682345678',[{title:'Microwave oven', price: 6792 }, {title:'Kettle', price: 1467 }]),
    new Client(3, 'Oleksandr', 'Ivankiv', 'oleksandr@gmail.com', '+380965677467',[{title:'Vacuum cleaner', price: 15685 }]),
    new Client(4, 'Andrii', 'Kovalenko', 'andrii@gmail.com', '+380436733879',[{title:'Washing machine', price: 21462 }]),
    new Client(5, 'Olha', 'Borysenko', 'olha@gmail.com', '+380578360834',[{title:'Mixer', price: 1685 }, {title:'Toaster', price: 2356 }]),
    new Client(6, 'Oksana', 'Onyshchenko', 'oksana@gmail.com', '+380479234569',[{title:'Hair dryer', price: 29763 }, {title:'Toaster', price: 2356 }]),
    new Client(7, 'Olha', 'Shevchenko', 'olha@gmail.com', '+380894723456',[{title:'Kettle', price: 1467 }]),
    new Client(8, 'Petro', 'Stetsenko', 'petro@gmail.com', '+380357934569',[{title:'Dishwasher', price: 25685 }]),
    new Client(9, 'Pavlo', 'Harashchenko', 'pavlo@gmail.com', '+380973456782',[{title:'Vacuum cleaner', price: 22521 }, {title:'Kettle', price: 1467 }, {title:'Toaster', price: 2356 }]),
    new Client(10, 'Yuliia', 'Yaroshenko', 'yuliia@gmail.com', '+380778123897',[{title:'Toaster', price: 2356 }]),
]
console.log(clients);