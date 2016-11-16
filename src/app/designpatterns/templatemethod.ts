export class AbstractClass {
    public method1(): void {
        throw new Error("abstract method");
    }
    public method2(): void {
        throw new Error("abstract method");
    }
    public method3(): void {
        throw new Error("abstract method");
    }

    public templateMethod(): void {
        console.log("templatemethod is being invoked");
        this.method1();
        this.method2();
        this.method3();
    }
}

export class ConcreteClass1 extends AbstractClass {
    public method1(): void {
        console.log("method1 of concreteclass1 invoked");
    }
    public method2(): void {
        console.log("method2 of concreteclass1 invoked");
    }
    public method3(): void {
        console.log("method3 of concreteclass1 invoked");
    }
}
export class ConcreteClass2 extends AbstractClass {
    public method1(): void {
        console.log("method1 of concreteclass2 invoked");
    }
    public method2(): void {
        console.log("method2 of concreteclass2 invoked");
    }
    public method3(): void {
        console.log("method3 of concreteclass2 invoked");
    }
}