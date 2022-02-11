import React from 'react';
import ReactDOM from 'react-dom';

import { AnimeApp } from './AnimeApp';
import './styles/styles.scss'

import 'bootstrap/dist/css/bootstrap.min.css';

console.log(process.env)

ReactDOM.render(
    <AnimeApp />,
  document.getElementById('root')
);
