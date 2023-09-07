$(document).ready(function () {
  //Current date/time and display in header

  let currentDate = dayjs();
  $("#currentDay").text(currentDate);

  //Timeblocks added to HTML, for each hour of the day

  let dayHours = [
    "9am",
    "10am",
    "11am",
    "12am",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
  ];

  for (i = 0; i < dayHours.length; i++) {
    let timeBlock = $("<div>");
    timeBlock.addClass("time-block row");
    timeBlock.text(dayHours[i]);
    $(".container").append(timeBlock);
  };


  //Add text input to time block
  let calendarRows = $(".time-block") 
  let calendarItems = $("<input>");
  calendarItems.addClass("description");
  calendarRows.append(calendarItems)

  //Add a save button to each one to save text to local storage
  let saveButton = $("<button>");
  saveButton.addClass("saveBtn", "saveBtn i:hover")
  calendarRows.append(saveButton)

  //Add event listener to save button

  
  //Color changes based on current time
});
