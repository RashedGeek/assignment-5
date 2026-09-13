import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import Stack from "./components/Stack";

import type { Technology } from "./type";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTechnologies, setSelectedTechnologies] =
    useState<Technology[]>([]);

  // Load technologies from JSON
  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load technologies.");
        setLoading(false);
      });
  }, []);

  // Add technology
  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedTechnologies((current) => [
      ...current,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove one technology
  const handleRemoveFromStack = (id: string) => {
    const technology = selectedTechnologies.find(
      (item) => item.id === id
    );

    setSelectedTechnologies((current) =>
      current.filter((item) => item.id !== id)
    );

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  // Remove all
  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      return;
    }

    setSelectedTechnologies([]);

    toast.info("All technologies removed from your stack.");
  };

  return (
    <>
      <Navbar />

      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-16">
        {/* Section heading */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold">
            Explore the Technologies
          </h2>

          <p className="mt-2 text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Technologies + Stack */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
          
          {/* Technology cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {loading ? (
              <p className="text-gray-500">
                Loading technologies...
              </p>
            ) : (
              technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  onAdd={handleAddToStack}
                  isAdded={selectedTechnologies.some(
                    (item) => item.id === technology.id
                  )}
                />
              ))
            )}
          </div>

          {/* Your Stack */}
          <Stack
            selectedTechnologies={selectedTechnologies}
            onRemove={handleRemoveFromStack}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </section>

      <Footer />

      {/* Toast messages */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
      />
    </>
  );
}

export default App;