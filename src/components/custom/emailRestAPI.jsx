"use client"

import axios from 'axios';
import React, { useState } from 'react'
import { Button } from "../ui/button"
import { toast } from 'sonner';

const EmailRestAPI = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        message_title: title,
        message: message,
      }
    };

    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);
      toast.success("Email successfully sent.")
      setName('');
      setEmail('');
      setTitle('');
      setMessage('');
    } catch (error) {
      console.error(error);
      toast.error("Error sending email. Please try again later.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            className="w-full px-3 py-2 border rounded-md border-input bg-background"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            className="w-full px-3 py-2 border rounded-md border-input bg-background"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Subject"
          value={title}
          className="w-full px-3 py-2 border rounded-md border-input bg-background"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <textarea
          value={message}
          className="w-full px-3 py-2 border rounded-md border-input bg-background min-h-[120px]"
          placeholder="Your message"
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <Button type="submit" variant={undefined} size={undefined}>
        Send Message
      </Button>
    </form>
  )
}

export default EmailRestAPI