const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "", // Put in here wich provider you are using (outlook=hotmail!!!)
    auth: {
        user: "", //the mail 
        pass: "", //the password
    }

});

const options = {
    from: "", //From the dummy email
    to: "", // Reciever
    subject: "",
    text: "",
    html: "",
};

transporter.sendMail(options, function(err, info) {
    if(err){
        console.log(err);
        return;
    }
    console.log("Sent: " + info.response);
})