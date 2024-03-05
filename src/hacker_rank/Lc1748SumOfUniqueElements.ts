/**
 * 1748. Sum of Unique Elements
Easy

859

18

Add to List

Share
You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums.

 

Example 1:

Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.
Example 2:

Input: nums = [1,1,1,1,1]
Output: 0
Explanation: There are no unique elements, and the sum is 0.
Example 3:

Input: nums = [1,2,3,4,5]
Output: 15
Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.
 

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100

 */


class Lc1748SumOfUniqueElements{

    public static main () : void{
        let result = this.sumOfUnique([1,2,3,2])
        console.log(result)
        result = this.sumOfUnique([1,1,1,1,1])
        console.log(result)
        result = this.sumOfUnique([1,2,3,4,5])
        console.log(result)
    }

    public static sumOfUnique(nums: number[]): number {
        let mapOfKeyToFrequency = new Map<number, number>()
        
        for(let i = 0; i < nums.length; i++){
            let currentValue : number = nums[i]
            if(mapOfKeyToFrequency.has(currentValue)){
                let frequency : number = mapOfKeyToFrequency.get(currentValue)!!
                frequency++;
                mapOfKeyToFrequency.set(currentValue, frequency);
            }else{
                mapOfKeyToFrequency.set(currentValue, 1);
            }
        }

        let sum : number = 0
        mapOfKeyToFrequency.forEach((v, k)=>{
            if(v==1)
                sum+=k
        })

        return sum;
    }
    
    /**
     * 
     */
}

Lc1748SumOfUniqueElements.main()