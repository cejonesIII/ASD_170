/*
   ASD-170
          Final Project
          
          
          Author: Charles Jones	
          Date: 31 Oct 2020


   Filename: aa_script.js

   */

window.onload = init;

function init() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Data passes initial validation tests");
      return false;
   }
   
}

  
