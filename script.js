function loadMainContent(url) {
  const xml = new XMLHttpRequest()
  xml.open("GET", url)
  xml.onreadystatechange = function () {
    if (xml.readyState == 4 && xml.status == 200) {
      document.getElementById("mainContent").innerHTML = xml.responseText
    }
  }
  xml.send()
}

const btnStar = document.getElementById("btnStar")
const naruto = document.getElementById("naruto")
const sasuke = document.getElementById("sasuke")
const sakura = document.getElementById("sakura")
const star = document.getElementById("star")

naruto.addEventListener("click", () => {
  btnStar.classList = "naruto1";
  naruto.classList.add("activated")
  sasuke.classList.remove("activated")
  sakura.classList.remove("activated")
  star.classList.remove("starSelected")
  loadMainContent("characters/naruto1.html");
});
sasuke.addEventListener("click", () => {
  btnStar.classList = "sasuke1";
  naruto.classList.remove("activated")
  sasuke.classList.add("activated")
  sakura.classList.remove("activated")
  star.classList.remove("starSelected")
  loadMainContent("characters/sasuke1.html");
});
sakura.addEventListener("click", () => {
  btnStar.classList = "sakura1";
  naruto.classList.remove("activated")
  sasuke.classList.remove("activated")
  sakura.classList.add("activated")
  star.classList.remove("starSelected")
  loadMainContent("characters/sakura1.html");
});

btnStar.addEventListener("click", () => {
  if (btnStar.classList.contains("naruto1")) {
    btnStar.classList = "naruto2";
    star.classList.add("starSelected")
    loadMainContent("characters/naruto2.html");
  } else if (btnStar.classList.contains("naruto2")) {
    btnStar.classList = "naruto1";
    star.classList.remove("starSelected")
    loadMainContent("characters/naruto1.html");
  } else if (btnStar.classList.contains("sakura1")) {
    btnStar.classList = "sakura2";
    star.classList.add("starSelected")
    loadMainContent("characters/sakura2.html");
  } else if (btnStar.classList.contains("sakura2")) {
    btnStar.classList = "sakura1";
    star.classList.remove("starSelected")
    loadMainContent("characters/sakura1.html");
  } else if (btnStar.classList.contains("sasuke1")) {
    btnStar.classList = "sasuke2";
    star.classList.add("starSelected")
    loadMainContent("characters/sasuke2.html");
  } else if (btnStar.classList.contains("sasuke2")) {
    btnStar.classList = "sasuke1";
    star.classList.remove("starSelected")
    loadMainContent("characters/sasuke1.html");
  }
}
)


