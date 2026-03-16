const products = [
  { id: 1, name: "Laptop", price: 850 },
  { id: 2, name: "Keyboard", price: 45 },
  { id: 3, name: "Mouse", price: 25 },
  { id: 4, name: "Monitor", price: 200 },
  { id: 5, name: "Headphones", price: 60 },
  { id: 6, name: "Webcam", price: 40 },
  { id: 7, name: "Microphone", price: 120 },
  { id: 8, name: "USB Hub", price: 20 }
];

const matchProduct = (product, search) => {
    matchPro = [];
    for(const prod of product) {
        if (prod.name.includes(search)) {
            matchPro.push(prod);
        }
    }
    return matchPro;
}
// const a = matchProduct(products, "M");
// console.log(a);
console.log(matchProduct(products, 'o'))