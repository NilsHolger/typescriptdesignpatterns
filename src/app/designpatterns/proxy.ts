interface ISubject {
    doTask(): void;
}

export class Proxy implements ISubject {
        private realSubject: RealSubject;
        private s: string;

        constructor(s: string){
            this.s = s;
        }

        public doTask(): void {
            console.log(`dotask() of proxy(${this.s}) is being invoked`);
            if (this.realSubject === null || this.realSubject === undefined){
                console.log("creating a new realsubject.");
                this.realSubject = new RealSubject(this.s);
            }
            this.realSubject.doTask();
        }
}

class RealSubject implements ISubject {
    private s: string;
    constructor(s: string){ this.s = s;}
    doTask(): void {
        console.log(`dotask() of realsubject(${this.s}) is being invoked`);
    }
}