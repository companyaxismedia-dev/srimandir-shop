export const metadata = {
  title: "Contact Us | Sri Mandir Shop",
  description: "Contact Sri Mandir Shop for puja samagri orders and support",
};

export default function ContactPage() {
  return (
    <section className="min-h-screen px-6 py-16 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-orange-600 mb-6">
        Contact Sri Mandir
      </h1>

      <p className="text-gray-700 mb-8">
        Have questions or need help? Reach out to us.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Details</h2>
          <p className="text-gray-700 mb-2">📍 India</p>
          <p className="text-gray-700 mb-2">📞 +91 98765 43210</p>
          <p className="text-gray-700 mb-2">📧 support@srimandirshop.com</p>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border px-4 py-2 rounded"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border px-4 py-2 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
