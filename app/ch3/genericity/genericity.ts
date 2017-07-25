class Node<T> {
	value: T;
	left: Node<T>;
	right: Node<T>;
}

//[ˈbaɪnəri]
class BinarySearchTree {
	private root: Node;
	insert(any: value): void { };
	remove(any: value): void { };
	exists(any: value): boolean { };
	inorder(callback: { (value: any): void }): void { }
}

let numberNode = new Node<number>();
let stringNode = new Node<string>();
numberNode.right = new Node<number>();
numberNode.value = 42;

//Type "string" is not assignable to type "number"
numberNode.value = "42";
//Type Node<string> is not assignable to type Node<number>
numberNode.left = stringNode;

/*Genericity
英[dʒɪne'rɪsɪtɪ] 　 　  美 [dʒɪne'rɪsɪtɪ] 
泛型; 类属; 泛型 泛型; 通有性;
*/