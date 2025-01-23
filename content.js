
chrome.storage.sync.get("privacyEnabled", ({ privacyEnabled }) => {
    if (privacyEnabled) {
        addOverlay();
    }
});

chrome.runtime.onMessage.addListener((message) => {
    if (message.command === "togglePrivacy") {
        if (message.enabled) {
            addOverlay();
        } else {
            removeOverlay();
        }
    }
});

function addOverlay() {
    let overlay = document.getElementById("privacy-overlay");
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "privacy-overlay";
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.95)"; // Even darker overlay
        overlay.style.zIndex = "999999";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";

        // Add grid pattern
        overlay.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)";
        overlay.style.backgroundSize = "20px 20px";

        // Add GIF in the center
        const gif = document.createElement("img");
        gif.src = chrome.runtime.getURL("zuck.gif");
        gif.alt = "Privacy Enabled";
        gif.style.width = "200px"; // Adjust size as needed
        gif.style.height = "auto";

        overlay.appendChild(gif);
        document.body.appendChild(overlay);
    }
}

function removeOverlay() {
    const overlay = document.getElementById("privacy-overlay");
    if (overlay) {
        overlay.remove();
    }
}
