const Node = require('./node');

module.exports = class Trie {
  constructor() {
    this.root = new Node();
    this.wordCount = 0;
  }

  insert(word) {
    let letters = [...word];
    let currNode = this.root;

    for (let i = 0; i < letters.length; i++) {
      let currentLetter = letters[i];
  
      if (!currNode.children[currentLetter]) {
        let newLetter = new Node(currentLetter);

        currNode.children[currentLetter] = newLetter;
        currNode = currNode.children[currentLetter];
      } else {
        currNode = currNode.children[currentLetter];
      }

      if (i === letters.length - 1 && !currNode.endOfWord) {
        currNode.endOfWord = word;
        this.count();
      }
    }
  }

  count() {
    this.wordCount++;
  }

  getSuggestions(node, arr) {   
    if (node.endOfWord) {
      arr.push(node.endOfWord);
    }
    Object.values(node.children).forEach(node => {
      this.getSuggestions(node, arr);
    });
  }


  suggest(prefix) {
    let letters = [...prefix.toLowerCase()];
    let currNode = this.root;
    let arr = []

    for (let i = 0; i < letters.length; i++) {
      currNode = currNode.children[letters[i]];

      if (!currNode) {
        return [];
      }
    }

    this.getSuggestions(currNode, arr);
    return arr
  }


  populate(dictionary) {
    dictionary.forEach(word => this.insert(word));
  }
}