class Stack<T> {
    private stack: T[];
  
    constructor() {
      this.stack = [];
    }
  
    push(element: T): void {
      this.stack.unshift(element);
    }
  
    pop(): T | undefined {
      return this.stack.shift();
    }
  
    count(): number {
      return this.stack.length;
    }
  
    peek(): T | -1 {
      if (this.isEmpty()) {
        return -1;
      }
      return this.stack[0];
    }
  
    isEmpty(): boolean {
      return this.stack.length === 0;
    }
  }
  
  // UI elements
  const textField = document.getElementById("textField") as HTMLInputElement;
  const pushButton = document.getElementById("pushButton") as HTMLButtonElement;
  const popButton = document.getElementById("popButton") as HTMLButtonElement;
  const countButton = document.getElementById("countButton") as HTMLButtonElement;
  const peekButton = document.getElementById("peekButton") as HTMLButtonElement;
  const isEmptyButton = document.getElementById("isEmptyButton") as HTMLButtonElement;
  const outputDiv = document.getElementById("outputDiv") as HTMLDivElement;
  
  // Create a stack of numbers
  const numberStack = new Stack<number>();
  
  pushButton.addEventListener("click", () => {
    const value = Number(textField.value);
    numberStack.push(value);
    textField.value = "";
    updateOutput();
  });
  
  popButton.addEventListener("click", () => {
    const element = numberStack.pop();
    if (element !== undefined) {
      outputDiv.innerText = `Popped element: ${element}`;
    } else {
      outputDiv.innerText = "Stack is empty";
    }
  });
  
  countButton.addEventListener("click", () => {
    const count = numberStack.count();
    outputDiv.innerText = `Count: ${count}`;
  });
  
  peekButton.addEventListener("click", () => {
    const element = numberStack.peek();
    if (element !== -1) {
      outputDiv.innerText = `Peeked element: ${element}`;
    } else {
      outputDiv.innerText = "Stack is empty";
    }
  });
  
  isEmptyButton.addEventListener("click", () => {
    const isEmpty = numberStack.isEmpty();
    outputDiv.innerText = `Is Empty: ${isEmpty}`;
  });
  
  function updateOutput() {
    outputDiv.innerText = `Stack: ${numberStack}`;
  }
  