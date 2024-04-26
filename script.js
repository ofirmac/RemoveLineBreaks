function removeLineBreaks() {
    const inputText = document.getElementById('inputText').value;
    const outputText = inputText.replace(/\n/g, ' ');
    document.getElementById('outputText').value = outputText;
  }
  