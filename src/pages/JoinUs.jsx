import { useState, useContext } from 'react';
import { LanguageContext } from '../App';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';

const JoinUs = () => {
  const { language } = useContext(LanguageContext);
  const t = content[language].join;
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    phone: '',
    city: '',
    email: '',
    experience: '',
    reason: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = language === 'ar' ? 'الاسم مطلوب' : 'Full name is required';
    }
    if (!formData.age || parseInt(formData.age) < 1) {
      newErrors.age = language === 'ar' ? 'العمر مطلوب' : 'Age is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = language === 'ar' ? 'رقم الهاتف مطلوب' : 'Phone number is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = language === 'ar' ? 'المدينة مطلوبة' : 'City is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = language === 'ar' ? 'البريد الإلكتروني مطلوب' : 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = language === 'ar' ? 'البريد الإلكتروني غير صحيح' : 'Invalid email format';
    }
    if (!formData.experience) {
      newErrors.experience = language === 'ar' ? 'يرجى الإجابة على السؤال' : 'Please answer this question';
    }
    if (!formData.reason.trim()) {
      newErrors.reason = language === 'ar' ? 'سبب الانضمام مطلوب' : 'Reason for joining is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/xreznypq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          age: formData.age,
          phone: formData.phone,
          city: formData.city,
          email: formData.email,
          experience: formData.experience === 'yes'
            ? (language === 'ar' ? 'نعم' : 'Yes')
            : (language === 'ar' ? 'لا' : 'No'),
          reason: formData.reason,
          _subject: language === 'ar'
            ? `طلب انضمام جديد - ${formData.fullName}`
            : `New Join Request - ${formData.fullName}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          fullName: '',
          age: '',
          phone: '',
          city: '',
          email: '',
          experience: '',
          reason: '',
        });
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setErrorMessage(
          language === 'ar'
            ? 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.'
            : 'An error occurred while sending. Please try again.'
        );
      }
    } catch (error) {
      setErrorMessage(
        language === 'ar'
          ? 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.'
          : 'An error occurred while sending. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 pt-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-luxury-gold/5 blur-3xl animate-float-slow" />

        {/* Floating icons */}
        <div className="absolute top-1/4 left-10 text-4xl opacity-10 animate-float">🤝</div>
        <div className="absolute top-1/3 right-20 text-3xl opacity-10 animate-float-slow">💚</div>
        <div className="absolute bottom-1/3 left-1/4 text-4xl opacity-10 animate-float">✨</div>
      </div>

      <div className="container-custom relative z-10">
        <SectionTitle title={t.title} subtitle={t.subtitle} />

        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="animate-scale-in">
              <div className="glass-card p-10 text-center">
                {/* Success icon with animation */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-glow-green animate-heartbeat">
                  <span className="text-5xl">✅</span>
                </div>

                <h3 className="text-2xl font-bold text-primary mb-4">
                  {language === 'ar' ? 'تم الإرسال بنجاح!' : 'Successfully Sent!'}
                </h3>

                <p className="text-xl text-gray-700 mb-6">{t.success}</p>

                {/* Decorative confetti */}
                <div className="flex justify-center gap-2">
                  {['🎉', '💚', '✨', '🎊', '💝'].map((emoji, i) => (
                    <span key={i} className="text-2xl animate-bounce" style={{ animationDelay: `${i * 100}ms` }}>
                      {emoji}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in-up">
              {/* Form card */}
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-luxury-gold to-primary rounded-3xl blur-lg opacity-10" />

                <form onSubmit={handleSubmit} className="relative glass-card p-8 lg:p-10">
                  {/* Form header decoration */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-luxury-gold to-primary rounded-t-2xl" />

                  {errorMessage && (
                    <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6 flex items-center gap-3 animate-fade-in">
                      <span className="text-2xl">⚠️</span>
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="md:col-span-2">
                      <label htmlFor="fullName" className="block text-gray-800 font-semibold mb-2 flex items-center gap-2">
                        <span className="text-lg">👤</span>
                        {t.form.fullName} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className={`premium-input ${errors.fullName ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <span>⚠️</span> {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Age */}
                    <div>
                      <label htmlFor="age" className="block text-gray-800 font-semibold mb-2 flex items-center gap-2">
                        <span className="text-lg">🎂</span>
                        {t.form.age} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        min="1"
                        required
                        disabled={loading}
                        className={`premium-input ${errors.age ? 'border-red-500' : ''} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        placeholder={language === 'ar' ? 'العمر' : 'Age'}
                      />
                      {errors.age && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <span>⚠️</span> {errors.age}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-gray-800 font-semibold mb-2 flex items-center gap-2">
                        <span className="text-lg">📱</span>
                        {t.form.phone} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className={`premium-input ${errors.phone ? 'border-red-500' : ''} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        placeholder={language === 'ar' ? '07xxxxxxxx' : '07xxxxxxxx'}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <span>⚠️</span> {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* City */}
                    <div>
                      <label htmlFor="city" className="block text-gray-800 font-semibold mb-2 flex items-center gap-2">
                        <span className="text-lg">🏙️</span>
                        {t.form.city} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className={`premium-input ${errors.city ? 'border-red-500' : ''} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        placeholder={language === 'ar' ? 'المدينة' : 'City'}
                      />
                      {errors.city && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <span>⚠️</span> {errors.city}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-gray-800 font-semibold mb-2 flex items-center gap-2">
                        <span className="text-lg">📧</span>
                        {t.form.email} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className={`premium-input ${errors.email ? 'border-red-500' : ''} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        placeholder="example@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <span>⚠️</span> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Experience */}
                    <div className="md:col-span-2">
                      <label className="block text-gray-800 font-semibold mb-3 flex items-center gap-2">
                        <span className="text-lg">🌟</span>
                        {t.form.experience} <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-4">
                        <label className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${formData.experience === 'yes'
                            ? 'border-primary bg-primary/5 text-primary'
                            : 'border-gray-200 hover:border-primary/50'
                          } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                          <input
                            type="radio"
                            name="experience"
                            value="yes"
                            checked={formData.experience === 'yes'}
                            onChange={handleChange}
                            required
                            disabled={loading}
                            className="sr-only"
                          />
                          <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.experience === 'yes' ? 'border-primary bg-primary' : 'border-gray-300'
                            }`}>
                            {formData.experience === 'yes' && <span className="text-white text-xs">✓</span>}
                          </span>
                          <span className="font-medium">{t.form.yes}</span>
                          <span className="text-xl">✨</span>
                        </label>

                        <label className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${formData.experience === 'no'
                            ? 'border-primary bg-primary/5 text-primary'
                            : 'border-gray-200 hover:border-primary/50'
                          } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                          <input
                            type="radio"
                            name="experience"
                            value="no"
                            checked={formData.experience === 'no'}
                            onChange={handleChange}
                            required
                            disabled={loading}
                            className="sr-only"
                          />
                          <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.experience === 'no' ? 'border-primary bg-primary' : 'border-gray-300'
                            }`}>
                            {formData.experience === 'no' && <span className="text-white text-xs">✓</span>}
                          </span>
                          <span className="font-medium">{t.form.no}</span>
                          <span className="text-xl">🌱</span>
                        </label>
                      </div>
                      {errors.experience && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <span>⚠️</span> {errors.experience}
                        </p>
                      )}
                    </div>

                    {/* Reason */}
                    <div className="md:col-span-2">
                      <label htmlFor="reason" className="block text-gray-800 font-semibold mb-2 flex items-center gap-2">
                        <span className="text-lg">💭</span>
                        {t.form.reason} <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        rows="4"
                        required
                        disabled={loading}
                        className={`premium-textarea ${errors.reason ? 'border-red-500' : ''} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        placeholder={language === 'ar' ? 'لماذا تريد الانضمام إلى فريق شباب الخير؟' : 'Why do you want to join Shabab Al-Khair team?'}
                      ></textarea>
                      {errors.reason && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <span>⚠️</span> {errors.reason}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className={`btn-primary w-full flex items-center justify-center gap-3 text-xl py-5 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {loading ? (
                          <>
                            <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                            {language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                          </>
                        ) : (
                          <>
                            <span className="text-2xl animate-wave">🤝</span>
                            {t.form.submit}
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Bottom encouragement */}
          <div className="mt-10 text-center animate-fade-in-up animation-delay-300">
            <p className="text-gray-600 flex items-center justify-center gap-2">
              <span className="text-xl">💚</span>
              {language === 'ar'
                ? 'انضم إلينا وكن جزءاً من التغيير الإيجابي'
                : 'Join us and be part of positive change'}
              <span className="text-xl">💚</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;