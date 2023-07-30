let employee = {
    name: 'Sam',
    salary: '800000',
    jobTitle: 'manager',
    meeting: function(){
        console.log('time to attend a meeting')
    }
}
let bankAccount = {
    accountNum: 011445,
    balance: 40000,
    accountType: 'checking',
    transfer: function(){
        console.log('Transfer 2000 to saving account')}
    }
    

let dogs = {
    breed: 'Husky',
    color: 'grey and white',
    age: '4 months',
    fetch: function(){
        console.log('fetch the frizbee')
    }
}
let product = {
    name: 'iphone',
    price: 800,
    manufacturer: 'apple',
    category: 'smarthphone'
}
product.description = {
   content: 'latest iphone release coming with new features'
}
//console.log(product);//
//product.price = product.price + 10;
//console.log(product.price);//

delete product.description;
console.log(product);

let blogPosts = [
    {
        title: 'Best sites in Newyork',
        author: 'Jane matt',
        date: '23-5-2023',
        content: 'Top sits to visit in NewYork',
},
{
    title: 'Transport in the city',
    author: 'Jaden jason',
    date: '20-5-2023',
    content: 'There are several etransport systems'
},
];
if(!blogPosts.date){
    console.log('field is empty');
}
console.log(blogPosts);


