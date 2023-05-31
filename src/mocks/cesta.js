import logo from '../../assets/logo.png';

import tomate from '../../assets/frutas/Tomate.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import brocolis from '../../assets/frutas/Brocolis.png';
import abobora from '../../assets/frutas/Abobora.png';

const cesta = {
  topo: {
    titulo: "Detalhe da cesta",
  },
  detalhes: {
    nome: "Cesta de Verduras",
    logoFazenda: logo,
    nomeFazenda: "Janny Jack Farm",
    descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    preco: "R$ 30.00",
    botao: "Comprar",
  },
  itens: {
    titulo: "Itens da cesta",
    lista: [
        {
          nome: "Tomate",
          imagem: tomate,
        },
        {
          nome: "Brocolis",
          imagem: brocolis,
        },
        {
           nome: "Batata",
           imagem: batata,
        },
        {
          nome: "Pepino",
          imagem: pepino,
        },
        {
          nome: "Abobora",
          imagem: abobora,
        },
      ]
  }
}

export default cesta;