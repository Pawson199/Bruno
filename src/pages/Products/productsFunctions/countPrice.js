export default function price(initial_price, size, size2){

    function obroza(){
    
        let price = 0;

        switch(size){
            case 'empty':
                price = 0 
            break;
            case '18-27':
                price = 16 
            break;
            case '25-35':
                price = 18
            break;
            case '33-41':
                price = 23
            break;
            case '38-48':
                price = 24
            break;
            case '46-58':
                price = 27
            break;
            case '56-71':
                price = 35
            break;
            default: 
               price = 0

        }

        return price

    }

    function smycz(){

        let price = 0

        switch(size2){
            case 'empty':
                price = 0 
            break;
            case 1:
                price = 14 
            break;
            case 1.5:
                price = 17
            break;
            case 2:
                price = 20.5
            break;
            case 3:
                price = 28
            break;
            default: 
                 price = 0

        }

        return price

    } 

    if( +smycz() + +obroza() === 0 ){
        return initial_price
    }
    else {
        return +smycz() + +obroza()
    }

}