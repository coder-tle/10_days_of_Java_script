function factorial(n)
{
    if(n == 0)
    return 1;
    
    var res = Number(1);
    var i = Number(1);
    // console.log(typeof n);
    // console.log(res);
    // console.log(typeof res);


    for(i = 1; i<=n; i++)
    {
       // console.log(i);
        res *= i;
        
       
    }

   // for(var b = 1; b<= 10; b++)
    return res;
}

console.log(factorial(4));