function reportOmnitureData(e){var t=[];s.prop1=gettyImagesVisitorId,s.eVar1=gettyImagesVisitorId,t.push("prop1"),t.push("eVar1");for(var r in e.fields)e.fields.hasOwnProperty(r)&&(s[r]=e.fields[r],"events"!=r&&t.push(r));s.linkTrackVars=t.join(","),s.linkTrackEvents=e.fields.events;var o=e.parameter;s.tl(!0,"o",o)}function trackPageLoad(){var e={};e.source="Getty API Portal",e.event="GettyAPIPortal Page Loaded",e.properties={},e.properties.url=window.location.href,e.properties.referer=document.referrer,e.properties.visitor_id=getGettyImagesVisitorId();var t=[];t[0]=e;var r=new XMLHttpRequest;r.open("POST","//spectrum.gettyimages.com/v3/signals",!0),r.setRequestHeader("Content-type","Content-Type: application/json;charset=UTF-8"),r.send(JSON.stringify(t))}function getGettyImagesVisitorId(){var e=readCookie("vis");return e?e=e.substring(4):(e=pseudoGUID(),createCookie("vis","vid="+e,3650)),e}function createCookie(e,t,r){if(r){var o=new Date;o.setTime(o.getTime()+24*r*60*60*1e3);var a="; expires="+o.toGMTString()}else var a="";document.cookie=e+"="+t+a+"; domain=.gettyimages.com; path=/"}function readCookie(e){for(var t=e+"=",r=document.cookie.split(";"),o=0;o<r.length;o++){for(var a=r[o];" "==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(t))return a.substring(t.length,a.length)}return null}function pseudoGUID(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}var gettyImagesVisitorId="";!function(){gettyImagesVisitorId=readCookie("s_vi"),s.pageName=window.location.href,s.prop1=gettyImagesVisitorId,s.eVar1=gettyImagesVisitorId,s.prop2=window.location.href,s.eVar2=window.location.href,s.t()}(),$(function(){$(document).on("click","[omniture]",function(e){var t=JSON.parse($(this).attr("omniture"));reportOmnitureData(t)}),$(document).on("scroll",function(){var e=$(window),t=e.scrollTop(),r=t+e.height();$("[trackview]").each(function(){var e=$(this),o=e.offset().top,a=e.attr("reported");if(o>=t&&r>=o&&"true"!==a){e.attr("reported","true");var n=JSON.parse($(this).attr("trackview"));reportOmnitureData(n)}})});var e="images";$(document).on("change",'[name="resource"]',function(){e=$(this).val().replace("/search/","")}),$(document).on("click",".omniture-search",function(t){var r={fields:{events:"event3",prop8:e,eVar8:e,prop9:$("[name='sortOrder'] option:selected").text(),eVar9:$("[name='sortOrder'] option:selected").text(),prop10:$("[name='searchPhrase']").val(),eVar10:$("[name='searchPhrase']").val()},parameter:"Search"};reportOmnitureData(r)})});var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-28608292-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),function(){trackPageLoad()}();