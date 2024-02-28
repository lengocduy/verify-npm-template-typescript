const {
    sub,
} = require('@make-everything-simple/verify-npm-template-typescript');
const { add } = require('@make-everything-simple/npm-template-typescript');

function showResultSubOf(a, b) {
    return `@make-everything-simple/npm-template-typescript: sub of ${a} - ${b} = ${sub(a, b)} `;
}

function showResultSumOf(a, b) {
    return `@make-everything-simple/npm-template-typescript: sub of ${a} + ${b} = ${add(a, b)} `;
}

console.log(showResultSumOf(7, 3));
console.log(showResultSubOf(7, 3));
