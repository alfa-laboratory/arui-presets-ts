import * as ts from 'typescript';

class AnswersGiver {
    question: string = 'The answer to the ultimate question of life, the universe and everything is';

    getAnswer(): string {
        return `${this.question} 42`;
    }
}

const giver = new AnswersGiver();

console.log(giver.getAnswer());
console.log(ts.version);
