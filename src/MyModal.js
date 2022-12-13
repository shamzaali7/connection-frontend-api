// import React from 'react'

// import { useRef } from 'react';
// import emailjs from 'emailjs-com'
// import Modal from '@mui/material/Modal';

// const MyModal = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_fw7btnp', 'template_1ddi2tb', form.current, 'dbrNhNqA6cZkI55gb')

//     e.target.reset()
//   };

//   return (
//     <section id='contact'>
//         <Modal>
//       <h5>Get In Touch</h5>
//       <h2>Contact Me</h2>

//       <div className="container contact__container">
//         <div className="contact__options">
//           <article className="contact__option">
//             <MdOutlineEmail className='contact__option-icon'/>
//             <h4>Email</h4>
//             <h5>Brittanyjdavis22@gmail.com</h5>
//             <a href="mailto:dBrittanyjdavis22@gmail.com" target="_blank">Send a message</a>
//           </article>
//         </div>
//         {/* END OF CONTACT OPTIONS */}
//         <form ref={form} onSubmit={sendEmail}>
//           <input type="text" name='name' placeholder='Your Full Name' required />
//           <input type="email" name='email' placeholder='Your Email' required />
//           <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
//           <button type='submit' className='btn btn-primary'>Send Message</button>
//         </form>
//       </div>
//       </Modal>
//     </section>
//   )
// }

// export default MyModal