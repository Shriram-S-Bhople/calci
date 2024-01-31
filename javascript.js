let displayValue='';
let displayValuepre='';
document.querySelector('#button_clear').onclick =function(){
  displayValuepre='';
  displayValue='';
  document.querySelector('#display').value=displayValue;
}

document.querySelector('#button_1').onclick =function(){
  displayValuepre=displayValue;
  displayValue=displayValue+"1";
  document.querySelector('#display').value=displayValue;
}

document.querySelector('#button_2').onclick =function(){
  displayValuepre=displayValue;
  displayValue=displayValue+"2";
  document.querySelector('#display').value=displayValue;
}

document.querySelector('#button_3').onclick =function(){
  displayValuepre=displayValue;
  displayValue=displayValue+"3";
  document.querySelector('#display').value=displayValue;
}

document.querySelector('#button_4').onclick =function(){
  displayValuepre=displayValue;
  displayValue=displayValue+"4";
  document.querySelector('#display').value=displayValue;
}

document.querySelector('#button_5').onclick =function(){
  displayValuepre=displayValue;
  displayValue=displayValue+"5";
  document.querySelector('#display').value=displayValue;
}

document.querySelector('#button_6').onclick =function(){
  displayValuepre=displayValue;
  displayValue=displayValue+"6";
  document.querySelector('#display').value=displayValue;
}

document.querySelector('#button_7').onclick =function(){
  displayValuepre=displayValue;
  displayValue=displayValue+"7";
  document.querySelector('#display').value=displayValue;
}

document.querySelector('#button_8').onclick =function(){
  displayValuepre=displayValue;
  displayValue=displayValue+"8";
  document.querySelector('#display').value=displayValue;
}

document.querySelector('#button_9').onclick =function(){
  displayValuepre=displayValue;
  displayValue=displayValue+"9";
  document.querySelector('#display').value=displayValue;
}

document.querySelector('#button_0').onclick =function(){
  displayValuepre=displayValue;
  displayValue=displayValue+"0";
  document.querySelector('#display').value=displayValue;
}
document.querySelector('#button_plus').onclick =function(){
  displayValuepre=displayValue;
  // displayValue=eval(displayValue);
  displayValue=displayValue+"+";
  document.querySelector('#display').value=displayValue;
}
document.querySelector('#button_minus').onclick =function(){
  displayValuepre=displayValue;
  // displayValue=eval(displayValue);
  displayValue=displayValue+"-";
  document.querySelector('#display').value=displayValue;
}
document.querySelector('#button_multiply').onclick =function(){
  displayValuepre=displayValue;
  // displayValue=eval(displayValue);
  displayValue=displayValue+"*";
  document.querySelector('#display').value=displayValue;
}
document.querySelector('#button_divid').onclick =function(){
  displayValuepre=displayValue;
  // displayValue=eval(displayValue);
  displayValue=displayValue+"/";
  document.querySelector('#display').value=displayValue;
}
document.querySelector('#button_dot').onclick =function(){
  displayValuepre=displayValue;
  // displayValue=eval(displayValue);
  displayValue=displayValue+".";
  document.querySelector('#display').value=displayValue;
}
document.querySelector('#button_').onclick =function(){
  displayValuepre=displayValue;
  // displayValue=eval(displayValue);
  displayValue=eval(displayValue);
  document.querySelector('#display').value=displayValue;
}
document.querySelector('#button_sc').onclick =function(){
  // displayValuepre=displayValue;
  // displayValue=eval(displayValue);
  // while(true){
  //   displayValue=displayValuepre;
  // }
  let tf=displayValue.length;
 if(tf>0){
  let temp='';
  for(let i=0;i<tf-1;i++){
    temp=temp+displayValue[i];
  }
  displayValue=temp;
 }
  // displayValue=displayValuepre;
  document.querySelector('#display').value=displayValue;
}





