import{a as d,S as m,i as o}from"./assets/vendor-CYMld6vM.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();function p(r){return d({method:"get",url:"https://pixabay.com/api/",params:{key:"28573378-d6ea96aa58230c7b9cb77205d",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data).catch(e=>{throw f(e)})}function f(r){let e="";return r.message==="Network Error"?e="ERR_INTERNET_DISCONNECTED":r.response?e=`ERR_SERVER_ERROR: ${r.response.status}`:r.request&&(e="ERR_REQUEST_ERROR"),console.error("Axios error:",r),e}const c=document.querySelector(".gallery");function g(r){let e="";r.map(t=>{e=e+`<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.webformatURL}"
      alt="${t.tags}"
      data-user="Uploaded by user: ${t.user}"
    />
  </a>
  <ul class="image-attribute-list">
  <li class="image-attribute-list-item">
  <p>Likes</p>
  <p>${t.likes}</p>
  </li>
  <li class="image-attribute-list-item">
  <p>Views</p>
  <p>${t.views}</p>
  </li>
  <li class="image-attribute-list-item">
  <p>Comments</p>
  <p>${t.comments}</p>
  </li>
  <li class="image-attribute-list-item">
  <p>Downloads</p>
  <p>${t.downloads}</p>
  </li>
  </ul> 
</li>`}).join(""),c.insertAdjacentHTML("beforeend",e),h.refresh()}const h=new m(".gallery-link",{captions:!0,captionsData:"data-user",captionDelay:250});function y(){c.innerHTML=""}const u=document.querySelector(".loader");function b(){u.classList.remove("hidden")}function R(){u.classList.add("hidden")}const l=document.querySelector("form");l.addEventListener("submit",E);function E(r){r.preventDefault(),y();const e=r.target.elements["search-text"].value.trim();if(e===""){o.show({message:"Please, type some text"}),l.reset();return}b(),p(e).then(t=>{if(!t.hits.length){o.show({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(t.hits)}).catch(t=>{o.show({message:t.message,backgroundColor:"red"})}).finally(()=>{R(),l.reset()})}o.settings({position:"center",backgroundColor:"magenta",messageSize:"20",timeout:3e3});
//# sourceMappingURL=index.js.map
