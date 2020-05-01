// Closures help us to hide some data we don't want users to get access to

const doAction = () => {
    let counter = 0;
    const goUp = () => counter++;
    const getTime = () => console.log(counter);
    setInterval(goUp, 1000);
    const act = () => {
        counter = -1;
        return 'done';
    };
    return {
        getTime
    }
}

const action = doAction();

action.getTime(); // working
action.act(); //* not working because closure encapsulates method 'act' inside the function
//* So it cannot be accessed from outside