function MergeSort(arr){
    const {length} = arr
    if (length > 1){
        const middle = Math.floor ( length / 2 )
        const lefthalf = arr.slice(0, middle)
        const righthalf = arr.slice(middle)
        MergeSort(lefthalf)
        MergeSort(righthalf)

        let i = j = k = 0
        while (i < lefthalf.length && j < righthalf.length){
            if( lefthalf[i] < righthalf[j]){
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
const test = [35, 245, 42, 1, 23, 55, 324, 12]
const result = MergeSort(test)
console.log(result)
