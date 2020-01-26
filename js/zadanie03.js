//zadanie 3

function bigestSumOfTwoElements(array){

    if(array.length ==  0){

        return false

    }

    if(array.length == 1){

        return array[0]

    }
    array.sort((a,b)=>{

        return a - b

    })



    return array[array.length - 1] + array[array.length - 2]

}


bigestSumOfTwoElements([1,2,3,4]) // => 7

bigestSumOfTwoElements([]) // => false

bigestSumOfTwoElements([76]) // => 76

bigestSumOfTwoElements([23,45,17,12]) // => 68