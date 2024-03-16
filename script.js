let percentage = prompt ("Enter your percentage")

if(percentage >= 90 && percentage <= 100 ) 
{
    console.log(" A+1") 
    grade = "A+1"

}  
   else if (percentage >= 80 && percentage <= 89 )
{
     console.log (" A1")
     grade = "A1"
}

else if ( percentage >= 70 && percentage <=79)
{
    console.log ("A")
    grade = "A"

}
 else if (percentage >= 60 && percentage < 69 )
{
    console.log (" B")
    grade = "B"
}
else if (percentage >= 50 && percentage <= 59)
{
    console.log (" C")
    grade = "C"
}

else if ( percentage >= 40 && percentage <= 49)
{
    console.log (" D")
    grade = "D"
}

else if ( percentage >= 30)
{
    console.log ("F")
    grade = "F"
    
}
 else {
    console.log ("Enter vilad Percentage")
 }

 switch ("grade")
 {
    case "A+1":
        console.log ("you have a Grade Job");
    break;
    case "A1":
      console.log ("you have a Very Good" );
      break;
      case "B":
        console.log( "you have a Good ");
        break;
        case "C":
            console.log ("you have a keep it up" );
            break;
    
     
            case "D":
                console.log ("sorry you havee just pass" );
                break;

                case "F":
                    console.log ("fail" );
                    break;
 }