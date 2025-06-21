const firstUniqueCharecter= (s)=>{
    //-------- using object ------------
    // let freq_dict = {}
    // for (let char of s){
    //    freq_dict[char] = freq_dict[char] + 1 || 1
    // }
    // console.log(freq_dict)

    // for (let char of s){
    //     if (freq_dict[char] == 1){
    //         return s.indexOf(char)
    //     }
    // }

    // wrong way 
    
     // for (let [key,value] of freq_dict){ // but this doesnt gaurentee the first unique character as object doesnt maintain the order
    //     if (value ==1){
    //         return s.indexOf(key)
    //     }
    // }

}
    // return -1

    //-------- using map ------------
    let freq_dict = new Map() 
    for (let char of s){
        freq_dict.set(char, freq_dict.get(char)+1 || 1) 
    }

    // console.log(freq_dict) // Map(5) { 'd' => 2, 'e' => 3, 't' => 1, 'c' => 1, 'o' => 1 }
    
    // const iterator = freq_dict[Symbol.iterator]() // using iterator
    // for (let [key,value] of iterator){
    //     if (value ==1){
    //         return s.indexOf(key)
    //     }
    // }
    // return -1

    const iterator = freq_dict[Symbol.iterator]() // using iterator
    index = 0
    while (true){
        let [key,val] = iterator.next().value
        if (val == 1){
            // return s.indexOf(key) to avoid this used index, if there is anything in iterator itself to get no of iteration completed use it instead of index
            return index

            break
        }
        index+=1
        

    }
    return -1

   
console.log(firstUniqueCharecter('deetcode'))