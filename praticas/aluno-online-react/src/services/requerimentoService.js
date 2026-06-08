const url = "http://localhost:3000/requerimentos";

export async function cadastro(servico) {
    try {
      const resposta = await fetch(url, {
          method: "POST",
          body: JSON.stringify(servico),
          headers: { "content-type": "application/json" }
      });
      return await resposta.json();
    } catch(error) {
      return {message: `Erro ao criar` };
    }
}

export async function listar() {
    try {
      const resposta = await fetch(url);
      return await resposta.json();
    } catch(error) {
      return {message: `Erro ao listar requerimentos!` };
    }
}