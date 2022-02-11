const items = [3, 5, 'apple', 'orange'];

// logs: (4) [3, 5, 'apple', 'orange']
console.log(items);
// logs: {items: Array(4)}
console.log({items})

// logs something as a table
console.table(items);

// logs: (4) [3, 5, 'apple', 'orange']
console.info(items);
// logs: (4) [3, 5, 'apple', 'orange'] with a yellow highlight and an exclamation mark symbol
console.warn(items);
// logs: (4) [3, 5, 'apple', 'orange'] with a red highlight and an X symbol
console.error(items);

// We can write any condition in it so we don't have to use the if..else statments to console.log something.
// The assertion will be shown in the console only when its condition won't be met.
console.assert(
    items.length < 4,
    `this message will show, if our assertion is false`
);
console.assert(
    items.length === 4,
    'this assertion won\'t show in the console, because its condition is met'
);

// logs where that specific console.trace was called (in firstFn that was called in the secondFn) 
const firstFn = () => {
    console.trace('Where this fn is called')
}
const secondFn = () => {
    firstFn();
}
secondFn();

// counts how many times some function was called
const someFn = () => {
    console.count('How many times we used someFn')
}
for (let i = 0; i < 4; i++) {
    someFn();
}