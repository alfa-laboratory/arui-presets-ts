import * as ts from 'typescript';

class  AnswersGiver {
    question: string = 'The answer to the ultimate question of life, the universe and everything is';

    getAnswer(): string {
        return `${this.question} 42`;
    }
}

const actionType = '@TEST/ACTION_NAME';
const action = {
    type: actionType
} as const;

const giver = new AnswersGiver();

console.log(giver.getAnswer());
console.log(action);
console.log(ts.version);
