// CONSTANTS

const DATELIST = [
  "03/01/2023",
  "03/02/2023",
  "03/03/2023",
  "03/04/2023",
  "03/05/2023",
  "03/06/2023",
  "03/17/2023",
];

// SELECT DAYS

function select_days() {
  let date = document.getElementById("datepicker");
  if (date.value === "") {
    console.log(0);
    return 0;
  } else {
    console.log(date.value);
    return date.value;
  }
}

function get_day_counts() {
  var date = select_days();
  if (date === 0) {
    console.log(0);
    return 0;
  } else {
    count = date.split(",").length;
    console.log(count);
    return count;
  }
}

let submitButton = {
  content: "Выбрать",
  className: "custom-button-classname",
  onClick: get_day_counts,
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


newDateList = newDateList(DATELIST);

datepicker = new AirDatepicker("#datepicker", {
  inline: true,
  multipleDates: true,
  range: false,
  dynamicRange: true,
  multipleDatesSeparator: ",",
  buttons: [submitButton],
  onRenderCell: getData,
});
