var prompt = require('prompt');

  //
  // Start the prompt
  //
  prompt.start();

  //
  // Get two properties from the user: username and email
  //
  prompt.get(['age'], function (err, result) {
    //
    // Log the results.
    //
    var age = result.age
if (age <= 0){
    console.log('Error - та ну, стільки не живуть');
}if (age >= 1){
    if (age % 10 === 1){
        let special_age = (age === 11) ? age + ' Років' : age + ' Рік';
        console.log(special_age);
    }if (age % 10 === 2 || age % 10 === 3 || age % 10 === 4){
        let special_age = (age === 12 || age === 13 || age === 14) ? age + ' Років' : age + ' Роки';
        console.log(special_age);
    }if (age % 10 === 5 || age % 10 === 6 || age % 10 === 7 || age % 10 === 8 || age % 10 === 9 || age % 10 === 0){
        console.log(age + ' Років');
    }
}else {
    console.log( 'не валідні дані');
}
  });