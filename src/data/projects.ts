import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'facial-recognition',
    title: 'Facial Recognition for Secured Authentication',
    description: 'A facial recognition system for secure authentication using deep learning. Lead by Dr. Khim Chamroeun',
    technologies: ['Django', 'PostgreSQL', 'Tensorflow'],
    category: ['AI/ML'],
    image: '/projects/face recognition.png',
    demoVideo: 'https://www.youtube.com/embed/B0jtGJ91tkc?si=o4QtCJTEA902Y6J-',
    researchPaperImage: '/projects/Research Paper.png',
    details: {
      overview: 'A robust facial recognition system for secure authentication in the Quantum Era.',
      features: [
        'Facial recognition authentication',
        'Machine learning and Deep learning algorithms',
        'Secure user verification',
      ],
      technicalDetails: [
        'Django backend',
        'TensorFlow for deep learning',
        'PostgreSQL database',
        'Advanced ML algorithms',
      ],
      achievements: [
        'Awarded 1st Prize at the 7th Engineering Day Awards 2024',
      ],
      comparisonTable: {
        metrics: [
          {
            name: 'Real time Accuracy',
            lbph: '66%',
            inceptionResNet: '98%'
          },
          {
            name: 'Processing Speed',
            lbph: 'Fast (Real-time on CPU)',
            inceptionResNet: 'Slower (Real-time on GPU)'
          },
          {
            name: 'Model Size',
            lbph: '33.5 MB',
            inceptionResNet: '298 MB'
          },
          {
            name: 'Training Time',
            lbph: '1min',
            inceptionResNet: '5h (Google Colab)'
          },
          {
            name: 'Computational Resources',
            lbph: 'Low (CPU, 8 GB RAM)',
            inceptionResNet: 'High (GPU, 16+ GB RAM)'
          },
          {
            name: 'Hardware Requirements',
            lbph: 'No GPU required, run on CPU',
            inceptionResNet: 'Requires GPU for optimal performance'
          },
          {
            name: 'Security',
            lbph: 'Moderate',
            inceptionResNet: 'High'
          }
        ]
      }
    },
    date: 'Jan 2024 – Dec 2024',
  },
  {
    id: 'rfm-analysis',
    title: 'Customer Segmentation using RFM Analysis',
    description: 'Segmented customers using RFM analysis to support targeted marketing strategies and customer retention.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    category: ['Data Science'],
    image: '/projects/RFM_Analysis.png',
    projectDocument: '/projects/Customer_Segmentation_RFM (2).pdf',
    details: {
      overview: 'Conducted RFM analysis on transactional data, segmented customers, and visualized segments using heatmaps and bar charts.',
      features: [
        'RFM analysis',
        'Customer segmentation',
        'Data visualization',
      ],
      technicalDetails: [
        'Python for data processing',
        'Pandas for data manipulation',
        'Matplotlib and Seaborn for visualization',
      ],
    },
    date: 'Jan 2025 – Mar 2025',
  },
  {
    id: 'bank-loan-dashboard',
    title: 'Bank Loan Analysis Dashboard',
    description: 'Built Power BI dashboards for bank loan analysis, connecting to SQL Server for data extraction and transformation.',
    technologies: ['SQL Server', 'Power BI'],
    category: ['Data Science'],
    image: '/projects/Bank-Loan-Analysis-Summrize-Page.png',
    link: 'https://github.com/Boromrop/Bank-Loan-Analysis-Dashboard',
    details: {
      overview: 'Built Power BI dashboards for bank loan analysis, connecting to SQL Server for data extraction and transformation.',
      features: [
        'Interactive filtering by state, grade, and loan purpose',
        'Month-to-date and period-over-period calculations',
        'Cross-visual filtering and drill-through capabilities',
        'Risk assessment through good vs bad loan classification',
      ],
      technicalDetails: [
        'Built in Power BI Desktop',
        'Data model with fact table (bank_loan_data) and date dimension',
        'DAX measures for calculated metrics and time intelligence',
        'Relationship management between loan data and date tables',
      ],
    },
    date: '',
  },
  {
    id: 'loan-prediction',
    title: 'Loan Approval & Risk Analysis for Cambodia',
    description: 'Developed a comprehensive risk assessment tool for loan prediction using machine learning algorithms.',
    technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'NumPy'],
    category: ['AI/ML', 'Data Science'],
    image: '/projects/Loan_prediction.png',
    link: 'https://github.com/Boromrop/Cambodia_Loan_Prediction.git',
    details: {
      overview: 'Built a machine learning system for loan approval prediction and risk analysis tailored to Cambodia\'s socio-economic context.',
      features: [
        'Synthetic data generation for Cambodian context',
        'Exploratory data analysis (EDA) and feature engineering',
        'Multiple classification models (Logistic Regression, Random Forest, XGBoost)',
        'Risk segmentation into low-, medium-, and high-risk groups',
      ],
      technicalDetails: [
        'Python for data processing and modeling',
        'Scikit-learn for machine learning algorithms',
        'XGBoost for gradient boosting',
        'Pandas and NumPy for data manipulation',
        'Achieved over 85% accuracy in loan approval prediction',
      ],
    },
    date: 'June 2024 – Jan 2025',
  },
  {
    id: 'huawei-skincare',
    title: 'Facial Skincare Analysis & Recommendation (HUAWEI ICT Competition)',
    description: 'AI-powered platform for facial skin analysis and personalized skincare recommendations. Selected for the HUAWEI ICT COMPETITION National Final CAMBODIA 2024-2025 (AI innovation track).',
    technologies: ['Django', 'PostgreSQL', 'Tensorflow', 'MindSpore', 'Huawei Cloud'],
    category: ['AI/ML'],
    image: '/projects/skincare.png',
    demoVideo: 'https://www.youtube.com/embed/37z9KgoIskE',
    details: {
      overview: 'Developed an AI-powered system for facial skin analysis and personalized recommendations, leveraging deep learning and cloud deployment.',
      features: [
        'Facial skin analysis',
        'Personalized skincare recommendations',
        'Deep learning models',
        'Cloud deployment with Huawei Cloud',
      ],
      technicalDetails: [
        'Django backend',
        'Tensorflow and MindSpore for deep learning',
        'PostgreSQL database',
        'Deployed on Huawei Cloud',
      ],
      achievements: [
        'Selected for the HUAWEI ICT COMPETITION National Final CAMBODIA 2024-2025 (AI innovation track).'
      ],
    },
    date: '2024-2025',
  },
];
