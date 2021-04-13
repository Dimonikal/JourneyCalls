(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"main\">\n<router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/login/login.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/login/login.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"container h-100\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\"> <!--Форма-->\n    <div class=\"row justify-content-center\">\n      <div class=\"form-group col-7\">\n        <label\n          >Почта <!--Поле ввода почты-->\n          <input  \n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"Введите почту\"\n            formControlName=\"email\"\n          />\n          <div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n          class=\"alert alert-danger\">\n          <div *ngIf=\"email.errors.required\"> <!--Индикаторы ошибкок-->\n            Введите email\n          </div>\n          <div *ngIf=\"email.errors.pattern\">\n            Введите корректный email\n          </div>\n          </div>\n        </label>\n      </div>\n      <div class=\"form-group col-7\">\n        <label\n          >Пароль <!--Поле ввода пароля-->\n          <input\n            type=\"password\"\n            class=\"form-control\"\n            placeholder=\"Введите пароль\"\n            formControlName=\"password\"\n          />\n          <div *ngIf=\"password.invalid && (password.dirty || password.touched)\"\n          class=\"alert alert-danger\">\n          <div *ngIf=\"password.errors.required\"> <!--Ошибки-->\n            Введите пароль\n          </div>\n          <div *ngIf=\"password.errors.minlength\">\n            Минимальная длина пароля 6 символов\n          </div>\n          </div>\n        </label>\n      </div><br>\n      <div class=\"col-7\">\n        <div *ngIf=\"!isExist\" class=\"alert alert-danger\"> <!--Ошибка при ненахождении юзера \n                                                            с тек. почтой и паролем-->\n          Вы ввели неверный email и/или пароль\n        </div><br>\n        <button class=\"btn btn-primary\" [disabled]=\"form.invalid\" type=\"submit\"> <!--Кнопка отправки-->\n          Войти\n        </button>\n      </div>\n    </div>\n  </form>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/register/register.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/register/register.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"container h-100\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"row justify-content-center\">\n      <div class=\"form-group col-7\">\n        <label\n          >Имя\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"Введите имя\"\n            formControlName=\"userName\"\n          />\n          <div *ngIf=\"userName.invalid && (userName.dirty || userName.touched)\"\n          class=\"alert alert-danger\">\n          <div *ngIf=\"userName.errors.required\">\n            Введите имя\n          </div>\n          <div *ngIf=\"userName.errors.minlength\">\n            Минимальная длина имени 2 символа\n          </div>\n          </div>\n        </label>\n      </div>\n\n      <div class=\"form-group col-7\">\n        <label\n          >Почта\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"Введите почту\"\n            formControlName=\"email\"\n          />\n          <div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n          class=\"alert alert-danger\">\n          <div *ngIf=\"email.errors.required\">\n            Введите email\n          </div>\n          <div *ngIf=\"email.errors.pattern\">\n            Введите корректный email\n          </div>\n          </div>\n          <div *ngIf=\"confirmPassword.dirty || confirmPassword.touched\">\n            <div *ngIf=\"isExist\" class=\"alert alert-danger\">\n              Пользователь с данным email уже существует\n            </div>\n          </div>\n        </label>\n      </div>\n\n      <div class=\"form-group col-7\">\n        <label\n          >Пароль\n          <input\n            type=\"password\"\n            class=\"form-control\"\n            placeholder=\"Введите пароль\"\n            formControlName=\"password\"\n          />\n          <div *ngIf=\"password.invalid && (password.dirty || password.touched)\"\n          class=\"alert alert-danger\">\n          <div *ngIf=\"password.errors.required\">\n            Введите пароль\n          </div>\n          <div *ngIf=\"password.errors.minlength\">\n            Минимальная длина пароля 6 символов\n          </div>\n          </div>\n        </label>\n      </div>\n\n      <div class=\"form-group col-7\">\n        <label\n          >Подтвердите пароль\n          <input\n            type=\"password\"\n            class=\"form-control\"\n            placeholder=\" Подтвердите пароль\"\n            formControlName=\"confirmPassword\"\n            (input)=\"isConfirmedPassword()\"\n          />\n          <div *ngIf=\"confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched)\"\n          class=\"alert alert-danger\">\n          <div *ngIf=\"confirmPassword.errors.required\">\n            Подтвердите пароль\n          </div>\n          </div>\n          <div *ngIf=\"confirmPassword.dirty || confirmPassword.touched\">\n            <div *ngIf=\"!isConfirmedPassword()\" class=\"alert alert-danger\">\n              Пароли не совпадают\n            </div>\n          </div>\n          </label>\n      </div>\n      <div class=\"col-7\">\n        <button\n          type=\"submit\"\n          class=\"btn btn-primary pointer\"\n          [disabled]=\"form.invalid || !isConfirmedPassword()\"\n        >\n          Отправить\n        </button>\n      </div>\n    </div>\n  </form>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/footer/footer.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/footer/footer.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"font-small text-white\">  \n    <div class=\"text-center py-3\">\n       {{title}}\n    </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/header/header.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/header/header.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg text-white\">\n    <a class=\"navbar-brand pointer\" (click)=\"toPage('/')\"> {{ title }} </a> <!--Навазние сайта-->\n    <button\n      class=\"navbar-toggler\"\n      type=\"button\"\n      data-toggle=\"collapse\"\n      data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\"          \n      aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\"\n    >                                                  <!--Кнопка меню при маленьком окне-->\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse \" id=\"navbarSupportedContent\">\n      \n         \n      \n     <span class=\"mr-auto\"></span>  <!--Сдвиг вправо-->\n  \n      <a\n        *ngIf=\"!userState.isAuth()\"\n        class=\"nav-link pointer btn \"\n        [class.active]=\"isCurrentPage('/login')\"\n        (click)=\"toPage('/login')\"\n        >Вход                        <!--Кнопка входа-->\n      </a>\n      <button\n        type=\"button\"\n        *ngIf=\"!userState.isAuth()\"\n        class=\"nav-link pointer btn btn-success\"\n        [class.active]=\"isCurrentPage('/register')\"\n        (click)=\"toPage('/register')\"\n        >Регистрация                      <!--Кнопка регистрации-->\n      </button>\n      \n      <button\n        type=\"button\"\n        *ngIf=\"userState.isAuth()\"\n        class=\"btn btn-warning mx-1\"\n        [class.active]=\"isCurrentPage('/chat')\"\n        (click)=\"toPage('/chat')\"\n        >Чат                                  <!--Чат-->\n      </button>\n\n      <div\n      id=\"divBeforeImg\"\n      *ngIf=\"userState.isAuth() && !userState.isAdmin()\"\n      class=\"mx-1\"\n      [class.active]=\"isCurrentPage('/notifications')\"\n      (click)=\"toPage('/notifications')\"\n      >\n        <img\n        id=\"msgBtn\"\n        src=\"../../../../assets/img/messages.png\">    \n        <div\n        id=\"countOfMsg\"\n        >\n       {{userState.countOfNotes}}\n        </div>\n      </div>                                <!--Уведомления-->\n      \n      <button\n        type=\"button\"\n        *ngIf=\"userState.isAuth()\"\n        class=\"nav-link mx-1\"\n        style=\"border-radius: 10px; background: rgba(227, 227, 227, 0.503);\"\n        [class.active]=\"isCurrentPage('/manageChoose')\"\n        (click)=\"toPage('/manageChoose')\"\n        [disabled]=\"!userState.isAdmin()\"\n        >{{userState.user.userName}}       <!--Имя пользователя, а также кнопка перехода на переадресат-->\n      </button>\n      <button\n      type=\"button\"\n      *ngIf=\"userState.isAuth()\"\n      class=\"btn btn-danger\"\n      (click)=\"logOut()\"\n      >Выйти                    <!--Кнопка выхода-->\n    </button>\n    </div>\n  </nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/post/post.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/post/post.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-1\">\n  <a (click)=\"toPage()\"><h5 class=\"card-title\">{{ post.title }}</h5></a>\n  <a (click)=\"toPage()\"><img class=\"card-img-top\" [src]=\"post.src\" alt=\"Post\" /></a>\n  <div class=\"card-body\">  \n    <p class=\"card-text\">{{post.desc}}</p>\n  </div>\n  <button [disabled]=\"userState.isAdmin() || !userState.isAuth()\" (click)=\"makeRequest(post.id)\" class=\"btn btn-success border-dark\">Записаться</button>\n</div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/system/chat/chat.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/system/chat/chat.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form *ngIf=\"userState.isAdmin()\" [formGroup]=\"formSort\">\n    Сортировка по количеству сообщений\n    <input \n    type=\"radio\"\n    formControlName = \"typeSort\"\n    value=\"asc\"\n    class=\"ml-5\"\n    [checked]=\"true\"\n    >\n    По возрастанию\n    <input\n    type=\"radio\"\n    formControlName = \"typeSort\"\n    value=\"desc\"\n    >\n    По убыванию\n    <button type=\"button\" (click)=\"onSubmitSort()\">Применить</button>\n</form>\n<ul *ngIf=\"!userState.isAdmin() && messages\">\n    <h5 *ngFor=\"let message of messages\">\n        {{message.authorName}}\n        <br>\n        {{message.message}}\n    </h5>\n    <form [formGroup]=\"formUser\">\n        <input \n            type=\"text\" \n            formControlName=\"messageToAdmin\" \n            class=\"inputLarge\">\n        <button class=\"btn btn-success\" [disabled]=\"formUser.invalid\" (click)=\"onSubmitUser()\">\n            Отправить\n        </button>\n    </form>\n</ul>\n<ul *ngIf=\"userState.isAdmin() && users\">\n    <h5 *ngFor=\"let user of users\" class=\"userLink\" [style.display]=\"user.id == 1 ? 'none' : 'block'\">\n        <a *ngIf=\"user.id != 1\" (click)=\"toPage('/chat/'+user.id);\">{{user.userName}} || {{user.email}}</a>\n    </h5>\n</ul>\n<div *ngIf=\"userState.isAdmin()\" id=\"form\">\n    <ul *ngIf=\"activeUser\">\n        <h5 *ngFor=\"let message of activeUser.messages\">\n            {{message.authorName}}\n            <br>\n            {{message.message}}\n        </h5>\n    </ul>\n    <form [formGroup]=\"formAdmin\">\n        <label>\n            <input\n                *ngIf=\"formAdmin\"\n                type=\"text\"\n                formControlName = \"messageToUser\"\n                class=\"inputLarge\"\n                >\n        </label>\n        <button class=\"btn btn-success\" [disabled]=\"formAdmin.invalid\" (click)=\"onSubmitAdmin()\">\n        Отправить\n        </button>\n    </form>\n    <button id=\"closeBtn\" class=\"btn\" (click)=\"show()\">Закрыть</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/system/home/home.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/system/home/home.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table>\n  <tr *ngFor=\"let post of posts\">\n    <app-post\n      [post]=\"post\"\n    ></app-post>\n  </tr>\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/system/manage-choose/manage-choose.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/system/manage-choose/manage-choose.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"textCentre\">\n    <button \n    class=\"btn btn-lg btn-success border border-dark mb-5 shadow\" \n    (click)=\"toPage('/post-manager')\"\n    >Менеджер постов</button>\n    <br>\n    <button \n    class=\"btn btn-lg btn-success border border-dark shadow\" \n    (click)=\"toPage('/request-manager')\"\n    >Менеджер заявок</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/system/notifications/notifications.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/system/notifications/notifications.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul *ngFor=\"let notification of notifications\">\n{{notification}}\n</ul>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/system/post-manager/post-manager.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/system/post-manager/post-manager.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-6\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"row justify-content-center\">\n        <div class=\"form-group col-7\">\n            <legend>Добавить новый пост</legend>\n            <label>\n                Заголовок\n                <input\n                    type=\"text\"\n                    placeholder=\"Введите заголовок\"\n                    class=\"form-control\"\n                    formControlName=\"title\"\n                >\n            </label>\n        </div>\n        <div class=\"form-group col-7\">\n            <label>\n                Url\n                <input\n                    type=\"text\"\n                    placeholder=\"Введите URL\"\n                    class=\"form-control\"\n                    formControlName=\"src\"\n                >\n            </label>\n        </div>\n        <div class=\"form-group col-7\">\n            <label>\n                Описание\n                <input\n                    type=\"text\"\n                    placeholder=\"Введите описание\"\n                    class=\"form-control\"\n                    formControlName=\"desc\"\n                >\n            </label>\n        </div>\n        <div class=\"col-7\">\n        <button class=\"btn btn-success\" [disabled]=\"form.invalid\" type=\"submit\">\n                Добавить\n         </button>\n        </div>\n        </div>\n    </form>\n    </div>\n    <div class=\"card col-5\" style=\"width: 25rem;\">\n        <img class=\"card-img-top\" [src]=\"form.value.src\" alt=\"Заполните поле с url\" />\n    </div>\n</div>\n<div class=\"row mt-3\">\n    <div class=\"col-6\">\n    <form [formGroup]=\"formEdit\" (ngSubmit)=\"edit()\">\n        <div class=\"row justify-content-center\">\n        <div class=\"form-group col-7\">\n            <legend>Изменить пост</legend>\n            <label>\n                id\n                <input\n                    type=\"text\"\n                    placeholder=\"Введите id\"\n                    class=\"form-control\"\n                    formControlName=\"idEdit\"\n                    (input)=\"onChangeId(myForm)\"\n                >\n                <div *ngIf=\"idEdit.invalid && (idEdit.dirty || idEdit.touched)\"\n                class=\"alert alert-danger\">\n                    <div *ngIf=\"idEdit.errors.required\">\n                    Введите id\n                    </div>\n                </div>\n                <div *ngIf=\"!isExist && (idEdit.dirty || idEdit.touched)\" class=\"alert alert-danger\">\n                    Пост не найден\n                </div>\n            </label>\n        </div>\n        <div class=\"form-group col-7\">\n            <label>\n                Заголовок\n                <input\n                    type=\"text\"\n                    placeholder=\"Введите заголовок\"\n                    class=\"form-control\"\n                    name = \"title\"\n                    formControlName=\"titleEdit\"\n                    [value] = \"formEdit.value.titleEdit\"\n                >\n            </label>\n        </div>\n        <div class=\"form-group col-7\">\n            <label>\n                Url\n                <input\n                    type=\"text\"\n                    placeholder=\"Введите URL\"\n                    class=\"form-control\"\n                    name = \"src\"\n                    formControlName=\"srcEdit\"\n                    [value] = \"formEdit.value.srcEdit\"\n                >\n            </label>\n        </div>\n        <div class=\"form-group col-7\">\n            <label>\n                Описание\n                <input\n                    type=\"text\"\n                    placeholder=\"Введите описание\"\n                    class=\"form-control\"\n                    name = \"desc\"\n                    formControlName=\"descEdit\"\n                    [value] = \"formEdit.value.descEdit\"\n                >\n            </label>\n        </div>\n        <div class=\"col-7\">\n        <button class=\"btn btn-success\" [disabled]=\"formEdit.invalid\" type=\"submit\">\n            Изменить\n         </button>\n         <button class=\"btn btn-danger ml-2\" [disabled]=\"formEdit.invalid\" type=\"button\" (click)=\"deletePost()\">\n            Удалить\n     </button>\n        </div>\n        </div>\n    </form>\n    </div>\n    <div class=\"card col-5\" style=\"width: 25rem;\">\n        <img class=\"card-img-top\" [src]=\"formEdit.value.srcEdit\" alt=\"Заполните поле с url\" />\n    </div>\n</div>\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/system/request-manager/request-manager.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/system/request-manager/request-manager.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table *ngIf=\"requests\">\n    <tr>\n        <th>Имя</th>\n        <th>Email</th>\n        <th>Название тура</th>\n        <th>Дата</th>\n        <th></th>\n    </tr>\n    <tr *ngFor=\"let req of requests\">\n        <td>{{req.author.userName}}</td>\n        <td>{{req.author.email}}</td>\n        <td [id]=\"req.id\">{{req.post.title}}</td>\n        <td>{{req.date}}</td>\n        <td>\n            <button \n               class=\"btn btn-warning\"\n               (click)=\"edittingRequest(req); show();\"\n            >Изменить/Удалить</button>\n        </td>\n    </tr>\n</table>\n<div id=\"form\">\n    <form [formGroup]=\"form\">\n        <div class=\"row justify-content-center\">\n        <div class=\"form-group col-7\">\n            <legend>Редактор заявки</legend>\n        </div>\n        <div class=\"form-group col-7\">\n            <label>\n                <select\n                *ngIf=\"posts\"\n                formControlName = \"id\"\n                >\n                    <option disabled>Выберите тур</option>\n                    <option *ngFor=\"let post of posts\" [value]=\"post.id\">{{post.title}}</option>\n                </select>\n            </label>\n        </div>\n        <div class=\"col-7\">\n        <button class=\"btn btn-success my-1\" [disabled]=\"form.invalid\" type=\"button\" (click)=\"editRequest()\">\n            Изменить\n         </button>\n         <br>\n         <button class=\"btn btn-danger my-1\" [disabled]=\"form.invalid\" type=\"button\" (click)=\"deleteRequest()\">\n            Удалить\n     </button>\n        </div>\n        </div>\n    </form>\n    <button id=\"closeBtn\" class=\"btn\" (click)=\"show()\">Закрыть</button>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main{\r\n    background: rgba(42, 140, 83, 0.507);\r\n    padding: 5px;\r\n    min-height: 87.7vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW57XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCAxNDAsIDgzLCAwLjUwNyk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiA4Ny43dmg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'CityWorld';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/auth/auth.module */ "./src/app/modules/auth/auth.module.ts");
/* harmony import */ var _modules_system_system_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/system/system.module */ "./src/app/modules/system/system.module.ts");
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _services_user_state_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/user-state.service */ "./src/app/services/user-state.service.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ],
        imports: [
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_7__["AuthModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _modules_system_system_module__WEBPACK_IMPORTED_MODULE_8__["SystemModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ],
        providers: [_services_user_state_service__WEBPACK_IMPORTED_MODULE_10__["UserStateService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/models/message.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/message.model.ts ***!
  \*****************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Message {
    constructor(authorName = "", message = "") {
        this.authorName = authorName;
        this.message = message;
    }
    build({ authorName, message }) {
        this.authorName = authorName;
        this.message = message;
        return this;
    }
}


/***/ }),

/***/ "./src/app/models/post.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/post.model.ts ***!
  \**************************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Post {
    constructor(title = "", src = "", desc = "", id) {
        this.title = title;
        this.src = src;
        this.desc = desc;
        this.id = id;
    }
    buildPost({ title, src, desc }) {
        this.title = title;
        this.src = src;
        this.desc = desc;
        return this;
    }
    buildPut({ idEdit, titleEdit, srcEdit, descEdit }) {
        this.title = titleEdit;
        this.src = srcEdit;
        this.desc = descEdit;
        this.id = idEdit;
        return this;
    }
}


/***/ }),

