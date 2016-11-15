export class Handler {
        private handler: Handler;
        private req: number;
        constructor(req: number){
            this.req = req;
        }
        public setHandler(handler: Handler){
            this.handler = handler;
        }
        public operation(msg: string, req: number){
            if (req <= this.req){
                this.handlerRequest(msg);
            } else if (this.handler !== null && this.handler !== undefined){
                this.handler.operation(msg, req);
            }
        }
        public handlerRequest(msg: string) : void{
            throw new Error("abstract method");
        }
}

export class ConcreteHandler1 extends Handler {
    constructor(req: number){
        super(req);
    }
    public handlerRequest(msg: string){
        console.log("message(concretehandler1) :: " + msg);
    }
}

export class ConcreteHandler2 extends Handler {
    constructor(req: number){
        super(req);
    }
    public handlerRequest(msg: string){
        console.log("message(concretehandler2) :: " + msg);
    }
}

export class ConcreteHandler3 extends Handler {
    constructor(req: number){
        super(req);
    }
    public handlerRequest(msg: string){
        console.log("message(concretehandler3) :: " + msg);
    }
}