interface IIterator {
    next(): any;
    hasNext(): boolean;
}
interface IAggregator {
    createIterator(): IIterator;
}
export class ConcreteIterator implements IIterator {
        private collection: any[] = [];
        private position: number = 0;
        constructor(collection: any[]){
            this.collection = collection;
        }
        next(): any {
            let result = this.collection[this.position];
            this.position += 1;
            return result;
        }
        hasNext(): boolean {
            if (this.position < this.collection.length){
                return true;
            } else {
                return false;
            }
        }
}
export class Numbers implements IAggregator {
        private collection: number[] = [];
        constructor(collection: number[]){
            this.collection = collection;
        }
        public createIterator(): IIterator{
            return new ConcreteIterator(this.collection);
        }
}