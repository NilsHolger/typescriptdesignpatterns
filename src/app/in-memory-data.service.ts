import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
        createDb() {
            let technologies = [
            {id: 1, name: "NodeJS", url: 'https://nodejs.org/dist/latest-v7.x/docs/api/'},
            {id: 2, name: "JavaScript", url: 'http://www.ecma-international.org/ecma-262/6.0/'},
            {id: 3, name: "C++", url: 'https://github.com/isocpp/CppCoreGuidelines/blob/master/CppCoreGuidelines.md'},
            {id: 4, name: "V8", url: 'https://developers.google.com/v8/'},
            {id: 5, name: "libuv", url: 'http://libuv.org/'},
            {id: 6, name: "Angular", url: 'https://angular.io/'},
            {id: 7, name: "HTML5", url: 'https://www.w3.org/TR/html5/'},
            {id: 8, name: "CSS3", url: 'https://www.w3.org/Style/CSS/specs.en.html'},
            {id: 9, name: "Firebase", url: 'https://firebase.google.com/docs/'},
            {id: 10, name: "MongoDB", url: 'https://www.mongodb.com/community'},
            {id: 11, name: "Express", url: 'http://expressjs.com/'},
            {id: 12, name: "MDN", url: 'https://developer.mozilla.org/en/'},
            {id: 13, name: "WebSocket", url: 'https://tools.ietf.org/html/rfc6455'}
            ];
            return {technologies};
        }
}


//https://angular.io/docs/ts/latest/guide/server-communication.html#!#in-mem-web-api