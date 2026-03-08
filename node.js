// Here we defining the node class 

export default class Node {
    constructor (value) {
        this.value = value || null;
        this.nextNode = null;
    }
}