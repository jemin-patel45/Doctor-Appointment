document.addEventListener("DOMContentLoaded", function () {
  let scheduledAppointmentsDiv = document.getElementById("scheduledAppointments");
  
  

    
  try {

    let scheduledAppointments = JSON.parse(localStorage.getItem("newObj"));
    console.log(scheduledAppointments);
   
    
    if (scheduledAppointments) {

      let appointmentInfo = document.createElement("div");
      appointmentInfo.innerHTML = `
            <h3>Scheduled Appointment</h3>
            <p>Date: ${scheduledAppointments.date}</p>
            <p>Issue: ${scheduledAppointments.issue}</p>
            <p>Address: ${scheduledAppointments.address}</p>
            <p>Contact Number: ${scheduledAppointments.contact}</p>
            <p>Email: ${scheduledAppointments.email}</p>
            <hr>
          `;
      scheduledAppointmentsDiv.append(appointmentInfo);
      

    } else {
      scheduledAppointmentsDiv.innerHTML = "<p>No appointments scheduled yet.</p>";
    }
  } catch (error) {
    console.error("Error retrieving appointments:", error);
    scheduledAppointmentsDiv.innerHTML = "<p>An error occurred while retrieving appointments.</p>";
  }

  window.onbeforeunload = function () {
    localStorage.clear();
};
});
