var prev1 = 1; prev2 = 1;
for(var i=0;i<10;i++)
{
    if(i == 0 || i == 1)
        console.log(1);
    else
    {
        console.log(prev1+prev2);
        prev1 += prev2;
        prev2 = prev1 - prev2;
    }
    
}