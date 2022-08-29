1. Calculator
const Calculator = (A, B, C) => 
{
  switch(true)
  {
    case (A=='+'):
      var sum=B+C;
      return(sum);
      break;
    
    case (A=='-'):
      var sub=B-C;
      return(sub);
      break;
    
    case (A=='*'):
      var mul=B*C;
      return(mul);
      break;
      
    case (A=='/'):
      var div=B/C;
      return(div);
      break
  }
};



2. Check whether the condition is fulfilled or not?

   
switch(true){
  case (N%6==0 && N%9==0):{
    return ("Divisible by both");
    break;
  }
  case (N/6!=0 && N/9!=0):{
    return ("Not Divisible by both");
    break;
  }
}
}


3. Eligible Voter

const isEligible = (a) =>{
  switch (true)
   {
     case (a>=18):{
       return ("Eligible for Voting");
       break;
     } 

     case (a<18):{
       return ("Not Eligible for Voting");
       break;
     }
}
}


4. Find Relation
if(x<y){
    return (x +" is smaller than "+ y)
  }
  else if(x>y){
    
   return (x +" is greater than "+ y) 
  }
  
  else if(x==y){
    
    return (x +" is equal to "+ y)
  }

5. Find Grades
const findGrades = (a) => {
  
    switch(true)
    {
      case (a<=10):
        {
          return "E";
          break;
        }
      case (a>=11 && a<=20):
        {
          return "D";
          break;
        }
      case (a>=21 && a<=30):
        {
          return "C";
          break;
        }
      case (a>=31 && a<=40):
        {
          return "B";
          break;
        }
      case (a>=41 && a<=50):
        {
         return "A";
         break;
        }
    }
  };


6. Get Value
const getValue = (a) => {
    if(a=='P' || a=='p'){
      return "PrepBytes";
    }
    else if(a=='Z' || a=='z'){
      return "Zenith";
    }
    else if(a=='E'|| a=='e'){
      return "Expert Coder";
    }
    else{
      return "Data Structure";
    }


7. Find the maximum out of three numbers.

const Max_out_of_three = (A,B,C) => {
  if( A>B && A>C){
 return A;
} else if( B>A && B>C){
 return B;
} else if( C>A && C>B){
 return C;
} else{
 return -1;
}
};




8. Second Smallest

if(x>y && x>z){
  if(y>z){
    return y;
  }else{
    return z;
  }
}else if(y>x && y>z){
  if(x>z){
    return x;
  }else{
    return z;
  }
}else{
  if(x>y){
    return x;
  }else{
    return y;
  }
}



9. Check whether the triangle is Acute or Obtuse
let sum=A+B+C;
if(sum==180)
{
  if(A<90 && B<90 && C<90){
  return "acute";
  }
  else if(A>90 || B>90 || C>90 ){
    return "obtuse"}
}