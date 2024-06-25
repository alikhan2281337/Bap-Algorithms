function BubbleSort(Array){
    for (let i = 0; i < Array.length; i++){
        for (let j = 0; j < Array.length - 1; j++){
            if(Array[i] < Array[j]){
                var temp = Array[i]
                Array[i] = Array[j]
                Array[j] = temp
            }
        }
    }
    console.log(test)
}

const test = [35, 245, 42, 1, 23, 55, 324, 12]
BubbleSort(test)