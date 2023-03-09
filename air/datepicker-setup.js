let button = {
  content: "Выбрать",
  className: "custom-button-classname",
  onClick: (dp) => {
    select(dp);
  },
};

const dateList = [
  "03/01/2023",
  "03/02/2023",
  "03/03/2023",
  "03/04/2023",
  "03/05/2023",
];

function newDateList(dateList) {
  var newList = [];
  for (let index = 0; index < dateList.length; index++) {
    newList.push(Date.parse(dateList[index]));
  }
  return newList;
}

newDateList = newDateList(dateList);

datepicker = new AirDatepicker("#datepicker", {
  inline: true,
  multipleDates: true,
  range: true,
  dynamicRange: true,
  buttons: [button],
  onRenderCell({ date, cellType }) {
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
  },
});
