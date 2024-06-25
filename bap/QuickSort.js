function quickSort(arr){
    const {length} = arr
    if (length < 2){
        return arr
    }
    var halfLength = Math.ceil(length / 2)
    var integer = arr[halfLength] // Число которое выбирается в массиве от которого будет делится на left and right 
    
    const left = []
    const right = []
    const center = []
    for ( let i = 0; i < length; i++){
        if ( arr[i] < integer){
            left.push(arr[i])
        }
        else if (arr[i] > integer){
            right.push(arr[i])
        }
        else{
            center.push(arr[i])
        }
    }
    
    return [...quickSort(left), ...center, ...quickSort(right)]
}

const test = [5, 2, 4, 1, 3, 6, 8, 7, 9, 10]
const result = quickSort(test)
console.log(result)