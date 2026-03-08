<div align="center">

  <h1>🔗 Linked List</h1>

  <p>
    A from-scratch implementation of a <strong>Singly Linked List</strong> in JavaScript.<br />
    Built using <strong>ES6 Classes</strong> and <strong>ES Modules</strong> to understand one of the most fundamental data structures in computer science.
  </p>

  <p>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/ES6%20Classes-✓-brightgreen?style=for-the-badge" alt="ES6 Classes" />
    <img src="https://img.shields.io/badge/ES%20Modules-✓-blue?style=for-the-badge" alt="ES Modules" />
    <img src="https://img.shields.io/badge/Data%20Structures-Linked%20List-orange?style=for-the-badge" alt="Data Structures" />
  </p>

</div>

<br />

---

## 🧩 Methods Implemented

| Method | Description |
|--------|-------------|
| `append(value)` | Adds a node to the **end** of the list |
| `prepend(value)` | Adds a node to the **beginning** of the list |
| `size()` | Returns the total number of nodes |
| `head()` | Returns the first node |
| `tail()` | Returns the last node |
| `at(index)` | Returns the node at a given index |
| `pop()` | Removes the last node |
| `contains(value)` | Returns `true` / `false` if a value exists |
| `find(value)` | Returns the index of a value, or a message if not found |
| `insertAt(value, index)` | Inserts a node at a specific index |
| `removeAt(index)` | Removes the node at a specific index |
| `toString()` | Prints the list as `(A) -> (B) -> null` |

---

## 🧠 Under the Hood

### Two Classes, One Structure

The list is built from two classes. `Node` holds a value and a pointer to the next node. `LinkedList` manages the chain starting from `listHead`:

```javascript
class Node {
    constructor(value) {
        this.value = value || null;
        this.nextNode = null;  // pointer to the next node
    }
}
```

### Traversal Pattern
Almost every method relies on the same core pattern — follow the `nextNode` pointer until you reach `null`:

```javascript
let tmp = this.listHead;
while (tmp.nextNode != null) {
    tmp = tmp.nextNode;  // walk the chain
}
// tmp is now the last node
```

### insertAt & removeAt
The trickiest methods — they require tracking both the `current` and `previous` node to rewire the pointers correctly:

```javascript
// insertAt: wire the new node between previous and current
const tmp = new Node(value);
previous.nextNode = tmp;
tmp.nextNode = current;

// removeAt: skip over current by pointing previous to current's next
previous.nextNode = current.nextNode;
```

---

## 📁 Project Structure

```
Linked-List/
├── node.js          # Node class — value + nextNode pointer
├── linkedList.js    # LinkedList class — all 11 methods
├── index.js         # Manual tests & console output demos
└── README.md
```

---

## 💻 Usage Example

```javascript
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.prepend("hamster");

list.toString();   // (hamster) -> (dog) -> (cat) -> null
list.size();       // 3
list.contains("dog"); // true
list.find("cat");  // 2
list.pop();        // removes "cat"
list.toString();   // (hamster) -> (dog) -> null
```

---

## 🚀 Getting Started

1. **Clone the repository:**
    ```bash
    git clone https://github.com/AndrewTechTips/Linked-List.git
    cd Linked-List
    ```

2. **Run with Node.js** (ES Modules require the `--input-type` flag or `.mjs`):
    ```bash
    node --experimental-vm-modules index.js
    ```

---

## 📬 Contact

* **LinkedIn:** [Andrei Condrea](https://www.linkedin.com/in/andrei-condrea-b32148346)
* **Email:** condrea.andrey777@gmail.com

<p align="center">
  <i>"A linked list is a chain of nodes, each one pointing to the next — just like learning." 🔗</i>
</p>