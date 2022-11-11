document.addEventListener('DOMContentLoaded', function() {

    // Grab the Text Box
    var textBox = document.getElementById('name');
   
    // Listen for 'Enter' to Submit Input
    textBox.addEventListener('keypress', function(e) {
        if (e.key === "Enter") {

            // Grab value
            var currentStreamer = document.getElementById('name').value + ' is live!';

            if(currentStreamer != "") {

                // Immediately Display Value
                document.getElementById('output').textContent = currentStreamer;
                chrome.storage.local.clear();
                

                // Store Value For Later Use
                chrome.storage.local.set({key: currentStreamer}, function() {
                });
            }

            else { // if Empty
                alert("INVALID INPUT! Please input a valid Twitch name :p")
            }
            
        }
        
    });
});
    