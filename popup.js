
document.getElementById("toggle-button").addEventListener("click", () => {
    chrome.storage.sync.get("privacyEnabled", ({ privacyEnabled }) => {
        const newStatus = !privacyEnabled;
        chrome.storage.sync.set({ privacyEnabled: newStatus });
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {
                command: "togglePrivacy",
                enabled: newStatus
            });
        });
        document.getElementById("toggle-button").innerText = newStatus
            ? "Disable Privacy"
            : "Enable Privacy";
    });
});

chrome.storage.sync.get("privacyEnabled", ({ privacyEnabled }) => {
    document.getElementById("toggle-button").innerText = privacyEnabled
        ? "Disable Privacy"
        : "Enable Privacy";
});
