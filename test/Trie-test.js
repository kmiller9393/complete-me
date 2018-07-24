import { expect } from 'chai';
import Trie from '../lib/Trie';
import Node from '../lib/Node';
import fs from 'fs';
require('locus');

const text = require('../largest1000cities.js');

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
    it('should have the insert method', () => {
      expect(trie).respondsTo('insert');
    });

    it('should be able to insert a word and keep track of how many words are present', () => {
      trie.insert('hello');
      trie.insert('help');
      trie.insert('calm');
      trie.insert('cool');
      expect(trie.wordCount).to.eq(4);
    });
  });

  describe('count', () => {
    it('should have the count method', () => {
      expect(trie).respondsTo('count');
    });

    it('should increase the prefix trie word count after each word is inserted', () => {
      trie.insert('hello');
      trie.insert('howdy');
      expect(trie.wordCount).to.eq(2);
    });
  });  

  describe('suggest', () => {
    it('should have the suggest method', () => {
      expect(trie).respondsTo('suggest');
    });

    it('should return an empty array if there are no words containing that prefix', () => {
      trie.populate(text);
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
    it('should have the populate method', () => {
      expect(trie).respondsTo('populate');
    });

    it('should populate the prefix trie with words from the dictionary', () => {
      trie.populate(text);
      expect(trie.wordCount).to.deep.eq(dictionary.length);
    });  
  });
});  