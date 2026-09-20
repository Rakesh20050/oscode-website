import { useState } from "react";
import { Mail, MapPin, Send, MessageSquare, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Container from "../components/common/Container";
import PageIntro from "../components/common/PageIntro";
import NeonFrame from "../components/common/NeonFrame";

export default function Contact() {
  const [form, setForm] = useState({ name: "", subject: "", message: "" });
  const send = (e) => { e.preventDefault(); const subject = encodeURIComponent(form.subject || "Inquiry for OSCode CIT"); const body = encodeURIComponent(`Hi OSCode CIT Team,\n\n${form.message}\n\nBest regards,\n${form.name}`); window.location.href = `mailto:oscodecit@cambridge.edu.in?subject=${subject}&body=${body}`; };
  return <main className="future-page"><Container className="!max-w-[1450px]">
    <PageIntro icon={MessageSquare} eyebrow="OSCODE / CONNECT" title="Let's Build" accent="Together" description="Have an idea for a workshop, open-source project, research activity, or collaboration? Reach the OSCode CIT team." />
    <div className="contact-layout">
      <NeonFrame eyebrow="CONTACT DIRECTORY" title="Find OSCode CIT" description="Use the official channels below for collaboration and community conversations.">
        <div className="contact-stack">
          <a className="contact-card" href="mailto:oscodecit@cambridge.edu.in"><span><Mail size={21}/></span><div><small>OFFICIAL EMAIL</small><strong>oscodecit@cambridge.edu.in</strong></div><ArrowUpRight size={17}/></a>
          <div className="contact-card"><span><MapPin size={21}/></span><div><small>CAMPUS LOCATION</small><strong>Cambridge Institute of Technology</strong><p>SMV Block Auditorium, Bengaluru, Karnataka</p></div></div>
          <div className="contact-socials"><a href="https://github.com/oscode-cit" target="_blank" rel="noreferrer"><FaGithub/> GitHub</a><a href="https://www.linkedin.com/company/oscodecit/" target="_blank" rel="noreferrer"><FaLinkedin/> LinkedIn</a><a href="https://www.instagram.com/oscodecit" target="_blank" rel="noreferrer"><FaInstagram/> Instagram</a></div>
        </div>
      </NeonFrame>
      <NeonFrame eyebrow="MESSAGE CONSOLE" title="Compose a Message" description="Fill the form and your email client will open with the message prepared.">
        <form className="future-form" onSubmit={send}><label>YOUR NAME<input required value={form.name} onChange={(e) => setForm({...form,name:e.target.value})} placeholder="Your name"/></label><label>SUBJECT / TOPIC<input required value={form.subject} onChange={(e) => setForm({...form,subject:e.target.value})} placeholder="Workshop collaboration / project inquiry"/></label><label>MESSAGE<textarea required rows={7} value={form.message} onChange={(e) => setForm({...form,message:e.target.value})} placeholder="Write your message..."/></label><button className="primary-action" type="submit"><Send size={17}/> Open Email Client</button></form>
      </NeonFrame>
    </div>
  </Container></main>;
}
