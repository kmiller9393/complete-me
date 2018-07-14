export default class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.children = {};
    this.endOfWord = false;
  }
}
