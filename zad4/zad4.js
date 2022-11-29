function sum(array)
{
    let sum = 0;
    array.forEach(element => {
        sum += Number(element)
    });

    return sum;
}

const array = [2, 3, 4];
console.log(sum(array));