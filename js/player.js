let o = document.querySelector(".card");
document.getElementById("top").addEventListener("mousemove", function (t) {
  let e = -(window.innerWidth / 2 - t.pageX) / 30;
  let n = (window.innerHeight / 2 - t.pageY) / 10;
  o.style.transform = "rotateY(" + e + "deg) rotateX(" + n + "deg)";
  o.style.webkitTransform = "rotateY(" + e + "deg) rotateX(" + n + "deg)";
  o.style.mozTransform = "rotateY(" + e + "deg) rotateX(" + n + "deg)";
});

document
  .getElementById("uploadForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch("http://localhost:5000/music", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      alert("Music uploaded successfully!");
      fetchAllMusic();
    } catch (error) {
      alert("Failed to upload music");
    }
  });

async function fetchAllMusic() {
  try {
    const response = await fetch("http://localhost:5000/music");
    const musicList = await response.json();
    const musicListElement = document.getElementById("musicList");
    musicListElement.innerHTML = "";
    musicList.forEach((music) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${music.artist} - ${music.title}`;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "DEL";
      deleteButton.className = "delButton";
      deleteButton.addEventListener("click", () => deleteMusic(music));

      listItem.appendChild(deleteButton);
      listItem.addEventListener("click", () => playMusic(music));
      musicListElement.appendChild(listItem);
    });
  } catch (error) {
    console.error("Failed to fetch music list", error);
  }
}

async function deleteMusic(music) {
  if (
    confirm(
      `Are you sure you want to delete ${music.title} by ${music.artist}?`
    )
  ) {
    try {
      await fetch(
        `http://localhost:5000/music/${music.artist}-${music.title}`,
        {
          method: "DELETE",
        }
      );
      alert("Music deleted successfully!");
      fetchAllMusic();
    } catch (error) {
      console.error("Failed to delete music", error);
    }
  }
}

async function playMusic(music) {
  try {
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.src = `http://localhost:5000/music/${music.artist}-${music.title}`;
    audioPlayer.play();

    const coverImageElement = document.getElementById("coverImage");
    const coverImageUrl = `data:${
      music.cover.contentType
    };base64,${arrayBufferToBase64(music.cover.data.data)}`;
    coverImageElement.style.backgroundImage = `url(${coverImageUrl})`;
    document.getElementById("musicTitle").textContent = music.title;
    document.getElementById("musicArtist").textContent = music.artist;
  } catch (error) {
    console.error("Failed to play music", error);
  }
}

function arrayBufferToBase64(buffer) {
  let binary = "";
  let bytes = new Uint8Array(buffer);
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

fetchAllMusic();
