// const burgerPrice = 300;
// if (burgerPrice > 500) {
//     console.log("Free coke");
// } else {
//     console.log('Coke 30 taka' );
// ;}


// const weight =62;
// const height = 1.73736;
// const BMI = weight / (height * height);


// if (BMI < 18.5) {
//     console.log('you are underweight');
// } else {
//     if (BMI >= 18.5 && BMI <= 24.9) {
//         console.log('you are normal.');
//     } else {
//         if (BMI >= 25 && BMI <= 29.9) {
//             console.log('you are overweight');
//         } else {
//             console.log('Otherwise, you are obese')
//         }
//     }
// }



// const studentScore = 75;

// if (studentScore >= 90 && studentScore <= 100) {
//     console.log('Grad : A');
// } else if (studentScore >= 80 && studentScore <= 89) {
//     console.log('Grad : B')
// } else if (studentScore >= 70 && studentScore <= 79) {
//     console.log('Grad : C')
// } else if (studentScore >= 60 && studentScore <= 69) {
//     console.log('Grad : D')
// } else {
//     console.log('Grad : F')
// }





// const myScore = 90;
// const friendscore = 70;

// if (myScore > 80) {
//     if (friendscore > 80) {
//         console.log('Go for lunch')
//     } else {
//         if (friendscore < 80 && friendscore >= 60) {
//             console.log('good luck next time');
//         } else {
//             if (friendscore < 60 && friendscore >= 40) {
//                 console.log("keep your friend's message unseen");
//             } else {
//                 console.log('block your friend');
//             }
//         }
//     }
// } else {
//     console.log('go to home and sleep and act sad');
// }



// const num1 = 8;
// const num2 = 10;

// const result = num1 > num2 ? (num1 * 2) : num1 + num2;

// console.log(result)









// const age = 70;
// const isStudent = true;
// const ticketPrice = 800;
// let price;

// if (age < 10) {
//     price = 0;
// } else if (isStudent) {
//     price = ticketPrice - ticketPrice * (50 / 100);
// } else if (age >= 60) {
//     price = ticketPrice - ticketPrice * (15 / 100);
// } else {
//     price = ticketPrice;
// }

// console.log(price);







//---------------ARRAY---------------\\

// const fruite = ['Mango', "Papa", 'Orange', 'Banana', 'Apple'];
// console.log(fruite[3])


// const tourist = ['Dubai', 'Rome', 'Paris'];
// tourist.push('Tokyo');
// tourist.push('Madina', 'Makkha');
// tourist.pop();
// console.log(tourist)


// const books = ['Animal', 'JavaScript', 'Python', 'Hablu', 'Momotaj'];
// const check = books.includes('JavaScript');

// if (check) {
//     console.log('Yes! this is here')
// } else {
//     console.log('No. Bad Luck. You have no money');
// }




// const food = ['Rice', "Cucumber"];

// if (Array.isArray(food)) {
//     console.log('Yes! this is a Array')
// }else {
//     console.log('No! this is not a Array')
// }




// const array01 = ['Paglu', 'Chaglu', 'Modon']
// const array02 = ['Pagol', 'Chagol', 'Alu'];
// const connect = array01.concat(array02);
// console.log(array01, array02, connect);