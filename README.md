# constructor-apply

Applies an array of arguments to an object constructor, ensuring the constructor is called with a `new` keyword.

Because you can't do:

```js
var foo = new Foo.apply(ohLordWhatDoIPassHere, arguments);
```

## Install

With [component(1)](https://github.com/component/component):

```bash
component install darsain/constructor-apply
```

## Usage

```js
var constructorApply = require('constructor-apply');

function Foo(a, b) {
	this.a = a;
	this.b = b;
}

Foo.prototype.log = function () {
	console.log(this.a, this.b);
};

var fooObject = constructorApply(Foo, [1, 2]);
foo instanceof Foo; // true
foo.log();          // logs: 1 2
```

## API

### constructorApply(Constructor, arguments)

Will call a custructor with a `new` keyword and apply arguments to it.

**Constructor** Type `Function`

Object constructor.

**arguments** Type `Array`

Array of arguments.

***Returns***

New Constructor instance/object.

## License

MIT