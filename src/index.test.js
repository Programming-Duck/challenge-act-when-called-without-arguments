import {
  logWhenCalledWithoutArguments1,
  actWhenCalledWithoutArguments1,
  logWhenCalledWithoutArguments2,
  logWhenCalledWithoutArguments3,
  actWhenCalledWithoutArguments2
} from ".";

describe('logWhenCalledWithoutArguments1', () => {
  let mock;
  beforeEach(() => {
    mock = jest.spyOn(console, 'log');
  })
  afterEach(() => {
    mock.mockReset();
  })

  test(`logWhenCalledWithoutArguments1() should call console.log with no arguments`, () => {
    logWhenCalledWithoutArguments1();

    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith();
  })

  test(`logWhenCalledWithoutArguments1('a') should not call console.log`, () => {
    logWhenCalledWithoutArguments1('a');

    expect(mock).toHaveBeenCalledTimes(0);
  });

  test(`logWhenCalledWithoutArguments1('a')() should call console.log(a)`, () => {
    logWhenCalledWithoutArguments1('a')();

    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('a');
  })

  test(`logWhenCalledWithoutArguments1('a')('b')() should call console.log('a', 'b')`, () => {
    logWhenCalledWithoutArguments1('a')('b')();

    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('a', 'b');
  })
});


describe('actWhenCalledWithoutArguments1', () => {
  let spy;
  beforeEach(() => {
    spy = jest.fn();
  })

  test(`actWhenCalledWithoutArguments1(spy)() should call spy with no arguments`, () => {
    actWhenCalledWithoutArguments1(spy)();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith();
  })

  test(`actWhenCalledWithoutArguments1(spy)('a') should not call spy`, () => {
    actWhenCalledWithoutArguments1(spy)('a');

    expect(spy).toHaveBeenCalledTimes(0);
  });

  test(`actWhenCalledWithoutArguments1(spy)('a')() should call spy('a')`, () => {
    actWhenCalledWithoutArguments1(spy)('a')();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('a');
  })

  test(`actWhenCalledWithoutArguments1(spy)('a')('b')() should call spy('a', 'b')`, () => {
    actWhenCalledWithoutArguments1(spy)('a')('b')();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('a', 'b');
  })
});


describe('logWhenCalledWithoutArguments2', () => {
  let mock;
  beforeEach(() => {
    mock = jest.spyOn(console, 'log');
  })
  afterEach(() => {
    mock.mockReset();
  })

  test(`logWhenCalledWithoutArguments2() should run console.log with no arguments`, () => {
    logWhenCalledWithoutArguments2();

    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith();
  })

  test(`logWhenCalledWithoutArguments2('a') should not call spy`, () => {
    logWhenCalledWithoutArguments2('a');

    expect(mock).toHaveBeenCalledTimes(0);
  });

  test(`logWhenCalledWithoutArguments2('a')() should call console.log('a')`, () => {
    logWhenCalledWithoutArguments2('a')();

    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('a');
  })

  test(`logWhenCalledWithoutArguments2('a')('b')() should call console.log('a', 'b')`, () => {
    logWhenCalledWithoutArguments2('a')('b')();

    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('a', 'b');
  })

  test('logWhenCalledWithoutArguments2 should be stateless', () => {
    const a = logWhenCalledWithoutArguments2('a');
    const ab = a('b');
    const abc = ab('c');

    a();
    expect(mock).toHaveBeenCalledWith('a');

    ab();
    expect(mock).toHaveBeenCalledWith('a', 'b');

    abc();
    expect(mock).toHaveBeenCalledWith('a', 'b', 'c');
  });
});


describe('logWhenCalledWithoutArguments3', () => {
  let mock;
  beforeEach(() => {
    mock = jest.spyOn(console, 'log');
  })
  afterEach(() => {
    mock.mockReset();
  })

  test(`logWhenCalledWithoutArguments3() should run console.log with no arguments`, () => {
    logWhenCalledWithoutArguments3();

    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith();
  })

  test(`logWhenCalledWithoutArguments3('a') should not call spy`, () => {
    logWhenCalledWithoutArguments3('a');

    expect(mock).toHaveBeenCalledTimes(0);
  });

  test(`logWhenCalledWithoutArguments3('a')() should log a`, () => {
    logWhenCalledWithoutArguments3('a')();

    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('a');
  })

  test(`logWhenCalledWithoutArguments3('a')('b') should log a`, () => {
    logWhenCalledWithoutArguments3('a')('b')();

    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('a', 'b');
  })

  test('logWhenCalledWithoutArguments3 should be stateless', () => {
    const a = logWhenCalledWithoutArguments3('a');
    const ab = a('b');
    const abc = ab('c');

    a();
    expect(mock).toHaveBeenCalledWith('a');

    ab();
    expect(mock).toHaveBeenCalledWith('a', 'b');

    abc();
    expect(mock).toHaveBeenCalledWith('a', 'b', 'c');
  });
});


describe('actWhenCalledWithoutArguments2', () => {
  let spy;
  beforeEach(() => {
    spy = jest.fn();
  })

  test(`actWhenCalledWithoutArguments2(spy)() should call spy with no arguments`, () => {
    actWhenCalledWithoutArguments2(spy)();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith();
  })

  test(`actWhenCalledWithoutArguments2(spy)('a') should not call spy`, () => {
    actWhenCalledWithoutArguments2(spy)('a');

    expect(spy).toHaveBeenCalledTimes(0);
  });

  test(`actWhenCalledWithoutArguments2(spy)('a')() should call spy('a')`, () => {
    actWhenCalledWithoutArguments2(spy)('a')();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('a');
  })

  test(`actWhenCalledWithoutArguments2(spy)('a')('b')() should call spy('a', 'b')`, () => {
    actWhenCalledWithoutArguments2(spy)('a')('b')();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('a', 'b');
  })

  test('actWhenCalledWithoutArguments2 should be stateless', () => {
    const a = actWhenCalledWithoutArguments2(spy)('a');
    const ab = a('b');
    const abc = ab('c');

    a();
    expect(spy).toHaveBeenCalledWith('a');

    ab();
    expect(spy).toHaveBeenCalledWith('a', 'b');

    abc();
    expect(spy).toHaveBeenCalledWith('a', 'b', 'c');
  });
});