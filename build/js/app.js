!function e(n,r,o){function t(i,l){if(!r[i]){if(!n[i]){var f="function"==typeof require&&require;if(!l&&f)return f(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var c=r[i]={exports:{}};n[i][0].call(c.exports,function(e){var r=n[i][1][e];return t(r?r:e)},c,c.exports,e,n,r,o)}return r[i].exports}for(var u="function"==typeof require&&require,i=0;i<o.length;i++)t(o[i]);return t}({1:[function(e,n,r){r.helloWorld=function(){alert("Hello")}},{}],2:[function(e,n,r){var o=e("./../js/hello.js").helloWorld;$(document).ready(function(){$("#hello").click(function(e){e.preventDefault(),o()})}),$(document).ready(function(){$("#signup").submit(function(e){e.preventDefault();var n=$("#email").val();$("#signup").hide(),$("#solution").prepend("<p>Thank you, "+n+" has been added to our list!</p>")})})},{"./../js/hello.js":1}]},{},[2]);