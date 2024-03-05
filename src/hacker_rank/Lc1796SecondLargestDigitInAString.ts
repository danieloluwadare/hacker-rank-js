/****
 * 1796. Second Largest Digit in a String
 * Easy
 * Topics
 * Companies
 * Hint
 * Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.
 *
 * An alphanumeric string is a string consisting of lowercase English letters and digits.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "dfa12321afd"
 * Output: 2
 * Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
 * Example 2:
 *
 * Input: s = "abc1111"
 * Output: -1
 * Explanation: The digits that appear in s are [1]. There is no second largest digit.
 *
 *
 * Constraints:
 *
 * 1 <= s.length <= 500
 * s consists of only lowercase English letters and/or digits.
 */

class Lc1796SecondLargestDigitInAString{

  public static main () : void{
    let result = this.secondHighest('dfa12321afd')
    console.log(result)
    console.log('------------------------------------------')
    result = this.secondHighest('abc1111')
    console.log(result)
    console.log('------------------------------------------')
    result = this.secondHighest('dfa123231afd')
    console.log(result)
    // result = this.sumOfUnique([1,1,1,1,1])
    // console.log(result)
    // result = this.sumOfUnique([1,2,3,4,5])
    // console.log(result)
  }

  public static secondHighest(s: string): number {
    let firstLargestNumber = Number.MIN_SAFE_INTEGER;
    let secondLargestNumber = Number.MIN_SAFE_INTEGER

    for (let i = 0; i < s.length; i++){
      const char = s.charAt(i);
      if(!this.isDigit(char)){
        continue;
      }
      const num = Number(char)
      if(num === firstLargestNumber){
        continue;
      }
      if(num > firstLargestNumber){
        secondLargestNumber= Math.max(firstLargestNumber, secondLargestNumber);
        firstLargestNumber = num
      }else {
        secondLargestNumber= Math.max(num, secondLargestNumber);
      }
    }

    return secondLargestNumber === Number.MIN_SAFE_INTEGER ? -1 : secondLargestNumber
  };

  public static isDigit(char: string): boolean {
    return !isNaN(Number(char));
  };

}

Lc1796SecondLargestDigitInAString.main()
