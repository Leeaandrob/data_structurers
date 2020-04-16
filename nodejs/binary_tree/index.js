function BinaryTree() {
    this.root = null;
    this.leftChild = null;
    this.rightChild = null;
}

BinaryTree.prototype.insertLeft = (newNode) => {
    if (this.leftChild === null) {
        this.leftChild = BinaryTree(newNode);
    } else {
        t = new BinaryTree(newNode);
        t.leftChild = this.leftChild;
        this.leftChild = t;
    }
}

BinaryTree.prototype.insertRight = (newNode) => {
    if (this.rightChild === null) {
        this.rightChild = BinaryTree(newNode);
    } else {
        t = new BinaryTree(newNode);
        t.rightChild = this.rightChild;
        this.rightChild = t;
    }
}

BinaryTree.prototype.setRootVal = (rootValue) => {
    this.root = rootValue;
}

BinaryTree.prototype.getRootVal = () => {
    return this.root;
}


BinaryTree.prototype.getLeftChild = () => {
    return this.leftChild;
}

BinaryTree.prototype.getRightChild = () => {
    return this.rightChild;
}

module.exports = { BinaryTree };
