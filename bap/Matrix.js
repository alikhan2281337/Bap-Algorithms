const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
const plus = [
    [9,8,7],
    [6,5,4],
    [3,2,1],
]
const result = []
function Solution(matrix, plus){
    for (let i = 0; i < matrix.length; i++){
        const innerResult = []
        for (let j = 0; j < matrix[i].length; j++){
            result.push(matrix[i][j] + plus[i][j])
        }
        result.push(innerResult)
    }
}


Solution(matrix, plus)
console.log (result)