function twoNumberSum(array, targetSum) {
       //orders from lowest to highest  
      array = array.sort((a,b) => a-b)
      let result = []
      let left = 0
      let right = array.length - 1
      while (left < right){
          const currentSum = array[left] + array[right]
          if( currentSum === targetSum){
              return [array[left], array[right]]
          }
          if(currentSum< targetSum){
              left += 1
          }else if(currentSum > targetSum){
              right -=1
          }
          
      }
      return result
  }