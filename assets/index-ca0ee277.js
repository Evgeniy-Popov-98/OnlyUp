(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){var s=document.getElementById("toggleButton"),i=document.getElementById("closeButton"),o=document.querySelector(".mobile-menu"),n=!1;function e(){n=!n,n?(o.style.opacity="1",o.style.visibility="visible",o.style.pointerEvents="auto"):(o.style.opacity="0",o.style.visibility="hidden",o.style.pointerEvents="none")}function t(){n=!1,o.style.opacity="0",o.style.visibility="hidden",o.style.pointerEvents="none"}s.addEventListener("click",e),i.addEventListener("click",t)});
