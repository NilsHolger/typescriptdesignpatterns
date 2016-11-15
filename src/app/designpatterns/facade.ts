class Technology1 {
    public function1() : void {
        console.log("function1 of technology1");
    }
}
class Technology2 {
    public function2() : void {
        console.log("function2 of technology2");
    }
}
class Technology3 {
    public function3() : void {
        console.log("function3 of technology3");
    }
}
export class Facade {
    private tech1: Technology1 = new Technology1();
    private tech2: Technology2 = new Technology2();
    private tech3: Technology3 = new Technology3();
    public implementation1(): void {
        console.log("implementation1 is invoked -------");
        this.tech1.function1();
        this.tech2.function2();
        console.log("----------------------------------");
    }
    public implementation2(): void {
        console.log("implementation2 is invoked -------");
        this.tech1.function1();
        this.tech3.function3();
        console.log("----------------------------------");
    }
}