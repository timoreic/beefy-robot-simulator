import { hello } from '../src/index';

describe('test hello function', () => {
  it('hello() should return Hello World!', () => {
    expect(hello()).toBe('Hello World!');
  });
});
