process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

module.exports = environment.toWebpackConfig()

import React from 'react';
import ReactDom from 'react-dom';
import App from '../../app/javascript/components/App';

it('App renders without crashing', ()=>{
  const div = document.createElement('div');
  ReactDom.render(<App/>,div);
})
