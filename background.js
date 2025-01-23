chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.create({ url: "fb.html" });
});
chrome.runtime.onInstalled.addListener(() => {
  console.log("Facebook Privacy Extension installed.");
});
