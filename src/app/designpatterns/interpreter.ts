export class Context {
        public micro: string = "system";
        public macro: string = "architecture";
        public unknown: boolean = true || false; 
}

export interface IAbstractTechnology {
    interpret(context: Context): void;
}

export class ConcreteTechnology implements IAbstractTechnology {
    public interpret(context: Context) : void {
            console.log("interpret method of concretetechnology is being invoked");
    }
}

export class WorkingSoftwareTechnology implements IAbstractTechnology {
    public interpret(context: Context): void{
        console.log("interpret method of workingsoftwaretechnology is being invoked");
    }
}