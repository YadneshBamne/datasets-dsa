import React, { useState } from "react";
import { Download, ChevronRight, Database, Search, Filter, X } from "lucide-react";

// Update these with your actual GitHub details
const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/YadneshBamne/datasets-dsa/main/public/datasets";

const datasets = [
  {
    id: 1,
    name: "Netflix_Titles",
    description: "Contains metadata about titles on Netflix including their type (Movie/TV Show), cast, country of origin, release year, and age rating. Key columns include: show_id, type, title, director, cast, country.",
    dataset: `${GITHUB_RAW_BASE}/Netflix_Titles.csv`,
    category: "Entertainment",
    size: "8.8k rows",
    features: 12,
    difficulty: "Beginner",
    questions: [
      "How many movies vs TV shows are there on Netflix?",
      "How many titles were added to Netflix each year?",
      "Which are the top 10 most common countries producing Netflix content?",
      "Which are the most frequent age ratings used on Netflix?",
      "What are the top 10 directors with the most titles on Netflix?",
      "Which genres/categories are most common on Netflix?",
      "Trend of movie and TV show releases by release year.",
      "Which countries have added more content over time? (year-wise country breakdown)",
      "Are newer movies getting longer over time? (avg duration by release year)",
      "Which cast members appear most frequently in Netflix content?"
    ]
  },
  {
    id: 2,
    name: "Fashion_Sales_Analysis",
    description: "Tracks fashion e-commerce sales data with customer demographics, order info, item category, and revenue details. Key columns include: Index, Order ID, Cust ID, Gender, Age, Date.",
    dataset: `${GITHUB_RAW_BASE}/Fashion_Sales_Analysis.xlsx`,
    category: "E-commerce",
    size: "15k rows",
    features: 10,
    difficulty: "Intermediate",
    questions: [
      "What is the total sales revenue generated in the year 2023?",
      "What are the monthly sales trends across all platforms? Which month had the highest sales?",
      "How does revenue compare across different e-commerce platforms (e.g., Myntra, Amazon, Flipkart)?",
      "What is the sales performance by product category? Which category has the highest and lowest sales?",
      "What is the distribution of customer orders by age group? Which age group contributes most to quantity and revenue?",
      "How does purchase behavior differ by gender? Who contributes more to revenue and quantity ordered: Men or Women?",
      "What is the percentage distribution of order statuses: Delivered, Cancelled, Returned, Refunded?",
      "Which city and state have the highest contribution to overall revenue?",
      "What are the top-selling products by quantity ordered and total revenue?",
      "What is the revenue comparison between B2B and B2C orders?"
    ]
  },
  {
    id: 3,
    name: "Car_Sales",
    description: "Data on car sales including buyer details, dealership, vehicle information, and price. Key columns include: Car_id, Date, Customer Name, Gender, Annual Income, Dealer_Name.",
    dataset: `${GITHUB_RAW_BASE}/Car_Sales.xlsx`,
    category: "Automotive",
    size: "23k rows",
    features: 16,
    difficulty: "Intermediate",
    questions: [
      "What is the total number of cars sold?",
      "What is the total sales amount (Price) for all cars sold?",
      "How many cars were sold in each 'Dealer Region'?",
      "What is the average price of cars sold by 'Body Style'?",
      "Display a line chart showing monthly sales trends over time.",
      "Create a pie chart showing the YTD total sales by car 'Color'.",
      "Create a map visual showing cars sold across different 'Dealer Regions'.",
      "Compare YTD and PTYD (Previous YTD) car sales and highlight the difference.",
      "Calculate YOY (Year-over-Year) growth in average car price.",
      "Create a grid/table showing sales trend per company including YTD Sales, Total Cars Sold, and Average Price."
    ]
  },
  {
    id: 4,
    name: "BlinkIT_Grocery_Data",
    description: "Sales and inventory data from BlinkIT's grocery business including outlet, item info, and ratings. Key columns include: Item Fat Content, Item Identifier, Item Type, Outlet Establishment Year, Outlet Identifier, Outlet Location Type.",
    dataset: `${GITHUB_RAW_BASE}/BlinkIT_Grocery_Data.xlsx`,
    category: "Retail",
    size: "8.5k rows",
    features: 12,
    difficulty: "Beginner",
    questions: [
      "What is the total sales across all items?",
      "Which outlet type has the highest sales?",
      "What are the top 5 best-selling item types?",
      "Which outlet location type contributes the most to sales?",
      "How many unique items are there in the dataset?",
      "What is the sales distribution by item fat content (e.g., Regular vs Low Fat)?",
      "Which outlet size (Small, Medium, High) has the highest average sales?",
      "Is there any trend between item weight and sales?",
      "Compare average rating across outlet types.",
      "How does item visibility impact total sales?"
    ]
  },
  {
    id: 5,
    name: "Matches",
    description: "IPL cricket match data including match outcome, venue, teams, player of match, toss decisions, and result margins. Key columns include: id, season, city, date, match_type, player_of_match.",
    dataset: `${GITHUB_RAW_BASE}/Matches.xlsx`,
    category: "Sports",
    size: "816 rows",
    features: 18,
    difficulty: "Intermediate",
    questions: [
      "How many IPL matches were played each season?",
      "Which team has won the most matches overall?",
      "Which player has won the most 'Player of the Match' awards?",
      "How many matches were decided by a super over?",
      "Which stadium has hosted the most IPL matches?",
      "How many matches were won by the team that won the toss?",
      "What is the average result margin (in runs) for matches won by each team?",
      "Compare the win percentage of each team when they chose to bat vs field after winning the toss.",
      "Which city has seen the most matches with a result margin greater than 50 runs?",
      "Find the correlation between target_runs and result_margin for matches with known targets."
    ]
  },
  {
    id: 6,
    name: "Cleaned_Viral_Social_Media_Trends",
    description: "Data about social media trends including post engagement, platform, hashtag usage, and regional performance. Key columns include: Post_ID, Post_Date, Platform, Hashtag, Content_Type, Region.",
    dataset: `${GITHUB_RAW_BASE}/Cleaned_Viral_Social_Media_Trends.csv`,
    category: "Social Media",
    size: "1k rows",
    features: 15,
    difficulty: "Beginner",
    questions: [
      "What is the total number of posts per platform?",
      "Which region has the highest total views?",
      "What is the average number of likes, shares, and comments for each content type?",
      "Which hashtag is associated with the highest engagement (likes + shares + comments)?",
      "What is the distribution of posts by engagement level (Low, Medium, High)?",
      "How do engagement levels vary by platform?",
      "What is the trend of total views over time?",
      "Which content type performs best in each region in terms of average engagement?",
      "Create a dashboard comparing performance (views, likes, shares, comments) of platforms across regions.",
      "Build an interactive report showing top-performing hashtags over time, with drilldown by platform and region."
    ]
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

const QuestionsModal = ({ dataset, isOpen, onClose }) => {
  if (!isOpen || !dataset) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <style>
        {`
          @keyframes fadeIn {
            to { opacity: 1; }
          }
          @keyframes scaleIn {
            to { transform: scale(1); }
          }
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #1A1A1A;
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #404040, #333);
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, #555, #404040);
          }
        `}
      </style>
      <div className="bg-[#1E1E1E] border border-[#333] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-[#333]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Database className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold text-white">{dataset.name}</h2>
              <p className="text-[#B0B0B0] text-sm">Analysis Questions</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#333] rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-[#B0B0B0] hover:text-white" />
          </button>
        </div>

        {/* Questions Content */}
        <div className="p-4 md:p-6 overflow-y-auto max-h-[60vh] custom-scrollbar">
          <div className="space-y-3">
            {dataset.questions.map((question, index) => (
              <div
                key={index}
                className="group p-4 bg-[#232323] border border-[#333] rounded-lg hover:border-blue-500/50 transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-sm font-semibold border border-blue-500/30">
                    {index + 1}
                  </div>
                  <p className="text-gray-200 leading-relaxed text-sm md:text-base group-hover:text-white transition-colors">
                    {question}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 p-4 md:p-6 border-t border-[#333] bg-[#191919]">
          <div className="flex items-center gap-2 text-sm text-[#B0B0B0] order-2 sm:order-1">
            <Search className="w-4 h-4" />
            <span>{dataset.questions.length} questions available</span>
          </div>
          <div className="flex gap-3 order-1 sm:order-2">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDataset, setSelectedDataset] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [downloadingId, setDownloadingId] = useState(null);
  
  const categories = ["All", ...new Set(datasets.map(ds => ds.category))];
  
  const filteredDatasets = datasets.filter(ds => {
    const matchesSearch = ds.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ds.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || ds.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = async (datasetUrl, datasetName, datasetId) => {
    setDownloadingId(datasetId);
    
    try {
      // Fetch the file
      const response = await fetch(datasetUrl);
      
      if (!response.ok) {
        throw new Error('Failed to fetch file');
      }
      
      // Convert to blob
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      // Create download link
      const link = document.createElement('a');
      const filename = `${datasetName.replace(/\s+/g, '_')}.csv`;
      link.href = url;
      link.download = filename;
      link.style.display = 'none';
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    } finally {
      setDownloadingId(null);
    }
  };

  const handleQuestionsClick = (dataset) => {
    setSelectedDataset(dataset);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDataset(null);
  };

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
                </div>
                
                <p className="text-[#B0B0B0] mb-4 leading-relaxed text-sm">
                  {ds.description}
                </p>
              </div>

              <div className="px-6 py-4 bg-[#1A1A1A] rounded-b-xl border-t border-[#333] flex-shrink-0">
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => handleDownload(ds.dataset, ds.name, ds.id)}
                    disabled={downloadingId === ds.id}
                    className="flex items-center justify-center cursor-pointer gap-2 px-3 py-1.5 bg-[#333] hover:bg-[#404040] text-white rounded-md transition-all duration-200 flex-1 group/download text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Download className={`w-3.5 h-3.5 ${downloadingId === ds.id ? 'animate-spin' : 'group-hover/download:animate-bounce'}`} />
                    <span>{downloadingId === ds.id ? 'Downloading...' : 'Download'}</span>
                  </button>
                  
                  <button
                    onClick={() => handleQuestionsClick(ds)}
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

      {/* Questions Modal */}
      <QuestionsModal 
        dataset={selectedDataset}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      <div className="mt-16 text-center">
        {/* <p className="text-[#B0B0B0] text-sm">
          Need a specific dataset? <span className="text-blue-400 hover:underline cursor-pointer">Contact us</span>
        </p> */}
      </div>
    </div>
  );
};

export default App;
