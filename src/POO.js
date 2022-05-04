class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  falar() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
  }
}
const pessoa = new Pessoa("João", 20);
pessoa.falar();

class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
  }
  pagarImposto() {
    return this.salario * 0.11;
  }
}
const funcionario = new Funcionario("João", 20, 1000);
console.log(funcionario.pagarImposto());

class Carro {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
  ligar() {
    console.log(`Ligando o ${this.marca} ${this.modelo}`);
  }
}

// associação da classe Funcionario com a classe Carro

const carro = new Carro("Ford", "Ka");

funcionario.carro = carro;
console.log(funcionario);

class Livro {
  constructor(titulo, autor, paginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
  }
  detalhes() {
    console.log(`${this.titulo} escrito por ${this.autor}`);
  }
}

class Livraria {
  constructor(endereco, livros) {
    this.endereco = endereco;
    this.livros = livros;
  }
  venderLivro(livro) {
    this.livros.push(livro);
  }
}

const livro = new Livro("JavaScript", "Mauricio Aniche", 200);
const livro2 = new Livro("JavaScript", "Mauricio Aniche", 200);
const livraria = new Livraria("Rua Vergueiro, 888", []);

livraria.venderLivro(livro);
console.log(livraria);

class Revistas {
  constructor(nome, numero, ano) {
    this.nome = nome;
    this.numero = numero;
    this.ano = ano;
  }
  detalhes() {
    console.log(`${this.nome} número ${this.numero} de ${this.ano}`);
  }
}

class Edicoes {
  constructor(revistas) {
    this.revistas = revistas;
  }
  venderRevista(revista) {
    this.revistas.push(revista);
  }
}

const revista = new Revistas("JavaScript", 1, 2019);
const revista2 = new Revistas("JavaScript", 2, 2019);
const edicoes = new Edicoes([]);
edicoes.venderRevista(revista);
edicoes.venderRevista(revista2);
console.log(edicoes);
