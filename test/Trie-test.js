import { expect } from 'chai';
import Trie from '../lib/Trie';
import Node from '../lib/Node';
import fs from 'fs';
require('locus');

const text = "/usr/share/dict/words";
const dictionary = fs.readFileSync(text).toString().trim().split('\n');


describe('TRIE', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should exist', () => {
    expect(trie).to.exist;
  });

  it('should start with zero words', () => {
    expect(trie.wordCount).to.eq(0);
  });

  it('should set its default root to a new instance of the Node class whose value is null', () => {
    expect(trie.root).to.deep.eq(new Node(null));
  });

  describe('insert', () => {
    it('should be able to insert a word and keep track of how many words are present', () => {
      trie.insert('hello');
      trie.insert('help');
      trie.insert('calm');
      trie.insert('cool');
      console.log(JSON.stringify(trie, null, 4));
      expect(trie.wordCount).to.eq(4);
    });
  });

  describe('suggest', () => {
    it('should have the suggest method', () => {
      expect(trie).respondsTo('suggest');
    });

    it.skip('should take in a prefix', () => {
      // expect(trie.suggest(prefix)).to.deep.eq()
    });

    it('should return an empty array if there are no words containing that prefix', () => {
      trie.populate(dictionary);
      trie.suggest('he');
      expect(trie.suggest('hx')).to.deep.eq([]);
    });

    it('should return an array of all of the words containing the prefix', () => {
      trie.insert('cool');
      trie.insert('clap');
      trie.insert('calm');
      trie.insert('call');
      expect(trie.suggest('c')).to.deep.eq(['cool', 'clap', 'calm', 'call']);
      expect(trie.suggest('ca')).to.deep.eq(['calm', 'call']);
    });
  });

  describe('populate', () => {
    it('should populate the prefix trie with words from the dictionary', () => {
      trie.populate(dictionary);
      expect(trie.wordCount).to.deep.eq(dictionary.length);
    });  
  });
});  