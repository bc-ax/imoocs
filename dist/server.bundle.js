/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/LoginController.js":
/*!************************************!*\
  !*** ./src/api/LoginController.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_MailConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/MailConfig */ \"./src/config/MailConfig.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass LoginController {\n  constructor() {}\n\n  async forget(ctx) {\n    const {\n      body\n    } = ctx.request;\n\n    try {\n      let result = await Object(_config_MailConfig__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        code: '1234',\n        expire: moment__WEBPACK_IMPORTED_MODULE_1___default()().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),\n        email: body.username,\n        user: 'bc-ax'\n      });\n      ctx.body = {\n        code: 200,\n        data: result,\n        msg: '邮件发送成功'\n      };\n    } catch (error) {\n      console.log(error);\n    }\n  } // async login(ctx) {\n  // }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new LoginController());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL0xvZ2luQ29udHJvbGxlci5qcz85NTA3Il0sIm5hbWVzIjpbIkxvZ2luQ29udHJvbGxlciIsImNvbnN0cnVjdG9yIiwiZm9yZ2V0IiwiY3R4IiwiYm9keSIsInJlcXVlc3QiLCJyZXN1bHQiLCJzZW5kIiwiY29kZSIsImV4cGlyZSIsIm1vbWVuZCIsImFkZCIsImZvcm1hdCIsImVtYWlsIiwidXNlcm5hbWUiLCJ1c2VyIiwiZGF0YSIsIm1zZyIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLE1BQU1BLGVBQU4sQ0FBc0I7QUFDbEJDLGFBQVcsR0FBRyxDQUFHOztBQUNqQixRQUFNQyxNQUFOLENBQWFDLEdBQWIsRUFBa0I7QUFDZCxVQUFNO0FBQUVDO0FBQUYsUUFBV0QsR0FBRyxDQUFDRSxPQUFyQjs7QUFDQSxRQUFJO0FBQ0EsVUFBSUMsTUFBTSxHQUFHLE1BQU1DLGtFQUFJLENBQUM7QUFDcEJDLFlBQUksRUFBRSxNQURjO0FBRXBCQyxjQUFNLEVBQUVDLDZDQUFNLEdBQUdDLEdBQVQsQ0FBYSxFQUFiLEVBQWlCLFNBQWpCLEVBQTRCQyxNQUE1QixDQUFtQyxxQkFBbkMsQ0FGWTtBQUdwQkMsYUFBSyxFQUFFVCxJQUFJLENBQUNVLFFBSFE7QUFJcEJDLFlBQUksRUFBRTtBQUpjLE9BQUQsQ0FBdkI7QUFNQVosU0FBRyxDQUFDQyxJQUFKLEdBQVc7QUFDUEksWUFBSSxFQUFFLEdBREM7QUFFUFEsWUFBSSxFQUFFVixNQUZDO0FBR1BXLFdBQUcsRUFBRTtBQUhFLE9BQVg7QUFLSCxLQVpELENBWUUsT0FBT0MsS0FBUCxFQUFjO0FBQ1pDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0g7QUFDSixHQW5CaUIsQ0FxQmxCO0FBRUE7OztBQXZCa0I7O0FBMEJQLG1FQUFJbEIsZUFBSixFQUFmIiwiZmlsZSI6Ii4vc3JjL2FwaS9Mb2dpbkNvbnRyb2xsZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2VuZCBmcm9tICcuLi9jb25maWcvTWFpbENvbmZpZydcclxuaW1wb3J0IG1vbWVuZCBmcm9tICdtb21lbnQnXHJcblxyXG5jbGFzcyBMb2dpbkNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuICAgIGFzeW5jIGZvcmdldChjdHgpIHtcclxuICAgICAgICBjb25zdCB7IGJvZHkgfSA9IGN0eC5yZXF1ZXN0XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHNlbmQoe1xyXG4gICAgICAgICAgICAgICAgY29kZTogJzEyMzQnLFxyXG4gICAgICAgICAgICAgICAgZXhwaXJlOiBtb21lbmQoKS5hZGQoMzAsICdtaW51dGVzJykuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyksXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogYm9keS51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgIHVzZXI6ICdiYy1heCcsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGN0eC5ib2R5ID0ge1xyXG4gICAgICAgICAgICAgICAgY29kZTogMjAwLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgbXNnOiAn6YKu5Lu25Y+R6YCB5oiQ5YqfJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGFzeW5jIGxvZ2luKGN0eCkge1xyXG5cclxuICAgIC8vIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IExvZ2luQ29udHJvbGxlcigpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api/LoginController.js\n");

/***/ }),

