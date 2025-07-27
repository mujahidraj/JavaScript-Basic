// Write a function to find the longest common prefix string amongst an strs of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.


let strs = ["flower", "f", "flght"]

let stored = "";

for (let i = 0; i < strs.length; i++) {

    if (i === 0) {
        stored += strs[i].toLowerCase();
    }
    else {

        let j = 0;
        for (; j < stored.length && j < strs[i].length; j++) {
            if (stored[j] != strs[i][j]) {
                
                break;
            }
        }
        stored = stored.slice(0, j);
        
        // let j = 0;
        // while (j < stored.length && j < strs[i].length && stored[j] == strs[i][j]) {
        //     j++;
        // }
        // stored = stored.slice(0, j);
    }
}
if (stored === "") {
    console.log("There is no common prefix among the input strings.")
}
else {
    console.log(stored)
}