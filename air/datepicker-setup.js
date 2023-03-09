let button = {
  content: "Выбрать",
  className: "custom-button-classname",
  onClick: (dp) => {
    select(dp);
  },
};

function select(date) {
  console.log(date.getDate);
}

datepicker = new AirDatepicker("#datepicker", {
  inline: true,
  multipleDates: true,
  range: true,
  dynamicRange: true,
  buttons: [button],
  onRenderCell: ({ date, cellType }) => {
    if (cellType === "day") {
      if (date.getDate() === 10) {
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
