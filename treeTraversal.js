const BinarySearchTree = require('./bst');

function makeTree() {
    let tree = new BinarySearchTree();

    tree.insert(25,25);
    tree.insert(15,15);
    tree.insert(50,50);
    tree.insert(10,10);
    tree.insert(24,24);
    tree.insert(35,35);
    tree.insert(70,70);
    tree.insert(4,4);
    tree.insert(12,12);
    tree.insert(18,18);
    tree.insert(31,31);
    tree.insert(44,44);
    tree.insert(66,66);
    tree.insert(90,90);
    tree.insert(22,22);

    return tree;
} 

function problemA() {
    let tree = new BinarySearchTree();

    tree.insert(35,35);
    tree.insert(25,25);
    tree.insert(89,89);
    tree.insert(15,15);
    tree.insert(27,27);
    tree.insert(79,79);
    tree.insert(91,91);
    tree.insert(14,14);
    tree.insert(19,19);
    tree.insert(90,90);

    return tree;
}

function problemB() {
    let tree = new BinarySearchTree();

    tree.insert(8,8);
    tree.insert(6,6);
    tree.insert(10,10);
    tree.insert(5,5);
    tree.insert(7,7);
    tree.insert(9,9);
    tree.insert(11,11);

    return tree;
}
// console.log(makeTree());

function inOrder(tree, values=[]) {
    if (tree.left) {
        values = inOrder(tree.left, values);
    }
    values.push(tree.value);
    if (tree.right) {
        values = inOrder(tree.right, values);
    }
    return values;
}

// console.log(inOrder(makeTree()));

function preOrder(tree, values=[]) {
    values.push(tree.value);
    if (tree.left) {
        values = preOrder(tree.left, values);
    }
    if (tree.right) {
        values = preOrder(tree.right, values);
    }
    return values;
}

// console.log(preOrder(makeTree()));

function postOrder(tree, values=[]) {
    if (tree.left) {
        values = postOrder(tree.left, values);
    }
    if (tree.right) {
        values = postOrder(tree.right, values);
    }
    values.push(tree.value);
    return values;
}

// console.log(postOrder(makeTree()));
// console.log(postOrder(problemA()));
console.log(preOrder(problemB()));