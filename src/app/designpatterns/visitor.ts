export interface IVisitor {
    visitConcreteElement1(concreteElement1: ConcreteElement1): void;
    visitConcreteElement2(concreteElement2: ConcreteElement2): void;
} 

export class ConcreteVisitor1 implements IVisitor {
        public visitConcreteElement1(concreteElement1: ConcreteElement1): void {
            console.log("visitconcreteelement1 of concretevisitor1 invoked");
        }
        public visitConcreteElement2(concreteElement2: ConcreteElement2): void {
            console.log("visitconcreteelement2 of concretevisitor1 invoked");
        }
}
export class ConcreteVisitor2 implements IVisitor {
        public visitConcreteElement1(concreteElement1: ConcreteElement1): void {
            console.log("visitconcreteelement1 of concretevisitor2 invoked");
        }
        public visitConcreteElement2(concreteElement2: ConcreteElement2): void {
            console.log("visitconcreteelement2 of concretevisitor2 invoked");
        }
}
export interface Element {
    operate(visitor: IVisitor): void;
}

export class ConcreteElement1 {
        public operate(ivisitor: IVisitor): void {
            console.log("operate of concreteelement1 invoked");
            ivisitor.visitConcreteElement1(this);
        }
}

export class ConcreteElement2 {
        public operate(ivisitor: IVisitor): void {
            console.log("operate of concreteelement2 invoked");
            ivisitor.visitConcreteElement2(this);
        }
}

export class Objs {
    private elements: Element[] = [];

    public attach(e: Element): void {
        this.elements.push(e);
    }

    public detach(e: Element): void {
        let index = this.elements.indexOf(e);
        this.elements.splice(index, 1);
    }

    public operate(ivisitor: IVisitor){
        let i = 0;
        let max = this.elements.length;
        for (; i < max; i += 1){
            this.elements[i].operate(ivisitor);
        }
    }
}
