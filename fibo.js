// const fibo = [0,1,2,3,5]; 

// 

    //var n1 = 0 ; 
    //var n2 = 1 ; 
    //var somme = 0;
 


    //for(let i = 2; i < 50 ; i++) {

    //    somme = n1 + n2 ;
    //    n1 = n2 ;
    //    n2 = somme ;

    //    console.log(somme);
    // }

   
 // declaration de variable ; 

    // var somme = 0;

    // for(let i = 3; i < 50 ; i++) {

    //     n1 = fibo[i]; 
    //     n2 = fibo [i+1]; 
       
    //     somme = n1 + n2 ;
    //     fibo.push(somme)

        
    // }
    // console.log(fibo);



function calculer (nbr , puissance) {
    if (puissance === 0 ) {
        return 1;  
    } 
    else if (puissance === 1) {
        return nbr; 
    }
    else  {
        let result = nbr; 
        for (let i=1; i < Math.abs(puissance); i++ ) {
            result = result * nbr ; 
        } 
        if (puissance>0) return result; 
        else if (puissance<0) return 1/resultat; 
    }
}
console.log(calculer(2,-4));
   

    


