export default class Trie {
  constructor() {
    this.childrenCount = 0;
    this.root = null;
    this.children = [];
  }

  insert(position, children) {
  let node = new Node(children);
  let currNode = this.head;
  let currPos = 0;

  while (currPos < position - 1) {
    currNode = currNode.next;
    currPos++;
  }

  node.next = currNode.next;
  currNode.next = node;
  this.length++;
  }

  var prefixTrie = new Trie();

  prefixTrie.insert("hello");

  prefixTrie.count();
  => 1

  prefixTrie.insert('world');

  prefixTrie.count();
  => 2

  count() {
    
  }
}