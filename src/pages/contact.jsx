import { useState } from "react";
import { useAsyncError } from "react-router-dom";

const Contact = () => {
    const [email, setEmail] = useState('');
    comst [emailError, setEmailError] = useState('');

    const validateEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailError(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? '' : 'Invalid email address.'

        );
    };

return (
    <section id="contact">
        <form>
            <label>
                Name: <input type="text" required />
            </label>
            <label>
                Email: <input type="email" value={email} onChange={validateEmail} required />
                {emailError && <span>{emailError}</span>}
            </label>
            <label>
                Message: <textarea required></textarea>
            </label>
            <button type="submit">Submit</button>
        </form>
    </section>
  );
};

export default Contact;