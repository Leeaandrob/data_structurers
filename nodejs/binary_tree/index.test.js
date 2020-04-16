const test = require('tape')
const file = require('./index')

test('Binary Tree get root value', (t) => {
    const tree = new file.BinaryTree()
    tree.setRootVal(1);
    const expected = tree.getRootVal();

    t.assert(expected === 1, 'get the value correctly from root value.');
    t.end()
});

test('Binary Tree set root value', (t) => {
    const tree = new file.BinaryTree()
    tree.setRootVal(1);
    const expected = 1

    t.assert(tree.getRootVal() === 1, 'set the value correctly from root value.');
    t.end()
});

test('Binary Tree inserting Left', (t) => {
    const tree = new file.BinaryTree(1)
    const expected = new file.BinaryTree(10)
    tree.insertLeft(10)

    t.assert(tree.getLeftChild().key === expected.key, 'get the value correctly from left child.');
    t.end()
});

test('Binary Tree inserting Right', (t) => {
    const tree = new file.BinaryTree(1)
    const expected = new file.BinaryTree(11)
    tree.insertRight(11)

    t.assert(tree.getRightChild().key === expected.key, 'get the value correctly from right child.');
    t.end()
});
