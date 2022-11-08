export const isPalindrome = (string) => {
  let left = 0;
  let right = string.length-1;
  while(left < right){
    if (string[left] === string[right]){
      left += 1;
      right -= 1;
    }
    else {
      return false;
    }
  }
  return true;
}


export const twoSum = (nums, target) => {
  //0(n)
  //Iterate the array once
  //At each iteration, calculate the value needed to get to the target, which is target - currentValue
  // If the neededValue exists in the array, return [currentValue, neededValue], else continue iteration
  for (let index = 0; index < nums.length; index++) {
    const neededNum= target - nums[index];
    if (nums.indexOf(neededNum) !== -1 && nums.indexOf(neededNum) !== index) return [nums[index], nums[nums.indexOf(neededNum)]]
  }
  return false;
}

// module.exports = isPalindrome