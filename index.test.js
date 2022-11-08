import { isPalindrome, twoSum } from './index';  // for ES6, transpile with Babel
describe('isPalindrome', () => {
  test('neuquen is palindrom', () => {
    expect(isPalindrome("neuquen")).toBe(true);
  })

  test('bariloche is not palindrom', () => {
    expect(isPalindrome("bariloche")).toBe(false);
  })
});

describe('twoSum', () => {
  test('[2,7,11,15] and 9 returns [2,7]', () => {
    expect(twoSum([2,7,11,15],9)).toEqual(expect.arrayContaining([2,7]));
  })
  test('[3,2,4] and 6 returns [2, 4]', () => {
    expect(twoSum([3,2,4], 6)).toEqual(expect.arrayContaining([2,4]));
  })

  test('[3,2,4] and 10 returns false', () => {
      expect(twoSum([3,2,4], 10)).toBe(false)
  })
});