/**
   com a congiguração "strictNullChecks": true, podemos pegar erros como esse abaixo, se removermos
  essa config, ele não vai detectar esse erro.
  ou seja se declararmos uma variavel e não inicializar ela, e dps tentar manipular ela
  vai dar erro pois a variavel é null ou undefined e o "strictNullChecks": true, resolve esse problema
  sempre vai verificar se é null ou undefined 

  para configurar o "strictNullChecks": true vá até "compilerOptions" -> "strictNullChecks": true
 */

// let nome: string;

// nome.toLowerCase();