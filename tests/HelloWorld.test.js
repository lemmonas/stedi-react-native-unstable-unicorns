import HelloWorld from '../utils/HelloWorld.js';

it ('Should say "Hello Sean!"',()=>{
    const response = HelloWorld();

    expect(response).toBe("Hello Sean!");
})