import{a as p,S as f,i as o}from"./assets/vendor-CYMld6vM.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();function h(r){return p({method:"get",url:"https://pixabay.com/api/",params:{key:"28573378-d6ea96aa58230c7b9cb77205d",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data).catch(e=>{throw g(e)})}function g(r){let e="";return r.message==="Network Error"?e="ERR_INTERNET_DISCONNECTED":r.response?e=`ERR_SERVER_ERROR: ${r.response.status}`:r.request&&(e="ERR_REQUEST_ERROR"),console.error("Axios error:",r),e}const d=document.querySelector(".gallery");function y(r){let e="";r.map(i=>{e=e+`<li class="gallery-item">
  <a class="gallery-link" href="${i.largeImageURL}">
    <img
      class="gallery-image"
      src="${i.webformatURL}"
      alt="${i.tags}"
      data-user="Uploaded by user: ${i.user}"
    />
  </a>
  <ul class="image-attribute-list">
  <li class="image-attribute-list-item">
  <p>Likes</p>
  <p>${i.likes}</p>
  </li>
  <li class="image-attribute-list-item">
  <p>Views</p>
  <p>${i.views}</p>
  </li>
  <li class="image-attribute-list-item">
  <p>Comments</p>
  <p>${i.comments}</p>
  </li>
  <li class="image-attribute-list-item">
  <p>Downloads</p>
  <p>${i.downloads}</p>
  </li>
  </ul> 
</li>`}).join(""),d.insertAdjacentHTML("beforeend",e),b.refresh()}const b=new f(".gallery-link",{captions:!0,captionsData:"data-user",captionDelay:250});function R(){d.innerHTML=""}const m=document.querySelector(".loader");function E(){m.classList.remove("hidden")}function a(){m.classList.add("hidden")}a();let n;const c=document.querySelector("form");c.addEventListener("submit",L);function L(r){if(r.preventDefault(),R(),n=r.target.elements["search-text"].value.trim(),n.trim()===""){o.show({message:"Please, type some text"}),c.reset();return}E(),h(n).then(e=>{if(!e.hits.length){a(),o.show({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(e.hits),a()}).catch(e=>{o.show({message:e,backgroundColor:"red"}),a()}).finally(()=>{c.reset()})}o.settings({position:"center",backgroundColor:"magenta",messageSize:"20",timeout:3e3});
//# sourceMappingURL=index.js.map
