function greeter(person: string | string[]) {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(' ');
  }
}

let user = ["Jane", "Doe"];

console.log(greeter(user)); //Output: Hello, Jane Doe
console.log(greeter("Jane Doe")); // Output: Hello, Jane Doe