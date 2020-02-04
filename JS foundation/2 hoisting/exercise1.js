a(); // outputs "bye" because function a is hoisted before executing the code but as js engine goes down from the top
// it assign function a to log('hi') and then rewrites it with log('bye')

function a() {
    console.log('hi');
}

function a() {
    console.log('bye');
}