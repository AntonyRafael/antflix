import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import ButtonRigth from '../../../components/ButtonRigth';

import useForm from '../../../hooks/useForm';
import styled from 'styled-components';

const Li = styled.li`
  list-style: none;
  padding: 10px;
  font-size: 24px;
  line-height: 36px;
  

  &::before {

  content: "";
  display: inline-block;
  width: 25px;
  height: 10px;
  margin-right: 10px;
  margin-bottom: 4px;
  background: #14BAEE;
  }
`;

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    console.log('alo');
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://antflix.herokuapp.com/categorias';

    fetch(URL)
      .then(async (respostaDoServer) => {
        const resposta = await respostaDoServer.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        {' '}
        Cadastro de Categoria:
        {values.nome}
      </h1>
      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        {/* <div>
          <label>
            Descrição:
          <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={HandleChange}
            />
          </label>
        </div> */}

        <Button>
          Cadastrar
        </Button>
      </form>
      {categorias.length === 0 && (
        <div>
          loading
        </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => (
          console.log("CATEGORIA", categoria),

          <Li key={`${categoria.titulo}`}>
            {categoria.titulo}
            {categoria.nome}
          </Li>
        ))}
      </ul>



      <Link to="/">
        <ButtonRigth>Ir para home</ButtonRigth>
      </Link>

    </PageDefault >
  );
}

export default CadastroCategoria;
