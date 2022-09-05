// como resolver quando utilizamos union types
// Sempre verifique o tipo que você espera para fazer algum tratamento, ou seja
// if typeof id === 'number' faz coisas de number, if typeof id === 'string' faz coisas de string e por ai vai.
// Caso errado: 

// function printId1(id: number | string) {
//     console.log(id.toUpperCase());
// }

// Caso correto

// function printId2(id: number | string) {
//   if (typeof id === "string") {
//     // In this branch, id is of type 'string'
//     console.log(id.toUpperCase());
//   } else {
//     // Here, id is of type 'number'
//     console.log(id);
//   }
// }