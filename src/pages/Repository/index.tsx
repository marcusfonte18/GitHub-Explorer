/* eslint-disable react/jsx-indent */
import React from 'react';

import { useRouteMatch } from 'react-router-dom';

interface RepositoryProps {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryProps>();
  return <h1>Repository: {params.repository}</h1>;
};

export default Repository;
