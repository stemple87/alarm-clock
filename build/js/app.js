!function e(n,r,t){function o(u,i){if(!r[u]){if(!n[u]){var m="function"==typeof require&&require;if(!i&&m)return m(u,!0);if(a)return a(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var l=r[u]={exports:{}};n[u][0].call(l.exports,function(e){var r=n[u][1][e];return o(r?r:e)},l,l.exports,e,n,r,t)}return r[u].exports}for(var a="function"==typeof require&&require,u=0;u<t.length;u++)o(t[u]);return o}({1:[function(e,n,r){r.alarmClock=function(e){moment().format("HH:mm")===e&&alert("Wake up!")}},{}],2:[function(e,n,r){e("./../js/alarm.js").alarmTime;$(document).ready(function(e){$("#alarmTime").submit(function(){e.preventDefault;var n=$("#alarm").val();console.log(n)})}),$(document).ready(function(){$("#signup").submit(function(e){e.preventDefault();var n=$("#email").val();$("#signup").hide(),$("#solution").prepend("<p>Thank you, "+n+" has been added to our list!</p>")})}),$(document).ready(function(){$("#time").text(moment().format("HH:mm"))})},{"./../js/alarm.js":1}]},{},[2]);