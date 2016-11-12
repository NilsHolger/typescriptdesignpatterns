interface IAbstractTechnologyA{
    functionA(): string;
}
interface IAbstractTechnologyB{
    functionB(): number;
}

interface IAbstractFactory{
    createTechnologyA(): IAbstractTechnologyA;
    createTechnologyB(): IAbstractTechnologyB;
}

class TechnologyA1 implements IAbstractTechnologyA{
    functionA = () => {return "this is functionA of TechnologyA1";}
}
class TechnologyB1 implements IAbstractTechnologyB{
    functionB = () => {return 100;}
}
class TechnologyA2 implements IAbstractTechnologyA{
    functionA = () => {return "this is functionA of TechnologyA2";}
}
class TechnologyB2 implements IAbstractTechnologyB{
    functionB = () => {return 101;}
}

class ConcreteFactory1 implements IAbstractFactory{
    createTechnologyA() : IAbstractTechnologyA{
        return new TechnologyA1();
    }
    createTechnologyB() : IAbstractTechnologyB{
        return new TechnologyB1();
    }
}
class ConcreteFactory2 implements IAbstractFactory{
    createTechnologyA() : IAbstractTechnologyA{
        return new TechnologyA2();
    }
    createTechnologyB() : IAbstractTechnologyB{
        return new TechnologyB2();
    }
}


export class AbstractFactory {
    private abstractTechnologyA : IAbstractTechnologyA;
    private abstractTechnologyB : IAbstractTechnologyB;
    constructor(factory: IAbstractFactory){
            this.abstractTechnologyA = factory.createTechnologyA();
            this.abstractTechnologyB = factory.createTechnologyB();
    }
    public execute(): string{
        return this.abstractTechnologyA.functionA() + " " + this.abstractTechnologyB.functionB();
    }
}
