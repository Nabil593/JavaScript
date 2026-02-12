
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




// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// let reversedArray = [];
// for(const color of colors) {
//     reversedArray.unshift(color);
// }
// console.log(reversedArray);




// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const evenNumbers = [];
// for (const num of numbers) {
//     if (num % 2 === 0) {
//         evenNumbers.push(num);
//     }
// }
// console.log(evenNumbers);



// var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
// const newArray = [];
// for (const num of numbers) {
//     newArray.push(num);
// }
// const newString = newArray.join('');
// console.log(newString);



// const statement = 'I am a hard working person';
// const newStatement = statement.split(' ');
// const reverseStatement = [];
// for (const str of newStatement) {
//     reverseStatement.unshift(str);
// }
// const result = reverseStatement.join(' ');
// console.log(result);



// function array (original) {
//     const copy = [...original];
//     copy[0] = 99;
//     return {Original: original, Copy: copy };
// }

// const result = array([1, 2, 3]);
// console.log('Original:', result.Original, 'Copy:', result.Copy);



// function arrrayOfStudents(students) {
//     for (const student of students) {
//         const name = student.name;
//         const mark = student.marks;
//         const final = `${name} scored ${mark}`;
//         console.log(final);
//     }
// }

// const studentDetails = [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 },
//   { name: "Nabil", marks: 30 }
// ];
// arrrayOfStudents(studentDetails);