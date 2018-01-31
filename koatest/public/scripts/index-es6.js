let f = '';

class PraiseButton {
    constructor(num, element) {
        this.num = num;
        this.element = element
    }

    clickAction() {
        this.element.click(() => {
            //判断事件是否已经存在，如果存在便会将其清除掉，所以点击只会执行最后一次点击的那次事件
            if (f) {
                clearTimeout(f);
            }
            f = setTimeout(() => {
                if (this.num < 10) {
                    this
                        .element
                        .css('-webkit-filter', 'grayscale(0)')
                    this.num = add(this.num)
                } else {
                    this
                        .element
                        .css('-webkit-filter', 'grayscale(1)')
                    this.num = 0
                }
                axios.get('/index/update')
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                console.log(this.num);
            }, 800)
        })
    }
}

class Thumb extends PraiseButton {
    constructor(num, element) {
        super(num, element);
    }
}

export default {
    Thumb
};