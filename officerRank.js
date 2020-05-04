const BinarySearchTree = require('./bst');
const Queue = require('./queue');

function makeTree() {
    let tree = new BinarySearchTree();

    tree.insert(5, 'Picard');
    tree.insert(3, 'Riker');
    tree.insert(6, 'Data');
    tree.insert(2, 'Worf');
    tree.insert(4, 'LaForge');
    tree.insert(8, 'Crusher');
    tree.insert(1, 'security');
    tree.insert(7, 'Selar');

    return tree;
}

console.log(makeTree());

function bfs(tree, values = []) {
    const queue = new Queue();
    const node = tree.root;
    queue.enqueue(node);
    console.log(queue);
    while (queue.size) {
        const node = queue.dequeue();
        console.log('node', node);
        values.push(node);
        console.log('values', values);
        if (node.left) {
            queue.enqueue(node.left);
        }
        if (node.right) {
            queue.enqueue(node.right);
        }
    }
    return values;
}

// console.log(bfs(makeTree()));