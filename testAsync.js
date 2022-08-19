
/*
Sync. call
function run()
{
    const start = Date.now();
    for( let i = 0; i < 100000000; i++){}
    const end = Date.now();
    console.log( end- start + 'ms');
    
}
run();
console.log('DONE.');
*/


/* Async call by setTimeout 
function run()
{
    setTimeout(
        function(){
            const start = Date.now();
            for( let i = 0; i < 100000000; i++){}
            const end = Date.now();
            console.log( end- start + 'ms');
        }
        , 1000
    )
}
run();
console.log('DONE.');
*/

/*
async call but  sequence control
function run( callback )
{
    setTimeout(
        ()=>{
            const start = Date.now();
            for( let i = 0; i < 100000000; i++){}
            const end = Date.now();
            console.log( end- start + 'ms');
            callback();
        }
        , 1000
    );
    
}

run( function(){
    console.log( 'DONE3');
}
);
*/

function run() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const start = Date.now();
            for (let i = 0; i < 1000000000; i++) {}
            const end = Date.now();
            console.log(end - start + 'ms');
            resolve();
        }, 0);
    });
}

// function 앞에 async 를 붙이는 것은  함수내에서 비동기 호출이 들어갈 수 있다고 선언하는 것임

async function process() {

    await run();    // Promise 객체를 반환하는 함수를 호출할때는 await로 받는다.
    await run();    // 비동기식 호출로 cpu 타임을 낭비하지 않고 뒤에서 돌지만, 프로그램 흐름은 순차적으로 처리된다.
    // 이로써 비동기 호출 +  흐름순서(코딩이해편의)  두 마리 토끼를 잡는다.

    console.log('Done !!!');
}
 
process();
