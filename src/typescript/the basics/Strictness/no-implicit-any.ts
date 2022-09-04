// noImplicitAny -> esse parametro quando TRUE, vai gerar erros para arquivos que não deixam o any como explicito, por exemplo:
// function test4(a) {
//   console.log(a);
// }

// noImplicitAny -> esse parametro quando FALSE, não vai gerar erros, vai ficar como se fosse um javascript normal, por exemplo:
// function test4(a) {
//   console.log(a);
// }

// PARA TESTAR AMBOS OS CENÁRIOS vc deve ir até tsconfig em "compilerOptions" e colocar "noImplicitAny": true, ou "noImplicitAny": false,
// "noImplicitAny": true, para o primeiro cenário
// "noImplicitAny": false, para o segundo cenário.