package main

import "fmt"

type BinaryTree struct {
	Key        string
	LeftChild  *BinaryTree
	RightChild *BinaryTree
}

func (b *BinaryTree) insertLeft(newNode string) {
	if b.LeftChild == nil {
		b.LeftChild = &BinaryTree{Key: newNode}
		fmt.Println(b.LeftChild)
	} else {
		t := BinaryTree{Key: newNode}
		t.LeftChild = b.LeftChild
		b.LeftChild = &t
	}
}

func (b *BinaryTree) insertRight(newNode string) {
	if b.RightChild == nil {
		b.RightChild = &BinaryTree{Key: newNode}
		fmt.Println(b.RightChild)
	} else {
		t := BinaryTree{Key: newNode}
		t.RightChild = b.RightChild
		b.RightChild = &t
	}
}

func (b *BinaryTree) getRightChild() BinaryTree {
	return *b.RightChild
}

func (b *BinaryTree) getLeftChild() BinaryTree {
	return *b.LeftChild
}

func (b *BinaryTree) setRootVal(obj string) {
	b.Key = obj
}

func (b *BinaryTree) getRootVal() string {
	return b.Key
}

func (b *BinaryTree) display() {
	lines, _, _, _ := b.auxDisplay()
	for _, line := range lines {
		fmt.Println(line)
	}
}

func (b *BinaryTree) auxDisplay() ([]string, int, int, int) {
	// var shiftedLines []string
	if b.RightChild == nil && b.LeftChild == nil {
		line := fmt.Sprintf("%s", b.Key)
		width := len(line)
		height := 1
		middle := width / 2
		return []string{line}, width, height, middle
	}

	// if b.RightChild == nil {
	// 	lines, n, p, x := b.LeftChild.auxDisplay()
	// 	s := fmt.Sprintf("%s", b.key)
	// 	u := len(s)
	// 	firstLine := (x+1)*' ' + (n-x-1)*'_' + s
	// 	secondLine := x*' ' + '/' + (n-x-1+u)*' '

	// 	for _, l := range lines {
	// 		shiftedLines = append(shiftedLines, l+u*' ')
	// 	}
	// 	return []string{firstLine, secondLine} + shiftedLines, n + u, p + 2, n + u
	// }
	return []string{}, 0, 0, 0
}

func main() {
	mainBinaryTree := BinaryTree{Key: "leandro"}
	mainBinaryTree.display()

	mainBinaryTree.insertLeft("Leandra")
	mainBinaryTree.insertRight("Levi")
	mainBinaryTree.display()
}
