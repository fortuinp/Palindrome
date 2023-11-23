//input1=document.querySelector(['data-input'])
function isPalindrome(pali){
    let second= pali.split("")
    let third=second.reverse()
    let fourth=third.join("")
    console.log(fourth);
if (pali == fourth){
    
    console.log(pali +' is a palindrome');
}
else
    console.log(pali +" is not a palindrome");
}
isPalindrome("Madam")

// let performance=true

// console.log(performance ? salary+bonus : salary);