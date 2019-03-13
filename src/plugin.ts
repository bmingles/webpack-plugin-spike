import { Compiler } from 'webpack';

export class MyPlugin {
  public constructor() {
  }

  public apply(compiler: Compiler) {
    console.log('Apply');
    compiler.plugin('compilation', compilation => {
      compilation.plugin('optimize', () => {
        console.log('optimized');
      });
    });
  }
}