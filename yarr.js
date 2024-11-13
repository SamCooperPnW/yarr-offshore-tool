// ==UserScript==
// @name         Yarr Offshore Tool
// @namespace    Scratchy and Sam
// @version      0.31
// @description  Send money to YARR in a click!
// @author       Scratchy and Sam
// @match        https://*.politicsandwar.com/alliance/id=913&display=bank
// @icon         https://www.google.com/s2/favicons?domain=politicsandwar.com
// @grant        none


// ==/UserScript==

(function() {
    const push = () =>{
      const held = [...document.querySelector(".nationtable").children[0].children].slice(1).map(e=>Number(e.children[1].innerText.replace('$','').replace(/,/g, '')))
      const input = document.querySelectorAll('.nationtable')[2].querySelectorAll('[style="text-align:right;"]')
      input.forEach((i,ii)=> { i.children[0].value = held[ii]})
      document.querySelector('[name="withtype"]').value = "Alliance"
      document.querySelector('[name="withrecipient"]').value = "Arctic Ocean"
      document.querySelector('[id="btn_confirm_withdrawal"]').click()

    }
    window.addEventListener('load', function() {
      const e = document.createElement('button')
      e.classList.add('btn','btn-primary')
      e.innerText = "Send to Arctic Ocean"
      e.addEventListener('click',push)
      document.querySelector('[href="#available-resources"]').parentElement.appendChild(e)
    })
})();
