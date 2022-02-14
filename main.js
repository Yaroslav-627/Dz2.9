ovch = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
console.log(ovch.join('').toLowerCase());
console.log(ovch.join(' '));
hello = ['привет'];
names = ['меня зовут'];
hello = hello.concat(names);
hello = hello.join(' ')
your_name = prompt('');
console.log(hello.charAt(0).toUpperCase() + hello.slice(1) + ': ' + your_name);