/*1.Use switch case and take Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
 as cases and any expression related to case*/ 
switch("tuesday"){
    case "monday":
        console.log("today is monday")
        break;
     case "tuesday":
        console.log("today is tuesday") 
        break;
        case "wednesday":
         console.log("today is wednesday") 
         break;
         case "thursday":
            console.log("today is thursday")
            break;
            case "friday":
                console.log("friday")
                break;
                case "saturday":
                    console.log("today is saturday")
                    break;
                    
          default:
            console.log("hello everyone")      
}
/*2. For of loop:-- iterate array of elements having number 1  to 5*/
var a=[1,2,3,4,5];
for(var elements of a){
    console.log(elements)
}
/*3. For of loop:-- take string Nd iterate characters*/
var b="jhansi";
for(var str of b){
    console.log(str)   
}
