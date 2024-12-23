document.addEventListener("DOMContentLoaded", function() {

    var currentDate = new Date();

    
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = currentDate.toLocaleDateString('en-US', options);
  

    document.getElementById("currentDate").textContent = formattedDate;

    var scheduleButton = document.getElementById("scheduleButton");
    

  
    if (scheduleButton) {
      scheduleButton.addEventListener("click", function() {
        var appointmentDate = document.getElementById("appointmentDate").value;
        var appointmentIssue = document.getElementById("appointmentIssue").value;
        var appointmentAddress = document.getElementById("appointmentAddress").value;
        // var contactNumber = document.getElementById("contactNumber").value;
        // var email = document.getElementById("email").value;

        
  
        if (appointmentDate && appointmentIssue && appointmentAddress) {
        
          console.log("Appointment Date: " + appointmentDate);
          console.log("Appointment Issue: " + appointmentIssue);
          console.log("Appointment Address: " + appointmentAddress);
  
          
          let successMessage = document.createElement("h3");
          
          successMessage.textContent = "Appointment scheduled successfully!";
          successMessage.style.color = "green";
          successMessage.classList.add("schedule-success");
          let scheduleSection = document.getElementById("schedule");
          scheduleSection.innerHTML = "";
          scheduleSection.appendChild(successMessage);
        } else {
          
          let errorMessage = document.createElement("h3");
          errorMessage.textContent = "Please fill in all fields!";
          successMessage.style.color = "green";
          errorMessage.classList.add("schedule-error");
          let scheduleSection = document.getElementById("schedule");
          scheduleSection.innerHTML = "";
          scheduleSection.appendChild(errorMessage);
          
         
          goBackButton.style.display = "inline-block";
        }
      });
    }
  
  });
  

 