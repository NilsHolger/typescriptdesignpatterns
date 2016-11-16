export interface IStrategy {
    execute(): void;
}

export class ConcreteStrategy1 implements IStrategy {
    public execute(): void {
        console.log("execute method of concretestrategy1 is being invoked");
    }
}

export class ConcreteStrategy2 implements IStrategy {
    public execute(): void {
        console.log("execute method of concretestrategy2 is being invoked");
    }
}

export class ConcreteStrategy3 implements IStrategy {
    public execute(): void {
        console.log("execute method of concretestrategy3 is being invoked");
    }
}

export class Context {
    private strategy: IStrategy;

    constructor(strategy: IStrategy){
        this.strategy = strategy;
    }
    public executeStrategy(): void {
        this.strategy.execute();
    }

}