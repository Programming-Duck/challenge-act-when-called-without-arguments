# Call when no arguments

This is an interesting functional programming challenge I was asked to implement in an interview a few years ago. I found it very interesting, so I thought I would post it.

## Question, part 1

Design a function that you can keep calling in a chain as long as you keep passing in arguments. During this time, it doesn't do anything except collect those arguments somehow. When you call the function without passing an argument, that's when it calls a real function, such as `console.log`, with all of the arguments you've passed in so far.

Here is a code example:

```javascript
foo('a'); // nothing happens
foo('a')('b'); // nothing happens

foo('a')(); // logs 'a' (calls console.log('a'))
foo('a')('b')() // logs 'a b' (calls console.log('a', 'b'))
foo('a')('b')('c')() // logs 'a b c' (calls console.log('a', 'b', 'c'))'
```


## Question, part 2

Can you create a function similar to question 1, except make it "stateless"?

Different function calls shouldn't share state with each other.

For example:

```javascript
const a = foo('a');
const ab = a('b');
const abc = ab('c');

a(); // logs 'a' (calls console.log('a'))
abc(); // logs 'a b c' (calls console.log('a', 'b', 'c'))
ab(); // logs 'a b' (calls console.log('a', 'b'))
```

If you're ready for the challenge, have fun! I've included my solutions in this repo.


## Running the tests

Prerequisites: Installation requires [NPM](https://www.npmjs.com/) which is included with [Node](https://nodejs.org/). You can install Node by downloading the installer from the website.

1. Clone the repo

```
git clone https://github.com/sargalias/deep-copy-obj.git
```

2. Install NPM packages

```
npm install
```

### Running the project for development

```
npm run test
```


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
