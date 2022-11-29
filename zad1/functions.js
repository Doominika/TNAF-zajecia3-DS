function isOdd(x)
{
    if(x%2 != 0) return true; 
    return false;
}

var isEven = x => {return (x%2 == 0);} 


console.log(isOdd(3));
console.log(isEven(3));