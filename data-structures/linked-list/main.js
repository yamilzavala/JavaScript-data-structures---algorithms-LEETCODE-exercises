class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;        
    }

    //ADD
    push(value) {
        //two cases - list empty and list not empty   
        const newNode = new Node(value)
        if(!this.head) {  
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;            
        }
        this.length++;
        return this;
    }

    unshift(value) {
	    //there are two cases: list empty; list not empty
	    const newNode = new Node(value);
	    if(!this.head) {
	        this.head = newNode;
	        this.tail = newNode;
	    } else {	        
	        newNode.next = this.head;
	        this.head = newNode;
	    }
	    this.length++;
	    return this;
	}

	insert(index, value) {
        if(index === 0) return this.unshift(value)
        if(index === this.length) return this.push(value)
        if(index < 0 || index > this.length) return false;
        
        let newNode = new Node(value);
        let temp = this.get(index-1)
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        
        return true;
    }

    //REMOVE
    pop() {
        //three cases
        if(!this.head) {
            //there is no nodes
           return undefined;
        } else if(this.length === 1){
            //there is only one node
            let temp = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return temp;
        } else {
            //there more one node
            let prev = this.head;
            let temp = this.head;
            while(temp.next) { 
                prev = temp;
                temp = temp.next;
            }
            this.tail = prev;
            this.tail.next = null;
            this.length--;
            return temp;
        }
    }

    shift() {
        //there are three cases: list empty; list with one node; list with more than one node;
        let temp;
        if(!this.head) {
            return undefined;
        } else if(this.length === 1) {
            temp = this.head;
            this.head = null;
            this.tail = null;
        } else {
            temp = this.head;
            this.head = this.head.next;
            temp.next = null;
        }
        this.length--;
        return temp;        
    }

    remove(index) {
	    if(index === 0) return this.shift()
	    if(index === this.length - 1) return this.pop()
	    if(index < 0 || index >= this.length) return null;
	    
	    let before = this.get(index - 1);
	    let temp = before.next;
	    before.next = temp.next;
	    temp.next = null;
	    
	    this.length--;
        return temp;	    
	}

    //GET
    get(index) {
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for(let i = 0; i < index; i++){
            temp = temp.next;
        }
        return temp;
    }

    //SET
    set(index, val) {
        let targetNode = this.get(index)
        if(targetNode){
            targetNode.value = val;
            return true;
        }
        return false;
    }

    //REVERSE
    reverse() {
        let prev = null;
        let temp = this.head;
        let next = temp.next;

        this.head = this.tail;
        this.tail = temp;

        for(let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this;
    }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2)
myLinkedList.push(3)
myLinkedList.push(4)
console.log(myLinkedList.reverse())