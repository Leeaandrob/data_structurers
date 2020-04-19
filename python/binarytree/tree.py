class BinaryTree:
    def __init__(self, rootObj):
        self.key = rootObj
        self.leftChild = None
        self.rightChild = None

    def insertLeft(self, newNode):
        if self.leftChild is None:
            self.leftChild = BinaryTree(newNode)
            print(self.leftChild)
        else:
            t = BinaryTree(newNode)
            t.leftChild = self.leftChild
            self.leftChild = t

    def insertRight(self, newNode):
        if self.rightChild is None:
            self.rightChild = BinaryTree(newNode)
        else:
            t = BinaryTree(newNode)
            t.rightChild = self.rightChild
            self.rightChild = t

    def getRightChild(self):
        return self.rightChild

    def getLeftChild(self):
        return self.leftChild

    def setRootVal(self, obj):
        self.key = obj

    def getRootVal(self):
        return self.key

    def display(self):
        lines, _, _, _ = self._display_aux()
        for line in lines:
            print(line)

    def _display_aux(self):
        if self.rightChild is None and self.leftChild is None:
            line = '%s' % self.key
            width = len(line)
            height = 1
            middle = width // 2
            return [line], width, height, middle

        # Only left child.
        if self.rightChild is None:
            lines, n, p, x = self.leftChild._display_aux()
            s = '%s' % self.key
            u = len(s)
            first_line = (x + 1) * ' ' + (n - x - 1) * '_' + s
            second_line = x * ' ' + '/' + (n - x - 1 + u) * ' '
            shifted_lines = [l + u * ' ' for l in lines]
            return [
                first_line, second_line
            ] + shifted_lines, n + u, p + 2, n + u // 2

        # Only right child.
        if self.leftChild is None:
            lines, n, p, x = self.rightChild._display_aux()
            s = '%s' % self.key
            u = len(s)
            first_line = s + x * '_' + (n - x) * ' '
            second_line = (u + x) * ' ' + '\\' + (n - x - 1) * ' '
            shifted_lines = [u * ' ' + l for l in lines]
            return [first_line, second_line
                    ] + shifted_lines, n + u, p + 2, u // 2

        # Two children.
        resultl = self.leftChild._display_aux()
        print("resultl", resultl)
        left, nnn, ppp, xxx = resultl[0], resultl[1], resultl[2], resultl[3]

        print("left", left)

        resultr = self.rightChild._display_aux()
        print("resultr", resultr)

        right, mmm, qqq, yyy = resultr[0], resultr[1], resultr[2], resultr[3]

        print("right", right)

        sss = '%s' % self.key
        uuu = len(sss)

        first_line = (xxx + 1) * ' ' + (
            nnn - xxx - 1) * '_' + sss + yyy * '_' + (mmm - yyy) * ' '

        second_line = xxx * ' ' + '/' + (
            nnn - xxx - 1 + uuu + yyy) * ' ' + '\\' + (mmm - yyy - 1) * ' '

        if ppp < qqq:
            left += [nnn * ' '] * (qqq - ppp)
        elif qqq < ppp:
            right += [mmm * ' '] * (ppp - qqq)

        zipped_lines = zip(left, right)
        lines = [first_line, second_line] + [
            aaa + uuu * ' ' + bbb for aaa, bbb in zipped_lines]
        return lines, nnn + mmm + uuu, max(ppp, qqq) + 2, nnn + uuu // 2


def createTree():
    tree = BinaryTree(1)
    tree.insertLeft(2)
    tree.insertRight(3)
    return tree
