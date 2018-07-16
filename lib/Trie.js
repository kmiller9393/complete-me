import Node from './Node';
require('locus');

export default class Trie {
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

  suggest(prefix) {
    let letters = [...prefix.toLowerCase()];
    let currNode = this.root;

    for (let i = 0; i < letters.length; i++) {
      currNode = currNode.children[letters[i]];

      if (!currNode) {
        return [];
      }
    }

    let suggestions = [];

    function getSuggestions(string, node) {
      Object.keys(node.children).forEach(key => {
        let newString = string + key;

        if (node.children[key].endOfWord) {
          suggestions.push(newString);
        }
        getSuggestions(newString, node.children[key]);
      });
    }

    getSuggestions(prefix, currNode);

    return suggestions;
  }

  populate(dictionary) {
    dictionary.forEach(word => this.insert(word));
  }
}