/***/ "./src/api/PublicController.js":
/*!*************************************!*\
  !*** ./src/api/PublicController.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var svg_captcha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-captcha */ \"svg-captcha\");\n/* harmony import */ var svg_captcha__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_captcha__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_RedisConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/RedisConfig */ \"./src/config/RedisConfig.js\");\n\n\n\nclass PublicController {\n  constructor() {}\n\n  async getCaptcha(ctx) {\n    const body = ctx.request.query; // 获取前端传过来的sid token值\n\n    console.log(body.sid);\n    const newCaptca = svg_captcha__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n      size: 4,\n      ignoreChars: '0o1il',\n      color: true,\n      noise: Math.floor(Math.random() * 5),\n      width: 150,\n      height: 38\n    }); // 验证码\n\n    console.log(newCaptca.text); // 将数据写入redis  token 验证码的值  超时删除时间 单位：S 10分钟\n\n    Object(_config_RedisConfig__WEBPACK_IMPORTED_MODULE_1__[\"setValue\"])(body.sid, newCaptca.text, 10 * 60); // getValue(body.sid).then((res) => {\n    //   console.log(res)\n    // })\n\n    ctx.body = {\n      code: 200,\n      data: newCaptca.data\n    };\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new PublicController());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL1B1YmxpY0NvbnRyb2xsZXIuanM/NjhhZSJdLCJuYW1lcyI6WyJQdWJsaWNDb250cm9sbGVyIiwiY29uc3RydWN0b3IiLCJnZXRDYXB0Y2hhIiwiY3R4IiwiYm9keSIsInJlcXVlc3QiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJzaWQiLCJuZXdDYXB0Y2EiLCJzdmdDYXB0Y2hhIiwiY3JlYXRlIiwic2l6ZSIsImlnbm9yZUNoYXJzIiwiY29sb3IiLCJub2lzZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIndpZHRoIiwiaGVpZ2h0IiwidGV4dCIsInNldFZhbHVlIiwiY29kZSIsImRhdGEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxnQkFBTixDQUF1QjtBQUNyQkMsYUFBVyxHQUFHLENBQUc7O0FBQ2pCLFFBQU1DLFVBQU4sQ0FBaUJDLEdBQWpCLEVBQXNCO0FBQ3BCLFVBQU1DLElBQUksR0FBR0QsR0FBRyxDQUFDRSxPQUFKLENBQVlDLEtBQXpCLENBRG9CLENBRXBCOztBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBSSxDQUFDSyxHQUFqQjtBQUVBLFVBQU1DLFNBQVMsR0FBR0Msa0RBQVUsQ0FBQ0MsTUFBWCxDQUFrQjtBQUNsQ0MsVUFBSSxFQUFFLENBRDRCO0FBRWxDQyxpQkFBVyxFQUFFLE9BRnFCO0FBR2xDQyxXQUFLLEVBQUUsSUFIMkI7QUFJbENDLFdBQUssRUFBRUMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixDQUEzQixDQUoyQjtBQUtsQ0MsV0FBSyxFQUFFLEdBTDJCO0FBTWxDQyxZQUFNLEVBQUU7QUFOMEIsS0FBbEIsQ0FBbEIsQ0FMb0IsQ0FhcEI7O0FBQ0FkLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRSxTQUFTLENBQUNZLElBQXRCLEVBZG9CLENBZXBCOztBQUNBQyx3RUFBUSxDQUFDbkIsSUFBSSxDQUFDSyxHQUFOLEVBQVdDLFNBQVMsQ0FBQ1ksSUFBckIsRUFBMkIsS0FBSyxFQUFoQyxDQUFSLENBaEJvQixDQWlCcEI7QUFDQTtBQUNBOztBQUVBbkIsT0FBRyxDQUFDQyxJQUFKLEdBQVc7QUFDVG9CLFVBQUksRUFBRSxHQURHO0FBRVRDLFVBQUksRUFBRWYsU0FBUyxDQUFDZTtBQUZQLEtBQVg7QUFJRDs7QUEzQm9COztBQThCUixtRUFBSXpCLGdCQUFKLEVBQWYiLCJmaWxlIjoiLi9zcmMvYXBpL1B1YmxpY0NvbnRyb2xsZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3ZnQ2FwdGNoYSBmcm9tICdzdmctY2FwdGNoYSdcbmltcG9ydCB7IHNldFZhbHVlIH0gZnJvbSAnQC9jb25maWcvUmVkaXNDb25maWcnXG5cbmNsYXNzIFB1YmxpY0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBhc3luYyBnZXRDYXB0Y2hhKGN0eCkge1xuICAgIGNvbnN0IGJvZHkgPSBjdHgucmVxdWVzdC5xdWVyeVxuICAgIC8vIOiOt+WPluWJjeerr+S8oOi/h+adpeeahHNpZCB0b2tlbuWAvFxuICAgIGNvbnNvbGUubG9nKGJvZHkuc2lkKVxuXG4gICAgY29uc3QgbmV3Q2FwdGNhID0gc3ZnQ2FwdGNoYS5jcmVhdGUoe1xuICAgICAgc2l6ZTogNCxcbiAgICAgIGlnbm9yZUNoYXJzOiAnMG8xaWwnLFxuICAgICAgY29sb3I6IHRydWUsXG4gICAgICBub2lzZTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSksXG4gICAgICB3aWR0aDogMTUwLFxuICAgICAgaGVpZ2h0OiAzOCxcbiAgICB9KVxuICAgIC8vIOmqjOivgeeggVxuICAgIGNvbnNvbGUubG9nKG5ld0NhcHRjYS50ZXh0KVxuICAgIC8vIOWwhuaVsOaNruWGmeWFpXJlZGlzICB0b2tlbiDpqozor4HnoIHnmoTlgLwgIOi2heaXtuWIoOmZpOaXtumXtCDljZXkvY3vvJpTIDEw5YiG6ZKfXG4gICAgc2V0VmFsdWUoYm9keS5zaWQsIG5ld0NhcHRjYS50ZXh0LCAxMCAqIDYwKVxuICAgIC8vIGdldFZhbHVlKGJvZHkuc2lkKS50aGVuKChyZXMpID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAvLyB9KVxuXG4gICAgY3R4LmJvZHkgPSB7XG4gICAgICBjb2RlOiAyMDAsXG4gICAgICBkYXRhOiBuZXdDYXB0Y2EuZGF0YSxcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFB1YmxpY0NvbnRyb2xsZXIoKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api/PublicController.js\n");

/***/ }),

