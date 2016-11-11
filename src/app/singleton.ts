export class Singleton {
        private static instance: Singleton;
        constructor(){}
        static get Instance(){
                if (this.instance === null || this.instance === undefined){
                    this.instance = new Singleton();
                }
                return this.instance;
        }
        show() : string {
            let singleton1 = Singleton.Instance;
            let singleton2 = Singleton.Instance;
            let singleton3 = Singleton.Instance;
            if (singleton1 === singleton2 && singleton2 === singleton3){
                return "three singletons are equivalent";
            } else {
                return "three singletons are not equivalent";
            }
        }
}
