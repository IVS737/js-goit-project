(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".burger-btn-open");t.addEventListener("click",(()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open")})),window.matchMedia("(min-width: 768px)").addEventListener("change",(n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))}));const n=document.querySelector(".home-current"),s=document.querySelector(".favorite-current"),o=document.querySelector(".read-current");window.location.href.includes("#readPage.html")&&o.classList.add("current"),window.location.href.includes("#favoritePage.html")&&s.classList.add("current"),window.location.href.includes("#mainPage.html")&&n.classList.add("current")})();const e={form:document.querySelector(".header-search-form"),input:document.querySelector(".header-search-input"),submitButton:document.querySelector(".header-button-makesearch"),openInputButton:document.querySelector(".header-button-opensearch"),withoutNewsContainer:document.querySelector(".container__error"),newsList:document.querySelector(".wrapper__list")},{form:t,input:n,submitButton:s,openInputButton:o,withoutNewsContainer:r,newsList:a}=e,i="kAFi92vRzv66C7DQ6coSA3C5NLbSIILk";t.addEventListener("submit",(function(e){c=e.currentTarget.elements.newsField.value.trim(),e.preventDefault(),(n=c,fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${n}&api-key=${i}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))).then((e=>0===e.response.docs.length?(t.reset(),d()):(function(e){const t=e.map((e=>{const t=e.abstract.slice(0,100)+"...",n=(e.headline.main.slice(0,60),e.pub_date.toString().slice(0,10).replace("-","/").replace("-","/"));let s,o;return 0===e.multimedia.length?s="https://st.depositphotos.com/1000558/53737/v/1600/depositphotos_537370102-stock-illustration-image-photo-sign-symbol-template.jpg":e.multimedia.length>0&&(o="https://static01.nyt.com/",s=o+e.multimedia[0].url),`<li class = "card-item" data-id = "${e.title}">\n    <div class="card-wrapper">\n      <div class="card-thumb">\n        <img class="card-image" src = "${s}" alt = "${e.byline}">\n        <p class="card-news-category">${e.section_name}</p>\n        <p class="card-text-read">Already read</p>\n        <button class="favorite-button" type="button" data-action="favorite-button">Add to favorite\n        <svg width ="16" height="16"><use href="../images/symbol-defs.svg#icon-heart"></use><svg></button>\n      </div>\n      <h3 class="card-news-title">${e.headline.main}</h3>\n      <p class="card-news-description">${t}</p>\n      <div class="card-info-container">\n        <p class="card-datetime">${n}</p>\n        <a class="card-link" href="${e.web_url}" target="_blank" rel="noopener noreferrer nofollow">Read more</a>\n      </div>\n    </div>\n</li>`})).join("");a.innerHTML=t}(e.response.docs),e.response.docs))).catch(l);var n})),o.addEventListener("click",(function(e){o.style.display="none",t.style.display="block"}));let c="";function d(){r.innerHTML='<h2 class="withoutnews-title">We haven’t found news from <br> this category</h2><picture>\n                  <source\n                    media="(min-width:1280px)"\n                    srcset="\n                      ../images/notfoundDesc.png    1x,\n                      ../images/notfoundDesc@2x.png 2x\n                    "\n                  />\n\n                  <source\n                    media="(min-width:768px)"\n                    srcset="\n                      ../images/notfoundTab.png    1x,\n                      ../images/notfoundTab@2x.png 2x\n                    "\n                  />\n\n                  <img\n                    srcset="\n                      ../images/notfoundMob.png    1x,\n                      ../images/notfoundMob@2x.jpg 2x\n                    "\n                    alt="There aren\'t news"\n                    src="./images/notfoundMob.png"\n                    loading="lazy"\n                    class="withoutnews-image"\n                  />\n                </picture>'}function l(e){d(),console.log(e)}
//# sourceMappingURL=index.f14d8eaa.js.map
