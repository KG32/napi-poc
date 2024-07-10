import { fibonacciRs, RustBulbulator, BulBulQueryType } from '../rs';
import { fibonacciTs } from './fibonacci';


// Fibonacci benchmark
const targetFibSequenceIndex = 45;
const tsResult = benchmarkFn(fibonacciTs.bind(null, targetFibSequenceIndex), "Typescript Fibonacci");
const rsResult= benchmarkFn(fibonacciRs.bind(null, targetFibSequenceIndex), "Rust Fibonacci");
console.log(`Sequence num #${targetFibSequenceIndex}:`, { tsResult, rsResult });


// struct / impl -> class Bulbulator
const rustBulbulator = new RustBulbulator('Bulbulator1');

const unusedRustBulbulator = new RustBulbulator('Bulbulator2');

rustBulbulator.bulbul();
rustBulbulator.bulbul();

setTimeout(() => {
    console.log(`Bulbulator1 bulbul count: ${rustBulbulator.bulbubsCount}\n`);

    const firstBulBulAgo = rustBulbulator.timeSinceBulbul(BulBulQueryType.Last);

    console.log(`First bulbul (Bulbulator1): ${firstBulBulAgo} ms ago\n`);

    const neverHappenedBulBul = unusedRustBulbulator.timeSinceBulbul(BulBulQueryType.First);

    console.log(`Bulbulator2 first bulbul: ${neverHappenedBulBul}`);
}, 500);


// util
function benchmarkFn<T>(fn: () => T, label: string): T {
    console.time(label);
    const output = fn();
    console.timeEnd(label);
    return output;
}
