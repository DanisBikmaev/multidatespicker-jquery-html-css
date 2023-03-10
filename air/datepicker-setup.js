function setDays() {
  let date = document.getElementById("datepicker");
  res = Math.floor(date / day);
  return date.value;
}
function getDayCounts() {
  var date = setDays();
  count = date.split(",").length;
  return count;
}

const dateList = [
  "03/01/2023",
  "03/02/2023",
  "03/03/2023",
  "03/04/2023",
  "03/05/2023",
  "03/06/2023",
  "03/17/2023",
];

let submitButton = {
  content: "Выбрать",
  className: "custom-button-classname",
  onClick: getDayCounts,
};

function newDateList(dateList) {
  var newList = [];
  for (let index = 0; index < dateList.length; index++) {
    newList.push(Date.parse(dateList[index]));
  }
  return newList;
}

function getData({ date, cellType }) {
  if (cellType === "day") {
    if (newDateList.includes(Date.parse(date))) {
      return {
        disabled: true,
        classes: "disabled-class",
        attrs: {
          title: "Cell is disabled",
        },
      };
    }
  }
}

function getSelectedDate({ date, formattedDate, datepicker }) {
  console.log(date);
  return date;
}

newDateList = newDateList(dateList);

datepicker = new AirDatepicker("#datepicker", {
  inline: true,
  multipleDates: true,
  range: false,
  dynamicRange: true,
  multipleDatesSeparator: ",",
  buttons: [submitButton],
  onRenderCell: getData,
  // onSelect: getSelectedDate,
});
