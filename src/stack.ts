export class Stack {
     data: String[]= []

    constructor() {
    }
    push(record) {
        this.data.push(record)
    }
    pop() {
        return this.data.pop();
    }
    size() {
        return this.data.length;
    }
    search(record) {
        return this.data.findIndex(record);
    }
    isEmpty() {
        return (this.data.length) === 0;
    }
    peek() {
        return this.data[this.data.length - 1];
    }
}