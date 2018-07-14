import { expect } from 'chai';
import Node from '../lib/Node';

describe('NODE', () => {
  let node;

  beforeEach(() => {
    var node = new Node('letter');
  })

  it('should exist', () => {
    expect(node).to.exist;
  })

  it('should default next to null', () => {
    expect(node.next).to.equal(null);
  })

  it('should take data and assign it to data prop', () => {
    expect(node.data).to.equal('hello');
  })
})
