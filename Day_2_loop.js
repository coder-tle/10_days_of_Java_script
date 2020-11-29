function vowelsAndConsonants(s) {
    var n = s.length;
    for(var i = 0; i<n; i++)
    {
        if(s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u'){
        console.log(s[i]);
        }
    }
    for(var i = 0; i<n; i++)
    {
        if( (s[i] != 'a') && (s[i] != 'e') && (s[i] != 'i') && (s[i] != 'o') && (s[i] != 'u')){
        
        console.log(s[i]);
        }
    }
}

vowelsAndConsonants("Javascript");