/***/ "./src/app/models/request.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/request.model.ts ***!
  \*****************************************/
/*! exports provided: Request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Request {
    constructor(authorId = 0, postId = 0, date = "", id) {
        this.authorId = authorId;
        this.postId = postId;
        this.date = date;
        this.id = id;
    }
    buildPost({ authorId, postId, date }) {
        this.authorId = authorId;
        this.postId = postId;
        this.date = date;
        return this;
    }
    buildPut({ authorId, postId, date, id }) {
        this.authorId = authorId;
        this.postId = postId;
        this.date = date;
        this.id = id;
        return this;
    }
}


/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(userName = "", email = "", password = "", messages = [], notifications = [], id) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.messages = messages;
        this.notifications = notifications;
        this.id = id;
    }
    build({ userName, email, password }) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        return this;
    }
}


/***/ }),

/***/ "./src/app/modules/auth/auth-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/auth-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/modules/auth/register/register.component.ts");





const routes = [
    {
        path: "login",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: "register",
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/modules/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/modules/auth/register/register.component.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/modules/auth/auth-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"]]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/modules/auth/auth.service.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/auth/auth.service.ts ***!
  \**********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");





let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    register(user) {
        return this.http.post(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/users`, user);
    }
    login(user) {
        return this.http
            .get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/users?email=${user.email}&password=${user.password}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_user => (_user.length !== 0 ? _user[0] : null)));
    }
    getUserByEmail(email) {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/users?email=${email}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((user) => user[0] ? user[0] : undefined));
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], AuthService);



/***/ }),

/***/ "./src/app/modules/auth/login/login.component.css":
/*!********************************************************!*\
  !*** ./src/app/modules/auth/login/login.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/auth/login/login.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/login/login.component.ts ***!
  \*******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/modules/auth/auth.service.ts");
/* harmony import */ var src_app_services_user_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user-state.service */ "./src/app/services/user-state.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");








let LoginComponent = class LoginComponent {
    constructor(formBuilder, authService, userState, router, searchService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.userState = userState;
        this.router = router;
        this.searchService = searchService;
        this.isExist = true; //поле для ошибки, сущетвует ли пользователь
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            email: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,6}$/)]
            ],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        }); //Валидатор пароля. Обязат. поле. Минимал. длина 6 символов
    }
    onSubmit() {
        const user = new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_6__["User"]().build(this.form.value); //сохранение в переменной объекта класса User с данными из полей формы
        this.authService.login(user).subscribe(_user => {
            // console.log(_user);
            if (_user !== null) {
                this.isExist = true;
                this.userState.setUser(_user);
                this.router.navigate(["/"]);
            }
            else {
                this.isExist = false;
            }
        });
    }
    //Геттеры, без них ошибки не работают
    get email() {
        return this.form.get('email');
    }
    get password() {
        return this.form.get('password');
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_user_state_service__WEBPACK_IMPORTED_MODULE_4__["UserStateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_search_service__WEBPACK_IMPORTED_MODULE_7__["SearchService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/modules/auth/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/modules/auth/register/register.component.css":
/*!**************************************************************!*\
  !*** ./src/app/modules/auth/register/register.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/auth/register/register.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/auth/register/register.component.ts ***!
  \*************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/modules/auth/auth.service.ts");
/* harmony import */ var src_app_services_user_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user-state.service */ "./src/app/services/user-state.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/user.model */ "./src/app/models/user.model.ts");







let RegisterComponent = class RegisterComponent {
    constructor(formBuilder, authService, userState, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.userState = userState;
        this.router = router;
        this.isExist = false;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            userName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            email: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,6}$/)]
            ],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmPassword: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            ]
        });
    }
    isConfirmedPassword() {
        if (this.form.value.password === this.form.value.confirmPassword) {
            return true;
        }
        else {
            return false;
        }
    }
    onSubmit() {
        const user = new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_6__["User"]().build(this.form.value);
        this.authService.getUserByEmail(this.form.value.email)
            .subscribe((isUser) => {
            if (isUser) {
                if (isUser.email === this.form.value.email) {
                    this.isExist = true;
                }
            }
            else {
                this.isExist = false;
                this.authService.register(user).subscribe(data => {
                    this.userState.setUser(data);
                    this.router.navigate(["/"]);
                });
            }
        });
    }
    get userName() {
        return this.form.get('userName');
    }
    get email() {
        return this.form.get('email');
    }
    get password() {
        return this.form.get('password');
    }
    get confirmPassword() {
        return this.form.get('confirmPassword');
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_user_state_service__WEBPACK_IMPORTED_MODULE_4__["UserStateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-register",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/modules/auth/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/modules/shared/footer/footer.component.css":
/*!************************************************************!*\
  !*** ./src/app/modules/shared/footer/footer.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer{\r\n    background-color: green;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/shared/footer/footer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/shared/footer/footer.component.ts ***!
  \***********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let FooterComponent = class FooterComponent {
    constructor(datePipe) {
        this.datePipe = datePipe;
        this.myDate = new Date();
        this.newDate = "";
        this.title = "";
        this.newDate = this.datePipe.transform(this.myDate, 'yyyy');
    }
    ngOnInit() {
        this.title = document.getElementsByTagName("title")[0].innerHTML + " © " + this.newDate;
    }
};
FooterComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/footer/footer.component.html")).default,
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/modules/shared/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/modules/shared/header/header.component.css":
/*!************************************************************!*\
  !*** ./src/app/modules/shared/header/header.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#msgBtn{\r\n    position: relative;\r\n    width: 3rem;\r\n    z-index: 10;\r\n    margin-top: -1.8rem;\r\n}\r\n#countOfMsg{\r\n    position: relative;\r\n   font-size: 1.2rem;\r\n   font-family:Verdana, Tahoma, sans-serif;\r\n   font-weight: 700;\r\n   font-style:normal;\r\n    color: green;\r\n    z-index: 20;\r\n    margin-top: -3.3rem;\r\n    padding-left: 2.3rem;\r\n}\r\n#divBeforeImg{\r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\nnav{\r\n    background-color: rgb(0, 128, 0);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7R0FDbkIsaUJBQWlCO0dBQ2pCLHVDQUF1QztHQUN2QyxnQkFBZ0I7R0FDaEIsaUJBQWlCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGdDQUFnQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtc2dCdG57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogM3JlbTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgbWFyZ2luLXRvcDogLTEuOHJlbTtcclxufVxyXG4jY291bnRPZk1zZ3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgIGZvbnQtZmFtaWx5OlZlcmRhbmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgZm9udC1zdHlsZTpub3JtYWw7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICB6LWluZGV4OiAyMDtcclxuICAgIG1hcmdpbi10b3A6IC0zLjNyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIuM3JlbTtcclxufVxyXG4jZGl2QmVmb3JlSW1ne1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5uYXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTI4LCAwKTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/shared/header/header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/shared/header/header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-state.service */ "./src/app/services/user-state.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(router, userState) {
        this.router = router;
        this.userState = userState;
        this.title = document.getElementsByTagName("title")[0].innerHTML; //название сайта 
    }
    ngOnInit() {
        this.userState.fetch();
    }
    toPage(link) {
        this.router.navigate([link]);
    }
    isCurrentPage(path) {
        return this.router.url === path;
    }
    logOut() {
        this.userState.logOut();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_user_state_service__WEBPACK_IMPORTED_MODULE_3__["UserStateService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-header",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/modules/shared/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/modules/shared/post/post.component.css":
/*!********************************************************!*\
  !*** ./src/app/modules/shared/post/post.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button{\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 5px rgba(0,0,0,0.7);\r\n    width: 50%;\r\n    align-self: center;\r\n    font-size: 2rem;\r\n    margin-bottom: 1rem;\r\n}\r\n.card{\r\n    box-shadow: 0 0 5px rgba(0,0,0,0.7);\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.card-title{\r\n    \r\n    text-align:center;\r\n    margin-top: .50rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b257XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwwLDAsMC43KTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbi5jYXJke1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhcmQtdGl0bGV7XHJcbiAgICBcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogLjUwcmVtO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/shared/post/post.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/shared/post/post.component.ts ***!
  \*******************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_request_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/request.model */ "./src/app/models/request.model.ts");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var src_app_services_user_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user-state.service */ "./src/app/services/user-state.service.ts");







let PostComponent = class PostComponent {
    constructor(router, requestService, userState, datePipe) {
        this.router = router;
        this.requestService = requestService;
        this.userState = userState;
        this.datePipe = datePipe;
    }
    ngOnInit() {
    }
    toPage() {
        this.router.navigate([`/post`, this.post.id]);
    }
    makeRequest(postId) {
        let date = this.datePipe.transform(Date.now(), 'dd-MM-yyyy');
        let authorId = this.userState.getUser().id;
        // console.log(date, userId);
        const request = new src_app_models_request_model__WEBPACK_IMPORTED_MODULE_4__["Request"]().buildPost({ authorId, postId, date });
        console.log(request);
        this.requestService.addRequest(request).subscribe();
    }
};
PostComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"] },
    { type: src_app_services_user_state_service__WEBPACK_IMPORTED_MODULE_6__["UserStateService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], PostComponent.prototype, "post", void 0);
PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/post/post.component.html")).default,
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post.component.css */ "./src/app/modules/shared/post/post.component.css")).default]
    })
], PostComponent);



/***/ }),

/***/ "./src/app/modules/shared/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/modules/shared/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/modules/shared/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post/post.component */ "./src/app/modules/shared/post/post.component.ts");







let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _post_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"]],
        exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _post_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/modules/system/chat/chat.component.css":
/*!********************************************************!*\
  !*** ./src/app/modules/system/chat/chat.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".userLink{\r\n    color:rgb(0, 75, 100);\r\n    width: 20%;\r\n}\r\n.userLink:hover{\r\n    color: rgb(1, 146, 146);\r\n}\r\n#closeBtn{\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    z-index: 100;\r\n    border: 1px solid black;\r\n    background-color:slategrey;\r\n    width: 30%;\r\n}\r\n#form{\r\n    display: none;\r\n    position: absolute;\r\n    z-index: 50;\r\n    top: 0;\r\n    padding-top: 3%;\r\n    background-color: rgb(218, 218, 218);\r\n    height: auto;\r\n    width: 100%;\r\n}\r\n.inputLarge {\r\n    width: 80vw;\r\n}\r\nh5{\r\n    border-bottom: 1px solid black;\r\n    width: 20%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zeXN0ZW0vY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtBQUNkO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsTUFBTTtJQUNOLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zeXN0ZW0vY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlckxpbmt7XHJcbiAgICBjb2xvcjpyZ2IoMCwgNzUsIDEwMCk7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcbi51c2VyTGluazpob3ZlcntcclxuICAgIGNvbG9yOiByZ2IoMSwgMTQ2LCAxNDYpO1xyXG59XHJcbiNjbG9zZUJ0bntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnNsYXRlZ3JleTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn1cclxuI2Zvcm17XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogNTA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAyMTgsIDIxOCk7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uaW5wdXRMYXJnZSB7XHJcbiAgICB3aWR0aDogODB2dztcclxufVxyXG5oNXtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIHdpZHRoOiAyMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/system/chat/chat.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/system/chat/chat.component.ts ***!
  \*******************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_message_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/message.model */ "./src/app/models/message.model.ts");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var src_app_services_user_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user-state.service */ "./src/app/services/user-state.service.ts");








let ChatComponent = class ChatComponent {
    constructor(userState, searchService, activatedRoute, router, formBuilder, messageService) {
        this.userState = userState;
        this.searchService = searchService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.messageService = messageService;
    }
    // allUsers = this.searchService.getAllUsers();
    ngOnInit() {
        this.formSort = this.formBuilder.group({
            typeSort: ["asc"]
        });
        this.formUser = this.formBuilder.group({
            messageToAdmin: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.formAdmin = this.formBuilder.group({
            messageToUser: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.searchService.getUserById(this.userState.getUser().id)
            .subscribe(user => {
            this.messages = user.messages;
            this.searchService.getAllUsers()
                .subscribe(data => {
                this.users = data;
                this.activatedRoute.params.subscribe(params => {
                    // console.log(this.router.url);
                    this.searchService.getUserById(params.id)
                        .subscribe(data => {
                        this.activeUser = data;
                        if (this.router.url != "/chat") {
                            this.show();
                        }
                        // console.log(this.activeUser.messages[0]);
                    });
                });
                // console.log(this.users);
            });
        });
    }
    toPage(link) {
        if (this.router.url == link) {
            this.show();
        }
        else
            this.router.navigate([link]);
    }
    onSubmitUser() {
        let user = this.userState.getUser();
        let authorName = user.userName;
        let message = this.formUser.value.messageToAdmin;
        let msg = new src_app_models_message_model__WEBPACK_IMPORTED_MODULE_4__["Message"]().build({ authorName, message });
        // console.log(this.userState.getUser().messages )
        this.messages.push(msg);
        this.userState.getUser().messages = this.messages;
        this.messageService.sendMsg(this.messages, user.id).subscribe();
        this.formUser.reset();
    }
    onSubmitAdmin() {
        let authorName = "Admin";
        let message = this.formAdmin.value.messageToUser;
        let msg = new src_app_models_message_model__WEBPACK_IMPORTED_MODULE_4__["Message"]().build({ authorName, message });
        this.activeUser.messages.push(msg);
        this.users.forEach(element => {
            element && element.id == this.activeUser.id ? element.messages = this.activeUser.messages : element;
        });
        this.messageService.sendMsg(this.activeUser.messages, this.activeUser.id).subscribe();
        this.formAdmin.reset();
    }
    show() {
        // console.log(document.getElementById("form").style.display);
        if (document.getElementById("form").style.display != "block") {
            document.getElementById("form").style.display = "block";
        }
        else {
            document.getElementById("form").style.display = "none";
        }
    }
    onSubmitSort() {
        // console.log(this.form.value.volumeOfText);
        this.bubbleSort(this.formSort.value.typeSort);
    }
    bubbleSort(type) {
        switch (type) {
            case "asc":
                this.users.sort(function (a, b) {
                    return a.messages.length - b.messages.length;
                });
                break;
            case "desc":
                this.users.sort(function (a, b) {
                    return b.messages.length - a.messages.length;
                });
                break;
        }
    }
    get messageToUser() {
        return this.formAdmin.get("messageToUser");
    }
    get messageToAdmin() {
        return this.formUser.get("messageToAdmin");
    }
};
ChatComponent.ctorParameters = () => [
    { type: src_app_services_user_state_service__WEBPACK_IMPORTED_MODULE_7__["UserStateService"] },
    { type: src_app_services_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }
];
ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/system/chat/chat.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat.component.css */ "./src/app/modules/system/chat/chat.component.css")).default]
    })
], ChatComponent);



/***/ }),

/***/ "./src/app/modules/system/home/home.component.css":
/*!********************************************************!*\
  !*** ./src/app/modules/system/home/home.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table{\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zeXN0ZW0vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3N5c3RlbS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/system/home/home.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/system/home/home.component.ts ***!
  \*******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");





let HomeComponent = class HomeComponent {
    constructor(searchService, formBuilder, router) {
        this.searchService = searchService;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    ngOnInit() {
        this.searchService.getAllPosts().subscribe(data => { this.posts = data; });
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/system/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/modules/system/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/modules/system/manage-choose/manage-choose.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/modules/system/manage-choose/manage-choose.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#textCentre{\r\n    position:absolute;\r\n    width:100%;\r\n    margin-top: 10vh;\r\n    justify-content:center;\r\n    text-align:center;\r\n}\r\nbutton{\r\n    width: 40vw;\r\n    height: 30vh;\r\n    font-size: 4.5rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zeXN0ZW0vbWFuYWdlLWNob29zZS9tYW5hZ2UtY2hvb3NlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3lzdGVtL21hbmFnZS1jaG9vc2UvbWFuYWdlLWNob29zZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RleHRDZW50cmV7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbmJ1dHRvbntcclxuICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgZm9udC1zaXplOiA0LjVyZW07XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/system/manage-choose/manage-choose.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/system/manage-choose/manage-choose.component.ts ***!
  \*************************************************************************/
/*! exports provided: ManageChooseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageChooseComponent", function() { return ManageChooseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-state.service */ "./src/app/services/user-state.service.ts");




let ManageChooseComponent = class ManageChooseComponent {
    constructor(router, userState) {
        this.router = router;
        this.userState = userState;
    }
    ngOnInit() {
        if (!this.userState.isAdmin())
            this.router.navigate(["/"]);
    }
    toPage(link) {
        this.router.navigate([link]);
    }
};
ManageChooseComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_user_state_service__WEBPACK_IMPORTED_MODULE_3__["UserStateService"] }
];
ManageChooseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-choose',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-choose.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/system/manage-choose/manage-choose.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-choose.component.css */ "./src/app/modules/system/manage-choose/manage-choose.component.css")).default]
    })
], ManageChooseComponent);



/***/ }),

/***/ "./src/app/modules/system/notifications/notifications.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/modules/system/notifications/notifications.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3lzdGVtL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/system/notifications/notifications.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/system/notifications/notifications.component.ts ***!
  \*************************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_user_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-state.service */ "./src/app/services/user-state.service.ts");



let NotificationsComponent = class NotificationsComponent {
    constructor(userState) {
        this.userState = userState;
        this.notifications = this.userState.getUser().notifications;
    }
    ngOnInit() {
    }
};
NotificationsComponent.ctorParameters = () => [
    { type: src_app_services_user_state_service__WEBPACK_IMPORTED_MODULE_2__["UserStateService"] }
];
NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifications',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/system/notifications/notifications.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notifications.component.css */ "./src/app/modules/system/notifications/notifications.component.css")).default]
    })
], NotificationsComponent);



/***/ }),

/***/ "./src/app/modules/system/post-manager/post-manager.component.css":
/*!************************************************************************!*\
  !*** ./src/app/modules/system/post-manager/post-manager.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3lzdGVtL3Bvc3QtbWFuYWdlci9wb3N0LW1hbmFnZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/system/post-manager/post-manager.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/system/post-manager/post-manager.component.ts ***!
  \***********************************************************************/
/*! exports provided: PostManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostManagerComponent", function() { return PostManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_post_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/post.model */ "./src/app/models/post.model.ts");
/* harmony import */ var src_app_services_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/manager.service */ "./src/app/services/manager.service.ts");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var src_app_services_user_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user-state.service */ "./src/app/services/user-state.service.ts");








let PostManagerComponent = class PostManagerComponent {
    constructor(formBuilder, searchService, managerService, router, userState) {
        this.formBuilder = formBuilder;
        this.searchService = searchService;
        this.managerService = managerService;
        this.router = router;
        this.userState = userState;
        this.isExist = true;
    }
    ngOnInit() {
        if (!this.userState.isAdmin()) {
            this.router.navigate(["/"]);
        }
        this.form = this.formBuilder.group({
            title: [""],
            src: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            desc: [""]
        });
        this.formEdit = this.formBuilder.group({
            idEdit: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            titleEdit: [""],
            srcEdit: [""],
            descEdit: [""]
        });
    }
    onSubmit() {
        const post = new src_app_models_post_model__WEBPACK_IMPORTED_MODULE_4__["Post"]().buildPost(this.form.value);
        this.managerService.addPost(post)
            .subscribe(data => { this.form.reset(); });
    }
    edit() {
        const post = new src_app_models_post_model__WEBPACK_IMPORTED_MODULE_4__["Post"]().buildPut(this.formEdit.value);
        this.managerService.editPost(post)
            .subscribe(data => { this.formEdit.reset(); });
    }
    deletePost() {
        const post = new src_app_models_post_model__WEBPACK_IMPORTED_MODULE_4__["Post"]().buildPut(this.formEdit.value);
        this.managerService.removePost(post)
            .subscribe(data => { this.formEdit.reset(); });
    }
    onChangeId() {
        this.searchService.getPostById(this.formEdit.value.idEdit)
            .subscribe((data) => {
            this.post = data;
            this.isExist = true;
            // console.log(myForm);
            this.formEdit.patchValue({
                titleEdit: this.post.title,
                srcEdit: this.post.src,
                descEdit: this.post.desc
            });
        }, (err) => {
            this.isExist = false;
            //console.log(this.isExist);
        });
    }
    get src() {
        return this.form.get('src');
    }
    get idEdit() {
        return this.formEdit.get('idEdit');
    }
    get titleEdit() {
        return this.formEdit.get('titleEdit');
    }
    get srcEdit() {
        return this.formEdit.get('srcEdit');
    }
    get descEdit() {
        return this.formEdit.get('descEdit');
    }
};
PostManagerComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"] },
    { type: src_app_services_manager_service__WEBPACK_IMPORTED_MODULE_5__["ManagerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_user_state_service__WEBPACK_IMPORTED_MODULE_7__["UserStateService"] }
];
PostManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-manager',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-manager.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/system/post-manager/post-manager.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-manager.component.css */ "./src/app/modules/system/post-manager/post-manager.component.css")).default]
    })
], PostManagerComponent);



/***/ }),

/***/ "./src/app/modules/system/request-manager/request-manager.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/modules/system/request-manager/request-manager.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table{\r\n    width: 100%;\r\n    border: 2px solid black;\r\n    font-size: 1.5rem;\r\n    position: relative;\r\n    z-index: 5;\r\n}\r\ntr{\r\n    border-bottom:  2px solid black;\r\n}\r\ntd, th{\r\n    width: 10%;\r\n    border-right: 2px solid black;\r\n    padding: 2% 2%;\r\n    text-align: center;\r\n\r\n}\r\nbutton{\r\n    width: 50%;\r\n    font-size: 1.5rem;\r\n}\r\n#form{\r\n    display: none;\r\n    position: absolute;\r\n    z-index: 50;\r\n    top: 0;\r\n    background-color: rgba(255, 255, 255, 0.877);\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\nselect{\r\n    width: 100%;\r\n}\r\n#closeBtn{\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    z-index: 100;\r\n    border: 1px solid black;\r\n    background-color:slategrey;\r\n    width: 30%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zeXN0ZW0vcmVxdWVzdC1tYW5hZ2VyL3JlcXVlc3QtbWFuYWdlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksK0JBQStCO0FBQ25DO0FBRUE7SUFDSSxVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ04sNENBQTRDO0lBQzVDLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zeXN0ZW0vcmVxdWVzdC1tYW5hZ2VyL3JlcXVlc3QtbWFuYWdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA1O1xyXG59XHJcbnRye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogIDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxudGQsIHRoe1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogMiUgMiU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcbmJ1dHRvbntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4jZm9ybXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA1MDtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NzcpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuc2VsZWN0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuI2Nsb3NlQnRue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6c2xhdGVncmV5O1xyXG4gICAgd2lkdGg6IDMwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/system/request-manager/request-manager.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/system/request-manager/request-manager.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RequestManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestManagerComponent", function() { return RequestManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/manager.service */ "./src/app/services/manager.service.ts");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var src_app_services_user_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user-state.service */ "./src/app/services/user-state.service.ts");







let RequestManagerComponent = class RequestManagerComponent {
    constructor(userState, router, manager, searchService, formBuilder) {
        this.userState = userState;
        this.router = router;
        this.manager = manager;
        this.searchService = searchService;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        if (!this.userState.isAdmin()) {
            this.router.navigate(["/"]);
        }
        this.init();
        this.form = this.formBuilder.group({
            id: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.manager.getAllPosts()
            .subscribe(data => {
            this.posts = data;
        });
        // console.log(this.form.value);
    }
    init() {
        this.manager.getAllRequests()
            .subscribe(data => {
            this.requests = data;
            for (let i = 0; i < this.requests.length; i++) {
                let request = this.requests[i];
                let author;
                let post;
                this.searchService.getUserById(request.authorId)
                    .subscribe(data => {
                    author = data;
                    this.searchService.getPostById(request.postId)
                        .subscribe(data => {
                        post = data;
                        // console.log(request.id);
                        request = {
                            author: author,
                            post: post,
                            date: request.date,
                            id: request.id
                        };
                        this.requests[i] = request;
                        // console.log(this.requests[i]);
                    });
                });
            }
        });
    }
    editRequest() {
        // console.log(this.form.value.id);
        // console.log(this.reqId);
        const postId = this.form.value.id;
        const post = this.posts.find(obj => obj.id == postId);
        this.manager.editRequest(this.editReq.id, postId)
            .subscribe(data => {
            this.init();
            this.show();
            this.searchService.getUserById(this.editReq.author.id)
                .subscribe(data => {
                let user = data;
                user.notifications.push("Ваша заявка №" + this.editReq.id + " под названием " + this.editReq.post.title + " была изменена на " + post.title);
                this.manager.sendNotification(user.id, user.notifications)
                    .subscribe();
            });
        });
    }
    deleteRequest() {
        this.manager.removeRequest(this.editReq.id)
            .subscribe(data => {
            this.init();
            this.show();
            this.searchService.getUserById(this.editReq.author.id)
                .subscribe(data => {
                let user = data;
                user.notifications.push("Ваша заявка №" + this.editReq.id + " под названием " + this.editReq.post.title + " была удалена");
                this.manager.sendNotification(user.id, user.notifications)
                    .subscribe();
            });
        });
    }
    edittingRequest(req) {
        this.editReq = req;
        console.log(this.editReq);
    }
    show() {
        // console.log(document.getElementById("form").style.display);
        document.getElementById("form").style.display =
            document.getElementById("form").style.display == "" ||
                document.getElementById("form").style.display == "none" ? "block" : "none";
    }
};
RequestManagerComponent.ctorParameters = () => [
    { type: src_app_services_user_state_service__WEBPACK_IMPORTED_MODULE_6__["UserStateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_manager_service__WEBPACK_IMPORTED_MODULE_4__["ManagerService"] },
    { type: src_app_services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
RequestManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-request-manager',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./request-manager.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/system/request-manager/request-manager.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./request-manager.component.css */ "./src/app/modules/system/request-manager/request-manager.component.css")).default]
    })
], RequestManagerComponent);



/***/ }),

/***/ "./src/app/modules/system/system-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/system/system-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SystemRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemRoutingModule", function() { return SystemRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/modules/system/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _post_manager_post_manager_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-manager/post-manager.component */ "./src/app/modules/system/post-manager/post-manager.component.ts");
/* harmony import */ var _request_manager_request_manager_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request-manager/request-manager.component */ "./src/app/modules/system/request-manager/request-manager.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/modules/system/chat/chat.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/modules/system/notifications/notifications.component.ts");
/* harmony import */ var _manage_choose_manage_choose_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manage-choose/manage-choose.component */ "./src/app/modules/system/manage-choose/manage-choose.component.ts");









const routes = [
    {
        path: "",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: "manageChoose",
        component: _manage_choose_manage_choose_component__WEBPACK_IMPORTED_MODULE_8__["ManageChooseComponent"]
    },
    {
        path: "post-manager",
        component: _post_manager_post_manager_component__WEBPACK_IMPORTED_MODULE_4__["PostManagerComponent"]
    },
    {
        path: "chat",
        component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"]
    },
    {
        path: "request-manager",
        component: _request_manager_request_manager_component__WEBPACK_IMPORTED_MODULE_5__["RequestManagerComponent"]
    },
    {
        path: "notifications",
        component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_7__["NotificationsComponent"]
    },
    {
        path: "chat/:id",
        component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"]
    }
];
let SystemRoutingModule = class SystemRoutingModule {
};
SystemRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], SystemRoutingModule);



/***/ }),

/***/ "./src/app/modules/system/system.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/system/system.module.ts ***!
  \*************************************************/
/*! exports provided: SystemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemModule", function() { return SystemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _system_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./system-routing.module */ "./src/app/modules/system/system-routing.module.ts");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/modules/system/home/home.component.ts");
/* harmony import */ var _post_manager_post_manager_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./post-manager/post-manager.component */ "./src/app/modules/system/post-manager/post-manager.component.ts");
/* harmony import */ var _request_manager_request_manager_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./request-manager/request-manager.component */ "./src/app/modules/system/request-manager/request-manager.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/modules/system/chat/chat.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/modules/system/notifications/notifications.component.ts");
/* harmony import */ var _manage_choose_manage_choose_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./manage-choose/manage-choose.component */ "./src/app/modules/system/manage-choose/manage-choose.component.ts");













let SystemModule = class SystemModule {
};
SystemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _post_manager_post_manager_component__WEBPACK_IMPORTED_MODULE_8__["PostManagerComponent"], _request_manager_request_manager_component__WEBPACK_IMPORTED_MODULE_9__["RequestManagerComponent"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_10__["ChatComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__["NotificationsComponent"], _manage_choose_manage_choose_component__WEBPACK_IMPORTED_MODULE_12__["ManageChooseComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _system_routing_module__WEBPACK_IMPORTED_MODULE_4__["SystemRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]],
        providers: [src_app_services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"]]
    })
], SystemModule);



/***/ }),

/***/ "./src/app/services/manager.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/manager.service.ts ***!
  \*********************************************/
/*! exports provided: ManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerService", function() { return ManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");




let ManagerService = class ManagerService {
    constructor(http) {
        this.http = http;
    }
    getAllRequests() {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/requests`);
    }
    getAllPosts() {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/posts`);
    }
    addPost(post) {
        return this.http.post(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/posts`, post);
    }
    removePost(post) {
        return this.http.delete(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/posts/${post.id}`);
    }
    editPost(post) {
        return this.http.put(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/posts/${post.id}`, post);
    }
    editRequest(reqId, postId) {
        return this.http.patch(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/requests/${reqId}`, { postId: postId });
    }
    removeRequest(reqId) {
        return this.http.delete(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/requests/${reqId}`);
    }
    sendNotification(userId, notes) {
        return this.http.patch(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/users/${userId}`, { notifications: notes });
    }
};
ManagerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ManagerService);



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");




let MessageService = class MessageService {
    constructor(http) {
        this.http = http;
    }
    sendMsg(msg, sendToId) {
        return this.http.patch(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/users/${sendToId}`, { messages: msg });
    }
};
MessageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], MessageService);



