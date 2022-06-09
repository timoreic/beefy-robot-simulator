import BeefyRobot from '../src/BeefyRobot';

describe('test BeefyRobot place method', () => {
  const beefyRobot = new BeefyRobot();

  test('invalid place input', () => {
    beefyRobot.place('PLACE 6,7,NORTH');
    expect(beefyRobot.position).toEqual(null);
  });

  test('valid place input', () => {
    beefyRobot.place('PLACE 0,0,NORTH');
    expect(beefyRobot.position).toEqual(['0', '0', 'NORTH']);
  });
});

describe('test BeefyRobot report method', () => {
  const beefyRobot = new BeefyRobot();

  test('report while on table', () => {
    beefyRobot.place('PLACE 0,0,NORTH');
    const expected = '0,0,NORTH';
    expect(beefyRobot.report()).toMatch(expected);
  });
});
