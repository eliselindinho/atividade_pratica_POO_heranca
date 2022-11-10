/*
Uma empresa que cuida de animais dos tipos (peixes, mamíferos e aves), precisam 
criar um sistema para registrar os animais que são atendidos por eles. Pensando 
nisso resolveram contratar a Mach1 para criar o sistema. Os analistas da Mach1 
chegaram ao modelo de classe abaixo para desenvolver o sistema, escreva as 
classes com base no Modelo UML e especificações abaixo. 
a. Todas as classes que possuírem herança precisam chamar em seu 
construtor o construtor do Pai passando os parâmetros. 
b. Criar construtor na classe Animal que receberá por parâmetro o nome do 
animal. 
c. Criar construtor na classe Ave que receberá por parâmetro o tamanho do 
bico e parâmetros da classe pai. 
d. Criar construtor na classe Peixe que receberá por parâmetro o tipo de água 
do Habitat e parâmetros da classe pai 
e. Criar construtor na classe Mamífero que receberá por parâmetro se possui 
calda e parâmetros da classe pai. 
f. Criar construtor na classe Ave falante um array com palavras que o animal 
fala e parâmetros da classe pai. 
g. Criar construtor na classe Ave não Falante com parâmetros da classe pai 
h. Criar construtor na classe Canino com parâmetro se consegue latir e 
parâmetros da classe pai. 
i. Criar construtor na classe Felino com parâmetro se consegue miar e 
parâmetros da classe pai.*/

class Animal {
  nome = "";
  codigo = "";
  #dataNascimento = "";

  constructor(nome) {
    this.nome = nome;
  }
  set DataNascimento(value) {
    let dataIvertida = value.split("/").reverse().join("/");
    this.#dataNascimento = dataIvertida;
  }
}

class Ave extends Animal {
  VelocidadeVoo = "";
  QuantidadeAsas = "";
  TamanhoBico = "";

  constructor(nome, TamanhoBico) {
    super(nome);
    this.TamanhoBico = TamanhoBico;
  }
}

let meuAnimal = new Animal("Mel");
meuAnimal.codigo = 1;
meuAnimal.DataNascimento = "2015/06/10";
console.log(meuAnimal);

class Peixe extends Animal {
  TipoAguaHabitat = "";
  PossuiEscamas = "";
  PossuiBarbatana = "";

  constructor(nome, TipoAguaHabitat) {
    super(nome);
    this.TipoAguaHabitat = TipoAguaHabitat;
  }
}

let peixinho = new Peixe("Lilica", "Água doce");
console.log(peixinho);

class Mamifero extends Animal {
  PossuiPelo = "";
  Velocidade = "";
  PossuiCalda = "";

  constructor(nome, PossuiCalda) {
    super(nome);
    this.PossuiCalda = PossuiCalda;
  }
}
let onca = new Mamifero("Pintada", "Sim");
console.log(onca);

class AveFalante extends Ave {
  Vocabulario = [];

  constructor(nome, TamanhoBico, palavras) {
    super(nome, TamanhoBico);
    this.Vocabulario = palavras;
  }
}

class AveNaoFalante extends Ave {
  TipoPiado = "";
}

let papagaio = new AveFalante("Lola", 5, ["Oi", "Tchau"]);
console.log(papagaio);

let periquito = new AveNaoFalante();

class Canino extends Mamifero {
  ConsegueLatir = "";
  ConsegueUiva = "";

  constructor(nome, PossuiCalda, ConsegueLatir) {
    super(nome, PossuiCalda);
    this.ConsegueLatir = ConsegueLatir;
  }
}

class Felino extends Mamifero {
  ConsegueMiar = "";

  constructor(nome, PossuiCalda, ConsegueMiar) {
    super(nome, PossuiCalda);
    this.ConsegueMiar = ConsegueMiar;
  }
}
let cachorro = new Canino("Cindy", "Sim", "Sim");
console.log(cachorro);

let gato = new Felino("Marie", "Sim", "Sim");
console.log(gato);
