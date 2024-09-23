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

// Task 4: Create a Function to Calculate Total for an Order

function calculateTotal(orders) = {
    let total = 0
    for ( let inventory = 0; inventory < orders.length; inventory + +) {
        total += orders[inventory];
    }
    return total;
}

let customerOrders = [2700 , 700 , 300 , 650];
let totalAmount = calculateTotal (customerOrders);
console.log ('Total Amount: $${totalAmount}');