/***/ "./src/config/MailConfig.js":
/*!**********************************!*\
  !*** ./src/config/MailConfig.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n // async..await is not allowed in global scope, must use a wrapper\n\nasync function send(sendInfo) {\n  // Generate test SMTP service account from ethereal.email\n  // Only needed if you don't have a real mail account for testing\n  // let testAccount = await nodemailer.createTestAccount();\n  // create reusable transporter object using the default SMTP transport\n  let transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default.a.createTransport({\n    host: \"smtp.qq.com\",\n    port: 587,\n    secure: false,\n    // true for 465, false for other ports\n    auth: {\n      user: '1542650614@qq.com',\n      // generated ethereal user\n      pass: 'bdtclyghuboqfgcj' // generated ethereal password\n\n    }\n  }); // let sendInfo = {\n  //     user: 'bc-ax',\n  //     email: '1542650614@qq.com',\n  //     code: '1234',\n  //     expire: '2020-12-17'\n  // }\n\n  let url = 'http://www.immoc.com'; // send mail with defined transport object\n\n  let info = await transporter.sendMail({\n    from: '\"hello,认证邮件 👻\" <1542650614@qq.com>',\n    // sender address\n    to: sendInfo.email,\n    // list of receivers\n    subject: sendInfo.user !== '' ? `你好开发者${sendInfo.user},注册码` : '你好开发者，注册码',\n    // Subject line\n    text: `你好，你的邀请码是${sendInfo.code},过期时间是${sendInfo.expire}`,\n    // plain text body\n    html: `\n            <div style=\"border: 1px solid #dcdcdc;color: #676767;width: 600px; margin: 0 auto; padding-bottom: 50px;position: relative;\">\n            <div style=\"height: 60px; background: #393d49; line-height: 60px; color: #58a36f; font-size: 18px;padding-left: 10px;\">Imooc社区——欢迎来到官方社区</div>\n            <div style=\"padding: 25px\">\n            <div>您好，${sendInfo.user}童鞋，重置链接有效时间30分钟，请在${sendInfo.expire}之前重置您的密码：</div>\n            <a href=\"${url}\" style=\"padding: 10px 20px; color: #fff; background: #009e94; display: inline-block;margin: 15px 0;\">立即重置密码</a>\n            <div style=\"padding: 5px; background: #f2f2f2;\">如果该邮件不是由你本人操作，请勿进行激活！否则你的邮箱将会被他人绑定。</div>\n            </div>\n            <div style=\"background: #fafafa; color: #b4b4b4;text-align: center; line-height: 45px; height: 45px; position: absolute; left: 0; bottom: 0;width: 100%;\">系统邮件，请勿直接回复</div>\n        </div>\n        ` // html body\n\n  });\n  return \"Message sent: %s\", info.messageId; // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>\n  // Preview only available when sending through an Ethereal account\n  // console.log(\"Preview URL: %s\", nodemailer.getTestMessageUrl(info));\n  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...\n} // main().catch(console.error);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (send);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL01haWxDb25maWcuanM/MmRiMSJdLCJuYW1lcyI6WyJzZW5kIiwic2VuZEluZm8iLCJ0cmFuc3BvcnRlciIsIm5vZGVtYWlsZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJob3N0IiwicG9ydCIsInNlY3VyZSIsImF1dGgiLCJ1c2VyIiwicGFzcyIsInVybCIsImluZm8iLCJzZW5kTWFpbCIsImZyb20iLCJ0byIsImVtYWlsIiwic3ViamVjdCIsInRleHQiLCJjb2RlIiwiZXhwaXJlIiwiaHRtbCIsIm1lc3NhZ2VJZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0NBRUE7O0FBQ0EsZUFBZUEsSUFBZixDQUFvQkMsUUFBcEIsRUFBOEI7QUFDMUI7QUFDQTtBQUNBO0FBRUE7QUFDQSxNQUFJQyxXQUFXLEdBQUdDLGlEQUFVLENBQUNDLGVBQVgsQ0FBMkI7QUFDekNDLFFBQUksRUFBRSxhQURtQztBQUV6Q0MsUUFBSSxFQUFFLEdBRm1DO0FBR3pDQyxVQUFNLEVBQUUsS0FIaUM7QUFHMUI7QUFDZkMsUUFBSSxFQUFFO0FBQ0ZDLFVBQUksRUFBRSxtQkFESjtBQUN5QjtBQUMzQkMsVUFBSSxFQUFFLGtCQUZKLENBRXdCOztBQUZ4QjtBQUptQyxHQUEzQixDQUFsQixDQU4wQixDQWdCMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQUlDLEdBQUcsR0FBRyxzQkFBVixDQXRCMEIsQ0F1QjFCOztBQUNBLE1BQUlDLElBQUksR0FBRyxNQUFNVixXQUFXLENBQUNXLFFBQVosQ0FBcUI7QUFDbENDLFFBQUksRUFBRSxxQ0FENEI7QUFDVztBQUM3Q0MsTUFBRSxFQUFFZCxRQUFRLENBQUNlLEtBRnFCO0FBRWQ7QUFDcEJDLFdBQU8sRUFBRWhCLFFBQVEsQ0FBQ1EsSUFBVCxLQUFrQixFQUFsQixHQUF3QixRQUFPUixRQUFRLENBQUNRLElBQUssTUFBN0MsR0FBcUQsV0FINUI7QUFHeUM7QUFDM0VTLFFBQUksRUFBRyxZQUFXakIsUUFBUSxDQUFDa0IsSUFBSyxTQUFRbEIsUUFBUSxDQUFDbUIsTUFBTyxFQUp0QjtBQUl5QjtBQUMzREMsUUFBSSxFQUFHOzs7O3NCQUlPcEIsUUFBUSxDQUFDUSxJQUFLLHFCQUFvQlIsUUFBUSxDQUFDbUIsTUFDcEQ7dUJBQ1VULEdBQUk7Ozs7O1NBWGUsQ0FnQi9COztBQWhCK0IsR0FBckIsQ0FBakI7QUFtQkEsU0FBTyxvQkFBb0JDLElBQUksQ0FBQ1UsU0FBaEMsQ0EzQzBCLENBNEMxQjtBQUVBO0FBQ0E7QUFDQTtBQUNILEMsQ0FFRDs7O0FBQ2V0QixtRUFBZiIsImZpbGUiOiIuL3NyYy9jb25maWcvTWFpbENvbmZpZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub2RlbWFpbGVyIGZyb20gXCJub2RlbWFpbGVyXCJcclxuXHJcbi8vIGFzeW5jLi5hd2FpdCBpcyBub3QgYWxsb3dlZCBpbiBnbG9iYWwgc2NvcGUsIG11c3QgdXNlIGEgd3JhcHBlclxyXG5hc3luYyBmdW5jdGlvbiBzZW5kKHNlbmRJbmZvKSB7XHJcbiAgICAvLyBHZW5lcmF0ZSB0ZXN0IFNNVFAgc2VydmljZSBhY2NvdW50IGZyb20gZXRoZXJlYWwuZW1haWxcclxuICAgIC8vIE9ubHkgbmVlZGVkIGlmIHlvdSBkb24ndCBoYXZlIGEgcmVhbCBtYWlsIGFjY291bnQgZm9yIHRlc3RpbmdcclxuICAgIC8vIGxldCB0ZXN0QWNjb3VudCA9IGF3YWl0IG5vZGVtYWlsZXIuY3JlYXRlVGVzdEFjY291bnQoKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgcmV1c2FibGUgdHJhbnNwb3J0ZXIgb2JqZWN0IHVzaW5nIHRoZSBkZWZhdWx0IFNNVFAgdHJhbnNwb3J0XHJcbiAgICBsZXQgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XHJcbiAgICAgICAgaG9zdDogXCJzbXRwLnFxLmNvbVwiLFxyXG4gICAgICAgIHBvcnQ6IDU4NyxcclxuICAgICAgICBzZWN1cmU6IGZhbHNlLCAvLyB0cnVlIGZvciA0NjUsIGZhbHNlIGZvciBvdGhlciBwb3J0c1xyXG4gICAgICAgIGF1dGg6IHtcclxuICAgICAgICAgICAgdXNlcjogJzE1NDI2NTA2MTRAcXEuY29tJywgLy8gZ2VuZXJhdGVkIGV0aGVyZWFsIHVzZXJcclxuICAgICAgICAgICAgcGFzczogJ2JkdGNseWdodWJvcWZnY2onLCAvLyBnZW5lcmF0ZWQgZXRoZXJlYWwgcGFzc3dvcmRcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbGV0IHNlbmRJbmZvID0ge1xyXG4gICAgLy8gICAgIHVzZXI6ICdiYy1heCcsXHJcbiAgICAvLyAgICAgZW1haWw6ICcxNTQyNjUwNjE0QHFxLmNvbScsXHJcbiAgICAvLyAgICAgY29kZTogJzEyMzQnLFxyXG4gICAgLy8gICAgIGV4cGlyZTogJzIwMjAtMTItMTcnXHJcbiAgICAvLyB9XHJcbiAgICBsZXQgdXJsID0gJ2h0dHA6Ly93d3cuaW1tb2MuY29tJ1xyXG4gICAgLy8gc2VuZCBtYWlsIHdpdGggZGVmaW5lZCB0cmFuc3BvcnQgb2JqZWN0XHJcbiAgICBsZXQgaW5mbyA9IGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKHtcclxuICAgICAgICBmcm9tOiAnXCJoZWxsbyzorqTor4Hpgq7ku7Yg8J+Ru1wiIDwxNTQyNjUwNjE0QHFxLmNvbT4nLCAvLyBzZW5kZXIgYWRkcmVzc1xyXG4gICAgICAgIHRvOiBzZW5kSW5mby5lbWFpbCwgLy8gbGlzdCBvZiByZWNlaXZlcnNcclxuICAgICAgICBzdWJqZWN0OiBzZW5kSW5mby51c2VyICE9PSAnJyA/IGDkvaDlpb3lvIDlj5HogIUke3NlbmRJbmZvLnVzZXJ9LOazqOWGjOeggWAgOiAn5L2g5aW95byA5Y+R6ICF77yM5rOo5YaM56CBJywgLy8gU3ViamVjdCBsaW5lXHJcbiAgICAgICAgdGV4dDogYOS9oOWlve+8jOS9oOeahOmCgOivt+eggeaYryR7c2VuZEluZm8uY29kZX0s6L+H5pyf5pe26Ze05pivJHtzZW5kSW5mby5leHBpcmV9YCwgLy8gcGxhaW4gdGV4dCBib2R5XHJcbiAgICAgICAgaHRtbDogYFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiYm9yZGVyOiAxcHggc29saWQgI2RjZGNkYztjb2xvcjogIzY3Njc2Nzt3aWR0aDogNjAwcHg7IG1hcmdpbjogMCBhdXRvOyBwYWRkaW5nLWJvdHRvbTogNTBweDtwb3NpdGlvbjogcmVsYXRpdmU7XCI+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IDYwcHg7IGJhY2tncm91bmQ6ICMzOTNkNDk7IGxpbmUtaGVpZ2h0OiA2MHB4OyBjb2xvcjogIzU4YTM2ZjsgZm9udC1zaXplOiAxOHB4O3BhZGRpbmctbGVmdDogMTBweDtcIj5JbW9vY+ekvuWMuuKAlOKAlOasoui/juadpeWIsOWumOaWueekvuWMujwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwicGFkZGluZzogMjVweFwiPlxyXG4gICAgICAgICAgICA8ZGl2PuaCqOWlve+8jCR7c2VuZEluZm8udXNlcn3nq6XpnovvvIzph43nva7pk77mjqXmnInmlYjml7bpl7QzMOWIhumSn++8jOivt+WcqCR7c2VuZEluZm8uZXhwaXJlXHJcbiAgICAgICAgICAgIH3kuYvliY3ph43nva7mgqjnmoTlr4bnoIHvvJo8L2Rpdj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiR7dXJsfVwiIHN0eWxlPVwicGFkZGluZzogMTBweCAyMHB4OyBjb2xvcjogI2ZmZjsgYmFja2dyb3VuZDogIzAwOWU5NDsgZGlzcGxheTogaW5saW5lLWJsb2NrO21hcmdpbjogMTVweCAwO1wiPueri+WNs+mHjee9ruWvhueggTwvYT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmc6IDVweDsgYmFja2dyb3VuZDogI2YyZjJmMjtcIj7lpoLmnpzor6Xpgq7ku7bkuI3mmK/nlLHkvaDmnKzkurrmk43kvZzvvIzor7fli7/ov5vooYzmv4DmtLvvvIHlkKbliJnkvaDnmoTpgq7nrrHlsIbkvJrooqvku5bkurrnu5HlrprjgII8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiAjZmFmYWZhOyBjb2xvcjogI2I0YjRiNDt0ZXh0LWFsaWduOiBjZW50ZXI7IGxpbmUtaGVpZ2h0OiA0NXB4OyBoZWlnaHQ6IDQ1cHg7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgYm90dG9tOiAwO3dpZHRoOiAxMDAlO1wiPuezu+e7n+mCruS7tu+8jOivt+WLv+ebtOaOpeWbnuWkjTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGAsIC8vIGh0bWwgYm9keVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIFwiTWVzc2FnZSBzZW50OiAlc1wiLCBpbmZvLm1lc3NhZ2VJZFxyXG4gICAgLy8gTWVzc2FnZSBzZW50OiA8YjY1OGY4Y2EtNjI5Ni1jY2Y0LTgzMDYtODdkNTdhMGI0MzIxQGV4YW1wbGUuY29tPlxyXG5cclxuICAgIC8vIFByZXZpZXcgb25seSBhdmFpbGFibGUgd2hlbiBzZW5kaW5nIHRocm91Z2ggYW4gRXRoZXJlYWwgYWNjb3VudFxyXG4gICAgLy8gY29uc29sZS5sb2coXCJQcmV2aWV3IFVSTDogJXNcIiwgbm9kZW1haWxlci5nZXRUZXN0TWVzc2FnZVVybChpbmZvKSk7XHJcbiAgICAvLyBQcmV2aWV3IFVSTDogaHR0cHM6Ly9ldGhlcmVhbC5lbWFpbC9tZXNzYWdlL1dhUUtNZ0tkZHhRRG9vdS4uLlxyXG59XHJcblxyXG4vLyBtYWluKCkuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcbmV4cG9ydCBkZWZhdWx0IHNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config/MailConfig.js\n");

/***/ }),

