import React, { useState } from "react";
import { Download, ChevronRight, Database, Search, Filter } from "lucide-react";

const datasets = [
  {
    id: 1,
    name: "Iris Flower Dataset",
    description: "Classic dataset for flower classification with sepal and petal measurements.",
    download: "https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data",
    questionsPage: "/questions/iris",
    category: "Classification",
    size: "150 rows",
    features: 4,
    difficulty: "Beginner"
  },
  {
    id: 2,
    name: "Titanic Dataset",
    description: "Passenger data for survival prediction—includes age, fare, class, and more.",
    download: "https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv",
    questionsPage: "/questions/titanic",
    category: "Classification",
    size: "891 rows",
    features: 12,
    difficulty: "Intermediate"
  },
  {
    id: 3,
    name: "Housing Prices Dataset",
    description: "Real estate data for price prediction with location and property features.",
    download: "#",
    questionsPage: "/questions/housing",
    category: "Regression",
    size: "1.4k rows",
    features: 81,
    difficulty: "Advanced"
  },
  {
    id: 4,
    name: "Wine Quality Dataset",
    description: "Chemical properties and quality ratings for red and white wines.",
    download: "#",
    questionsPage: "/questions/wine",
    category: "Classification",
    size: "6.4k rows",
    features: 12,
    difficulty: "Intermediate"
  },
  {
    id: 5,
    name: "Stock Market Dataset",
    description: "Historical stock prices and trading volumes for market analysis.",
    download: "#",
    questionsPage: "/questions/stocks",
    category: "Time Series",
    size: "10k rows",
    features: 8,
    difficulty: "Advanced"
  },
  {
    id: 6,
    name: "Customer Churn Dataset",
    description: "Telecom customer data for predicting subscription cancellations.",
    download: "#",
    questionsPage: "/questions/churn",
    category: "Classification",
    size: "7k rows",
    features: 21,
    difficulty: "Intermediate"
  },
  {
    id: 7,
    name: "E-commerce Sales Dataset",
    description: "Online retail transactions with product categories and customer info.",
    download: "#",
    questionsPage: "/questions/ecommerce",
    category: "Analytics",
    size: "25k rows",
    features: 15,
    difficulty: "Intermediate"
  },
  {
    id: 8,
    name: "Weather Dataset",
    description: "Meteorological data for climate analysis and weather prediction.",
    download: "#",
    questionsPage: "/questions/weather",
    category: "Time Series",
    size: "50k rows",
    features: 12,
    difficulty: "Beginner"
  },
  {
    id: 9,
    name: "Movie Ratings Dataset",
    description: "User ratings and movie metadata for recommendation systems.",
    download: "#",
    questionsPage: "/questions/movies",
    category: "Recommendation",
    size: "100k rows",
    features: 6,
    difficulty: "Intermediate"
  },
  {
    id: 10,
    name: "Healthcare Dataset",
    description: "Medical records for disease diagnosis and treatment analysis.",
    download: "#",
    questionsPage: "/questions/healthcare",
    category: "Classification",
    size: "5k rows",
    features: 25,
    difficulty: "Advanced"
  },
  {
    id: 11,
    name: "Social Media Dataset",
    description: "User engagement metrics and content analysis for social platforms.",
    download: "#",
    questionsPage: "/questions/social",
    category: "Analytics",
    size: "75k rows",
    features: 18,
    difficulty: "Intermediate"
  },
  {
    id: 12,
    name: "Energy Consumption Dataset",
    description: "Power usage patterns for smart grid optimization and forecasting.",
    download: "#",
    questionsPage: "/questions/energy",
    category: "Time Series",
    size: "30k rows",
    features: 9,
    difficulty: "Advanced"
  },
  {
    id: 13,
    name: "Credit Card Fraud Dataset",
    description: "Transaction data for detecting fraudulent credit card activities.",
    download: "#",
    questionsPage: "/questions/fraud",
    category: "Classification",
    size: "284k rows",
    features: 31,
    difficulty: "Advanced"
  },
  {
    id: 14,
    name: "Image Classification Dataset",
    description: "Labeled images for computer vision and deep learning projects.",
    download: "#",
    questionsPage: "/questions/images",
    category: "Computer Vision",
    size: "60k images",
    features: "3072 pixels",
    difficulty: "Advanced"
  },
  {
    id: 15,
    name: "Student Performance Dataset",
    description: "Academic records and factors affecting student grades and outcomes.",
    download: "#",
    questionsPage: "/questions/students",
    category: "Analytics",
    size: "1k rows",
    features: 33,
    difficulty: "Beginner"
  },
  {
    id: 16,
    name: "Text Sentiment Dataset",
    description: "Customer reviews and feedback for natural language processing tasks.",
    download: "#",
    questionsPage: "/questions/sentiment",
    category: "NLP",
    size: "40k rows",
    features: "Text + Labels",
    difficulty: "Intermediate"
  }
];

