import {sum} from './01';
import {mult} from './01';


test('sum should be correct', ()=> {
    const a = 1;
    const b = 2;
    const c = 3;

    // action
    const result1 = sum(a, b);
    const result2 = sum(b,c)

    //expect result
    expect(result1).toBe(3);
    expect(result2).toBe(5);
}
)

test('mult should be correct', ()=> {
        const a = 1;
        const b = 2;
        const c = 3;

        // action
        const result1 = mult(a, b);
        const result2 = mult(c, b);

        //expect result
        expect(result1).toBe(2);
        expect(result2).toBe(6);
    }
)