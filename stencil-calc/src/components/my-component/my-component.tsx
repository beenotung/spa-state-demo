import { Component, h, State, Watch } from '@stencil/core';

function Block(_prop: any, children: any[]) {
  return children;
}

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  scoped: true,
})
export class MyComponent {
  @State()
  a = 1;

  @State()
  b = 1;

  c: number = this.updateC();

  @Watch('a')
  @Watch('b')
  updateC() {
    return (this.c = this.a + this.b);
  }

  render() {
    return (
      <Block>
        <input 
          type="number"
          value={this.a}
          onInput={e => (this.a = (e.target as HTMLInputElement).valueAsNumber)}
        />
        +
        <input
          type="number"
          value={this.b}
          onInput={e => (this.b = (e.target as HTMLInputElement).valueAsNumber)}
        />
        =
        <span class="answer">{this.c}</span>
      </Block>
    );
  }
}
