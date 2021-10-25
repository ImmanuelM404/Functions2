// Interactive Functions 2 


// const add = (num1, num2) => num1 + num2; 

// const subtract = (num1, num2) => num1 - num2;

// const multiply = (num1, num2) => num1 * num2;

// const divide  = (num1, num2) => num1 / num2;

// // create a calculator 

// const calculator = (num1, num2, callback) => {
//     if (+num1 && +num2){   // + before will convert string to number "5"
//         num1 = +num1
//         num2 = +num2
//         return callback(num1,num2)
//         // in case someone passes in a datatyoe that is not a number, notify them with else statement 
//     } else {
//         console.log('you need to send in numbers')
//     }
// }
//                                //make sure parmeters equal numbrs 

// const result = calculator(1, 2, multiply); // can change 3 paramter to change the operation of the callback 
// //const result = calculator('1', '2', add);
// console.log(result);


                                                    //Pet Shop 
// looping over these and changing values inside of them 
      // loop over these arrays and discount by percent or rate; make these adjustments according to specific cateogory 
// const dogProducts = [
//     {
//       name: 'leash',
//       colors: ['red', 'blue', 'green'],
//       category: 1,
//       inventory: 30,
//       basePrice: 13.99, 
//       displayPrice: 13.99
//     }, 
//     {
//       name: 'chew toy',
//       colors: ['brown'],
//       category: 2,
//       inventory: 120,
//       basePrice: 6.00, 
//       displayPrice: 6.00
//     }, 
//     {
//       name: 'rope',
//       colors: ['blue & green', 'red & yellow'],
//       category: 2,
//       inventory: 75,
//       basePrice: 4.99, 
//       displayPrice: 4.99
//     }
// ]

// const catProducts = [
//   {
//     name: 'mouse toy', 
//     colors: ['pink', 'grey', 'black'], 
//     category: 2, 
//     inventory: 125, 
//     basePrice: 2.50, 
//     displayPrice: 2.50
//   },
//   {
//     name: 'cat sweater',
//     colors: ['black'],
//     category: 1,
//     inventory: 15,
//     basePrice: 10.00, 
//     displayPrice: 10.00
//   }, 
//   {
//     name: 'straching post',
//     colors: ['tan'],
//     category: 2,
//     inventory: 40,
//     basePrice: 22.99, 
//     displayPrice: 22.99
//   },
// ];

// const applyPercentDiscount = (product, discount) => {
//     // set up logic to change display price 
//     product.displayPrice = product.basePrice * (1 - discount);
// };
//     // create another function flat rate discount 
// const applyFlatRateDiscount = (product, discount) => {
//     product.displayPrice = product.basePrice - discount;
//}; // Line 88-95 will be used for callback function 

// const applyDiscount = (arr, callback, discount) => { 
//     // we have two arrays {cat,dog prodcuts}
//     // discount is flat or percent 
//     arr.forEach((product) => {
//         callback(product, discount);
//     }); // ending () because forEach is recieving a par
// }; 

// applyDiscount(dogProducts, applyPercentDiscount, .25);// invoking 
// console.log(dogProducts)

// const applyDiscountByCategory = (arr, category, callback, discount) => {
//     arr.forEach(product => {
//         if (product.category === category){
//             callback(product, discount)
//         } else { 
//             console.log('this product is not in the discounted category')
//         }
//      });
// }
// applyDiscountByCategory(catProducts, 1, applyFlatRateDiscount, 1.00) 
// console.log(catProducts)

                           // High Order Array
// Making sandwich and adding indgredients 
function makeSandwich(bread){
    return function(ingredients){
        let order = `You ordered a ${bread} bread sandwich with ` // inner function will return 

        for ( let i = 0; i < ingredients.length; i++){
            /// Need more logic in here to push into strings and grammer to make logical sentence, this will be inserted in for loop
            if (i === ingredients.length - 1 && i !== 0){
            // push string to end of our order
            order += `and ${ingredients[i]}. `//when at end of arrary we are going to say this sentence
            } else if (ingredients.length === 1){
            // if we only have one ingredient, push string at end of our order
            order += `${ingredients[i]}. ` // need index or it will select entire array
        }   else {
            order += `${ingredients[i]}, `
        } // this loop went thru all ingredients 

    }
    return order  // outer function 'makeSandwich' inner doesnt have name yet
  }
}

const makeWheatSandwich = makeSandwich('wheat'); // wheat will be inserted in function 

const results = makeWheatSandwich(['pickles', 'cheese', 'ham', 'lettuce'])

const results2 = makeWheatSandwich(['turkey', 'mayo', 'onions', 'lettuce'])

console.log(results2)