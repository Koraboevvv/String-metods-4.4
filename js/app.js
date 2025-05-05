{
    // M-1
    function A1(n) {
        return( n.repeat(3) );
        
    }
    console.log(A1("hello"));    
}

{
    // M-2
    function A2(n) {
        return(n.slice(0, 5)) 
    }
    console.log(A2("better lorem home"));
}

{
    // M-3
    function A3(n) {
        return(n.includes("text", "world"))
        
    }
    console.log(A3("hello y text best in the world"));
    
}

// {
//     // M-4
//     function A4(n) {
//         return
//     }
//     console.log(A3());
//  
// }

{
    // M-5
    function A5(n) {
        return(n.replace("Bugun", "Ertaga"))
    }
    console.log(A5("Bugun men maktabga boraman"));
}

{
    // M-6
    function A6(n) {
        return(n.slice(2,5).toUpperCase())
    }
    console.log(A6("salom"));
}