/**
 * 26. Remove Duplicates from Sorted Array
Easy

7575

11237

Add to List

Share
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the 
first part of the array nums. More formally, if there are k elements after removing the duplicates, 
then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 

Constraints:

1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.
 */
class Lc26RemoveDuplicatesFromSortedArray{
    public static main () : void{
        let result = this.removeDuplicates([1,1,2])
        console.log(result)
        result = this.removeDuplicates([0,0,1,1,1,2,2,3,3,4])
        console.log(result)
        result = this.removeDuplicates([1])
        console.log(result)
    }

    public static removeDuplicates(nums: number[]): number {
        if(nums.length < 2)
            return 1;

        let slowPointer:number = 0
        for(let fastPointer = 1; fastPointer < nums.length; fastPointer++){
            if(nums[fastPointer] != nums[slowPointer]){
                let temp: number = nums[slowPointer + 1]
                nums[slowPointer + 1 ] = nums[fastPointer]
                nums[fastPointer] = temp
                slowPointer++
            }

        }
        return slowPointer + 1;
    };



    /**
     * sp=0 fp=1
[0,0,1,1,1,2,2,3,3,4]

sp=0 fp=2 ~ 1 != 0
[0,0,1,1,1,2,2,3,3,4]

sp=0 fp=2 ~ 1 != 0
[0,1,0,1,1,2,2,3,3,4]

sp=1 fp=3 ~ 1=1
[0,1,0,1,1,2,2,3,3,4]

sp=1 fp=4 ~ 1=1
[0,1,0,1,1,2,2,3,3,4]

sp=1 fp=5 ~ 1 != 2 swap(sp+1, fp)
[0,1,0,1,1,2,2,3,3,4] = [0,1,2,1,1,0,2,3,3,4]

sp=2 fp=6 ~ 2 = 2
[0,1,2,1,1,0,2,3,3,4]

sp=2 fp=7 ~ 2 != 3 swap(sp+1,fp)
[0,1,2,1,1,0,2,3,3,4] = [0,1,2,3,1,0,2,1,3,4]

sp=3 fp=8  3=3
[0,1,2,3,1,0,2,1,3,4]

sp=3 fp=9 3!=4 swap(sp+1,fp)
[0,1,2,3,1,0,2,1,3,4] = [0,1,2,3,4,0,2,1,3,1] 

sp=4 fp=10
[0,1,2,3,4,0,2,1,3,1] 
     */
}

Lc26RemoveDuplicatesFromSortedArray.main()