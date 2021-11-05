function calc() {
    console.log("!!!HEY!!!")
    /** Umrechnungswerte ;)
    var centimeter = 0.01;
    var meter = 1;
    var kilometer = 1000;
    var inch = 0.0254;
    var foot = 0.3048;
    var mile = 1609.34;
    var lightYear = 9461000000000000n;
    */
    var inputValue;
        //Umrechnung des Eingabewertes in METER
    switch(document.getElementById("inputType").value){
        case "centimeter":
            inputValue = document.getElementById("in").value / 0.01;
            break;
        case "meter":
            inputValue = document.getElementById("in").value;
            break;
        case "kilometer":
            inputValue = document.getElementById("in").value / 1000;
            break;
        case "inch":
            inputValue = document.getElementById("in").value / 0.0254;
            break;
        case "foot":
            inputValue = document.getElementById("in").value / 0.3048;
            break;
        case "mile":
            inputValue = document.getElementById("in").value / 1609.34;
            break;
        case "lightYear":
            inputValue = document.getElementById("in").value / 9461000000000000n;
            break;
    }
        //Umrechnung von METER in den jeweiligen Ausgabewert und eintragung in den HTML
    switch (document.getElementById("outputType").value) {
        case "centimeter":
            document.getElementById("out").value =  inputValue * 0.01;
            break;
        case "meter":
            document.getElementById("out").value =  inputValue;
            break;
        case "kilometer":
            document.getElementById("out").value =  inputValue * 1000;
            break;
        case "inch":
            document.getElementById("out").value =  inputValue * 0.0254;
            break;
        case "foot":
            document.getElementById("out").value =  inputValue * 0.3048;
            break;
        case "mile":
            document.getElementById("out").value =  inputValue * 1609.34;
            break;
        case "lightYear":
            document.getElementById("out").value =  inputValue * 9461000000000000n;
            break;
    }
}