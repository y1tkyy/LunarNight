const CLI = document.querySelector(".cli");
let textElement;
let load = 1;
const root = "DOTA2:\\>";

window.addEventListener("keydown", (e) => {
  if (e.key === "F9") {
    CLItoggle();
    if (load) loadScreen();
    return;
  }
  if (!CLI.classList.contains("active")) return;
  if (e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }
  switch (e.key) {
    case "Alt":
      break;
    case "ArrowLeft":
      break;
    case "ArrowRight":
      break;
    case "ArrowUp":
      break;
    case "ArrowDown":
      break;
    case "Control":
      break;
    case "Tab":
      break;
    case "Shift":
      break;
    case "Backspace":
      if (textElement.textContent.length > root.length + 1)
        textElement.textContent = textElement.textContent.slice(0, -1);
      textElement.innerHTML =
        textElement.textContent.slice(0, -1) +
        "<span class='blinking-cursor'>_</span>";
      break;
    case "Enter":
      CLIexec();
      break;
    default:
      textElement.innerHTML = `${(textElement.textContent =
        textElement.textContent.slice(0, -1) +
        e.key)}<span class='blinking-cursor'>_</span>`;
  }
});

function loadScreen() {
  newLine(`Version EZ1M1D`);
  newLine(` `);
  newLine(`PENTIUM AMD-TOP CPU at 228MHz`);
  newLine(` `);
  let currentKbs = 0;
  const totalKbs = 228000;
  const increment = 2048;
  const loadingInterval = setInterval(() => {
    currentKbs += increment;
    if (currentKbs > totalKbs) {
      clearInterval(loadingInterval);
      textElement.textContent = `Memory Test : ${totalKbs}K`;
      newLine(` `);
      newLine("Neurolink BIOS Extension v1.337A");
      newLine(`Copyright (c) 2077, Trash Software, Inc.`);
      newLine(`  Detecting IDE FloppyDicks 16Mb ... Yeee`);
      newLine(`  Detecting Dota Wheelchair      ... Yeee`);
      newLine(`  Detecting GayBoard RGB         ... Yeee`);
      newLine(`  Detecting Bitches              ... None`);
      newLine(` `);
      newLine();
      load = 0;
    } else {
      textElement.textContent = `WAIT...
Memory Test : ${currentKbs}K`;
    }
  }, 40);
} // 40

function newLine(answer) {
  textElement = document.createElement("span");
  textElement.classList.add("text");
  textElement.textContent = answer ? answer : root;
  if (!answer)
    textElement.innerHTML += "<span class='blinking-cursor'>_</span>";
  CLI.appendChild(textElement, CLI.firstChild);
}

function CLItoggle() {
  CLI.classList.toggle("active");
}

function CLIexec() {
  textElement.innerHTML = textElement.textContent.slice(0, -1);
  const command = textElement.textContent.slice(
    root.length,
    textElement.textContent.length
  );
  const commands = ["help", "hl1", "ipadgame", "icebucketchallenge"];
  switch (command) {
    case "help":
      newLine(`${[...commands]}`);
      newLine();
      break;
    case "hl1":
      hl1();
      newLine();
      break;
    case "ipadgame":
      ipadgame();
      newLine();
      break;
    case "icebucketchallenge":
      const ans = prompt("Are you sure Y/n?");
      let totalItems = 200;
      let currentItem = 0;
      if (ans == "y" || ans == "Y") {
        setTimeout(() => {
          const ans = prompt("Whats nine plus ten?");
          if (ans != 19) {
            let sound = new Audio("./sound/ustoopid.mp3");
            sound.play();
          }
        }, 2000);
        newLine(" ");
        const loadingInterval = setInterval(() => {
          if (currentItem < 120) {
            currentItem++;
          } else {
            currentItem += 0.3;
          }

          if (currentItem <= totalItems) {
            if (currentItem > 163) {
              clearInterval(loadingInterval);
              icebucketchallenge();
            }
            const progress = updateProgressBar(totalItems, currentItem);
            textElement.textContent = `${progress}`;
          }
        }, 30);
        return;
      }
      if (ans == "n" || ans == "N") {
        newLine();
        return;
      }
      newLine("Error");
      newLine();
      break;
    default:
      newLine(
        `'${command}' is not recognized as an command. 'help' for list of commands.`
      );
      newLine();
  }
}

