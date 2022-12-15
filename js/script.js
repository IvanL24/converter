function convert(){
    var fo = document.getElementById("fu");
    var so = document.getElementById("su");

    var firstOptions = fo.options;
    var secondOptions = so.options;

    var option1 = firstOptions[fo.selectedIndex]
    var option2 = secondOptions[so.selectedIndex]


    console.log(secondOptions)
    console.log(option2)
    console.log(option2.value)
    console.log(option2.text)

    console.log('first option: ', fo.options[fo.selectedIndex].value)
    // if first unit is in feet
    if (fo.options[fo.selectedIndex].value == "1"){
        var firstValue = document.getElementById("fv");
        var secondValue = document.getElementById("sv");

        switch (option2.value){
            case "1": 
            {
                var result = firstValue.value *1;
                secondValue.value = result;      
                break;
            }
            case "2": 
            {
                var result = firstValue.value /3.2808; 
                secondValue.value = result;  
                break;    
            }
            case "3": 
            {
                
                var result = firstValue.value/0.035315;
                secondValue.value = result;
                break;      
            }
            case "4": 
            {
                
                var result = firstValue.value/3280.8;
                secondValue.value = result;
                break;      
            }
        }

    }
    // if first unit is in meters
    if (fo.options[fo.selectedIndex].value == "2"){
        var firstValue = document.getElementById("fv");
        var secondValue = document.getElementById("sv");

        switch (option2.value){
            case "1": 
            {
                var result = firstValue.value * 3.2808;
                secondValue.value = result;      
                break;
            }
            case "2": 
            {
                var result = firstValue.value *1; 
                secondValue.value = result;  
                break;    
            }
            case "3": 
            {
                
                var result = firstValue.value/0.0010000;
                secondValue.value = result;
                break;      
            }
            case "4": 
            {
                
                var result = firstValue.value/1000;
                secondValue.value = result;
                break;      
            }
        }

    }
    // if first unit is in liters 
    if (fo.options[fo.selectedIndex].value == "3"){
        var firstValue = document.getElementById("fv");
        var secondValue = document.getElementById("sv");

        switch (option2.value){
            case "1": 
            {
                var result = firstValue.value * 0.035315;
                secondValue.value = result;      
                break;
            }
            case "2": 
            {
                var result = firstValue.value /1000; 
                secondValue.value = result;  
                break;    
            }
            case "3": 
            {
                
                var result = firstValue.value*1;
                secondValue.value = result;
                break;      
            }
            case "4": 
            {
                
                var result = firstValue.value*1e-12;
                secondValue.value = result;
                break;      
            }
        }

    }
    if (fo.options[fo.selectedIndex].value == "4"){
        var firstValue = document.getElementById("fv");
        var secondValue = document.getElementById("sv");

        switch (option2.value){
            case "1": 
            {
                var result = firstValue.value * 3280.8;
                secondValue.value = result;      
                break;
            }
            case "2": 
            {
                var result = firstValue.value /0.0010000; 
                secondValue.value = result;  
                break;    
            }
            case "3": 
            {
                
                var result = firstValue.value*1e+12;
                secondValue.value = result;
                break;      
            }
            case "4": 
            {
                
                var result = firstValue.value*1;
                secondValue.value = result;
                break;      
            }
        }

    }


}