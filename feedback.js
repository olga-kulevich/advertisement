export default function sendMail() {
    var feedbackName = document.getElementById('feedback-name'),
        feedbackMail = document.getElementById('feedback-mail'),
        feedbackMessage = document.getElementById('feedback-message');

    var payload = {
        from_name: feedbackName.value,
        from_mail: feedbackMail.value,
        message: feedbackMessage.value,
        to_name: "Zhenya",
    }

    //emailjs.send("gmail", "template_CsWbBSbg", payload);
    console.log(payload);
}