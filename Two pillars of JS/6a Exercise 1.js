// Make it so that the initialize function can only be called once!
let view;
function initialize() {
      view = '🏔';
      console.log('view has been set!')
}

initialize();
initialize();
initialize();

console.log(view);

// Solution 

let view;
let isInit = false;

function initialize() {
    if (isInit === true) {
        return null;
    }
    return (() => {
        view = 'page';
        isInit = true;
        console.log('view has been set!');
    })();
}

const init = initialize();
 
init;
init;
init;

console.log(view);