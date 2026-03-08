import LinkedList from "./linkedList.js";

const linkedList = new LinkedList();

// 1. Test append(): Add elements to the end of the list
linkedList.append("dog");
linkedList.append("cat");
linkedList.append("parrot");

// Output: (dog) -> (cat) -> (parrot) -> null
console.log("1. Append:", linkedList.toString());

// 2. Test prepend(): Add an element to the beginning of the list
linkedList.prepend("hamster");

// Output: (hamster) -> (dog) -> (cat) -> (parrot) -> null
console.log("2. Prepend:", linkedList.toString());

// 3. Test size(): Get the total number of nodes
// Output: 4
console.log("3. Size:", linkedList.size());

// 4. Test head(): Get the first node
// Output: Node { value: 'hamster', nextNode: Node { value: 'dog', ... } }
console.log("4. Head:", linkedList.head());

// 5. Test tail(): Get the last node
// Output: Node { value: 'parrot', nextNode: null }
console.log("5. Tail:", linkedList.tail());

// 6. Test at(): Get the node at a specific index (index 1 is 'dog')
// Output: Node { value: 'dog', nextNode: Node { value: 'cat', ... } }
console.log("6. Node at index 1:", linkedList.at(1));

// 7. Test pop(): Remove the last element ('parrot')
linkedList.pop();

// Output: (hamster) -> (dog) -> (cat) -> null
console.log("7. After pop:", linkedList.toString());

// 8. Test contains(): Check if values exist in the list
// Output: true
console.log("8. Contains 'dog':", linkedList.contains("dog"));
// Output: false
console.log("   Contains 'snake':", linkedList.contains("snake"));

// 9. Test find(): Find the index of a value
// Output: 2
console.log("9. Find 'cat':", linkedList.find("cat"));
// Output: Element: snake was not found in the list!
console.log("   Find 'snake':", linkedList.find("snake"));

// 10. Test insertAt(): Insert 'turtle' at index 1
linkedList.insertAt("turtle", 1);

// Output: (hamster) -> (turtle) -> (dog) -> (cat) -> null
console.log("10. After insertAt(1):", linkedList.toString());

// 11. Test removeAt(): Remove the element at index 2 ('dog')
linkedList.removeAt(2);

// Output: (hamster) -> (turtle) -> (cat) -> null
console.log("11. After removeAt(2):", linkedList.toString());