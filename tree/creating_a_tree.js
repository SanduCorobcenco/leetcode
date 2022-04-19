class Node {
    constructor(val) {
     this.val = val;
     this.left = null;
     this.right = null;   
    }
}

const a = new Node('a  ');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// const dFs = (root) => {
//     if(root === null) return []
//     const result = [];
//     const stack = [ root ];
//     while(stack.length > 0) {
//         const current = stack.pop();
//         result.push(current.val);
       
       
//         if(current.right)
//         stack.push(current.right);

//         if(current.left)
//         stack.push(current.left);
//     }
//     return result;

// }

// dFs(a);



// const dFs = (root) => {
//     if(root === null) return [];
//     const leftValues =  dFs(root.left);
//     const rightValues = dFs(root.right);
//     return [ root.val, ...leftValues, ...rightValues];

// }


const bFs = (root) => {
if(root === null) return [];
const queue = [ root ];
const result = [];
while(queue.length > 0) {
    const current = queue.shift();
    result.push(current.val);
    if ( current.left !== null) {
        queue.push(current.left);
    }
    if ( current.right !== null) {
        queue.push(current.right);
    }
}

}