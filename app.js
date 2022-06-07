let btn  = document.querySelector(".chk_btn");
let numbers = document.querySelector(".user_input");


btn.addEventListener("click", ()=>{
     let user_number = parseInt(numbers.value) ;
     let result_value = document.querySelector(".result_sec");
     let user_input_number = document.querySelector(".number");
     let odd_number = document.querySelector(".result_odd");
     let even_number = document.querySelector(".result_even");

     if(user_number %2 !== 0) {
          result_value.style.display = "block";
          user_input_number.innerText = user_number;
          odd_number.style.display = "inline-block";
     }
     else {
          result_value.style.display = "block";
          user_input_number.innerText = user_number;
          odd_number.style.display = "none";
          even_number.style.display = "inline-block";
     }

})