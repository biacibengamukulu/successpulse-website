import React, { useState } from 'react';
import { HeroSection } from '../components/HeroSection';
import { Mail, Phone, CheckCircle, Send, ArrowLeft, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    branches: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const countries = [
    { code: 'ZA', name: 'South Africa' },
    { code: 'KE', name: 'Kenya' },
    { code: 'NG', name: 'Nigeria' },
    { code: 'GH', name: 'Ghana' },
    { code: 'UG', name: 'Uganda' },
    { code: 'TZ', name: 'Tanzania' },
    { code: 'ZM', name: 'Zambia' },
    { code: 'ZW', name: 'Zimbabwe' },
    { code: 'OTHER', name: 'Other / Global' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API Submission
    setTimeout(() => {
      console.log('SuccessPulse Demo Registration Success:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      country: '',
      branches: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <div className="space-y-20 pb-20">
      <HeroSection 
        badge="Book a Demo" 
        title="Schedule a Live SuccessPulse Walkthrough" 
        subtitle="Submit your details below to coordinate a personalized tour of our campaign planners, collection worklists, and branch vault reconciliations."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details & Testimonials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Get in Touch</h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Have questions about branch operations licensing, custom POS API configurations, or offline storage limits? Our regional support offices are ready to help.
              </p>
            </div>

            <div className="space-y-4 text-xs text-slate-700">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <Mail className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900">Email Inquiries</h3>
                  <a href="mailto:sales@successpulse.co" className="hover:text-blue-600 transition-colors mt-0.5 block">sales@successpulse.co</a>
                  <a href="mailto:info@successpulse.co" className="hover:text-blue-600 transition-colors block">info@successpulse.co</a>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <Phone className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900">Call Support</h3>
                  <a href="tel:+27110000000" className="hover:text-blue-600 transition-colors mt-0.5 block">+27 (0) 11 000 0000</a>
                  <span className="text-slate-450 block mt-0.5">Monday – Friday: 08:00 AM – 05:00 PM (GMT+2)</span>
                </div>
              </div>
            </div>

            {/* Micro Testimonial */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 space-y-4 shadow-sm">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-300 italic leading-relaxed">
                "Implementing SuccessPulse across our 12 branch locations in KwaZulu-Natal and Limpopo reduced manual vault balancing checks from 4 hours to just 15 minutes daily. Our bad debt recovery rate increased by 22%."
              </p>
              <div className="border-t border-slate-800 pt-3 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-blue-450 text-[10px]">
                  TM
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Thabo Mokoena</div>
                  <div className="text-[10px] text-slate-500">Operations Director, Kwazi Lending</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
              {isSubmitted ? (
                /* Success Screen */
                <div className="text-center py-12 space-y-6">
                  <div className="bg-emerald-500/10 text-emerald-600 p-4 rounded-full border border-emerald-500/20 w-fit mx-auto animate-pulse">
                    <CheckCircle className="h-10 w-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-950">Registration Confirmed</h3>
                    <p className="text-slate-500 text-xs max-w-md mx-auto">
                      Thank you, <strong>{formData.name}</strong>. We have logged your request for <strong>{formData.company}</strong> and will reach out within 2 hours to confirm your demo.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-150 p-4 rounded-2xl text-left text-xs max-w-md mx-auto space-y-2.5 text-slate-650">
                    <h4 className="font-bold text-slate-900 border-b border-slate-200 pb-1.5 mb-2">Registration Receipt</h4>
                    <div><strong>Registered Email:</strong> {formData.email}</div>
                    {formData.phone && (
                      <div><strong>Phone Number:</strong> {formData.phone}</div>
                    )}
                    {formData.country && (
                      <div><strong>Country Office:</strong> {countries.find(c => c.code === formData.country)?.name || formData.country}</div>
                    )}
                    {formData.branches && (
                      <div><strong>Branch Count:</strong> {formData.branches}</div>
                    )}
                  </div>

                  <button
                    onClick={resetForm}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="h-4 w-4" /> Book another demonstration
                  </button>
                </div>
              ) : (
                /* Main Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-slate-700">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all placeholder:text-slate-400"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-xs font-bold text-slate-700">Company / Lenders Name *</label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Pulse Credit Ltd"
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all placeholder:text-slate-400"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-slate-700">Business Email *</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.co"
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all placeholder:text-slate-400"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-bold text-slate-700">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+27 11 000 0000"
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all placeholder:text-slate-400"
                      />
                    </div>

                    {/* Country */}
                    <div className="space-y-1.5">
                      <label htmlFor="country" className="text-xs font-bold text-slate-700">Country of Operations *</label>
                      <select
                        name="country"
                        id="country"
                        required
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
                      >
                        <option value="">Select country...</option>
                        {countries.map(c => (
                          <option key={c.code} value={c.code}>{c.name}</option>
                        ))}
                      </select>
                    </div>

                    {/* Branches */}
                    <div className="space-y-1.5">
                      <label htmlFor="branches" className="text-xs font-bold text-slate-700">Number of Branches *</label>
                      <input
                        type="number"
                        name="branches"
                        id="branches"
                        required
                        min="1"
                        value={formData.branches}
                        onChange={handleInputChange}
                        placeholder="e.g. 5"
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-slate-700">Custom message (operational needs) *</label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Let us know what you want to achieve (e.g. tracking field collection logs, agent planning, branch audits)..."
                      rows={4}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gap-2 font-bold"
                  >
                    {isSubmitting ? (
                      <>Registering Demo Account...</>
                    ) : (
                      <>
                        Book My Consultation <Send className="h-4.5 w-4.5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
