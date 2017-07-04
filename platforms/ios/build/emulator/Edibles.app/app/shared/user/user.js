"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator = require("email-validator");
var User = (function () {
    function User() {
    }
    User.prototype.isValidEmail = function () {
        return validator.validate(this.email);
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUUzQztJQUFBO0lBTUEsQ0FBQztJQUhDLDJCQUFZLEdBQVo7UUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQztBQU5ZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHZhbGlkYXRvciA9IHJlcXVpcmUoXCJlbWFpbC12YWxpZGF0b3JcIik7XG5cbmV4cG9ydCBjbGFzcyBVc2VyIHtcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgaXNWYWxpZEVtYWlsKCkge1xuICAgIHJldHVybiB2YWxpZGF0b3IudmFsaWRhdGUodGhpcy5lbWFpbCk7XG4gIH1cbn0iXX0=