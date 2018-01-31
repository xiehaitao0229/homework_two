'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var indexModel = function () {
    function indexModel(ctx) {
        _classCallCheck(this, indexModel);

        this.ctx = ctx;
    }
    //为了实现数据库更新建立方法 传数据的接口


    _createClass(indexModel, [{
        key: 'updateNum',
        value: function updateNum() {
            var options = {
                uri: 'http://localhost/homework_two/koatest/praise.php',
                method: 'GET',
                json:true
            };
            return new Promise(function (resolve, reject) {
                (0, _requestPromise2.default)(options).then(function (result) {
                    console.log(result);
                    var info = result;
                    if (info) {

                        resolve({ data: info.result });
                    } else {
                        reject({});
                    }
                });
            });
        }
    }]);

    return indexModel;
}();
//将该方法导出，  indexController.js 文件要用到


exports.default = indexModel;
