/*const rows = 6;
let pattern = '';

for (let i = 0; i < rows; i++) {
  pattern += '* ';
  console.log(pattern);
}*/

const rows = 6;

for (let i = 0; i < rows; i++) {

    let pattern = '';
    for (let j = 0; j <= i; j++) {
    pattern += '* ';
   }
   
   console.log(pattern);
}