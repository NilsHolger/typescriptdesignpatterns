interface IPrototype{
    copy(): IPrototype;
    toString(): string;
}
class Concrete0 implements IPrototype{
    copy(): IPrototype{
        return new Concrete0(); 
    }
    toString(): string{
        return "this is concrete0";
    }
}
class Concrete1 implements IPrototype{
    copy(): IPrototype{
        return new Concrete1();
    }
    toString(): string{
        return "this is concrete1";
    }
}
class Concrete2 implements IPrototype{
    copy(): IPrototype{
        return new Concrete2();
    }
    toString(): string{
        return "this is concrete2";
    }
}
class Concrete3 implements IPrototype{
    copy(): IPrototype{
        return new Concrete3();
    }
    toString(): string{
        return "this is concrete3";
    }
}
export class Prototype {
    private prototypeMap: { [supersex: string]: IPrototype} = {};
    constructor(){
            this.prototypeMap["c0"] = new Concrete0();
            this.prototypeMap["c1"] = new Concrete1();
            this.prototypeMap["c2"] = new Concrete2();
            this.prototypeMap["c3"] = new Concrete3();
    }
    createOne(s : string): IPrototype{
        return this.prototypeMap[s].copy();
    }
}
