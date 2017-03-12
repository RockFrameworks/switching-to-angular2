class Node {
	value: any;
	left: Node;
	right: Node;
}

class BinarySearchTree {
	private root: Node;
	insert(any: value): void{};
	remove(any: value): void{};
	exists(any: value): boolean{};
	inorder(callback: {(value:any): void}): void {}
}
