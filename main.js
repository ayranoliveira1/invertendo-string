const readline = require("readline");

function inverterString(string) {
   let stringInvertida = "";

   for (let i = string.length - 1; i >= 0; i--) {
      stringInvertida += string[i];
   }

   return stringInvertida;
}

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});

rl.question("Digite uma palavra: ", (palavra) => {
   console.log(inverterString(palavra));
   rl.close();
});
