import React, { useState } from 'react';
import ControleLivros from './ControleLivros';
import ControleEditora from './ControleEditora';
import { useNavigate } from 'react-router-dom';

export default function LivroDados() {
  const controleLivro = new ControleLivros();
  const controleEditora = new ControleEditora();
  const opcoes = controleEditora.getEditoras().map(editora => ({
    value: editora.codEditora,
    text: editora.nome
  }));

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const navigate = useNavigate();

  const tratarCombo = (event) => {
    const { value } = event.target;
    setCodEditora(Number(value));
  };

  const incluir = (event) => {
    event.preventDefault();
    const livro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora
    };
    controleLivro.incluir(livro);
    navigate('/');
  };

  return (
    <main>
      <h1>Livro Dados</h1>
      <form onSubmit={incluir}>
        <div>
          <label>Título:</label>
          <input type="text" value={titulo} onChange={(event) => setTitulo(event.target.value)} />
        </div>
        <div>
          <label>Resumo:</label>
          <textarea value={resumo} onChange={(event) => setResumo(event.target.value)}></textarea>
        </div>
        <div>
          <label>Autores (um por linha):</label>
          <textarea value={autores} onChange={(event) => setAutores(event.target.value)}></textarea>
        </div>
        <div>
          <label>Editora:</label>
          <select value={codEditora} onChange={tratarCombo}>
            {opcoes.map(opcao => (
              <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
            ))}
          </select>
        </div>
        <div>
          <button type="submit">Incluir</button>
        </div>
      </form>
    </main>
  );
}
