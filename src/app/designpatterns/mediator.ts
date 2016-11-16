interface IMediator {
    send(msg: string, colleague: Colleague): void;

}

export class Colleague {
        public mediator: IMediator;

        constructor(mediator: IMediator){
            this.mediator = mediator;
        }

        public send(msg: string): void {
            throw new Error("abstract method");
        }

        public receive(msg: string): void {
            throw new Error("abstract method");
        }
}

export class ConcreteColleagueA extends Colleague {
        constructor(mediator: IMediator){
            super(mediator);
        }
        public send(msg: string): void {
            this.mediator.send(msg, this);
        }
        public receive(msg: string): void {
            console.log(`${msg} receive of concretecolleagueA is being invoked`);
        }
}
export class ConcreteColleagueB extends Colleague {
        constructor(mediator: IMediator){
            super(mediator);
        }
        public send(msg: string): void {
            this.mediator.send(msg, this);
        }
        public receive(msg: string): void {
            console.log(`${msg} receive of concretecolleagueB is being invoked`);
        }
}
export class ConcreteMediator implements IMediator {
        public concreteColleagueA: ConcreteColleagueA;
        public concreteColleagueB: ConcreteColleagueB;

        public send(msg: string, colleague: Colleague): void {
            if (this.concreteColleagueA === colleague){
                this.concreteColleagueB.receive(msg);
            } else {
                this.concreteColleagueA.receive(msg);
            }
        }
}