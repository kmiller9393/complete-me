import { expect } from 'chai';
import Trie from '../lib/Trie';
import Node from '../lib/Node';
require('locus');

describe('TRIE', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should exist', () => {
    expect(trie).to.exist;
  })

  it('should start with zero words', () => {
    expect(trie.wordCount).to.eq(0);
  });

  it('should set its default root to a new instance of the Node class whose value is null', () => {
    expect(trie.root).to.deep.eq(new Node(null));
  });

  it('should be able to insert a word and keep track of how many words are present', () => {
    trie.insert('hello');
    trie.insert('help');
    trie.insert('calm');
    trie.insert('cool');
    console.log(JSON.stringify(trie, null, 4));
    expect(trie.wordCount).to.eq(4);
  });

  it('should have the suggest method', () => {
    expect(trie).respondsTo('suggest');
  });

  it.skip('should take in a prefix', () => {
    // expect(trie.suggest(prefix)).to.deep.eq()
  })


  it('should return an empty array if there are no words containing that prefix', () => {
    trie.insert('hello');
    trie.insert('hill');
    trie.insert('hail');
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



  // it('should increase word count with every inserted word', () => {
  //   trie.insert('hello');
  //   trie.insert('help');
  //   trie.insert('calm');
  //   trie.insert('cool');
  //   expect(trie.wordCount).to.eq(4);
  // });

  // it('its children count increase when a new node is created', () => {
  //   expect(trie.count).to.eq(0);
  // });

  // it('should be able to insert characters and increment count when they are inserted', () => {
  //   trie.childrenCount = 0;
  //   trie.insert('bob');
  //   trie.childrenCount = 3;
  // });

  // it('should keep count of how many words have been inserted', () => {
  //   // expect(trie.root).to.eq(null);
  // });

  // it('should convert each character inserted to lowercase', () => {
  //   // 
  // });
});