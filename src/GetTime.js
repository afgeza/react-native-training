// @flow

export default function GetTime() {
  let time: Date = new Date();

  return {
    hour: time.getHours(),
    minute: time.getMinutes()
  };
}
