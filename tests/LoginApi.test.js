import fetch from 'node-fetch';

it('Should get a login token',async ()=>{

    const loginResponse = await fetch('https://dev.stedi.me/login',{
        method:'POST',
        headers:{
            'Content-Type':'appliction/json'
        },
        body:JSON.stringify({
            "userName":"scmurdock@gmail.com",
            "password":"P@ssw0rd"
        })
    })
    expect(loginResponse.status).toBe(200);//401 means unauthorized
})