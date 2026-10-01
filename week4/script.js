// The img folder contains 98 PNG photos and two JPG photos.
const images = [
    ...Array.from({ length: 98 }, (_, index) => ({
        src: `img/img (${index + 1}).png`,
        alt: `Pattern photograph ${index + 1}`
    })),
    { src: "img/img (1).jpg", alt: "Pattern photograph 99" },
    { src: "img/img (2).jpg", alt: "Pattern photograph 100" }
];
const pattern = document.getElementById("pattern");
// Repeat the module at least 100 times, even if the photo list gets shorter.
const imageCount = Math.max(100, images.length);

// One reusable module: an interactive button containing a photograph.
function addImage(source, rotation, size, opacity, number) {
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = "pattern-tile";
    tile.disabled = true;
    tile.setAttribute("aria-label", `Toggle color for image ${number}: ${source.alt}`);
    tile.setAttribute("aria-pressed", "false");
    tile.style.setProperty("--rotation", `${rotation}deg`);
    tile.style.setProperty("--image-ratio", `120 / ${size}`);
    tile.style.setProperty("--opacity", opacity);

    const photo = document.createElement("img");
    photo.className = "pattern-image";
    photo.alt = source.alt;
    photo.loading = number <= 10 ? "eager" : "lazy";
    photo.decoding = "async";
    photo.src = source.src;

    // Every tenth module has a rounded shape. Color changes over time for every photo.
    if (number % 10 === 0) tile.classList.add("special");

    tile.addEventListener("click", () => {
        const clicked = tile.classList.toggle("clicked");
        tile.setAttribute("aria-pressed", String(clicked));
        // The user's color choice takes priority over the automatic grayscale animation.
        photo.style.setProperty("filter", clicked ? "grayscale(0)" : "grayscale(1)", "important");
    });
    tile.appendChild(photo);
    pattern.appendChild(tile);
}

for (let i = 0; i < imageCount; i++) {
    // Change content, rotation, size and opacity on each iteration.
    let rotation = (i % 9) * 5 - 20;
    const size = 120 + (i % 5) * 20;
    const opacity = 0.55 + (i % 5) * 0.1;
    // The overall pattern evolves from a left lean to a calmer middle to a right lean.
    if (i < Math.floor(imageCount / 3)) rotation -= 15;
    else if (i < Math.floor(imageCount * 2 / 3)) rotation /= 2;
    else rotation += 15;
    addImage(images[i % images.length], rotation, size, opacity, i + 1);
}

// Reveal in numeric order, regardless of which image finishes loading first.
// Load a few photos ahead so the sequence stays smooth without loading all at once.
let sequenceRun = 0;
async function replayPattern() {
    const run = ++sequenceRun;
    const tiles = [...pattern.querySelectorAll(".pattern-tile")];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    tiles.forEach((tile) => {
        tile.classList.remove("clicked");
        tile.querySelector("img").classList.remove("is-revealed");
        tile.querySelector("img").style.removeProperty("filter");
        tile.setAttribute("aria-pressed", "false");
        tile.disabled = true;
    });
    // Commit the reset before restarting the CSS animations.
    void pattern.offsetWidth;
    for (let i = 0; i < tiles.length; i++) {
        if (run !== sequenceRun) return;
        for (let next = i; next < Math.min(i + 4, tiles.length); next++) {
            tiles[next].querySelector("img").loading = "eager";
        }
        const photo = tiles[i].querySelector("img");
        try {
            await photo.decode();
        } catch {
            // A missing image should not prevent the rest of the sequence from appearing.
            photo.alt = `Image ${i + 1} unavailable`;
        }
        if (run !== sequenceRun) return;
        photo.classList.add("is-revealed");
        tiles[i].disabled = false;
        if (!reducedMotion) await new Promise((resolve) => setTimeout(resolve, 90));
    }
}

document.getElementById("reset-pattern").addEventListener("click", replayPattern);
replayPattern();
