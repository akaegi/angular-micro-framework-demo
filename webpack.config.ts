import {Configuration} from 'webpack';

export default {
  experiments: {
    outputModule: true,
  },
  externalsType: 'module',
  externals: [
    '@angular/core',
    '@angular/compiler',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    'rxjs'
  ]
  // externals: {
  //   '@angular/core': '@angular/core',
  //   '@angular/compiler': '@angular/compiler',
  //   '@angular/platform-browser': '@angular/platform-browser',
  //   '@angular/platform-browser-dynamic': '@angular/platform-browser-dynamic',
  //   'rxjs': 'rxjs'
  // }

  // output: {
  //   library: 'shop',
  //   libraryTarget: 'umd',
  // },

} as Configuration;
