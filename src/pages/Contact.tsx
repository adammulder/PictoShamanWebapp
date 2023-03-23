import emailjs from '@emailjs/browser';

const Contact = () => {
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
    <>
    <div className='flex place-content-evenly p-10 bg-slate-500 text-white'>
        <h1 className='sm:text-2xl'>Please contact me with questions, if you want to buy any prints, or request a commission!</h1>
    </div>
    <div className='flex place-content-center p-10 bg-slate-500 h-[65vh] sm:h-[71vh]'>
    <form className="contact-form" onSubmit={sendEmail}>
    <div className='p-5'>
      <label className='text-2xl p-2 text-white'>Name</label>
      <input className='bg-green-200 rounded-md sm:p-2' type="text" name="user_name" />
    </div>
    <div className='p-5'>
      <label className='text-2xl p-2 text-white'>Email</label>
      <input className='bg-green-200 rounded-md sm:p-2' type="email" name="user_email" />
    </div>
    <div className='pt-3 p-5'>
      <label className='text-2xl p-2 text-white'>Message</label>
      <textarea className='bg-green-200 rounded-md' name="message" />
    </div>
      <div className='p-4'>
      <input className='bg-green-500 rounded-xl p-2 ' type="submit" value="Send" />
      </div>
    </form>
    </div>
    
    </>
  );
};

export default Contact