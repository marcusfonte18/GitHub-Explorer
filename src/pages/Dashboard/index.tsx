import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import Title, { Form, Repositories } from './styles';

import logoGitHub from '../../assets/img/logo.svg';

const Dashboard: React.FC = () => (
  <>
    <img src={logoGitHub} alt="GitHub Explorer" />
    <Title>Explore Repositórios do GitHub</Title>
    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/65238795?v=4"
          alt="Marcus"
        />
        <div>
          <strong>Go-stack-GitHub</strong>
          <p>Fácil de fazer e altamente escalável</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/65238795?v=4"
          alt="Marcus"
        />
        <div>
          <strong>Go-stack-GitHub</strong>
          <p>Fácil de fazer e altamente escalável</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/65238795?v=4"
          alt="Marcus"
        />
        <div>
          <strong>Go-stack-GitHub</strong>
          <p>Fácil de fazer e altamente escalável</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
