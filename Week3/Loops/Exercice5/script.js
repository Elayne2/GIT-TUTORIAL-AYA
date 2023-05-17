const family = {
    father: 'Chris',
    mother: 'Jess',
    son: 'Sam',
    daughter: 'Lili'
  };
 
  console.log("Keys:");
  for (const key in family) {
    console.log(key);
  }

  console.log("Values:");
  for (const key in family) {
    console.log(family[key]);
  }