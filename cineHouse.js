const Filme = require('./filme')
const funcoes = require('./funcoes')

const cinema = 'Dh - Movies'
console.log(cinema)


console.log(new Filme(1, 'harry potter' , 90 , [], 2001 , false))

const catalogo = [];

funcoes.adicionarFilme(new Filme(1, 'Harry Poter' ,90,['DADADADADADAD'],2001,false),catalogo)
funcoes.adicionarFilme(new Filme(2, 'Vin Diesel' ,120,['EEEEEEEEEEEEE'],2007,true),catalogo)
funcoes.adicionarFilme(new Filme(3, 'paul walker' ,110,['IIIIIIIIIIII'],2010,false),catalogo)
funcoes.adicionarFilme(new Filme(4, 'Dinossauro' ,210,['ASSDFVDFSDFGD'],2012,true),catalogo)

       console.log(catalogo)

//       console.log( 'O filme encontrado foi:' + funcoes.buscarFilme(3,catalogo).titulo)


//    function alterarStatusEmCartaz(1,catalogo)
//    console.log(funcoes.buscarFilme(1,catalogo))