class Adaptee {
    public method(): void {
        console.log("method of adaptee is being called");
    }
}

interface ITarget{
    call():void;
}


export class Adapter implements ITarget {
        public call(): void {
            console.log("adapters call method is being called");
            const adaptee : Adaptee = new Adaptee();
            adaptee.method();
        }

}
