import { expect } from 'chai';
import PrefixTrie from '../lib/PrefixTrie';

describe('PREFIX TRIE', () => {
  let trie;

  beforeEach(() => {
    trie = new PrefixTrie();
  });

  it('should exist', () => {
    expect(trie).to.exist;
  })

  it('should start with zero elements', () => {
    expect(trie.childrenCount).to.eq(0);
  });

  it('should set its default root to null', () => {
    expect(trie.root).to.eq(null);
  });

  it('its children count increase when a new node is created', () => {
    expect(trie.count).to.eq(0);
  });

  it('should be able to insert characters and increment count when they are inserted', () => {
    trie.childrenCount = 0;
    trie.insert('bob');
    trie.childrenCount = 3;
  });

  it('should convert each character inserted to lowercase', () => {
    // 
  });
});