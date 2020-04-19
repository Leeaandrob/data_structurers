const test = require('tape')
const file = require('./index')

test('Binary Tree get root value without method', (t) => {
    const tree = file.createBinaryTree(1)
    const expected = tree.root;

    t.assert(expected === 1, 'get the value correctly from root value.');
    t.end()
});

test('Binary Tree get root value', (t) => {
    const tree = file.createBinaryTree(1)
    const expected = tree.getRootVal();

    t.assert(expected === 1, 'get the value correctly from root value.');
    t.end()
});

test('Binary Tree set root value', (t) => {
    const tree = file.createBinaryTree(1)
    const expected = 1

    t.assert(tree.getRootVal() === 1, 'set the value correctly from root value.');
    t.end()
});

test('Binary Tree inserting Left', (t) => {
    const tree = file.createBinaryTree(1)
    const expected = file.createBinaryTree(10)
    tree.insertLeft(10)

    t.assert(tree.getLeftChild().key === expected.key, 'get the value correctly from left child.');
    t.end()
});

test('Binary Tree inserting Right', (t) => {
    const tree = file.createBinaryTree(1)
    const expected = file.createBinaryTree(11)
    tree.insertRight(11)

    t.assert(tree.getRightChild().key === expected.key, 'get the value correctly from right child.');
    t.end()
});

test('zip function', (t) => {
    const array = file.zip([1, 2], [3, 4])

    t.assert(array[0][0] === 1, 'verify if the array is ziped');
    t.assert(array[1][0] === 3, 'verify if the array is ziped');
    t.end()
});