/***/ }),

/***/ "./src/app/services/request.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/request.service.ts ***!
  \*********************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");




let RequestService = class RequestService {
    constructor(http) {
        this.http = http;
    }
    addRequest(req) {
        return this.http.post(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/requests`, req);
    }
};
RequestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
RequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], RequestService);



/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





// import { Post } from '../models/post.model';
let SearchService = class SearchService {
    constructor(http) {
        this.http = http;
    }
    getAllUsers() {
        return this.http.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/users`);
    }
    getAllPosts() {
        return this.http.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/posts`);
    }
    searchByPost(searchQuery) {
        return this.http.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/posts?q=${searchQuery}`);
    }
    getUserByEmail(email) {
        return this.http.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/users?email=${email}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((user) => user[0] ? user[0] : undefined));
    }
    getUserById(id) {
        return this.http.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/users?id=${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((user) => user[0] ? user[0] : undefined));
    }
    getPostById(id) {
        return this.http.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/posts/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((post) => post ? post : undefined));
    }
};
SearchService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root"
    })
], SearchService);



/***/ }),

/***/ "./src/app/services/user-state.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/user-state.service.ts ***!
  \************************************************/
/*! exports provided: UserStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStateService", function() { return UserStateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const LSUserKey = "user";
let UserStateService = class UserStateService {
    constructor(router) {
        this.router = router;
    }
    setUser(user) {
        this.user = user;
        localStorage.setItem(LSUserKey, JSON.stringify(user));
        this.countOfNotes = this.user.notifications.length;
    }
    getUser() {
        return this.user;
    }
    deleteUser() {
        this.user = undefined;
        localStorage.removeItem(LSUserKey);
    }
    logOut() {
        this.user = undefined;
        localStorage.removeItem(LSUserKey);
        this.router.navigate(["/login"]);
    }
    fetch() {
        let user = localStorage.getItem(LSUserKey);
        let newUser = user !== null && user !== undefined ? JSON.parse(user) : undefined;
        if (newUser !== undefined) {
            this.countOfNotes = newUser.notifications.length;
            this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](newUser.userName, newUser.email, newUser.password, newUser.messages, newUser.notifications, newUser.id);
        }
    }
    isAuth() {
        return this.user != undefined;
    }
    isAdmin() {
        if (this.user == undefined) {
            return false;
        }
        else
            return this.user.id == 1;
    }
};
UserStateService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UserStateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], UserStateService);



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const environment = {
    production: true,
    apiUrl: "http://localhost:3000"
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiUrl: "http://localhost:3000"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\_PROJECTS\JourneyCalls\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map