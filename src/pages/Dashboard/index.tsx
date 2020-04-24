import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';

import logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositório no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/8068067?s=460&u=fc88a71ab6b1a8ccdcbc8cd8e4d3acf9a7228a75&v=4"
            alt="Giovanni Antonaccio"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Example repository</p>
          </div>
          <FiChevronRight size="20px" />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/8068067?s=460&u=fc88a71ab6b1a8ccdcbc8cd8e4d3acf9a7228a75&v=4"
            alt="Giovanni Antonaccio"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Example repository</p>
          </div>
          <FiChevronRight size="20px" />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/8068067?s=460&u=fc88a71ab6b1a8ccdcbc8cd8e4d3acf9a7228a75&v=4"
            alt="Giovanni Antonaccio"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Example repository</p>
          </div>
          <FiChevronRight size="20px" />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
