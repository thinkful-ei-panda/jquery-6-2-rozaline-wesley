'use strict';

// Your function should append the resulting HTML to the
// DOM element

function fizzBuzzAppender(){
  $('#number-chooser').submit(event=>{
    event.preventDefault();

    // You'll create an event listener that listens for when
    // a user submits a form indicating how high to count. 
    const count=$(event.currentTarget).find('input[name="number-choice"]').val();

    // create the FizzBuzz sequence up to the number

    for(let i=1;i<=count;i++){
      let output='';
      if(i%3==0){output+='fizz';}
      if(i%5==0){output+='buzz';}
      if(output==''){output=i;}     
      
      // For each element in the FizzBuzz sequence, your code
      // should insert an element into the .js-results div that looks like this:
      //<div class="fizz-buzz-item">
      //<span>1</span>
      //</div>

      // If the element's content is the word "fizz"
      // apply .fizz class

      // If the element's content is the word "buzz"
      // apply .buzz class

      // If the element's content is the word "fizzbuzz"
      // apply .fizzbuzz class

      if(output=='fizz'){
        $('.js-results').append(`<div class="fizz-buzz-item fizz"><span>${output}</span></div>`);    
      }else if(output=='buzz'){
        $('.js-results').append(`<div class="fizz-buzz-item buzz"><span>${output}</span></div>`);
      }else if(output=='fizzbuzz'){
        $('.js-results').append(`<div class="fizz-buzz-item fizzbuzz"><span>${output}</span></div>`);
      }else{
        $('.js-results').append(`<div class="fizz-buzz-item"><span>${output}</span></div>`);
      }
    }    
  });

}

$(fizzBuzzAppender);
