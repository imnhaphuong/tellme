const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const userOtpVerification = require("../models/userOtpVerification");

// let transporter = nodemailer.createTransport({
//     host: "smtp-mail.outlook.com",
//     auth:{
//         user: process.env.AUTH_EMAIL,
//         pass: process.env.AUTH_PASS,
//     },
// });
var transporter = nodemailer.createTransport({ // config mail server
    host: "smtp.office365.com",
    port: 587,
    auth: {
        user: 'tellme022@hotmail.com', //Tài khoản gmail vừa tạo
        pass: '23conmuc' //Mật khẩu tài khoản gmail vừa tạo
    }
});
const senOTPVerificationEmail = async ({ _id, email }, res) => {
    try {
        const otp = `${Math.floor(1000 + Math.random() * 9000)}`;

        //email option
        const mailOption = {
            from: 'tellme022@hotmail.com',
            to: email,
            subject: "Verify your email",
            html: `Hi!
            Please help me turn off the “Use only SMS for confirming transfer of funds” and “Use only SMS to confirm the request for withdrawal”.　
            <p> Enter <b>${otp}</b> in the app to verify your email address.　</p>　Thank’s `
        };
        //hash the otp 
        const saltRounds = 10;
        const hashedOTP = await bcrypt.hash(otp, saltRounds);
        const newOTPVerification = await new userOtpVerification({
            Userid: _id,
            otp: hashedOTP,
            createdAt: Date.now(),
            expireAt: Date.now() + 3600000,
        });
        //save otp record 
        const data = await newOTPVerification.save();
        await transporter.sendMail(mailOption);
        console.log(data);
        return res.json({
            status: "PENDING",
            message: "Verification otp email sent",
            data: {
                Userid: _id,
                email,
            },
        })
        //return data
    } catch (error) {
        console.log(error)
        return res.json({
            status: "FAILED",
            message: error.message,
        });
    }
}
module.exports = senOTPVerificationEmail;