import rpA from 'request-promise';
class indexModel {
  constructor(ctx) {
    this.ctx = ctx;
}
//为了实现数据库更新建立方法 传数据的接口
updateNum() {
    const options = {
        uri: 'http://localhost/homework_two/koatest/praise.php',
        method:'GET',
        json:true
    };
    return new Promise((resolve,reject)=>{
        rpA(options).then(function(result){
            const info = JSON.parse(result);
            console.log(info);
            if(info){
              
                resolve({data:info.result});
            }else{
                reject({});
                }
            })
        })
    }
}
//将该方法导出，  indexController.js 文件要用到
export default indexModel;
