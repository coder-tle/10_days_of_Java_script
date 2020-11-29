function getLetter(s) {
    let letter;
    // Write your code here
    switch(s[0])
    {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        return 'A';
        
        // bcdfg
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
        return 'B';
        
        
        // hjklm
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        return 'C';
        
        
        // npqrstuvwxyz
        
        default:
        return 'D';
        break;
    }
    return letter;
}
