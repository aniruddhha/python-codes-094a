import { 
    giveMeNullObj, 
    giveMeObj,
    getMeNumber,
    getMeString,
    getMeException
} from './matchers'

test ('check object equality', () => {

    const obj = giveMeObj()

    expect(obj).toEqual({ a : 1 , b : 2 })
})

test ('check object not null', () => {

    expect(giveMeObj()).not.toBeNull()
    expect(undefined).toBeFalsy();
    expect(null).toBeFalsy();
    expect(0).toBeFalsy();
    expect( 1 != 1).toBeFalsy();
})

test('check number ', () => {
    const num = getMeNumber(); 
    expect(num).toBeGreaterThan(5);
    expect(num).toBe(10);
})

test('string checking', () => {
    const str = getMeString()

    expect(str).toMatch('abc is abc and not pqr')
})

test('exception testing', () => {
    expect(() => getMeException(78)).toThrow();
    expect(() => getMeException(78)).toThrow(Error);
    expect(() => getMeException(78)).toThrow('Bad Data');
})