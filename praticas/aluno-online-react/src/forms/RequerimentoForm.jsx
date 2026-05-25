import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Main from "../components/Main";

function RequerimentoForm() {
  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  function onSubmit(dados) {
    console.log("Novo requerimento:", dados);
    reset();
    navigate("/requerimentos");
  }

  return (
    <Main titulo="Novo Requerimento" subtitulo="Preencha os dados da solicitação">
      <form onSubmit={handleSubmit(onSubmit)}>

        <fieldset>
          <legend>Dados do Requerimento</legend>

          <p>
            <label htmlFor="tipo">Tipo de Requerimento</label>
            <select
              id="tipo"
              {...register("tipo", { required: "Selecione o tipo de requerimento." })}
            >
              <option value="">-- Selecione --</option>
              <option value="Revisão de Menção">Revisão de Menção</option>
              <option value="Dispensa de Disciplina">Dispensa de Disciplina</option>
              <option value="Trancamento de Matrícula">Trancamento de Matrícula</option>
              <option value="Mudança de Turno">Mudança de Turno</option>
              <option value="Renovação de Matrícula">Renovação de Matrícula</option>
            </select>
            {errors.tipo && <span role="alert">{errors.tipo.message}</span>}
          </p>

          <p>
            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              rows={4}
              placeholder="Descreva o motivo da solicitação..."
              {...register("descricao", {
                required: "A descrição é obrigatória.",
                minLength: {
                  value: 10,
                  message: "A descrição deve ter no mínimo 10 caracteres.",
                },
              })}
            />
            {errors.descricao && <span role="alert">{errors.descricao.message}</span>}
          </p>
        </fieldset>

        <menu>
          <li><button type="submit">Salvar</button></li>
          <li><button type="button" onClick={() => navigate("/requerimentos")}>Cancelar</button></li>
        </menu>

      </form>
    </Main>
  );
}

export default RequerimentoForm;