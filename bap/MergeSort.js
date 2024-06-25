function MergeSort(arr){
    const {length} = arr
    if (length > 1){
        let middle = Math.floor(length / 2)
        let lefthalf = arr.slice(0, middle)
        let righthalf = arr.slice(middle)
        MergeSort(lefthalf)
        MergeSort(righthalf)
        
        let i = j = k = 0
        while (i < lefthalf.length && j < righthalf.length){
            if (lefthalf[i] < righthalf[j]){
                arr[k] = lefthalf[i]
                i++
            }
            else{
                arr[k] = righthalf[j]
                j++
            }
            k++
        }
        while (i < lefthalf.length){
            arr[k] = lefthalf[i]
            i++
            k++
        }
        while (j < righthalf.length){
            arr[k] = righthalf[j]
            j++
            k++
        }
    }
    return arr
}
const test = [5, 2, 4, 1, 3, 6, 8, 7, 9, 10]
const result = MergeSort(test)
console.log(result)