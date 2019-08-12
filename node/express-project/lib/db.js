const { find,
    show,
    remov,
    updata,
    find1,
    show1,
    remov1,
    updata1
} = require('./home');
(async () => {
    //调用查
    // let dat = await find('userlist', {
    //     username: 'kaijing'
    // });
    //调用增    用数组来调用
    // let dat = await show('userlist', [{
    //     username: 'wuge', psw: '456'
    // }]);
    // console.log(dat);
    //调用删
    // let dat = await remov('userlist', {
    //     username: 'wuge', psw: '456'
    // });
    // console.log(dat);
    //调用改
    // let dat = await updata1('userlist', { username: 'kaijing' },
    //     { username: 'gengwu' }
    // );
    // console.log(dat);




    //sql语句的查询
    // let dat = await find1('student', {
    //     id: 2
    // });
    // console.log(dat);
    //sql语句的增加
    // let dat = await show1('student', {
    //     name: 'kaijing',
    //     age: 20
    // });
    // console.log(dat);
    // //mysql语句的删除
    // let dat = await remov1('student', {
    //     name: 'kaijing'
    // });
    // console.log(dat);
    //mysql语句的更新
    let dat = await updata1('student', {
        name: 'kaijing',
        age: 20
    });
    console.log(dat);
})();