/***/ "./src/config/RedisConfig.js":
/*!***********************************!*\
  !*** ./src/config/RedisConfig.js ***!
  \***********************************/
/*! exports provided: client, setValue, getValue, getHValue, delValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"client\", function() { return client; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setValue\", function() { return setValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getValue\", function() { return getValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHValue\", function() { return getHValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"delValue\", function() { return delValue; });\n/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redis */ \"redis\");\n/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redis__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bluebird */ \"bluebird\");\n/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"./src/config/index.js\");\n\n\n\nconst options = {\n  host: _index__WEBPACK_IMPORTED_MODULE_2__[\"default\"].REDIS.host,\n  prot: _index__WEBPACK_IMPORTED_MODULE_2__[\"default\"].REDIS.prot,\n  password: _index__WEBPACK_IMPORTED_MODULE_2__[\"default\"].REDIS.password,\n  // 答复将作为缓冲区发送到回调\n  detect_buffers: true,\n  retry_strategy: function (options) {\n    if (options.error && options.error.code === 'ECONNREFUSED') {\n      // 当前出现连接错误\n      return new Error('The server refused the connection');\n    }\n\n    if (options.total_retry_time > 1000 * 60 * 60) {\n      // 连接时间过长\n      return new Error('Retry time exhausted');\n    }\n\n    if (options.attempt > 10) {\n      // 连接次数大于10\n      return undefined;\n    }\n\n    return Math.min(options.attempt * 100, 3000);\n  } // const client = redis.createClient(options)\n\n};\nconst client = Object(bluebird__WEBPACK_IMPORTED_MODULE_1__[\"promisifyAll\"])(redis__WEBPACK_IMPORTED_MODULE_0___default.a.createClient(options)); // 连接失败\n\nclient.on('error', err => {\n  console.log('Redis client Error :' + err);\n});\n\nconst setValue = (key, value, time) => {\n  if (typeof value === 'undefined' || value === null || value === '') {\n    return;\n  }\n\n  if (typeof value === 'string') {\n    // 设置过期时间 自动删除数据库里的信息\n    if (typeof time !== 'undefined') {\n      client.set(key, value, 'EX', time);\n    } else {\n      client.set(key, value);\n    }\n  } else if (typeof value === 'object') {\n    // {key1:value1,key2:value2}\n    //object.keys(value) => [key1,key2]\n    //redis.print 一个方便的回调函数，用于在测试时显示返回值\n    Object.keys(value).forEach(item => {\n      client.hset(key, item, value[item], redis__WEBPACK_IMPORTED_MODULE_0___default.a.print);\n    });\n  }\n}; // 将get方法转换成异步的\n// const { promisify } = require('util')\n// const getAsync = promisify(client.get).bind(client)\n\n\nconst getValue = key => {\n  // return getAsync(key)\n  return client.getAsync(key);\n};\n\nconst getHValue = key => {\n  // client.hgetall 应答将被转换成一个JavaScript对象\n  // 这样就可以使用JavaScript语法与响应交互。\n  // hgetall返回一个由散列键组成的对象。\n  // return promisify(client.hgetall).bind(client)(key)\n  return client.hgetallAsync(key);\n};\n\nconst delValue = key => {\n  client.del(key, (err, res) => {\n    if (res === 1) {\n      console.log('delect successfully');\n    } else {\n      console.log('delect redis key error:' + err);\n    }\n  });\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL1JlZGlzQ29uZmlnLmpzP2I3ODkiXSwibmFtZXMiOlsib3B0aW9ucyIsImhvc3QiLCJjb25maWciLCJSRURJUyIsInByb3QiLCJwYXNzd29yZCIsImRldGVjdF9idWZmZXJzIiwicmV0cnlfc3RyYXRlZ3kiLCJlcnJvciIsImNvZGUiLCJFcnJvciIsInRvdGFsX3JldHJ5X3RpbWUiLCJhdHRlbXB0IiwidW5kZWZpbmVkIiwiTWF0aCIsIm1pbiIsImNsaWVudCIsInByb21pc2lmeUFsbCIsInJlZGlzIiwiY3JlYXRlQ2xpZW50Iiwib24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic2V0VmFsdWUiLCJrZXkiLCJ2YWx1ZSIsInRpbWUiLCJzZXQiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIml0ZW0iLCJoc2V0IiwicHJpbnQiLCJnZXRWYWx1ZSIsImdldEFzeW5jIiwiZ2V0SFZhbHVlIiwiaGdldGFsbEFzeW5jIiwiZGVsVmFsdWUiLCJkZWwiLCJyZXMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxPQUFPLEdBQUc7QUFDWkMsTUFBSSxFQUFFQyw4Q0FBTSxDQUFDQyxLQUFQLENBQWFGLElBRFA7QUFFWkcsTUFBSSxFQUFFRiw4Q0FBTSxDQUFDQyxLQUFQLENBQWFDLElBRlA7QUFHWkMsVUFBUSxFQUFFSCw4Q0FBTSxDQUFDQyxLQUFQLENBQWFFLFFBSFg7QUFJWjtBQUNBQyxnQkFBYyxFQUFFLElBTEo7QUFNWkMsZ0JBQWMsRUFBRSxVQUFVUCxPQUFWLEVBQW1CO0FBQy9CLFFBQUlBLE9BQU8sQ0FBQ1EsS0FBUixJQUFpQlIsT0FBTyxDQUFDUSxLQUFSLENBQWNDLElBQWQsS0FBdUIsY0FBNUMsRUFBNEQ7QUFDeEQ7QUFDQSxhQUFPLElBQUlDLEtBQUosQ0FBVSxtQ0FBVixDQUFQO0FBQ0g7O0FBQ0QsUUFBSVYsT0FBTyxDQUFDVyxnQkFBUixHQUEyQixPQUFPLEVBQVAsR0FBWSxFQUEzQyxFQUErQztBQUMzQztBQUNBLGFBQU8sSUFBSUQsS0FBSixDQUFVLHNCQUFWLENBQVA7QUFDSDs7QUFDRCxRQUFJVixPQUFPLENBQUNZLE9BQVIsR0FBa0IsRUFBdEIsRUFBMEI7QUFDdEI7QUFDQSxhQUFPQyxTQUFQO0FBQ0g7O0FBQ0QsV0FBT0MsSUFBSSxDQUFDQyxHQUFMLENBQVNmLE9BQU8sQ0FBQ1ksT0FBUixHQUFrQixHQUEzQixFQUFnQyxJQUFoQyxDQUFQO0FBQ0gsR0FwQlcsQ0F1QmhCOztBQXZCZ0IsQ0FBaEI7QUF3QkEsTUFBTUksTUFBTSxHQUFHQyw2REFBWSxDQUFDQyw0Q0FBSyxDQUFDQyxZQUFOLENBQW1CbkIsT0FBbkIsQ0FBRCxDQUEzQixDLENBR0E7O0FBQ0FnQixNQUFNLENBQUNJLEVBQVAsQ0FBVSxPQUFWLEVBQW9CQyxHQUFELElBQVM7QUFDeEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUF5QkYsR0FBckM7QUFDSCxDQUZEOztBQUlBLE1BQU1HLFFBQVEsR0FBRyxDQUFDQyxHQUFELEVBQU1DLEtBQU4sRUFBYUMsSUFBYixLQUFzQjtBQUNuQyxNQUFJLE9BQU9ELEtBQVAsS0FBaUIsV0FBakIsSUFBZ0NBLEtBQUssS0FBSyxJQUExQyxJQUFrREEsS0FBSyxLQUFLLEVBQWhFLEVBQW9FO0FBQ2hFO0FBQ0g7O0FBQ0QsTUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQzNCO0FBQ0EsUUFBSSxPQUFPQyxJQUFQLEtBQWdCLFdBQXBCLEVBQWlDO0FBQzdCWCxZQUFNLENBQUNZLEdBQVAsQ0FBV0gsR0FBWCxFQUFnQkMsS0FBaEIsRUFBdUIsSUFBdkIsRUFBNkJDLElBQTdCO0FBQ0gsS0FGRCxNQUVPO0FBQ0hYLFlBQU0sQ0FBQ1ksR0FBUCxDQUFXSCxHQUFYLEVBQWdCQyxLQUFoQjtBQUNIO0FBQ0osR0FQRCxNQU9PLElBQUksT0FBT0EsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUNsQztBQUNBO0FBQ0E7QUFDQUcsVUFBTSxDQUFDQyxJQUFQLENBQVlKLEtBQVosRUFBbUJLLE9BQW5CLENBQTRCQyxJQUFELElBQVU7QUFDakNoQixZQUFNLENBQUNpQixJQUFQLENBQVlSLEdBQVosRUFBaUJPLElBQWpCLEVBQXVCTixLQUFLLENBQUNNLElBQUQsQ0FBNUIsRUFBb0NkLDRDQUFLLENBQUNnQixLQUExQztBQUNILEtBRkQ7QUFHSDtBQUNKLENBbkJELEMsQ0FxQkE7QUFDQTtBQUNBOzs7QUFFQSxNQUFNQyxRQUFRLEdBQUlWLEdBQUQsSUFBUztBQUN0QjtBQUNBLFNBQU9ULE1BQU0sQ0FBQ29CLFFBQVAsQ0FBZ0JYLEdBQWhCLENBQVA7QUFDSCxDQUhEOztBQUtBLE1BQU1ZLFNBQVMsR0FBSVosR0FBRCxJQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBT1QsTUFBTSxDQUFDc0IsWUFBUCxDQUFvQmIsR0FBcEIsQ0FBUDtBQUNILENBTkQ7O0FBUUEsTUFBTWMsUUFBUSxHQUFJZCxHQUFELElBQVM7QUFDdEJULFFBQU0sQ0FBQ3dCLEdBQVAsQ0FBV2YsR0FBWCxFQUFnQixDQUFDSixHQUFELEVBQU1vQixHQUFOLEtBQWM7QUFDMUIsUUFBSUEsR0FBRyxLQUFLLENBQVosRUFBZTtBQUNYbkIsYUFBTyxDQUFDQyxHQUFSLENBQVkscUJBQVo7QUFDSCxLQUZELE1BRU87QUFDSEQsYUFBTyxDQUFDQyxHQUFSLENBQVksNEJBQTRCRixHQUF4QztBQUNIO0FBQ0osR0FORDtBQU9ILENBUkQiLCJmaWxlIjoiLi9zcmMvY29uZmlnL1JlZGlzQ29uZmlnLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZGlzIGZyb20gJ3JlZGlzJ1xyXG5pbXBvcnQgeyBwcm9taXNpZnlBbGwgfSBmcm9tICdibHVlYmlyZCdcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2luZGV4J1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIGhvc3Q6IGNvbmZpZy5SRURJUy5ob3N0LFxyXG4gICAgcHJvdDogY29uZmlnLlJFRElTLnByb3QsXHJcbiAgICBwYXNzd29yZDogY29uZmlnLlJFRElTLnBhc3N3b3JkLFxyXG4gICAgLy8g562U5aSN5bCG5L2c5Li657yT5Yay5Yy65Y+R6YCB5Yiw5Zue6LCDXHJcbiAgICBkZXRlY3RfYnVmZmVyczogdHJ1ZSxcclxuICAgIHJldHJ5X3N0cmF0ZWd5OiBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgIGlmIChvcHRpb25zLmVycm9yICYmIG9wdGlvbnMuZXJyb3IuY29kZSA9PT0gJ0VDT05OUkVGVVNFRCcpIHtcclxuICAgICAgICAgICAgLy8g5b2T5YmN5Ye6546w6L+e5o6l6ZSZ6K+vXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1RoZSBzZXJ2ZXIgcmVmdXNlZCB0aGUgY29ubmVjdGlvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9ucy50b3RhbF9yZXRyeV90aW1lID4gMTAwMCAqIDYwICogNjApIHtcclxuICAgICAgICAgICAgLy8g6L+e5o6l5pe26Ze06L+H6ZW/XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1JldHJ5IHRpbWUgZXhoYXVzdGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvcHRpb25zLmF0dGVtcHQgPiAxMCkge1xyXG4gICAgICAgICAgICAvLyDov57mjqXmrKHmlbDlpKfkuo4xMFxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTWF0aC5taW4ob3B0aW9ucy5hdHRlbXB0ICogMTAwLCAzMDAwKVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBjb25zdCBjbGllbnQgPSByZWRpcy5jcmVhdGVDbGllbnQob3B0aW9ucylcclxuY29uc3QgY2xpZW50ID0gcHJvbWlzaWZ5QWxsKHJlZGlzLmNyZWF0ZUNsaWVudChvcHRpb25zKSlcclxuXHJcblxyXG4vLyDov57mjqXlpLHotKVcclxuY2xpZW50Lm9uKCdlcnJvcicsIChlcnIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdSZWRpcyBjbGllbnQgRXJyb3IgOicgKyBlcnIpXHJcbn0pXHJcblxyXG5jb25zdCBzZXRWYWx1ZSA9IChrZXksIHZhbHVlLCB0aW1lKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgLy8g6K6+572u6L+H5pyf5pe26Ze0IOiHquWKqOWIoOmZpOaVsOaNruW6k+mHjOeahOS/oeaBr1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGltZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY2xpZW50LnNldChrZXksIHZhbHVlLCAnRVgnLCB0aW1lKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNsaWVudC5zZXQoa2V5LCB2YWx1ZSlcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAvLyB7a2V5MTp2YWx1ZTEsa2V5Mjp2YWx1ZTJ9XHJcbiAgICAgICAgLy9vYmplY3Qua2V5cyh2YWx1ZSkgPT4gW2tleTEsa2V5Ml1cclxuICAgICAgICAvL3JlZGlzLnByaW50IOS4gOS4quaWueS+v+eahOWbnuiwg+WHveaVsO+8jOeUqOS6juWcqOa1i+ivleaXtuaYvuekuui/lOWbnuWAvFxyXG4gICAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGNsaWVudC5oc2V0KGtleSwgaXRlbSwgdmFsdWVbaXRlbV0sIHJlZGlzLnByaW50KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIOWwhmdldOaWueazlei9rOaNouaIkOW8guatpeeahFxyXG4vLyBjb25zdCB7IHByb21pc2lmeSB9ID0gcmVxdWlyZSgndXRpbCcpXHJcbi8vIGNvbnN0IGdldEFzeW5jID0gcHJvbWlzaWZ5KGNsaWVudC5nZXQpLmJpbmQoY2xpZW50KVxyXG5cclxuY29uc3QgZ2V0VmFsdWUgPSAoa2V5KSA9PiB7XHJcbiAgICAvLyByZXR1cm4gZ2V0QXN5bmMoa2V5KVxyXG4gICAgcmV0dXJuIGNsaWVudC5nZXRBc3luYyhrZXkpXHJcbn1cclxuXHJcbmNvbnN0IGdldEhWYWx1ZSA9IChrZXkpID0+IHtcclxuICAgIC8vIGNsaWVudC5oZ2V0YWxsIOW6lOetlOWwhuiiq+i9rOaNouaIkOS4gOS4qkphdmFTY3JpcHTlr7nosaFcclxuICAgIC8vIOi/meagt+WwseWPr+S7peS9v+eUqEphdmFTY3JpcHTor63ms5XkuI7lk43lupTkuqTkupLjgIJcclxuICAgIC8vIGhnZXRhbGzov5Tlm57kuIDkuKrnlLHmlaPliJfplK7nu4TmiJDnmoTlr7nosaHjgIJcclxuICAgIC8vIHJldHVybiBwcm9taXNpZnkoY2xpZW50LmhnZXRhbGwpLmJpbmQoY2xpZW50KShrZXkpXHJcbiAgICByZXR1cm4gY2xpZW50LmhnZXRhbGxBc3luYyhrZXkpXHJcbn1cclxuXHJcbmNvbnN0IGRlbFZhbHVlID0gKGtleSkgPT4ge1xyXG4gICAgY2xpZW50LmRlbChrZXksIChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgIGlmIChyZXMgPT09IDEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlbGVjdCBzdWNjZXNzZnVsbHknKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWxlY3QgcmVkaXMga2V5IGVycm9yOicgKyBlcnIpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBjbGllbnQsXHJcbiAgICBzZXRWYWx1ZSxcclxuICAgIGdldFZhbHVlLFxyXG4gICAgZ2V0SFZhbHVlLFxyXG4gICAgZGVsVmFsdWVcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config/RedisConfig.js\n");

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DB_URL = 'mongodb://test:123456@127.0.0.1:27017/testdb';\nconst REDIS = {\n  host: '127.0.0.1',\n  prot: 6379,\n  password: '123456'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  DB_URL,\n  REDIS\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2luZGV4LmpzP2YxMjEiXSwibmFtZXMiOlsiREJfVVJMIiwiUkVESVMiLCJob3N0IiwicHJvdCIsInBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLE1BQU0sR0FBRyw4Q0FBZjtBQUNBLE1BQU1DLEtBQUssR0FBRztBQUNWQyxNQUFJLEVBQUUsV0FESTtBQUVWQyxNQUFJLEVBQUUsSUFGSTtBQUdWQyxVQUFRLEVBQUU7QUFIQSxDQUFkO0FBS2U7QUFDWEosUUFEVztBQUVYQztBQUZXLENBQWYiLCJmaWxlIjoiLi9zcmMvY29uZmlnL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgREJfVVJMID0gJ21vbmdvZGI6Ly90ZXN0OjEyMzQ1NkAxMjcuMC4wLjE6MjcwMTcvdGVzdGRiJ1xyXG5jb25zdCBSRURJUyA9IHtcclxuICAgIGhvc3Q6ICcxMjcuMC4wLjEnLFxyXG4gICAgcHJvdDogNjM3OSxcclxuICAgIHBhc3N3b3JkOiAnMTIzNDU2J1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIERCX1VSTCxcclxuICAgIFJFRElTXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config/index.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-helmet */ \"koa-helmet\");\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/routes */ \"./src/routes/routes.js\");\n/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! koa-body */ \"koa-body\");\n/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(koa_body__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var koa_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! koa-json */ \"koa-json\");\n/* harmony import */ var koa_json__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(koa_json__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @koa/cors */ \"@koa/cors\");\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_koa_cors__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var koa_compose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! koa-compose */ \"koa-compose\");\n/* harmony import */ var koa_compose__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(koa_compose__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var koa_compress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! koa-compress */ \"koa-compress\");\n/* harmony import */ var koa_compress__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(koa_compress__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nconst app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a();\nconst isDevMode =  false ? undefined : true;\n/**\n * 使用koa-compose 集成中间件\n */\n\nconst middleware = koa_compose__WEBPACK_IMPORTED_MODULE_8___default()([koa_body__WEBPACK_IMPORTED_MODULE_5___default()(), koa_static__WEBPACK_IMPORTED_MODULE_3___default()(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, '../public')), _koa_cors__WEBPACK_IMPORTED_MODULE_7___default()(), koa_json__WEBPACK_IMPORTED_MODULE_6___default()({\n  pretty: false,\n  param: 'pretty'\n}), koa_helmet__WEBPACK_IMPORTED_MODULE_2___default()()]);\n\nif (!isDevMode) {\n  app.use(koa_compress__WEBPACK_IMPORTED_MODULE_9___default()());\n}\n\napp.use(middleware);\napp.use(Object(_routes_routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\napp.listen(3000);\n/* WEBPACK VAR INJECTION */}.call(this, \"src\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJhcHAiLCJrb2EiLCJpc0Rldk1vZGUiLCJwcm9jZXNzIiwibWlkZGxld2FyZSIsImNvbXBvc2UiLCJrb2FCb2R5Iiwic3RhdGljcyIsInBhdGgiLCJqb2luIiwiX19kaXJuYW1lIiwiY29ycyIsImpzb251dGlsIiwicHJldHR5IiwicGFyYW0iLCJoZWxtZXQiLCJ1c2UiLCJjb21wcmVzcyIsInJvdXRlciIsImxpc3RlbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsR0FBRyxHQUFHLElBQUlDLDBDQUFKLEVBQVo7QUFFQSxNQUFNQyxTQUFTLEdBQUdDLE1BQUEsR0FBd0MsU0FBeEMsR0FBZ0QsSUFBbEU7QUFFQTs7OztBQUdBLE1BQU1DLFVBQVUsR0FBR0Msa0RBQU8sQ0FBQyxDQUN6QkMsK0NBQU8sRUFEa0IsRUFFekJDLGlEQUFPLENBQUNDLDJDQUFJLENBQUNDLElBQUwsQ0FBVUMsU0FBVixFQUFxQixXQUFyQixDQUFELENBRmtCLEVBR3pCQyxnREFBSSxFQUhxQixFQUl6QkMsK0NBQVEsQ0FBQztBQUFFQyxRQUFNLEVBQUUsS0FBVjtBQUFpQkMsT0FBSyxFQUFFO0FBQXhCLENBQUQsQ0FKaUIsRUFLekJDLGlEQUFNLEVBTG1CLENBQUQsQ0FBMUI7O0FBUUEsSUFBSSxDQUFDYixTQUFMLEVBQWdCO0FBQ2RGLEtBQUcsQ0FBQ2dCLEdBQUosQ0FBUUMsbURBQVEsRUFBaEI7QUFDRDs7QUFFRGpCLEdBQUcsQ0FBQ2dCLEdBQUosQ0FBUVosVUFBUjtBQUNBSixHQUFHLENBQUNnQixHQUFKLENBQVFFLDhEQUFNLEVBQWQ7QUFFQWxCLEdBQUcsQ0FBQ21CLE1BQUosQ0FBVyxJQUFYLEUiLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQga29hIGZyb20gJ2tvYSdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgaGVsbWV0IGZyb20gJ2tvYS1oZWxtZXQnXG5pbXBvcnQgc3RhdGljcyBmcm9tICdrb2Etc3RhdGljJ1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcy9yb3V0ZXMnXG5pbXBvcnQga29hQm9keSBmcm9tICdrb2EtYm9keSdcbmltcG9ydCBqc29udXRpbCBmcm9tICdrb2EtanNvbidcbmltcG9ydCBjb3JzIGZyb20gJ0Brb2EvY29ycydcbmltcG9ydCBjb21wb3NlIGZyb20gJ2tvYS1jb21wb3NlJ1xuaW1wb3J0IGNvbXByZXNzIGZyb20gJ2tvYS1jb21wcmVzcydcblxuY29uc3QgYXBwID0gbmV3IGtvYSgpXG5cbmNvbnN0IGlzRGV2TW9kZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyBmYWxzZSA6IHRydWVcblxuLyoqXG4gKiDkvb/nlKhrb2EtY29tcG9zZSDpm4bmiJDkuK3pl7Tku7ZcbiAqL1xuY29uc3QgbWlkZGxld2FyZSA9IGNvbXBvc2UoW1xuICBrb2FCb2R5KCksXG4gIHN0YXRpY3MocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL3B1YmxpYycpKSxcbiAgY29ycygpLFxuICBqc29udXRpbCh7IHByZXR0eTogZmFsc2UsIHBhcmFtOiAncHJldHR5JyB9KSxcbiAgaGVsbWV0KCksXG5dKVxuXG5pZiAoIWlzRGV2TW9kZSkge1xuICBhcHAudXNlKGNvbXByZXNzKCkpXG59XG5cbmFwcC51c2UobWlkZGxld2FyZSlcbmFwcC51c2Uocm91dGVyKCkpXG5cbmFwcC5saXN0ZW4oMzAwMClcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/routes/loginRouter.js":
/*!***********************************!*\
  !*** ./src/routes/loginRouter.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_LoginController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/LoginController */ \"./src/api/LoginController.js\");\n\n\nconst router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a();\nrouter.post('/forget', _api_LoginController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forget);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2xvZ2luUm91dGVyLmpzPzNkZDEiXSwibmFtZXMiOlsicm91dGVyIiwiUm91dGVyIiwicG9zdCIsImxvZ2luQ29udHJvbGxlciIsImZvcmdldCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTUEsTUFBTSxHQUFHLElBQUlDLGlEQUFKLEVBQWY7QUFFQUQsTUFBTSxDQUFDRSxJQUFQLENBQVksU0FBWixFQUF1QkMsNERBQWUsQ0FBQ0MsTUFBdkM7QUFHZUoscUVBQWYiLCJmaWxlIjoiLi9zcmMvcm91dGVzL2xvZ2luUm91dGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICdrb2Etcm91dGVyJ1xyXG5pbXBvcnQgbG9naW5Db250cm9sbGVyIGZyb20gJy4uL2FwaS9Mb2dpbkNvbnRyb2xsZXInXHJcblxyXG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKClcclxuXHJcbnJvdXRlci5wb3N0KCcvZm9yZ2V0JywgbG9naW5Db250cm9sbGVyLmZvcmdldClcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routes/loginRouter.js\n");

