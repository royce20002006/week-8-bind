const { Employee } = require('./employee')

const johnWick = new Employee('John Wick', 'Dog Lover');
const sayNameBound = johnWick.sayName.bind(johnWick)
const sayOccupationBound = johnWick.sayOccupation.bind(johnWick)
setTimeout(sayNameBound, 2000);

setTimeout(sayOccupationBound, 3000);

