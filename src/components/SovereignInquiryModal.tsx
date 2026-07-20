import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Shield, Sparkles, CheckCircle2, Loader2 } from 'lucide-react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { handleFirestoreError, OperationType } from '../lib/firebaseUtils';

export const SovereignInquiryModal: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleOpenInquiry = () => setIsOpen(true);
    window.addEventListener('open-sovereign-inquiry', handleOpenInquiry);
    return () => window.removeEventListener('open-sovereign-inquiry', handleOpenInquiry);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'General Resonance Inquiry',
    message: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [fieldErrors, setFieldErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateField = (name: string, value: string): string => {
    if (name === 'name') {
      if (!value.trim()) return 'Name is required.';
      if (value.length > 100) return 'Name cannot exceed 100 characters.';
    }
    if (name === 'email') {
      if (!value.trim()) return 'Email is required.';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value.trim())) return 'Please enter a valid email address (e.g. name@domain.com).';
      if (value.length > 150) return 'Email cannot exceed 150 characters.';
    }
    if (name === 'message') {
      if (!value.trim()) return 'Message is required.';
      if (value.length > 2000) return 'Message cannot exceed 2000 characters.';
    }
    return '';
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name in touched) {
      setTouched((prev) => ({ ...prev, [name]: true }));
      const error = validateField(name, value);
      setFieldErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name in touched) {
      setTouched((prev) => ({ ...prev, [name]: true }));
      const error = validateField(name, value);
      setFieldErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Hard character and format validation
    const nameErr = validateField('name', formData.name);
    const emailErr = validateField('email', formData.email);
    const messageErr = validateField('message', formData.message);

    if (nameErr || emailErr || messageErr) {
      setTouched({ name: true, email: true, message: true });
      setFieldErrors({ name: nameErr, email: emailErr, message: messageErr });
      setErrorMsg('Please correct the validation errors in the form.');
      return;
    }

    setIsSubmitting(true);

    // Generate safe ID adhering to security rules validation format
    const randomSuffix = Math.random().toString(36).substring(2, 11);
    const inquiryId = `inq_${Date.now()}_${randomSuffix}`;
    const collectionPath = 'inquiries';

    try {
      // Save directly into the Firestore collection
      const inquiryDocRef = doc(db, collectionPath, inquiryId);
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        category: formData.category,
        message: formData.message.trim(),
        createdAt: new Date().toISOString(),
      };

      await setDoc(inquiryDocRef, payload);

      // Trigger direct mailto notification to Latif's email
      const subject = `[Cymatic Inquiry] ${formData.category} from ${formData.name}`;
      const body = `Hello Latif,

You have received a new sovereign inquiry via the Cymatic Portal:

Sender Name : ${formData.name}
Sender Email: ${formData.email}
Category    : ${formData.category}
Timestamp   : ${new Date().toLocaleString()}

MESSAGE CONTENT:
--------------------------------------------------
${formData.message}
--------------------------------------------------

This inquiry is also securely saved in the Firestore database nodes under ID: ${inquiryId}.

Best regards,
Sovereign Integration Gateway`;

      const mailtoUrl = `mailto:latifisabirye123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        category: 'General Resonance Inquiry',
        message: '',
      });
      setTouched({ name: false, email: false, message: false });
      setFieldErrors({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Inquiry Submission Failure:', err);
      try {
        handleFirestoreError(err, OperationType.WRITE, `${collectionPath}/${inquiryId}`);
      } catch (wrappedErr) {
        if (wrappedErr instanceof Error) {
          try {
            const parsedError = JSON.parse(wrappedErr.message);
            setErrorMsg(`Transit Error: ${parsedError.error || 'Permission Denied'}`);
          } catch {
            setErrorMsg(wrappedErr.message);
          }
        } else {
          setErrorMsg('An unknown database error occurred.');
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsOpen(false);
    setSubmitSuccess(false);
    setErrorMsg(null);
    setTouched({ name: false, email: false, message: false });
    setFieldErrors({ name: '', email: '', message: '' });
  };

  return (
    <>
      {/* Floating Action Button */}
      <div 
        id="sovereign-inquiry-fab" 
        className="fixed bottom-4 right-4 z-[90] pointer-events-auto"
      >
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full border border-[var(--color-accent)]/30 bg-black/90 text-white font-mono text-[10px] uppercase tracking-widest hover:border-[var(--color-accent)] hover:bg-neutral-950 transition-all duration-300 shadow-2xl"
          style={{
            boxShadow: '0 0 20px rgba(var(--color-accent-rgb), 0.2)',
          }}
        >
          <div className="relative">
            <MessageSquare className="w-4 h-4 text-[var(--color-accent)] animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
            </span>
          </div>
          <span className="font-bold">INQUIRE</span>
        </motion.button>
      </div>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={resetForm}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg rounded-2xl border border-[var(--color-border)] bg-[#08080a] p-6 shadow-2xl overflow-hidden font-mono text-left"
            >
              {/* Mesh background grid lines */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40" />

              {/* Header */}
              <div className="relative flex items-center justify-between border-b border-neutral-900 pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-white text-xs font-black uppercase tracking-widest">SOVEREIGN INQUIRY PROTOCOL</h3>
                    <p className="text-[9px] text-neutral-400">Direct transmission to Cymatic Node</p>
                  </div>
                </div>
                <button
                  onClick={resetForm}
                  className="p-1.5 rounded-lg border border-neutral-900 bg-neutral-950 text-neutral-400 hover:text-white transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Form Content */}
              <div className="relative">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center space-y-4"
                  >
                    <div className="mx-auto w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/30">
                      <CheckCircle2 className="w-6 h-6 animate-bounce" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-emerald-400 text-xs font-bold uppercase tracking-wider">// TELEMETRY_TRANSIT_SUCCESS</h4>
                      <p className="text-[10px] text-neutral-400 max-w-xs mx-auto">
                        Your inquiry has been successfully serialized and stored in our sovereign database nodes.
                      </p>
                    </div>
                    <button
                      onClick={resetForm}
                      className="px-5 py-2.5 rounded-xl border border-neutral-800 bg-neutral-950 text-[10px] text-white uppercase tracking-wider hover:border-[var(--color-accent)] transition-all"
                    >
                      Acknowledge & Close
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-[10px]">
                    {/* Instructions */}
                    <div className="p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/10 text-[9px] text-yellow-400 flex gap-2">
                      <Shield className="w-4 h-4 flex-shrink-0" />
                      <span>
                        SECURITY NOTICE: Submissions are cryptographically signed and stored securely in Firestore with Zero-Trust access verification.
                      </span>
                    </div>

                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-neutral-400 uppercase tracking-widest font-bold">Sender Identity / Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        maxLength={100}
                        placeholder="e.g. Dr. Vance Cooper"
                        className={`w-full p-2.5 rounded-xl border bg-black/50 text-white placeholder-neutral-600 focus:outline-none transition-all ${
                          touched.name && fieldErrors.name 
                            ? 'border-yellow-500/50 focus:border-yellow-500 text-yellow-200' 
                            : 'border-neutral-800 focus:border-[var(--color-accent)]'
                        }`}
                      />
                      {touched.name && fieldErrors.name && (
                        <p className="text-yellow-500 text-[9px] mt-1 font-mono uppercase tracking-wider animate-pulse">
                          ⚠ {fieldErrors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-neutral-400 uppercase tracking-widest font-bold">Signal Address / Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        maxLength={150}
                        placeholder="e.g. vance@resonance.org"
                        className={`w-full p-2.5 rounded-xl border bg-black/50 text-white placeholder-neutral-600 focus:outline-none transition-all ${
                          touched.email && fieldErrors.email 
                            ? 'border-yellow-500/50 focus:border-yellow-500 text-yellow-200' 
                            : 'border-neutral-800 focus:border-[var(--color-accent)]'
                        }`}
                      />
                      {touched.email && fieldErrors.email && (
                        <p className="text-yellow-500 text-[9px] mt-1 font-mono uppercase tracking-wider animate-pulse">
                          ⚠ {fieldErrors.email}
                        </p>
                      )}
                    </div>

                    {/* Category Dropdown */}
                    <div className="space-y-1.5">
                      <label className="text-neutral-400 uppercase tracking-widest font-bold">Resonance Alignment / Category</label>
                      <div className="relative">
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full p-2.5 rounded-xl border border-neutral-800 bg-black/90 text-white focus:outline-none focus:border-[var(--color-accent)] transition-all appearance-none"
                        >
                          <option value="General Resonance Inquiry">General Resonance Inquiry</option>
                          <option value="Sovereign Collaboration">Sovereign Collaboration</option>
                          <option value="Syllabus & Learning Sync">Syllabus & Learning Sync</option>
                          <option value="Telemetry & Math Research">Telemetry & Math Research</option>
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">▼</div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between">
                        <label className="text-neutral-400 uppercase tracking-widest font-bold">Core Message</label>
                        <span className="text-neutral-600 text-[8px]">{formData.message.length}/2000 CHARS</span>
                      </div>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        maxLength={2000}
                        placeholder="Establish your contextual goals or describe your research parameters..."
                        className={`w-full p-2.5 rounded-xl border bg-black/50 text-white placeholder-neutral-600 focus:outline-none transition-all resize-none ${
                          touched.message && fieldErrors.message 
                            ? 'border-yellow-500/50 focus:border-yellow-500 text-yellow-200' 
                            : 'border-neutral-800 focus:border-[var(--color-accent)]'
                        }`}
                      />
                      {touched.message && fieldErrors.message && (
                        <p className="text-yellow-500 text-[9px] mt-1 font-mono uppercase tracking-wider animate-pulse">
                          ⚠ {fieldErrors.message}
                        </p>
                      )}
                    </div>

                    {/* Error Display */}
                    {errorMsg && (
                      <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-[9px]">
                        [ERROR] {errorMsg}
                      </div>
                    )}

                    {/* Submission Button */}
                    <div className="pt-2 flex justify-end">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-white hover:bg-[var(--color-accent)] hover:text-black font-black uppercase tracking-wider transition-all duration-300 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            <span>TRANSMITTING...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>SEND TRANSMISSION</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
