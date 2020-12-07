function getMaxLessThanK(n, k){
    var max1 = 0;
    for(var i = 2; i<=n; i++)
    {
        for(var j = 1; j<i; j++)
        {
            var temp = i&j;
            if(temp > max1 && temp < k)
            {
                max1 = temp;
            }
            
        }
    }
    return max1;
}

console.log(getMaxLessThanK(8, 3));