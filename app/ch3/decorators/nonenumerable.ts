class Person {
	@nonenumerable
	get kidCount() {		//why get???
		return 42;
	}
}

function nonenumerable(target, name, descriptor) {
	descriptor.enumerable = false;
	return descriptor;
}

var person = new Person();

console.log(1);
for (let prop in person) {
	console.log(prop, 'fuck');
}

console.log(person.kidCount, 'person.kidCount:>>');

//P47
//Object.defineProperty( Person.prototype, 'kidCount', descriptor );