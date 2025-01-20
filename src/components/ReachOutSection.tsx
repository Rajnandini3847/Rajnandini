import { FaTwitter, FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const ReachOutSection = () => {
  return (
    <section className="bg-black text-white py-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Reach out to me.</h2>
        <p className="text-sm text-gray-400 mb-6">
          Feel free to reach out to me via email for any queries, collaboration opportunities, or further details. I'm also super active on X, so feel free to DM me there!
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <FaTwitter className="mr-2" />
            Twitter
          </a>
          <a
            href="mailto:your-email@example.com"
            className="flex items-center px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <FaEnvelope className="mr-2" />
            Email
          </a>
        </div>
        <div className="flex justify-center gap-6 text-gray-400">
          <a href="mailto:your-email@example.com" className="hover:text-white">
            <FaEnvelope className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm text-gray-600 mt-8">© 2025 Your Name. All rights reserved.</p>
      </div>
    </section>
  );
};

export default ReachOutSection;
