function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Inicializa uma string para armazenar os resultados da pesquisa
  let resultados = "";

  // let resultadosEncontrados = false;

  campoPesquisa = campoPesquisa.toLowerCase();

  if(!campoPesquisa) {
    section.innerHTML = "<p>Nenhum atleta foi encontrado. Você precisar digitar o nome de um atleta ou esporte.</p>";
    return
  }

  let titulo = "";
  let descricao = "";
  let tags = "";
  // Itera sobre cada dado da pesquisa
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.Descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    if ((titulo.includes(campoPesquisa)) || (descricao.includes(campoPesquisa)) || (tags.includes(campoPesquisa))){
      // Cria uma div para cada resultado, formatando o HTML
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.Descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
      resultadosEncontrados = true;
    }
  }

  // if((!resultadosEncontrados) || (campoPesquisa == "")){
  //   section.innerHTML = "<p>Nenhum atleta foi encontrado</p>";
  // }else{
  //   section.innerHTML = resultados
  // }

  if(!resultados){
    resultados = "<p>Nenhum atleta foi encontrado</p>"
  }

  // Insere os resultados na seção HTML
  section.innerHTML = resultados;
}
