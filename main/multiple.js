import { loadMicroApp } from 'qiankun';
// for angular subapp

const app1 = loadMicroApp(
  { name: 'my-app', entry: '//localhost:4208', container: '#react15' },
  {
    sandbox: {
      // strictStyleIsolation: true,
    },
  },
);


const app2 = loadMicroApp(
  { name: 'vue', entry: '//localhost:7101', container: '#vue' },
  {
    sandbox: {
      // strictStyleIsolation: true,
    },
  },
);

import 'zone.js';