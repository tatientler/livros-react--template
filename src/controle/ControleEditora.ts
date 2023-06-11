import Editora from '../modelo/Editora';

const editoras: Editora[] = [
  new Editora(1, 'Editora A'),
  new Editora(2, 'Editora B'),
  new Editora(3, 'Editora C')
];

class ControleEditora {
  getEditoras(): Editora[] {
    return editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editora = editoras.find((e) => e.codEditora === codEditora);
    return editora?.nome;
  }
}

export default ControleEditora;
