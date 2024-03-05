/**
 * 34. Find First and Last Position of Element in Sorted Array
Medium

13150

332

Add to List

Share
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
 */
class Lc34FindFirstAndLastPositionOfElementInSortedArray{
    public static main () : void{
        let result : number[]
        result = this.searchRange([5,7,7,8,10], 8)
        console.log(result)
        result = this.searchRange([5,7,7,8,8,10], 8)
        console.log(result)
        result = this.searchRange([], 0)
        console.log(result)
        result = this.searchRange([1,2,3], 3)
        console.log(result)        
    }

    public static searchRange(nums: number[], target: number): number[] {
        let lastIndexPosition:number = this.binarySearch(0, nums.length-1, nums, target, true)
        console.log(`last index of target ${lastIndexPosition}`)
        let firstIndexPosition:number = this.binarySearch(0, nums.length-1, nums, target, false)
        console.log(`first index of target ${firstIndexPosition}`)
        return [firstIndexPosition, lastIndexPosition]
    };

    public static binarySearch(startIndex : number, endIndex : number, nums:number[], target:number, rightMostIndex:boolean) : number{
        let lo : number = startIndex;
        let hi : number = endIndex;
        let index : number =  -1
        while(lo <= hi){
            let mid = Math.floor((lo + hi) / 2)
            if(nums[mid]===target){
                index = mid
                if(rightMostIndex)
                    lo = mid + 1;
                else
                    hi = mid - 1
            }
            else if(nums[mid] < target)
                lo = mid + 1;
            else
                hi = mid - 1
        }

        return nums[index]===target? index : -1
    }


}

Lc34FindFirstAndLastPositionOfElementInSortedArray.main()