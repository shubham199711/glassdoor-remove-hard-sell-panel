var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?glassdoor\.com/;

chrome.tabs.query({ active: true }, function (tabs) {
    let tab = tabs[0];
    if (urlRegex.test(tab.url)) {
        chrome.scripting
            .executeScript({
                target: { tabId: tab.id },
                files: ["popup.js"],
            })
            .then(() => console.log("script injected"));
    }
});