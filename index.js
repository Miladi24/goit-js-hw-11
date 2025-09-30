import{a as m,S as f,i as l}from"./assets/vendor-CYMld6vM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function p(o){return m({method:"get",url:"https://pixabay.com/api/",params:{key:"28573378-d6ea96aa58230c7b9cb77205d",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>{throw g(t)})}function g(o){let t="";return o.message==="Network Error"?t="ERR_INTERNET_DISCONNECTED":o.response?t=`ERR_SERVER_ERROR: ${o.response.status}`:o.request&&(t="ERR_REQUEST_ERROR"),console.error("Axios error:",o),t}const u=document.querySelector(".gallery");function h(o){let t="";o.map(r=>{t=t+`<li class="gallery-item">
  <a class="gallery-link" href="${r.largeImageURL}">
    <img
      class="gallery-image"
      src="${r.webformatURL}"
      alt="${r.tags}"
      data-user="Uploaded by user: ${r.user}"
    />
  </a>
  <ul class="image-attribute-list">
  <li class="image-attribute-list-item">
  <p>Likes</p>
  <p>${r.likes}</p>
  </li>
  <li class="image-attribute-list-item">
  <p>Views</p>
  <p>${r.views}</p>
  </li>
  <li class="image-attribute-list-item">
  <p>Comments</p>
  <p>${r.comments}</p>
  </li>
  <li class="image-attribute-list-item">
  <p>Downloads</p>
  <p>${r.downloads}</p>
  </li>
  </ul> 
</li>`}).join(""),u.insertAdjacentHTML("beforeend",t),y.refresh()}const y=new f(".gallery-link",{captions:!0,captionsData:"data-user",captionDelay:250});function E(){u.innerHTML=""}const d=document.querySelector(".loader");function b(){d.classList.remove("hidden")}function a(){d.classList.add("hidden")}const c=document.querySelector("form");c.addEventListener("submit",L);function L(o){o.preventDefault(),E();const t=o.target.elements["search-text"].value.trim();if(t===""){l.show({message:"Please, type some text"}),c.reset();return}b(),p(t).then(r=>{if(!r.hits.length){a(),l.show({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(r.hits);const i=document.querySelectorAll(".gallery-image");let e=0;i.forEach(s=>{s.complete?(e++,e===i.length&&a()):(s.addEventListener("load",()=>{e++,e===i.length&&a()}),s.addEventListener("error",()=>{e++,e===i.length&&a()}))})}).catch(r=>{l.show({message:r.message,backgroundColor:"red"}),a()}).finally(()=>{c.reset()})}l.settings({position:"center",backgroundColor:"magenta",messageSize:"20",timeout:3e3});
//# sourceMappingURL=index.js.map