function icebucketchallenge() {
  location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

function updateProgressBar(totalItems, currentItem) {
  const barLength = 40;
  const percentage = (currentItem / totalItems) * 100;
  const filledLength = Math.round(barLength * (percentage / 100));
  const emptyLength = barLength - filledLength;
  const progressBar = "█".repeat(filledLength) + "▒".repeat(emptyLength);
  const eta = ((totalItems - currentItem) / currentItem).toFixed(0);
  const progressString = `${progressBar} ${percentage.toFixed(
    2
  )}% | ETA: ${eta}s | ${currentItem.toFixed(2)}/${totalItems}`;
  return progressString;
}

function hl1() {
  const CLI = document.getElementById("cli");
  CLI.style.color = "rgb(255,129,14)";
  CLI.style.textShadow = "0 0 5px rgba(240,180,63,0.6)";
  document.querySelector(".header").style.display = "none";
  document.querySelector(".main").style.display = "none";
  document.querySelector(".footer").style.display = "none";
  document.title = "hl1";
  const welcomeSound = new Audio("./sound/opoveshchenie.mp3");
  welcomeSound.play();
  const body = document.querySelector("body");
  body.style.backgroundColor = "black";
  body.style.backgroundImage = "url(./images/hl1/background.png)";
  body.style.backgroundSize = "1920px 945px";
  body.style.backgroundRepeat = "no-repeat";
  body.style.width = "100%";
  body.style.height = "100%";

  const tracker = document.createElement("p");
  tracker.id = "tracker";
  tracker.innerHTML =
    "YOU HAVE BEEN BULLSQUIDDING FOR <strong>0 HOUR, 0 MINUTES, 0 SECONDS</strong>";

  tracker.style.margin = "auto";
  tracker.style.color = "rgb(240, 180, 24)";
  tracker.style.textShadow = "0 0 5px rgba(240, 180, 63, 2)";
  tracker.style.fontSize = "var(--fontSize, 1.675rem)";
  tracker.style.fontWeight = "var(--fontWeight, 600)";
  tracker.style.position = "absolute";
  tracker.style.top = "15%";
  tracker.style.width = "100%";
  tracker.style.textAlign = "center";
  tracker.style.animation = "HL_TITLE 1s ease-in-out infinite alternate";
  tracker.style.fontFamily = "Trebuchet MS";

  const squid = document.createElement("img");
  squid.id = "squid";
  squid.src = "./images/hl1/hl2_beta_01.gif";
  squid.style.width = "584px";
  squid.style.height = "190px";
  squid.style.marginLeft = "-292px";
  squid.style.marginTop = "-95px";
  squid.style.animation = "rotation 5s infinite linear";
  squid.style.zIndex = "-100";
  squid.style.transition = "all 1s";
  squid.style.position = "absolute";
  squid.style.top = "50%";
  squid.style.left = "50%";

  const squidBtn = document.createElement("a");
  squidBtn.id = "squid-btn";
  squidBtn.className = "squid-main";
  squidBtn.style.position = "absolute";
  squidBtn.style.top = "50%";
  squidBtn.style.left = "50%";
  squidBtn.style.width = "584px";
  squidBtn.style.height = "190px";
  squidBtn.style.marginLeft = "-292px";
  squidBtn.style.marginTop = "-95px";

  body.appendChild(squidBtn);
  body.appendChild(tracker);
  body.appendChild(squid);

  let hours = 0,
    minutes = 0,
    seconds = 0;
  setInterval(function () {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }
    tracker.innerHTML = `YOU HAVE BEEN BULLSQUIDDING FOR ${
      hours ? hours + " HOUR," : ""
    } ${minutes || hours ? minutes + " MINUTE," : ""} ${
      seconds || minutes || hours ? seconds + " SECOND" : ""
    } `;
  }, 1000);

  let counter = 1;
  let ost = new Audio("./sound/ost1.mp3");

  squidBtn.addEventListener("click", () => {
    if (counter == 9) {
      counter = 1;
    } else {
      counter++;
    }
    const squid = document.getElementById("squid");
    squid.src = `./images/hl1/hl2_beta_0${counter}.gif`;

    if (ost && !ost.paused) {
      ost.pause();
    }

    if (
      counter >= 1 &&
      counter <= 3 &&
      ost.src != "http://127.0.0.1:5500/sound/ost1.mp3"
    ) {
      ost = new Audio("./sound/ost1.mp3");
    } else if (
      counter >= 4 &&
      counter <= 6 &&
      ost.src != "http://127.0.0.1:5500/sound/ost2.mp3"
    ) {
      ost = new Audio("./sound/ost2.mp3");
    } else if (
      counter >= 7 &&
      counter <= 9 &&
      ost.src != "http://127.0.0.1:5500/sound/ost3.mp3"
    ) {
      ost = new Audio("./sound/ost3.mp3");
    }
    ost.volume = 0.3;
    ost.play();
  });
}

function ipadgame() {
  const body = document.querySelector("body");
  const banner = document.createElement("img");
  banner.id = "ipadbanner";
  banner.src = "./images/ipad/ipad.png";
  banner.style.width = "959px";
  banner.style.height = "785px";
  banner.style.zIndex = "100";
  banner.style.transition = "all 1s";
  banner.style.position = "fixed";
  banner.style.top = "10%";
  banner.style.left = "25%";
  banner.addEventListener("click", () => {
    banner.style.display = "none";
  });
  body.appendChild(banner);
  const notification = new Audio("./sound/bannetnot.mp3");
  notification.volume = 0.5;
  notification.play();
}
