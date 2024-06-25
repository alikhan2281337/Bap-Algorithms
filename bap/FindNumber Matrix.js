function FindNumber(matrix, target){
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            if (matrix[i][j] === target){
                return `Число ${target} найдено в матрице на позиции (${i}, ${j})`
            }
        }
    }
}
const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
const target = 7
const result = FindNumber(matrix, target)
console.log(result)