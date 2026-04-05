const currentYear = new Date().getFullYear();
document.querySelector('#Copyright').textContent = `Copyright © ${currentYear} Website Builder - All Rights Reserved to their respective owners`;


document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
   
    this.style.display = "none"; 
    
    document.getElementById("submittedMessage").classList.remove("hidden"); 
    
   
    setTimeout(function() {
        document.getElementById("submittedMessage").classList.add("hidden");
    }, 3000);
});
