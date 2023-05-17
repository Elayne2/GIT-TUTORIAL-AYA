const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  };
  
  let output = '';
  for (const key in details) {
    output += details[key] + ' ';
  }
  
  console.log(output.trim());
  s