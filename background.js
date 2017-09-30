
'use strict';

chrome.alarms.onAlarm.addListener(function(callback) {
  if (callback.name == "alarm"){
    chrome.browserAction.setBadgeText({text: '5m'});
    chrome.browserAction.setBadgeBackgroundColor({color: "green"});
    chrome.notifications.create({
        type:     'basic',
        iconUrl:  'pomodoro.png',
        title:    'Great Work!',
        message:  'Take a 5 minute break!',
        priority: 0});
    chrome.alarms.create("break", {delayInMinutes: 5.0});
  }
    else if (callback.name == "break"){
  	chrome.browserAction.setBadgeText({text: ''});
  	chrome.notifications.create({
  		type: 'basic',
  		iconUrl: "pomodoro.png",
  		title: 'Back to Work!',
  		buttons: [{title: 'Reset timer'}],
  		message: 'Your break is up!',
  		priority: 0});
  	}
});

chrome.notifications.onButtonClicked.addListener(function() {
  chrome.storage.sync.get(['minutes'], function(item) {
    chrome.browserAction.setBadgeText({text: 'ON'});
    chrome.browserAction.setBadgeBackgroundColor({color: "red"});
    chrome.alarms.create("alarm", {delayInMinutes: item.minutes});
  });
});
