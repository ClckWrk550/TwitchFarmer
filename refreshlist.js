document.addEventListener('DOMContentLoaded', function() {

//Refresh streamer list on Extension load
chrome.storage.local.get(['key'], function(result) {
    document.getElementById('output').textContent = result.key;
    });

});

