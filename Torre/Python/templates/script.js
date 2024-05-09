//criando crud para ver se funciona
const BancoDados_Tabela = {
    usuario: [
      {
        username: 'nome',
      }
    ],
    tempo: [
      {
        id: 1,
        owner: 'nomeTeste',
        time: '1:00T',
      }
    ]
};

// Atualizando o ranking
function criaraking(dados){
  BancoDados_Tabela.tempo.push({
        id: BancoDados_Tabela.tempo.length + 1,
        owner: dados.owner,
        time: dados.time
  });
}

criaraking({owner: 'Romario', time: '2:21'});

// Pegando os dados do raking

function pegaranking(){
  return BancoDados_Tabela.tempo;
};

// Atualizando dados da tabela
function AtualizaTabela(id, usuarioN, tempoN){
  const TabelaAtualizada = pegaranking().find((tempo) => {
        return tempo.id === id;
  })
  console.log(TabelaAtualizada)
  TabelaAtualizada.owner = usuarioN;
  TabelaAtualizada.tempo = tempoN;
};

// Deletar dados da tabela

function DeletaTabela(){
  const TabelaTempoReal = pegaranking().filter((DadosAtual) => {
    return DadosAtual.id !== id;
})
  BancoDados_Tabela.tempo = TabelaTempoReal;
};

console.log(BancoDados_Tabela.tempo);