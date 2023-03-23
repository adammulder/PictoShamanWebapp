import emailjs from '@emailjs/browser';

const Form = () => {
  function sendEmail(e: { preventDefault: () => void; target: any | HTMLFormElement; }) {
    e.preventDefault();

    emailjs.sendForm('service_uoq8ofm', 'template_0qrs4uo', e.target, '3IdtxdDc7x32uIA7s')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setTimeout( () => {window.location.reload()},500)
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Form