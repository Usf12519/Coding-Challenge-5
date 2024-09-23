// Task 1: Create an Inventory Array of Producy Objects

const inventory = [
    {name: 'Bed', price: 2700, quantity: 5},
    {name: 'Chair', price: 700, quantity: 3},
    {name: 'Lamp', price: 300, quantity: 2},
    {name: 'Dresser', price: 650, quantity: 4},
    
];

// Task 2: Create an Orders Array of Order Objects

let orders = [];

// Task 3: Create a Function to Place an Order


function placeOrder(customername, itemsOrdered)
    orders.push(
        custName: customername
        items: itemsOrdered
        status: 'pending'
    );

placeOrder('Jasmine' , [{name: chair , quantity: 3}]);
console.log(orders)