// This is an industrial-grade general-purpose greeter function:
function greet(person: any, date: Date) {
  console.log(`Hello ${person}, today is ${date}!`);
}
 
// O Typescript tem uma configuração que você pode fazer de deixar compilar com esse erro, ou se quiser ser mais rigoroso
// voce pode simplesmente impedir que o typescript compile com erro
// para isso vá até o seu tsconfig.json e em "compilerOptions" dentro dele sete o "noEmitOnError": para true. -> "noEmitOnError": true,
// se você está fazendo uma migração do js para o ts, provavelmente não vai querer barrar erros, pois é uma migração e o sistema já está funcionando, então nesse caso
// o "noEmitOnError": seria false -> "noEmitOnError": false, e só iria ser ativado após toda a migração seja concluída com sucesso.
greet("Brendan", 'qualquer-coisa');