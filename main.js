document.getElementById("share").onclick = function () {
  if (!document.getElementsByClassName("active")[0]) {
    let active = document.createElement("div");
    active.className = "active";

    let share = document.createElement("p");
    share.innerHTML = "SHARE";

    let facebook = document.createElement("img");
    facebook.setAttribute("src", "./images/icon-facebook.svg");
    facebook.setAttribute("alt", "Facebook");

    let twitter = document.createElement("img");
    twitter.setAttribute("src", "./images/icon-twitter.svg");
    twitter.setAttribute("alt", "Twitter");

    let pinterest = document.createElement("img");
    pinterest.setAttribute("src", "./images/icon-pinterest.svg");
    pinterest.setAttribute("alt", "Pinterest");

    active.append(share, facebook, twitter, pinterest);

    document.getElementById("share").appendChild(active);
  } else {
    document.getElementsByClassName("active")[0].remove()
  }
};
