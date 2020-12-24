import React from 'react';
import { Title, Form, Repository } from './styles';
import logoImg from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';
const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="logo" />
      <Title>Explore repositories on Github</Title>
      <Form>
        <input placeholder="type here" type="text" />
        <button type="submit">Search</button>
      </Form>
      <Repository>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/66537139?s=400&u=6ff21e4ad147c832984e854002734b0a2e39b4cb&v=4"
            alt="Carlos Eduardo"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repository>
    </>
  );
};

export default Dashboard;
