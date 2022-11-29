
function range(a, b)
{
    const array1 = [];
    for (let i=Math.floor(a); i<=Math.floor(b); i++) 
    {
        array1.push(i);
    }

    return array1;
}

console.log(range(7, 12));
console.log(range(7.5, 12));
