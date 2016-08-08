(function(){

  'use strict';

  console.info('initialize with [3, 3, 3]');

  var s = new Set([3, 3, 3]);

  console.log(s);

  console.info('add 1');
  s.add(1);
  console.log(s);

  console.info('add 1');
  s.add(1);
  console.log(s);

  console.info('add 2');
  s.add(2);
  console.log(s);

  console.info('add 2');
  s.add(2);
  console.log(s);

  console.info('has 1 => true');
  console.log(s.has(1));

  console.info('has 2 => true');
  console.log(s.has(2));

  console.info('delete 1');
  s.delete(1);
  console.log(s);

}());
