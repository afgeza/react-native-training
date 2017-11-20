// @flow

export default function getTime() {
  let time: Date = new Date();

  return {
    hour: time.getHours(),
    minute: time.getMinutes()
  };
}
