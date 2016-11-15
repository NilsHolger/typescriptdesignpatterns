interface IComponent {
    operation() : void;
}

export class ConcreteComponent implements IComponent {
    private s: string;

    constructor(s: string) {
        this.s = s;
    }

    public operation(): void {
        console.log("operation of concretecomponent " + this.s + " is being invoked.");
    }
}

export class Decorator implements IComponent {
    private component: IComponent;
    private id: number;
    constructor(id: number, component: IComponent){
        this.id = id;
        this.component = component;
    }
    public get Id(): number {
        return this.id;
    }
    public operation(): void {
        console.log("operation of decorator " + this.id + " is being invoked.");
        this.component.operation();
    }
}

export class ConcreteDecorator extends Decorator {
        constructor(id: number, component: IComponent){
            super(id, component);
        }
        public operation(): void {
               super.operation();
               console.log("operation of concretedecorator " + this.Id + " is being invoked."); 
        }
}