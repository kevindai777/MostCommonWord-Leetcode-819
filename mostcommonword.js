//Objective is to find the most common word in a sentence in a string.
//There is also a list of banned words that cannot be chosen.

let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
let banned  = ['hit']


//O(n) solution that uses regex as well as a hashmap to keep track of
//the frequencies of the words, as well as to remove any punctuation.

//Regex to get rid of any non-alphanumeric characters
let space = paragraph.toLowerCase().split(/\W+/g)
let map = {}

//Mapping the frequencies of each word
for (let word of space) {
    if (map[word] === undefined) {
        map[word] = 1
    } else {
        map[word]++
    }
}

let sorted = Object.keys(map).sort((a,b) => {
    return map[b] - map[a]
})

//Get rid of any banned words
let filter = sorted.filter(word => !banned.includes(word))
return filter[0]
