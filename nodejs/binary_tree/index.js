function zip(firstArray, secondArray) {
    const data = Array(firstArray, secondArray);
    return data;
}


function createBinaryTree(rootVal) {
    const obj = {
        root: rootVal,
        leftChild: null,
        rightChild: null,
    }

    obj.insertLeft = (newNode) => {
        if (obj.leftChild === null) {
            obj.leftChild = createBinaryTree(newNode);
        } else {
            t = createBinaryTree(newNode);
            t.leftChild = obj.leftChild;
            obj.leftChild = t;
        }
    }

    obj.insertRight = (newNode) => {
        if (obj.rightChild === null) {
            obj.rightChild = createBinaryTree(newNode);
        } else {
            t = createBinaryTree(newNode);
            t.rightChild = obj.rightChild;
            obj.rightChild = t;
        }
    }

    obj.getRootVal = () => {
        return obj.root;
    }

    obj.getLeftChild = () => {
        return obj.leftChild;
    }

    obj.getRightChild = () => {
        return obj.rightChild;
    }

    obj.auxDisplay = () => {
        if (obj.rightChild === null && obj.leftChild === null) {
            let line = `${obj.root}`;
            let width = line.length;
            let height = 1;
            let middle = width % height;
            return [[line], width, height, middle];
        }

        if (obj.rightChild === null) {
            let result = obj.leftChild.auxDisplay();
            let lines = result[0][1];
            let n = result[0][1];
            let p = result[0][2]
            let x = result[0][3];
            let s = `${obj.root}`;
            let u = s.length;
            let first_line = (x + 1) * ' ' + (n - x - 1) * '_' + s;
            let second_line = x * ' ' + '/' + (n - x - 1 + u) * ' ';
            let shifted_lines = lines.map((l) => { l + u * ' '});

            return [[
                first_line, second_line
            ] + shifted_lines, n + u, p + 2, n + u % 2]
        }

        if (obj.leftChild === null) {
            let result = obj.rightChild.auxDisplay();
            let lines = result[0][0];
            let n = result[0][1];
            let p = result[0][2];
            let x = result[0][3];
            let s = `${obj.root}`;
            s = `${obj.root}`;
            let u = s.length;
            let first_line = (x + 1) * ' ' + (n - x - 1) * '_' + s;
            let second_line = x * ' ' + '/' + (n - x - 1 + u) * ' ';
            let shifted_lines = lines.map((l) => { l + u * ' '});

            return [[
                first_line, second_line
            ] + shifted_lines, n + u, p + 2, n + u % 2]
        }

        let resultl = obj.leftChild.auxDisplay();
        console.info("resultl", resultl);

        let resultr = obj.rightChild.auxDisplay();
        console.info("resultr", resultr);

        let left = resultl[0][0];
        console.info("left", left);

        let n = resultl[0][1];
        let p = resultl[0][2];
        let x = resultl[0][3];
        let right = resultr[1][0];
        console.info("right", right);
        let m = resultr[0][1];
        let q = resultr[0][2];
        let y = resultr[0][3];
        s = `${obj.root}`
        let u = s.length
        let first_line = (x + 1) * ' ' + (n - x - 1) * '_' + s + y * '_' + (m - y) * ' ';
        let second_line = x * ' ' + '/' + (n - x - 1 + u + y) * ' ' + '\\' + (m - y - 1) * ' ';

        if (p < q) {
            left += [n * ' '] * (q - p);
        } else if (q < p) {
            right += [m * ' '] * (p - q);
        }

        zipped_lines = zip(left, right);
        lines = [first_line, second_line] + zipped_lines.map((a, b) => { a + u * ' ' + b });
        return [lines, n + m + u, Math.max(p, q) + 2, n + u % 2];
    }


    obj.display = () => {
        const result = obj.auxDisplay();
        const lines = result[0];
        for (let line in lines) {
            if (lines[line] !== undefined) {
                console.log(lines[line]);
            }
        }
    }

    return obj;
}


function creationTree() {
    const obj = createBinaryTree(1);
    obj.insertLeft(2);
    obj.insertRight(3);
    return obj;
}

module.exports = { createBinaryTree, creationTree, zip };
