function _fadeOutAlert(div) {
    div.className = `fade-out alert`
    setTimeout(function(){ document.body.removeChild(div); }, 600);
}


async function createAlert(title, msg, timeout) {
    container = document.createElement("div");
    container.className = `fade-in alert`;
    
    closeBtn = document.createElement("span");
    closeBtn.className = "closebtn";
    closeBtn.onclick = function(){_fadeOutAlert(this.parentElement)};
    container.appendChild(closeBtn);

    titleEl = document.createElement("strong");
    titleEl.innerText = title;
    container.appendChild(titleEl);

    alertText = document.createElement("span");
    alertText.innerText = ` ${msg}`;
    container.appendChild(alertText);

    document.body.insertBefore(container, document.body.firstChild);

    await new Promise(r => setTimeout(r, timeout));
    _fadeOutAlert(container)
}

function sendSuccessMessage(msg) {
    return createAlert("Success!", msg, 2000);
}