// I included a curry function for inspiration, because it does a similar thing of accepting arguments until a certain point

const curry = (fn, arity = fn.length) => {
  const execute = (...args) => {
    if (args.length === arity) {
      return fn(...args);
    }
    const gatherMoreArgs = (...moreArgs) => {
      return execute(...args, ...moreArgs);
    }
    return gatherMoreArgs;
  }
  return execute;
}


/*
  Part 1
*/

const logWhenCalledWithoutArguments1 = (...args) => {
  const argsSoFar = [];

  const gatherMoreArgs = (...moreArgs) => {
    if (moreArgs.length === 0) {
      console.log(...argsSoFar);
    } else {
      argsSoFar.push(...moreArgs);
      return gatherMoreArgs;
    }
  }

  return gatherMoreArgs(...args);
}

// Same function but accepts any function instead of hardcoding console.log

const actWhenCalledWithoutArguments1 = (fn) => {
  const argsSoFar = [];

  const gatherMoreArgs = (...moreArgs) => {
    if (moreArgs.length === 0) {
      fn(...argsSoFar);
    } else {
      argsSoFar.push(...moreArgs);
      return gatherMoreArgs;
    }
  }

  return gatherMoreArgs;
}


/*
  Part 2
*/

const logWhenCalledWithoutArguments2 = (...firstArgs) => {
  const gatherArgs = (...args) => {
    const execute = (...moreArgs) => {
      if (moreArgs.length === 0) {
        return console.log(...args);
      }
      return gatherArgs(...args, ...moreArgs);
    }
    return execute;
  }
  const firstExecute = gatherArgs();
  return firstExecute(...firstArgs);
}

// Alternative implementation

const logWhenCalledWithoutArguments3 = (...args) => {
  if (args.length === 0) {
    return console.log(...args);
  }

  const execute = (...moreArgs) => {
    if (moreArgs.length === 0) {
      return console.log(...args);
    }
    return logWhenCalledWithoutArguments3(...args, ...moreArgs);
  }
  return execute;
}

// Same function but accepts any function instead of hardcoding console.log

const actWhenCalledWithoutArguments2 = (fn) => {
  const gatherArgs = (...args) => {
    const execute = (...moreArgs) => {
      if (moreArgs.length === 0) {
        return fn(...args);
      }
      return gatherArgs(...args, ...moreArgs);
    }
    return execute;
  }
  return gatherArgs();
}


export {
  logWhenCalledWithoutArguments1,
  actWhenCalledWithoutArguments1,
  logWhenCalledWithoutArguments2,
  logWhenCalledWithoutArguments3,
  actWhenCalledWithoutArguments2,
}