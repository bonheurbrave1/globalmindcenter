import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';

// ✅ Replace with your Google Form's formResponse URL
// Example: "https://docs.google.com/forms/d/e/FORM_ID/formResponse"
const GOOGLE_FORM_ACTION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfWROAt5gxZHVI0Myl1Dvv-4GynpylSUhSx9MNbEZZmUOpMWA/formResponse';

// ✅ Replace with the actual Google Form field entry IDs
const ENTRY_IDS = {
  fullName: 'entry.1234567890',
  email: 'entry.2345678901',
  phone: 'entry.3456789012',
  experience: 'entry.4567890123',
  paymentMethod: 'entry.5678901234',
  agreeTerms: 'entry.6789012345',
};

const enrollmentSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  experience: Yup.string().required('Please select your experience level'),
  paymentMethod: Yup.string().required('Please select a payment method'),
  agreeTerms: Yup.boolean().oneOf([true], 'You must accept the terms'),
});

export default function EnrollmentForm() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8"
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Enroll in PMP Course
          </h2>

          <Formik
            initialValues={{
              fullName: '',
              email: '',
              phone: '',
              experience: '',
              paymentMethod: '',
              agreeTerms: false,
            }}
            validationSchema={enrollmentSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              const formData = new FormData();
              formData.append(ENTRY_IDS.fullName, values.fullName);
              formData.append(ENTRY_IDS.email, values.email);
              formData.append(ENTRY_IDS.phone, values.phone);
              formData.append(ENTRY_IDS.experience, values.experience);
              formData.append(ENTRY_IDS.paymentMethod, values.paymentMethod);
              formData.append(
                ENTRY_IDS.agreeTerms,
                values.agreeTerms ? 'Yes' : 'No'
              );

              fetch(GOOGLE_FORM_ACTION_URL, {
                method: 'POST',
                body: formData,
                mode: 'no-cors', // prevents CORS errors
              })
                .then(() => {
                  alert(
                    'Enrollment submitted successfully! We will contact you shortly.'
                  );
                  resetForm();
                })
                .catch(() => {
                  alert('Error submitting form. Please try again.');
                })
                .finally(() => {
                  setSubmitting(false);
                });
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <Field
                    type="text"
                    name="fullName"
                    id="fullName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <Field
                    type="tel"
                    name="phone"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Experience */}
                <div>
                  <label
                    htmlFor="experience"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Project Management Experience
                  </label>
                  <Field
                    as="select"
                    name="experience"
                    id="experience"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select your experience level</option>
                    <option value="none">No formal experience</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                  </Field>
                  <ErrorMessage
                    name="experience"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Payment */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Method
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <Field
                        type="radio"
                        name="paymentMethod"
                        value="bank"
                        className="h-4 w-4 text-primary focus:ring-primary"
                      />
                      <span className="ml-2">
                        Bank Transfer (700,000 RWF + $429 exam fee)
                      </span>
                    </label>
                    <label className="flex items-center">
                      <Field
                        type="radio"
                        name="paymentMethod"
                        value="installments"
                        className="h-4 w-4 text-primary focus:ring-primary"
                      />
                      <span className="ml-2">
                        Payment in Installments (Contact us for details)
                      </span>
                    </label>
                  </div>
                  <ErrorMessage
                    name="paymentMethod"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Agree Terms */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <Field
                      type="checkbox"
                      name="agreeTerms"
                      id="agreeTerms"
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="agreeTerms"
                      className="font-medium text-gray-700"
                    >
                      I agree to the{' '}
                      <a href="#" className="text-primary hover:underline">
                        Terms and Conditions
                      </a>
                    </label>
                    <ErrorMessage
                      name="agreeTerms"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Enrollment'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </motion.div>
      </div>
    </section>
  );
}
