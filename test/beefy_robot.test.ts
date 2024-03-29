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

describe('test BeefyRobot rotate method', () => {
  const beefyRobot = new BeefyRobot();

  test('rotate left', () => {
    beefyRobot.place('PLACE 0,0,NORTH');
    beefyRobot.rotate('LEFT');
    const expected = '0,0,WEST';
    expect(beefyRobot.report()).toMatch(expected);
  });

  test('rotate right', () => {
    beefyRobot.rotate('RIGHT');
    const expected = '0,0,NORTH';
    expect(beefyRobot.report()).toMatch(expected);
  });
});

describe('test BeefyRobot move method', () => {
  const beefyRobot = new BeefyRobot();

  test('invalid y move', () => {
    beefyRobot.place('PLACE 0,4,NORTH');
    beefyRobot.move();
    const expected = '0,4,NORTH';
    expect(beefyRobot.report()).toMatch(expected);
  });

  test('valid y move', () => {
    beefyRobot.place('PLACE 0,0,NORTH');
    beefyRobot.move();
    const expected = '0,1,NORTH';
    expect(beefyRobot.report()).toMatch(expected);
  });

  test('invalid x move', () => {
    beefyRobot.place('PLACE 4,0,EAST');
    beefyRobot.move();
    const expected = '4,0,EAST';
    expect(beefyRobot.report()).toMatch(expected);
  });

  test('valid x move', () => {
    beefyRobot.place('PLACE 0,0,EAST');
    beefyRobot.move();
    const expected = '1,0,EAST';
    expect(beefyRobot.report()).toMatch(expected);
  });
});
