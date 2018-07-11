import { expect } from 'chai';
import PrefixTrie from '../lib/PrefixTrie';

describe('PREFIX TRIE', () => {
  let trie;

  beforeEach(() => {
    trie = new PrefixTrie();
  });

  it('should start with zero elements', () => {
    expect(trie.length).to.eq(0);
  });

  it('should set its default head to null', () => {
    expect(trie.head).to.eq(null);
  });
});