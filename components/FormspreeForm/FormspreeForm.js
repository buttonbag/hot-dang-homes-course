import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link';

export const FormspreeForm = ({formId}) => {
  const [state, handleSubmit] = useForm(formId);
  if (state.succeeded) {
      return <div className="max-w-2xl mx-auto my-5 flex flex-col gap-5 border-solid border-slate-400 border-2 p-5 rounded-md">
        <p>Thank you for your message. We usually respond within 1-2 business days. <Link href="/buying/all-properties" >Browse all of our properties</Link> in the meantime.</p>
        </div>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-2xl mx-auto my-5 flex flex-col gap-5 border-solid border-slate-400 border-2 p-5 rounded-md">
      
        <div className="flex flex-col gap-2">
          <label htmlFor="name">
            Name
          </label>
          <input 
            className="border-solid border-slate-400 border-2 rounded-md p-2 w-full"
            id="name"
            type="text"
            name="name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">
            Email Address
          </label>
          <input 
            className="border-solid border-slate-400 border-2 rounded-md p-2 w-full"
            id="email"
            type="email"
            name="email"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message">
            Message
          </label>
          <textarea
            className="border-solid border-slate-400 border-2 rounded-md p-2 w-full"
            id="message"
            name="message"
          />
          <p className="text-xs text-slate-400 mt-1">We usually take 1-2 business days to respond.</p>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <div>
          <button className="btn" type="submit" disabled={state.submitting}>
            Submit
          </button>
        </div>

      </div>
    </form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}