/***/ }),

/***/ "./src/routes/publicRouter.js":
/*!************************************!*\
  !*** ./src/routes/publicRouter.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_PublicController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/PublicController */ \"./src/api/PublicController.js\");\n\n\nconst router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a();\nrouter.get('/getCaptcha', _api_PublicController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getCaptcha);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3B1YmxpY1JvdXRlci5qcz9kM2M1Il0sIm5hbWVzIjpbInJvdXRlciIsIlJvdXRlciIsImdldCIsInB1YmxpY0NvbnRyb2xsZXIiLCJnZXRDYXB0Y2hhIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNQSxNQUFNLEdBQUcsSUFBSUMsaURBQUosRUFBZjtBQUVBRCxNQUFNLENBQUNFLEdBQVAsQ0FBVyxhQUFYLEVBQTBCQyw2REFBZ0IsQ0FBQ0MsVUFBM0M7QUFFZUoscUVBQWYiLCJmaWxlIjoiLi9zcmMvcm91dGVzL3B1YmxpY1JvdXRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcidcbmltcG9ydCBwdWJsaWNDb250cm9sbGVyIGZyb20gJy4uL2FwaS9QdWJsaWNDb250cm9sbGVyJ1xuXG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKClcblxucm91dGVyLmdldCgnL2dldENhcHRjaGEnLCBwdWJsaWNDb250cm9sbGVyLmdldENhcHRjaGEpXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routes/publicRouter.js\n");

