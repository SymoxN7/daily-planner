$(document).ready(function () {
  //Current date/time and display in header

  let currentDate = dayjs();
  $("#currentDay").text(currentDate);

  //Add event listener to save button
  $(".saveBtn").on("click", function(){
    
    let value = $(this).siblings(".description").val();
    let timeId = $(this).parent().attr("id");


    localStorage.setItem(timeId, value)
    $()

  })

  //Color changes based on current time
  function hourUpdate(){
    let currentHour = moment().hours();
    
    for(let i = 0; i < $(".time-block").length; i++){
      let hour = parseInt($(".time-block")[i].getAttribute("id").split("-")[1])
      console.log(currentHour)
      console.log(hour)
      if (hour < currentHour) {
        $(".time-block")[i].classList.add("past")
      } else if (hour === currentHour) {
        $(".time-block")[i].classList.add("past")
        $(".time-block")[i].classList.remove("present")
      } else {
        $(".time-block")[i].classList.remove("past")
        $(".time-block")[i].classList.remove("present")
        $(".time-block")[i].classList.add("future")
      }
    }
  }

  let interval = setInterval(hourUpdate, 15000);

  //Remember calendar entries
  $("#hour-9 .description").val(localStorage.getItem("hour-9"))
  $("#hour-10 .description").val(localStorage.getItem("hour-10"))
  $("#hour-11 .description").val(localStorage.getItem("hour-11"))
  $("#hour-12 .description").val(localStorage.getItem("hour-12"))
  $("#hour-13 .description").val(localStorage.getItem("hour-13"))
  $("#hour-14 .description").val(localStorage.getItem("hour-14"))
  $("#hour-15 .description").val(localStorage.getItem("hour-15"))
  $("#hour-16 .description").val(localStorage.getItem("hour-16"))
  $("#hour-17 .description").val(localStorage.getItem("hour-17"))
  
})
