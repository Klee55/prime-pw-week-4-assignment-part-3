console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
console.log('current backet:', basket);

function addItem(item){
    basket.push(item);
    return 'true';
}

console.log('item added(should output true):', addItem('apple'));
console.log('(should output apple', basket);

function listItems(){
    for (i = 0; i < basket.length; i++){
        console.log(basket[i]);
    }
}

listItems();

function empty(){
    basket.pop();
    return basket;
}

console.log('should return an empty array', empty());
