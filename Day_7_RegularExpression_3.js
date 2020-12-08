/*

Great website to visualize how regex is working, it is like doing dry run of coding problem
https://regex101.com/r/seoH9p/2/

'g' : global flag is used to find all occurance of the pattern, if not used, it will just find first match only.
*/

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    
    const re = /\d+/g; 
    /*
     * Do not remove the return statement
     */
    return re;
}