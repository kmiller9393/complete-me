import { expect } from 'chai';
import Node from '../lib/Node';
require('locus');

describe('NODE', () => {
  let node;

  beforeEach(() => {
    node = new Node('letter');
  });

  it('should exist', () => {
    expect(node).to.exist;
  });

  it('should start as an empty object', () => {
    expect(node.children).to.deep.eq({});
  });

  it('should have an endOfWord property set to false', () => {
    expect(node.endOfWord).to.eq(false);
  });
});
