{/* Função para retornar o src das imagens (rating) de acordo com as 
    avaliações dos cursos. */}
export function avaliacaoCondicional(avaliacao) {
    avaliacao = parseFloat(avaliacao)
    if (avaliacao == 5){
      return 'rating/star_5.svg'
    } else if (avaliacao >= 4.5){
      return 'rating/star_4-5.svg'
    } else if (avaliacao >= 4){
      return 'rating/star_4.svg'
    } else if (avaliacao >= 3.5){
      return 'rating/star_3-5.svg'
    } else if (avaliacao >= 3){
      return 'rating/star_3.svg'
    } else if (avaliacao >= 2.5){
      return 'rating/star_2-5.svg'
    } else if (avaliacao >= 2){
      return 'rating/star_2.svg'
    } else if (avaliacao >= 1.5){
      return 'rating/star_1-5.svg'
    } else if (avaliacao >= 1){
      return 'rating/star_1.svg'
    } else if (avaliacao >= 0.5){
      return 'rating/star_0-5.svg'
    } else {
      return 'rating/star_0.svg'
    }
}

{/* Função para adicionar as letras "br" antes
da UF dos estados, e aplicar um lower case no último. */}
export function formataEstado(estado){
  return "br-"+ estado.toLowerCase()
}

{/* Função para retornar os valores num formato brasileiro
    com pontos a cada casa 3 casas decimais. */}
export function formataCasaDecimal(valor) {
  return valor?.toLocaleString('pt-BR');
}