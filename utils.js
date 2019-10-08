function resolveAfter2Seconds(x){
    return new Promise(resolve => {
        setTimeout(() => {
          resolve(x)
        },2000);
    });
}

async function add1(x) {
    const a =  await resolveAfter2Seconds(20);
    const b =  await resolveAfter2Seconds(30);
    return x+a+b;
}

async function add2(x){
    const p_a = resolveAfter2Seconds(20);
    const p_b = resolveAfter2Seconds(30);

    return x + await p_a + await p_b;
}

export {add1,add2};