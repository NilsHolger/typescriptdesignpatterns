interface IFlyweight {
    operation(s: string) : void;
}

export class ConcreteFlyWeight implements IFlyweight {
        private intrinsicState: string;

        constructor(intrinsicState: string){
            this.intrinsicState = intrinsicState;
        }

        public operation(s: string) : void {
            console.log("operation of concreteflyweight " + s + " is being invoked.");
        }
}

export class UnsharedConcreteFlyweight implements IFlyweight {
        private allState: number;

        constructor(allState: number){
            this.allState = allState;
        }

        public operation(s : string) : void {
            console.log("operation of unsharedconcreteflyweight " + s + " is being invoked.");
        }
}

export class FlyweightFactory {
        private fliesMap: { [s : string]: IFlyweight;} = <any>{};
        constructor() {}
        public getFlyweight(key: string): IFlyweight {
                if (this.fliesMap[key] === undefined || null){
                    this.fliesMap[key] = new ConcreteFlyWeight(key);
                }
                return this.fliesMap[key];
        }
}