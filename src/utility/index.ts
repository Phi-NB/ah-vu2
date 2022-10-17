export const convertValue = (value: any) => {
    value = value + "";
  
    if (value.length <= 5) {
      return (value = (value / 1000)
        .toFixed(2)
        .toLocaleString()
        .split(".")
        .join());
    } else if (value.length > 5) {
      return (value = (value / 1000).toLocaleString().split(".").join());
    }
    return value.toLocaleString().split(".").join();
  };
  
  export const convertDate = (value: string) => {
    const [year, month, day] = value.split("-");
  
    return [month, day, year].join("/");
  };
  
  export const deleteItemNullIcomeCashFlow = (arr: any) => {
    return arr
      .filter((item: any) => {
        if (
          item.reported_time_display0 === "--" &&
          item.reported_time_display1 === "--" &&
          item.reported_time_display2 === "--" &&
          item.reported_time_display3 === "--" &&
          item.ttm === "--"
        ) {
          return false;
        }
        return true;
      })
      .map((item: any) => {
        if (
          (item.reported_time_display0 !== "--" ||
            item.reported_time_display1 !== "--" ||
            item.reported_time_display2 !== "--" ||
            item.reported_time_display3 !== "--" ||
            item.ttm !== "--") &&
          item.items
        ) {
          return { ...item, items: deleteItemNullIcomeCashFlow(item.items) };
        }
        return item;
      })
      .map((item: any) => {
        if (item.items && item.items.length === 0) {
          delete item.items;
        }
        return item;
      });
  };
  
  export const deleteItemNullBalance = (arr: any) => {
    return arr
      .filter((item: any) => {
        if (
          item.reported_time_display0 === "--" &&
          item.reported_time_display1 === "--" &&
          item.reported_time_display2 === "--" &&
          item.reported_time_display3 === "--"
        ) {
          return false;
        }
        return true;
      })
      .map((item: any) => {
        if (
          (item.reported_time_display0 !== "--" ||
            item.reported_time_display1 !== "--" ||
            item.reported_time_display2 !== "--" ||
            item.reported_time_display3 !== "--") &&
          item.items
        ) {
          return { ...item, items: deleteItemNullBalance(item.items) };
        }
        return item;
      })
      .map((item: any) => {
        if (item.items && item.items.length === 0) {
          delete item.items;
        }
        return item;
      });
  };
  
  export const timeConverter = (date: number) => {
    var a = new Date(date);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = month + " " + date + ", " + year + " ";
    return time;
  };
  
  export const convertValueNumber = (value: string) => {
    return (value = parseInt(value).toLocaleString().split(".").join());
  };
  
  export const convertPercent = (percent: any) => {
    return (percent = (percent * 100).toFixed(2) + " %");
  };
  