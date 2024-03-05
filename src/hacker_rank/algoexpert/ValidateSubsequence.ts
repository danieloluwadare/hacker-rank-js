/**
 *   Given two non-empty arrays of integers, write a function that determines
 *   whether the second array is a subsequence of the first one.
 *   A subsequence of an array is a set of numbers that aren't necessarily adjacent
 *   in the array but that are in the same order as they appear in the array. For
 *   instance, the numbers <span>[1, 3, 4]</span> form a subsequence of the array
 *   <span>[1, 2, 3, 4]</span>, and so do the numbers <span>[2, 4]</span>. Note
 *   that a single number in an array and the array itself are both valid
 *   subsequences of the array.
 * array = [5, 1, 22, 25, 6, -1, 8, 10], sequence = [1, 6, -1, 10]
 * @param array
 * @param sequence
 *
 */
function isValidSubsequence(array: number[], sequence: number[]) {
    // Write your code here.
    let i = 0;
    for (const num of array){
        if (num === sequence[i]){
            i++;
        }
    }
    return i===sequence.length;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],  [1, 6, -1, 10]))
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],  [5, 1, 22, 25, 6, -1, 8, 10]))
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],  [1, 6, 8, -1, 10]))