const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case "Beginner": return "bg-green-500/20 text-green-400 border-green-500/30";
    case "Intermediate": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    case "Advanced": return "bg-red-500/20 text-red-400 border-red-500/30";
    default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
  }
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", ...new Set(datasets.map(ds => ds.category))];
  
  const filteredDatasets = datasets.filter(ds => {
    const matchesSearch = ds.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ds.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || ds.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#191A1A] flex flex-col items-center py-10 px-4">
      {/* Header Section */}
      <div className="text-center mb-12 max-w-2xl">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="p-3 bg-blue-500/20 rounded-full">
            <Database className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-white text-start">
            Datasets
          </h1>
          
        </div>
        <p className="text-[#B0B0B0] text-lg sm:text-center text-center leading-relaxed">
          Explore our curated collection of machine learning datasets. Perfect for learning, 
          experimentation, and building your data science skills.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="w-full max-w-7xl mb-8">
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#B0B0B0]" />
            <input
              type="text"
              placeholder="Search datasets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#232323] border border-[#333] rounded-lg text-white placeholder-[#B0B0B0] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
          <div className="relative">
            {selectedCategory !== "All" && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-[#191A1A] z-10"></div>
            )}
            <Filter className="absolute left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#B0B0B0]" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-6 py-3 w-16 bg-[#232323] border border-[#333] rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
              style={{ color: 'transparent' }}
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-[#232323] text-white">
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="text-[#B0B0B0] text-sm">
          Showing {filteredDatasets.length} of {datasets.length} datasets
        </div>
      </div>

      {/* Datasets Grid */}
      <div className="w-full max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredDatasets.map((ds) => (
            <div
              key={ds.id}
              className="group bg-[#232323] rounded-xl border border-[#333] hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 flex flex-col h-80"
            >
              <div className="p-6 pb-4 flex-1 overflow-hidden">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                    {ds.name}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(ds.difficulty)} flex-shrink-0 ml-2`}>
                    {ds.difficulty}
                  </span>
                </div>
                
                <p className="text-[#B0B0B0] mb-4 leading-relaxed text-sm line-clamp-3">
                  {ds.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-[#B0B0B0]">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                    <span className="truncate">{ds.category}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B0B0B0]">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></div>
                    <span className="truncate">{ds.size}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B0B0B0]">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></div>
                    <span className="truncate">{ds.features} features</span>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-[#1A1A1A] rounded-b-xl border-t border-[#333] flex-shrink-0">
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={ds.download}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center cursor-pointer gap-2 px-3 py-1.5 bg-[#333] hover:bg-[#404040] text-white rounded-md transition-all duration-200 flex-1 group/download text-sm"
                  >
                    <Download className="w-3.5 h-3.5 group-hover/download:animate-bounce" />
                    <span>Download</span>
                  </a>
                  
                  <button
                    onClick={() => window.location.href = ds.questionsPage}
                    className="flex items-center cursor-pointer justify-center gap-2 px-3 py-1.5 bg-blue-700 hover:bg-blue-600 text-white rounded-md transition-all duration-200 flex-1 group/questions text-sm"
                  >
                    <span>Questions</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/questions:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDatasets.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-[#333] rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-[#B0B0B0]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No datasets found</h3>
            <p className="text-[#B0B0B0]">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>

      <div className="mt-16 text-center">
        {/* <p className="text-[#B0B0B0] text-sm">
          Need a specific dataset? <span className="text-blue-400 hover:underline cursor-pointer">Contact us</span>
        </p> */}
      </div>
    </div>
  );
};

export default App;