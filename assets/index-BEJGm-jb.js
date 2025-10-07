(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();document.querySelector("#app").innerHTML=`
  <div class="main">
    <div class="mask-left"></div>
    <div class="mask-right"></div>
    <div class="wrapper">
      <div class="phone">
        
        <header>
        <div class="top-info">
        <div class="top-left-side">
          <div class="arrow left"></div>
          <div class="person">
            <img class="avatar" src="assets/avatar.jpg"/>
            <div class="person-info">
              <span class="name">Samuel Green</span>
              <p >Available to Walk</p>
            </div>
          </div>
          </div>
          <div class="more"></div>
          </div>
        </header>

        <div class="phone-body">
          <div class="Top-text">
            <p>That sounds great. I'd be happy with that.</p>
            <p>Could you send over some pictures of your dog, please?</p>
          </div>
          <div class="Middle-text">
            <ul>
              <li><img src="assets/dog-image-1.jpg" /></li>
              <li><img src="assets/dog-image-2.jpg"/></li>
              <li><img src="assets/dog-image-3.jpg" /></li>
            </ul>
            <p>Here are a few pictures. She's a happy girl!</p>
            <p>Can you make it?</p>
          </div>
          <div class="Bottom-text">
            <p>She looks so happy! The time we discussed works. How long shall I take her out for?</p>
            <div class="btn">
              <div class="btn-left">
               <label class="container">30 minute walk
                <input type="radio" value="30" name="radio"/>
                  <span class="checkmark"></span>
                  </label>
              </div>
              <h3>$29</h3>
            </div>
            <div class="btn">
              <div class="btn-left">
              <label class="container">1 hour walk
                <input type="radio" value="1 hour" name="radio"/> 
                <span class="checkmark"></span>
                </label>
              </div>
              <h3>$49</h3>
            </div>
            <div class="message">
              <input placeholder="Type a meassage..."/>
              <span class="reply"><div class="arrow-right"></div></span>
            </div>
          </div>
        </div>
      </div>
      <div class="info">
        <h2>Simple booking</h2>
        <p>Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements and make bookings. Once the walk has been completed you can rate your walker and book again all through the chat.</p>
      </div>
    </div>
  </div>
`;
