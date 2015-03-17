window.onload = function() {
  var inputUrl = document.getElementById('url');
  var inputRange = document.getElementById('range');
  var inputResult = document.getElementById('result');

  function changedField() {
    setTimeout(function() {
      inputResult.value = getEmbedUrl(inputUrl.value, inputRange.value);
    }, 4);
  }

  function getEmbedUrl(url, range) {
    var partList = url.split('"');
    var link = partList[1];

    var firstPart = link.slice(0, link.indexOf('pubhtml') + 'pubhtml'.length);
    link = firstPart + "/sheet?headers=false&gid=0&range=" + range;

    partList[1] = link;

    return partList.join('"');
  }

  inputUrl.onkeyup = inputRange.onkeyup = inputUrl.onpaste = inputRange.onpaste = changedField;
};
