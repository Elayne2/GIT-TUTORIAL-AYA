const people = ["Greg", "Mary", "Devon", "James"];

people.shift()

people[2]="Jason"

people.push("Aya")
console.log(people.indexOf("Mary"))

console.log(people.slice(1,3))

console.log(people.indexOf("Foo"))
/*it returns -1 because we don't have Foo in our array*/

const last= people[3]
console.log('last:',last)

/* const last= people[people.length -1]
console.log('last:',last)

The relation between the index of the last element in the array and its length is that index of the last element is the length of the array -1*/

console.log(people)