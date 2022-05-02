const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(data) {
    this.tree = data ? new Node(data) : null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    const node = new Node(data);
    let current = this.tree;
    if(!current) {
      this.tree = node;
      return;
    }
    while(data !== current.data) {
      if(data > current.data) {
        if(current.right) {
          current = current.right;
        } else {
          current.right = node;
          return;
        }
      }
      if(data < current.data) {
        if(current.left) {
          current = current.left;
        } else {
          current.left = node;
          return;
        }
      }
    }
    return;
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
   let current = this.tree;
   while(data !== current.data) {
    if(data > current.data) {
      if(current.right) {
        current = current.right;
      } else {
        return null;
      }
    }
    if(data < current.data) {
      if(current.left) {
        current = current.left;
      } else {
        return null;
      }
    }
   }
   return current;
  }

  remove(data) {
    let current = this.find(data);
    if(!current) {
      return;
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let current = this.tree;

    if(!current) return null;
    while(current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    let current = this.tree;

    if(!current) return null;
    while(current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};