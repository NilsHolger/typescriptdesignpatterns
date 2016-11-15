interface Component {
    operation(): void;
}


export class Composite implements Component {

            private list : Component[];
            private s : string;

            constructor(s : string){
                    this.list = [];
                    this.s = s;
            }

            public operation() : void {
                console.log("operation of Composite " + this.s + " is invoked.");
                for (let i = 0; i < this.list.length; i += 1){
                    this.list[i].operation();
                }
            }
            public add(c : Component){
                this.list.push(c);
            }

            public remove(i : number){
                if (this.list.length <= 1) { throw new Error("index out of bounds.");}
                this.list.splice(i, i);
            }

}

export class Leaf implements Component {
                private s: string;
                constructor(s: string){
                    this.s = s;
                }
            public operation() : void {
                console.log("operation of Leaf " +  this.s  + " is invoked.");
            }
}