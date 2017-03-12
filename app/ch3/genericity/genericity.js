var Node = (function () {
    function Node() {
    }
    return Node;
}());
var BinarySearchTree = (function () {
    function BinarySearchTree() {
    }
    BinarySearchTree.prototype.insert = function (any) { };
    ;
    BinarySearchTree.prototype.remove = function (any) { };
    ;
    BinarySearchTree.prototype.exists = function (any) { };
    ;
    BinarySearchTree.prototype.inorder = function (callback) { };
    return BinarySearchTree;
}());
var numberNode = new Node();
var stringNode = new Node();
numberNode.right = new Node();
numberNode.value = 42;
//Type 
numberNode.value = "42";
numberNode.left = stringNode;
