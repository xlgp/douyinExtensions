(function () {
	'use strict';

	function l(){var t,e;(e=(t=document.getElementById("_douyin_live_scroll_container_"))==null?void 0:t.previousSibling)==null||e.remove(),document.getElementsByTagName("footer")[0].style.display="none";}function s(t){var e,n,i,o;(n=(e=t.firstElementChild)==null?void 0:e.firstElementChild)==null||n.remove(),(o=(i=t.firstElementChild)==null?void 0:i.lastElementChild)==null||o.remove();}function a(t){function e(n){return n==null||n.classList.contains("webcast-chatroom__room-message")?null:n.classList.contains("webcast-chatroom___item")?n:n.classList.contains("webcast-chatroom___items")?null:e(n.parentElement)}document.getElementsByClassName("webcast-chatroom___items")[0].addEventListener("click",function(n){if(n.target instanceof HTMLElement){let i=e(n.target);if(i){let o=i.children[0].children[1].innerHTML.slice(0,-1);t(o);}}});}function r(t){return "@"+t+" "}function c(t,e){return e.includes(r(t))}function m(t,e){t&&!c(t,e.value)&&(e.value+=r(t));}function u(){let t=document.getElementsByClassName("webcast-chatroom___input-container")[0];t.style.height="46px",d(t),_(t);}function d(t){let e=t.getElementsByClassName("webcast-chatroom___send-btn")[0],n=(t.clientHeight-e.clientHeight)/2;e.style.top=n+"px",e.style.borderRadius="6px";}function _(t){let e=t.getElementsByClassName("webcast-chatroom___limit")[0];e.style.position="absolute",e.style.color="#ffd5dd",e.style.bottom="6px",e.style.right="-22px",e.style.zIndex="1";}window.addEventListener("load",()=>{var t;l();try{let e=document.querySelector("[data-e2e='living-container']");(t=e==null?void 0:e.nextSibling)==null||t.remove(),s(e);let n=document.getElementsByClassName("webcast-chatroom___textarea")[0];a(i=>{m(i,n);}),u();}catch(e){console.error(e);}});

})();
