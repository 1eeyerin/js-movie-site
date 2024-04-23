const includeHTML = (callback) => {
  var promises = [];

  var elements = document.querySelectorAll('[include-html]');
  elements.forEach(function(el) {
    var file = el.getAttribute('include-html');
    if (file) {
      var promise = new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {
              el.innerHTML = this.responseText;
              resolve();
            } else {
              reject(new Error('Failed to load: ' + file));
            }
          }
        };
        xhr.open("GET", file, true);
        xhr.send();
      });
      promises.push(promise);
    }
  });

  Promise.all(promises).then(function() {
    callback();
  }).catch(function(error) {
    console.error(error);
    callback(); // 호출에 실패하더라도 콜백은 호출되어야 함
  });
}

export default includeHTML;