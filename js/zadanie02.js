//zadanie 2

function concatArray(array1, array2) {

    let newArr = []

    array1.forEach(element => {

        newArr.push(element)

    });

    array2.forEach(element =>{

        newArr.push(element)

    })



    return newArr

}

concatArray([1,3],[3,5])