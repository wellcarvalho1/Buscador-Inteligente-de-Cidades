function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Se o campoPesquisafor uma string sem nada
  if (campoPesquisa == "") {
    section.innerHTML = "<p>Nada Encontrado</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados HTML
  let resultados = "";
  let cidade = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado da pesquisa
  for (let dado of dados) {
    cidade = dado.cidade.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    // Se o titulo incluir o campoPesquisa
    if (
      cidade.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      // Constrói o HTML para um item de resultado
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="https://www.cruzeiro.sp.gov.br/" target="_blank">${dado.cidade}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Saiba Mais</a>
        </div>`;
    }

    if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>";
    }

    // Atualiza o conteúdo HTML da seção com os resultados
    section.innerHTML = resultados;
  }
}
