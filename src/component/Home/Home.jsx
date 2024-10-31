import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import './Header.css'
const Home = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header></Header>
      {/* Hero Section */}
      <section className="flex-grow bg-gray-100 text-center py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Welcome to My Website</h2>
          <p className="text-xl mb-8">
            A place where you can find awesome features and information.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </section>

      {navigation.state === "loading" ? (
        <div id="spinner" class="spinner-overlay hidden">
          <div class="spinner"></div>
        </div>
      ) : (
        <Outlet></Outlet>
      )}

      <Footer></Footer>
    </div>
  );
};

export default Home;
