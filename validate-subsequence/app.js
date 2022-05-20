function isValidSubsequence(array, sequence) {
    // Write your code here.
      let result = true
      let pos = 0;
      for(let x = 0; x < array.length; x++){
          if(pos === sequence.length){
              break;
          }
          if(sequence[pos] === array[x]){
              pos += 1
          }
  
      }
      
      return pos === sequence.length
  }
  