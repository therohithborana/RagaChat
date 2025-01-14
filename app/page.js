import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faLightbulb, faUsers } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-purple-800 to-indigo-600 min-h-screen text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Welcome to <span className="text-yellow-400">RagaChat</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Connect with music lovers, share your thoughts, and chat about everything music!
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <a
              href="/forums"
              className="bg-yellow-400 text-indigo-800 px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-yellow-300"
            >
              Explore Chat
            </a>
            <a
              href="#learn-more"
              className="bg-white text-indigo-800 px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-gray-200"
            >
              Learn More
            </a>
          </div>
        </div>
        {/* Right Content - Illustration */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img
            src="https://plus.unsplash.com/premium_vector-1721306578345-1f0e85a1bf0c?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Music Illustration"
            className="w-full max-w-lg mx-auto"
          />
        </div>
      </section>

      {/* Learn More Section */}
      <section id="learn-more" className="bg-white text-indigo-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-8">Why Join RagaChat?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 shadow-lg rounded-lg">
              <FontAwesomeIcon icon={faComments} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Chat with Friends</h3>
              <p>Join conversations and meet new people passionate about music.</p>
            </div>
            <div className="p-6 shadow-lg rounded-lg">
              <FontAwesomeIcon icon={faLightbulb} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Share Ideas</h3>
              <p>Exchange music tips, talk about new trends, and discover fresh ideas.</p>
            </div>
            <div className="p-6 shadow-lg rounded-lg">
              <FontAwesomeIcon icon={faUsers} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Join Live Chats</h3>
              <p>Participate in live discussions, chats, and collaborate on projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 text-center py-8">
        <p className="text-gray-300">
           
          <a
            href="https://www.linkedin.com/in/rohith-borana-b10778266/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300"
          >
            Made by Rohith
          </a>
        </p>
      </footer>
    </main>
  );
}
