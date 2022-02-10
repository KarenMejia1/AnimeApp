import React from 'react';
import ReactDOM from 'react-dom';

import { AnimeApp } from './AnimeApp';
import './styles/styles.scss'

console.log(process.env)

ReactDOM.render(
    <AnimeApp />,
  document.getElementById('root')
);
