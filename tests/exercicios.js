function ranges(start, end){
    let arr = [];
    for(let i=start; i<=end; i++){
        arr.push(i);
    }
    return arr;
}

function soma(arr){
    let sum=0;
    for(let element of arr){
        sum+= element;
    }
    
    return sum;
}

console.log(soma(ranges(1,15)));

function reverseArray(arr) {
    let arrNew=[], j=0;
    for(let i=(arr.length)-1; i>=0; i--, j++){
        arrNew[j] = arr[i];
    }

    console.log(arrNew);
    
}

function reverseArrayInPlace(arr){
    for(let i=0, j=arr.length-1; i<arr.length/2; i++, j--){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    console.log(arr);
    
}
reverseArrayInPlace([1,2,3,4,5]);

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
  }

  console.log(arrayToList([10, 20, 35]));

  function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
  }

  function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }



  // extra: função para checar se 2 arrays são iguais
  //javascript só faz === com strings, então basta transformar em string antes
  function arrayEqual(arr1, arr2){
      console.log(JSON.stringify(arr1)===JSON.stringify(arr2));
      
  }

  arrayEqual([1,2,3], [1,2,3, 4]);
  


function deepEqual(a, b){
    if(a===b) return true
    if(typeof a != "object" && typeof b != "object" && a==null && b==null) return false;

    //senão, é pq são 2 objetos
    let keysA = Object.keys(a), keysB = Object.keys(b);

    if(keysA.length != keysB.length) return false;

    for(let key of keysA){
        if(keysB.includes(key)==false || deepEqual(a[key], b[key])==false) return false;
    }
    return true;
}

// let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true