/***/ }),

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa_combine_routers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-combine-routers */ \"koa-combine-routers\");\n/* harmony import */ var koa_combine_routers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_combine_routers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _publicRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publicRouter */ \"./src/routes/publicRouter.js\");\n/* harmony import */ var _loginRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginRouter */ \"./src/routes/loginRouter.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (koa_combine_routers__WEBPACK_IMPORTED_MODULE_0___default()(_publicRouter__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _loginRouter__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3JvdXRlcy5qcz82NDFiIl0sIm5hbWVzIjpbImNvbWJpbmVSb3V0ZXMiLCJwdWJsaWNSb3V0ZXIiLCJsb2dpblJvdXRlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVlQSx5SEFBYSxDQUFDQyxxREFBRCxFQUFlQyxvREFBZixDQUE1QiIsImZpbGUiOiIuL3NyYy9yb3V0ZXMvcm91dGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbWJpbmVSb3V0ZXMgZnJvbSAna29hLWNvbWJpbmUtcm91dGVycydcblxuaW1wb3J0IHB1YmxpY1JvdXRlciBmcm9tICcuL3B1YmxpY1JvdXRlcidcbmltcG9ydCBsb2dpblJvdXRlciBmcm9tICcuL2xvZ2luUm91dGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUm91dGVzKHB1YmxpY1JvdXRlciwgbG9naW5Sb3V0ZXIpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routes/routes.js\n");

