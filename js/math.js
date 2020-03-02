class Math{
    mult(a,b,callback){
        setTimeout(() => {
            callback(a*b);
        },0);
    }

    div(a,b){
        return a/b;
    }

    printDiv(req,resp ,a,b){
        resp.load('index',a+b);
    }

}

module.exports = Math;