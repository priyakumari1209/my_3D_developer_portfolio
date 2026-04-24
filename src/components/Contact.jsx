import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiUser, FiMail, FiMessageSquare, FiSend } from "react-icons/fi";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.message) {
      setStatus({
        type: "error",
        message: "Please fill in all mandatory fields.",
      });
      return;
    }

    if (!validateEmail(form.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c86f13a9-35c2-4847-ac79-2a8b6fc44be3",
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `[Portfolio Inquiry] New Message from ${form.name}`,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setLoading(false);
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. I'll get back to you soon.",
        });
        setForm({
          name: "",
          email: "",
          message: "",
        });
        
        setTimeout(() => setStatus({ type: null, message: "" }), 6000);
      } else {
        setLoading(false);
        setStatus({
          type: "error",
          message: result.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setLoading(false);
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
  };

  return (
    <div className="w-full">
      <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
        {/* Form Container */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] glass-card p-8 w-full shadow-2xl relative overflow-hidden'
        >
          {/* Subtle background glow inside the card */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#cbd5f5]/10 blur-[80px] rounded-full" />
          
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8 relative z-10'
          >
            {/* Honeypot Spam Protection */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

            <label className='flex flex-col'>
              <div className="flex items-center gap-2 mb-4">
                <FiUser className="text-[#cbd5f5] text-lg" />
                <span className='text-white font-medium'>Your Name</span>
              </div>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className='bg-[#1e293b]/50 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border border-white/10 focus:border-[#cbd5f5] transition-all font-medium shadow-inner backdrop-blur-sm'
                required
              />
            </label>

            <label className='flex flex-col'>
              <div className="flex items-center gap-2 mb-4">
                <FiMail className="text-[#cbd5f5] text-lg" />
                <span className='text-white font-medium'>Your Email</span>
              </div>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className='bg-[#1e293b]/50 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border border-white/10 focus:border-[#cbd5f5] transition-all font-medium shadow-inner backdrop-blur-sm'
                required
              />
            </label>

            <label className='flex flex-col'>
              <div className="flex items-center gap-2 mb-4">
                <FiMessageSquare className="text-[#cbd5f5] text-lg" />
                <span className='text-white font-medium'>Your Message</span>
              </div>
              <textarea
                rows={6}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What you want to say?'
                className='bg-[#1e293b]/50 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border border-white/10 focus:border-[#cbd5f5] transition-all font-medium shadow-inner resize-none backdrop-blur-sm'
                required
              />
            </label>

            <div className="flex flex-col gap-6">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#1e293b" }}
                whileTap={{ scale: 0.95 }}
                type='submit'
                disabled={loading}
                className='bg-[#151030] py-3 px-10 rounded-xl outline-none w-fit text-white font-bold shadow-lg shadow-black/50 border border-white/10 flex items-center gap-3 hover:shadow-[#cbd5f5]/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed group'
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </motion.button>

              <AnimatePresence mode="wait">
                {status.message && (
                  <motion.div
                    key={status.type}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className={`p-4 rounded-xl text-sm font-medium border flex items-center gap-3 shadow-xl ${
                      status.type === "success" 
                        ? "bg-green-500/10 border-green-500/30 text-green-400" 
                        : "bg-red-500/10 border-red-500/30 text-red-400"
                    }`}
                  >
                    <div className={`w-2.5 h-2.5 rounded-full animate-pulse ${status.type === 'success' ? 'bg-green-400 shadow-[0_0_10px_#4ade80]' : 'bg-red-400 shadow-[0_0_10px_#f87171]'}`} />
                    {status.message}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </motion.div>

        {/* Canvas - Hidden on mobile and tablet (below xl) */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='hidden xl:block xl:flex-1 xl:h-auto'
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
