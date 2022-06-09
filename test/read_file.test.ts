import * as fs from 'fs';

describe('test read file', () => {
  it('Should return "PLACE 0,0,NORTH"', () => {
    expect(
      fs.readFileSync('./commands.txt', 'utf8').toString().split('\n')[0]
    ).toBe('PLACE 0,0,NORTH');
  });
});