/***/ }),

/***/ "@koa/cors":
/*!****************************!*\
  !*** external "@koa/cors" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@koa/cors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa29hL2NvcnNcIj9hNjk1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBrb2EvY29ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrb2EvY29yc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@koa/cors\n");

/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bluebird\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJibHVlYmlyZFwiPzJjNmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYmx1ZWJpcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJibHVlYmlyZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///bluebird\n");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2FcIj9lZWI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImtvYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa\n");

/***/ }),

/***/ "koa-body":
/*!***************************!*\
  !*** external "koa-body" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-body\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtYm9keVwiPzNmNjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoia29hLWJvZHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtYm9keVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-body\n");

/***/ }),

/***/ "koa-combine-routers":
/*!**************************************!*\
  !*** external "koa-combine-routers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-combine-routers\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtY29tYmluZS1yb3V0ZXJzXCI/MmM3NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2EtY29tYmluZS1yb3V0ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWNvbWJpbmUtcm91dGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-combine-routers\n");

/***/ }),

/***/ "koa-compose":
/*!******************************!*\
  !*** external "koa-compose" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-compose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtY29tcG9zZVwiPzczMTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoia29hLWNvbXBvc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtY29tcG9zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-compose\n");

/***/ }),

/***/ "koa-compress":
/*!*******************************!*\
  !*** external "koa-compress" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-compress\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtY29tcHJlc3NcIj9hNmY2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImtvYS1jb21wcmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYS1jb21wcmVzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-compress\n");

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-helmet\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtaGVsbWV0XCI/NDJkMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2EtaGVsbWV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWhlbG1ldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-helmet\n");

/***/ }),

/***/ "koa-json":
/*!***************************!*\
  !*** external "koa-json" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-json\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtanNvblwiPzY1MjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoia29hLWpzb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtanNvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-json\n");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCI/MDM1ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2Etcm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXJvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-router\n");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etc3RhdGljXCI/OWE0YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2Etc3RhdGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXN0YXRpY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-static\n");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIj9iZDc2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im1vbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///moment\n");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nodemailer\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlbWFpbGVyXCI/M2Q1NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJub2RlbWFpbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZW1haWxlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///nodemailer\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redis\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWRpc1wiPzcwNmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkaXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWRpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redis\n");

/***/ }),

/***/ "svg-captcha":
/*!******************************!*\
  !*** external "svg-captcha" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"svg-captcha\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdmctY2FwdGNoYVwiP2NjNjAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3ZnLWNhcHRjaGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdmctY2FwdGNoYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///svg-captcha\n");

/***/ })

/******/ });