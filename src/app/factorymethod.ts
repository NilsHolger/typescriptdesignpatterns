
interface IAbstractTechnology {
    function(param?: any) : string;
}
class ConcreteTechnologyA implements IAbstractTechnology{
    function = (param?: any) => { return "function of concretetechnologya";}
}
class ConcreteTechnologyB implements IAbstractTechnology{
    function = (param?: any) => { return "function of concretetechnologyb";}
}
class ConcreteTechnologyC implements IAbstractTechnology{
    function = (param?: any) => { return "function of concretetechnologyc";}
}
class UnknownTechnology implements IAbstractTechnology{
    function = (param?: any) => { return "unknown function/technology";}
}

class TechnologyFactory {
    public static createTechnology(type: string): IAbstractTechnology{
        return type === "A" ? new ConcreteTechnologyA() : 
        type === "B" ? new ConcreteTechnologyB() : 
        type === "C" ? new ConcreteTechnologyC() : new UnknownTechnology();
    }
}

export class FactoryMethod {
        show(param: string) : string {
            const a: IAbstractTechnology = TechnologyFactory.createTechnology(param);
            return a.function();
        }
}

