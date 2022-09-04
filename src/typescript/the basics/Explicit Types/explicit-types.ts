// Tipos explicitos são aqueles que eu forço o dev a ver o que eu quero receber naquela propriedade/parametro
// nesse exemplo, eu estou deixando EXPLICITO que quero receber uma person do tipo STRING e um date do tipo Date
function test3(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date}!`);
}