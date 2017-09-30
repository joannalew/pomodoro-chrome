'use strict';

function setAlarm(event) {
  let minutes = parseFloat(event.target.value);
  chrome.browserAction.setBadgeText({text: 'ON'});
  chrome.browserAction.setBadgeBackgroundColor({color: 'red'});
  chrome.alarms.create("alarm", {delayInMinutes: minutes});
  chrome.storage.sync.set({minutes: minutes});
  window.close();
}


function clearAlarm() {
  chrome.browserAction.setBadgeText({text: ''});
  chrome.alarms.clearAll();
  window.close();
}

//document.getElementById('sampleSecond').addEventListener('click', setAlarm);
document.getElementById('setAlarm').addEventListener('click', setAlarm);
document.getElementById('cancelAlarm').addEventListener('click', clearAlarm);
