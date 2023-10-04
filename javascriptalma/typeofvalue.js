var value=123;

switch (typeof value) {
  case 'string':
    console.log('The value is a string');//string
    break;
  case 'number':
    console.log('The value is a number');
    break;    
  case 'boolean':
    console.log('The value is a boolean');
    break;
  default:
    console.log('The value is not a string, number, or boolean');
    break;}

