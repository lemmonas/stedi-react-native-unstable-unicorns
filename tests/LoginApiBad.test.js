import fetch from 'node-fetch';

it('Should get a login token',async ()=>{

    const loginResponse = await fetch('https://dev.stedi.me/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            "userName":"scmurdock@gmail.com",
            "password":"lllllllllll"
        })
    })
    expect(loginResponse.status).toBe(401);//401 means unauthorized
})