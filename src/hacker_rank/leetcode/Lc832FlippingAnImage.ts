/**
 * 
 * 832. Flipping an Image
Easy

2408

209

Add to List

Share
Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.

For example, flipping [1,1,0] horizontally results in [0,1,1].
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

For example, inverting [0,1,1] results in [1,0,0].
 

Example 1:

Input: image = [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
Example 2:

Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
 

Constraints:

n == image.length
n == image[i].length
1 <= n <= 20
images[i][j] is either 0 or 1.
 */

// 
class Lc832FlippingAnImage{
    public static main () : void{
        let result : number[][]
        result = this.flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])
        console.log('------------------------------------------------')
        result.forEach(r=>{
            console.log(r)
        })
        /**
         * [[1,0,0],
         * [0,1,0],
         * [1,1,1]]
         */
        result = this.flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])
        console.log('------------------------------------------------')
        result.forEach(r=>{
            console.log(r)
        })
        //[[1,1,0,0],
        // [0,1,1,0],
        // [0,0,0,1],
        // [1,0,1,0]]
    }

    public static flipAndInvertImage(image: number[][]): number[][] {
        for(let i = 0; i < image.length; i++){
            for(let j = 0; j < Math.floor(image[i].length / 2); j++){
                let temp : number = image[i][j];
                let altIndex = image[i].length - j - 1
                image[i][j] = image[i][altIndex]
                image[i][altIndex] = temp
                
                image[i][j] = (image[i][j] == 0) ? 1 : 0
                image[i][altIndex] = (image[i][altIndex] == 0) ? 1 : 0
            }
            if(image[i].length % 2 !== 0 ){
                let midIndex = Math.floor(image[i].length / 2)
                image[i][midIndex] = (image[i][midIndex] == 0) ? 1 : 0
            }
        }
        return image;
    }

    public static flipAndInvertImage2(image: number[][]): number[][] {
        for(let i = 0; i < image.length; i++){
            for(let j = 0; j < Math.floor(image[i].length / 2); j++){
                let temp : number = image[i][j];
                let altIndex = image[i].length - j - 1
                image[i][j] = image[i][altIndex]
                image[i][altIndex] = temp
                
            }
        }
        for(let i = 0; i < image.length; i++){
            for(let j = 0; j < image[i].length; j++){
                image[i][j] = (image[i][j] == 0) ? 1 : 0
            }
        }
        return image;
    }
}

Lc832FlippingAnImage.main();
