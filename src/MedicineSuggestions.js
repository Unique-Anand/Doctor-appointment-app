import React, { useState } from "react";

// Mock Disease Data
const diseaseList = ["Cold", "Flu", "Headache", "Cough", "Fever","Asthma", "Diabetes", "Malaria", "Hypertension", "COVID-19", 
  "Migraine", "Pneumonia", "Acid Reflux", "Arthritis", "Tuberculosis","Cancer",  "Tumor", "Paralysis", "Body Pain"];

const MedicineSuggestions = () => {
  const [disease, setDisease] = useState("");
  const [symptoms, setSymptoms] = useState([]);
  const [severity, setSeverity] = useState("low");
  const [suggestedMedicines, setSuggestedMedicines] = useState([]);
  const [step, setStep] = useState(1); // Step to control form flow

  const handleDiseaseChange = (e) => setDisease(e.target.value);

  const handleSymptomChange = (e) => {
    const { value, checked } = e.target;
    setSymptoms((prevSymptoms) =>
      checked ? [...prevSymptoms, value] : prevSymptoms.filter((s) => s !== value)
    );
  };

  const handleSeverityChange = (e) => setSeverity(e.target.value);

  const getMedicineSuggestions = () => {
    // Example medicines for each disease
    const medicineDatabase = {
      "Cold": [
        {
          name: "Paracetamol",
          dosage: "1 tablet every 6 hours",
          description: "For fever and mild pain relief.",
          instructions: [
            "Take 1 tablet after food.",
            "Drink plenty of water.",
            "Avoid taking alcohol while on this medicine.",
          ],
        },
        {
          name: "Cough Syrup",
          dosage: "2 teaspoons 3 times a day",
          description: "Helps soothe the throat and suppress coughing.",
          instructions: [
            "Take 2 teaspoons after meals.",
            "Shake the bottle well before use.",
            "Do not exceed the recommended dose.",
          ],
        },
      ],
      "Fever": [
        {
          name: "Ibuprofen",
          dosage: "1 tablet every 8 hours",
          description: "For fever reduction and inflammation.",
          instructions: [
            "Take 1 tablet after meals.",
            "Drink water after taking the medicine.",
            "Avoid excessive sun exposure while on this medicine.",
          ],
        },
        {
          name: "Acetaminophen",
          dosage: "500 mg every 4-6 hours",
          description: "For pain relief and fever reduction.",
          instructions: [
            "Take 1 tablet every 4-6 hours.",
            "Do not exceed 4 grams per day.",
            "Avoid alcohol while taking this medicine.",
          ],
        },
      ],
      "Cancer": [
    {
      name: "Chemotherapy",
      dosage: "As prescribed by oncologist",
      description: "Used to kill cancer cells and shrink tumors.",
      instructions: [
        "Follow the chemotherapy schedule as prescribed by the doctor.",
        "Drink plenty of fluids to prevent dehydration.",
        "Report any side effects to your healthcare provider immediately.",
      ],
    },
    {
      name: "Immunotherapy",
      dosage: "As prescribed by oncologist",
      description: "Boosts the body’s immune system to fight cancer.",
      instructions: [
        "Administered in a clinical setting through IV infusion.",
        "Monitor for allergic reactions during and after infusion.",
        "Follow up with your oncologist for routine evaluations.",
      ],
    },
  ],
  "Tumor": [
    {
      name: "Surgical Removal",
      dosage: "As prescribed by surgeon",
      description: "Surgical procedure to remove tumors from the body.",
      instructions: [
        "Follow pre-surgery and post-surgery instructions provided by your doctor.",
        "Take prescribed pain medications as instructed.",
        "Attend follow-up visits for monitoring and potential further treatment.",
      ],
    },
    {
      name: "Radiotherapy",
      dosage: "As prescribed by oncologist",
      description: "Uses high-energy rays to shrink or destroy tumor cells.",
      instructions: [
        "Undergo radiotherapy sessions as scheduled by your doctor.",
        "Protect your skin from sun exposure in the treated area.",
        "Avoid excessive physical exertion and follow your doctor’s advice post-treatment.",
      ],
    },
  ],
  "Paralysis": [
    {
      name: "Physical Therapy",
      dosage: "As recommended by physiotherapist",
      description: "Therapeutic exercises to regain muscle strength and movement.",
      instructions: [
        "Perform the recommended exercises daily to improve mobility.",
        "Follow the guidance of your physiotherapist for progress tracking.",
        "Attend regular physiotherapy sessions for better recovery.",
      ],
    },
    {
      name: "Spinal Cord Stimulation",
      dosage: "As prescribed by neurologist",
      description: "A device that stimulates the spinal cord to reduce paralysis symptoms.",
      instructions: [
        "The device should be implanted by a qualified medical professional.",
        "Monitor for any side effects or discomfort after implantation.",
        "Attend follow-up visits to assess the effectiveness of the treatment.",
      ],
    },
  ],
  "Body Pain": [
    {
      name: "Ibuprofen",
      dosage: "200-400 mg every 4-6 hours",
      description: "Anti-inflammatory medication for pain relief.",
      instructions: [
        "Take with food to avoid stomach upset.",
        "Do not exceed 1200 mg per day without consulting your doctor.",
        "Drink plenty of water to prevent dehydration.",
      ],
    },
    {
      name: "Acetaminophen",
      dosage: "500 mg every 4-6 hours as needed",
      description: "Pain reliever for mild to moderate body pain.",
      instructions: [
        "Do not exceed 4 grams per day.",
        "Avoid alcohol while taking this medication.",
        "If pain persists, consult a healthcare professional.",
      ],
    },
    {
      name: "Topical Pain Relief Cream",
      dosage: "Apply 2-3 times a day to affected area",
      description: "Topical treatment to relieve localized body pain.",
      instructions: [
        "Apply to clean, dry skin.",
        "Wash hands thoroughly after application.",
        "Avoid contact with eyes and mucous membranes.",
      ],
    },
  ],
  "Asthma": [
    {
      "name": "Inhaler (Albuterol)",
      "dosage": "1-2 puffs every 4-6 hours as needed",
      "description": "Relieves symptoms of asthma such as wheezing and shortness of breath.",
      "instructions": [
        "Shake the inhaler well before use.",
        "Take a deep breath before using the inhaler.",
        "Rinse your mouth after use to prevent irritation."
      ]
    },
    {
      "name": "Montelukast",
      "dosage": "10 mg once daily",
      "description": "Helps prevent asthma symptoms and allergies.",
      "instructions": [
        "Take the tablet at the same time each evening.",
        "Swallow whole with water.",
        "Not for immediate relief of asthma attacks."
      ]
    }
  ],
  "Diabetes": [
    {
      "name": "Metformin",
      "dosage": "500 mg twice daily",
      "description": "Helps control blood sugar levels in type 2 diabetes.",
      "instructions": [
        "Take with meals to reduce stomach upset.",
        "Monitor your blood sugar regularly.",
        "Avoid excessive alcohol consumption."
      ]
    },
    {
      "name": "Insulin",
      "dosage": "As prescribed by your doctor",
      "description": "Helps regulate blood sugar by injecting insulin.",
      "instructions": [
        "Rotate injection sites to avoid skin issues.",
        "Store insulin in the refrigerator.",
        "Monitor your blood sugar before each dose."
      ]
    }
  ],
  "Malaria": [
    {
      "name": "Chloroquine",
      "dosage": "500 mg once weekly for prevention; 25 mg/kg over 3 days for treatment",
      "description": "Used to treat and prevent malaria caused by Plasmodium species.",
      "instructions": [
        "Take with food to avoid stomach upset.",
        "Complete the full course even if you feel better.",
        "Avoid alcohol while taking this medication."
      ]
    },
    {
      "name": "Artemether-Lumefantrine",
      "dosage": "4 tablets twice daily for 3 days",
      "description": "Combination therapy for treating malaria.",
      "instructions": [
        "Take with a fatty meal for better absorption.",
        "Do not miss any doses to ensure effectiveness.",
        "Report side effects like dizziness to your doctor."
      ]
    }
  ],
  "Hypertension": [
    {
      "name": "Amlodipine",
      "dosage": "5 mg once daily",
      "description": "Relaxes blood vessels to lower blood pressure.",
      "instructions": [
        "Take at the same time each day, with or without food.",
        "Monitor your blood pressure regularly.",
        "Avoid grapefruit or grapefruit juice."
      ]
    },
    {
      "name": "Losartan",
      "dosage": "50 mg once daily",
      "description": "Helps relax blood vessels and improve blood flow.",
      "instructions": [
        "Take with or without food.",
        "Stay hydrated but avoid excessive salt intake.",
        "Inform your doctor of any dizziness or swelling."
      ]
    }
  ],
  "COVID-19": [
    {
      "name": "Paracetamol",
      "dosage": "500 mg every 6 hours as needed for fever",
      "description": "Relieves fever and mild symptoms of COVID-19.",
      "instructions": [
        "Take after meals to reduce stomach discomfort.",
        "Stay hydrated and rest adequately.",
        "Avoid taking more than 4 grams in 24 hours."
      ]
    },
    {
      "name": "Vitamin C and Zinc",
      "dosage": "1 tablet daily",
      "description": "Supports immune function during illness.",
      "instructions": [
        "Take after meals for better absorption.",
        "Do not exceed the recommended dose.",
        "Continue with a balanced diet and adequate hydration."
      ]
    }
  ],
  "Flu": [
    {
      "name": "Oseltamivir",
      "dosage": "75 mg twice daily for 5 days",
      "description": "Antiviral medication for influenza.",
      "instructions": [
        "Take within 48 hours of symptom onset for best results.",
        "Complete the full course of treatment.",
        "Take with food to reduce nausea."
      ]
    },
    {
      "name": "Paracetamol",
      "dosage": "500 mg every 6 hours as needed for fever and pain",
      "description": "Provides relief from flu symptoms.",
      "instructions": [
        "Stay hydrated while taking this medication.",
        "Avoid taking on an empty stomach.",
        "Do not exceed 4 grams per day."
      ]
    }
  ],
  "Headache": [
    {
      "name": "Ibuprofen",
      "dosage": "200-400 mg every 6 hours as needed",
      "description": "Reduces pain and inflammation.",
      "instructions": [
        "Take with food to avoid stomach upset.",
        "Avoid combining with alcohol.",
        "Do not take more than 1,200 mg in 24 hours."
      ]
    },
    {
      "name": "Acetaminophen",
      "dosage": "500 mg every 4-6 hours as needed",
      "description": "Effective for mild to moderate pain relief.",
      "instructions": [
        "Take with water, preferably after meals.",
        "Do not exceed the maximum daily dose.",
        "Avoid using with alcohol."
      ]
    }
  ],
  "Cough": [
    {
      "name": "Dextromethorphan Syrup",
      "dosage": "2 teaspoons every 6 hours",
      "description": "Suppresses dry cough.",
      "instructions": [
        "Shake the bottle well before use.",
        "Do not exceed the recommended dosage.",
        "Avoid alcohol while on this medication."
      ]
    },
    {
      "name": "Honey and Lemon Syrup",
      "dosage": "2 teaspoons 3 times daily",
      "description": "Soothes the throat and reduces irritation.",
      "instructions": [
        "Take after meals for better effectiveness.",
        "Can be taken with warm water.",
        "Not recommended for children under 1 year."
      ]
    }
  ],
  "Migraine": [
    {
      "name": "Sumatriptan",
      "dosage": "50 mg at the onset of migraine",
      "description": "Relieves migraine attacks.",
      "instructions": [
        "Take as soon as symptoms appear.",
        "Do not exceed 200 mg in 24 hours.",
        "Avoid using for more than 10 days per month."
      ]
    },
    {
      "name": "Naproxen",
      "dosage": "250 mg twice daily",
      "description": "Provides pain relief and reduces inflammation.",
      "instructions": [
        "Take with a full glass of water.",
        "Do not take on an empty stomach.",
        "Limit alcohol consumption while taking this medication."
      ]
    }
  ]
    };

    const diseaseMedicines = medicineDatabase[disease] || [];
    const severityMultiplier = severity === "high" ? 1.5 : severity === "mid" ? 1.2 : 1;

    const suggested = diseaseMedicines.map((medicine) => ({
      ...medicine,
      dosage: `${medicine.dosage} (Adjusted for severity: ${severityMultiplier}x)`,
    }));

    setSuggestedMedicines(suggested);
    setStep(4); // Move to step 4 to show results
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Medicine Suggestions</h1>

      {/* Step 1: Disease Name Input */}
      {step === 1 && (
        <div style={styles.formContainer}>
          <h2 style={styles.formHeader}>Enter Disease Name</h2>
          <input
            type="text"
            list="disease-list"
            value={disease}
            onChange={handleDiseaseChange}
            style={styles.input}
            placeholder="Type or select disease"
            required
          />
          <datalist id="disease-list">
            {diseaseList.map((diseaseOption, index) => (
              <option key={index} value={diseaseOption} />
            ))}
          </datalist>
          <button onClick={() => setStep(2)} style={styles.nextButton}>
            Next
          </button>
        </div>
      )}

      {/* Step 2: Symptoms Input */}
      {step === 2 && (
        <div style={styles.formContainer}>
          <h2 style={styles.formHeader}>Select Symptoms</h2>
          <div style={styles.checkboxGroup}>
            {["Fever",
  "Cough",
  "Shortness of breath",
  "Fatigue",
  "Chest pain",
  "Headache",
  "Nausea",
  "Vomiting",
  "Diarrhea",
  "Constipation",
  "Dizziness",
  "Weakness",
  "Loss of appetite",
  "Unexplained weight loss",
  "Joint pain",
  "Muscle pain",
  "Skin rash",
  "Swelling in limbs",
  "Vision problems",
  "Hearing loss",
  "Abdominal pain",
  "Sore throat",
  "Difficulty swallowing",
  "Bleeding or bruising easily",
  "Persistent cough",
  "Blood in stool or urine",
  "Increased thirst",
  "Frequent urination",
  "Numbness or tingling",
  "Memory loss",
  "Mood changes",
  "Seizures",
  "Sleeping difficulties",
  "Hair loss",
  "Pale skin",
  "Yellowing of the skin or eyes (jaundice)",
  "Cold hands and feet",
  "Enlarged lymph nodes",
  "Excessive sweating",
  "Dry or itchy skin",
  "Difficulty breathing at night",
  "Heart palpitations",
  "Chronic fatigue",
  "Frequent infections",
  "Tremors or shaking",
  "Confusion or disorientation",
  "Loss of balance or coordination",
  "Unexplained pain in specific areas",].map((symptom) => (
              <label key={symptom}>
                <input
                  type="checkbox"
                  value={symptom}
                  onChange={handleSymptomChange}
                  style={styles.checkbox}
                />
                {symptom}
              </label>
            ))}
          </div>
          <button onClick={() => setStep(3)} style={styles.nextButton}>
            Next
          </button>
        </div>
      )}

      {/* Step 3: Severity Input */}
      {step === 3 && (
        <div style={styles.formContainer}>
          <h2 style={styles.formHeader}>Select Severity</h2>
          <select value={severity} onChange={handleSeverityChange} style={styles.input}>
            <option value="low">Low</option>
            <option value="mid">Mid</option>
            <option value="high">High</option>
          </select>
          <button onClick={getMedicineSuggestions} style={styles.nextButton}>
            Get Medicines
          </button>
        </div>
      )}

      {/* Step 4: Medicine Results */}
      {step === 4 && (
        <div style={styles.resultContainer}>
          <h2 style={styles.resultHeader}>Suggested Medicines</h2>
          {suggestedMedicines.map((medicine, index) => (
            <div key={index} style={styles.medicineCard}>
              <h3 style={styles.medicineName}>{medicine.name}</h3>
              <p style={styles.medicineDescription}>{medicine.description}</p>
              <p style={styles.medicineDosage}>{medicine.dosage}</p>
              <h4 style={styles.instructionsHeader}>How to take it:</h4>
              <ul style={styles.instructionsList}>
                {medicine.instructions.map((instruction, idx) => (
                  <li key={idx} style={styles.instruction}>{instruction}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "#141414",
    color: "#fff",
    borderRadius: "8px",
  },
  header: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  formContainer: {
    marginTop: "40px",
    background: "#212121",
    padding: "30px",
    borderRadius: "8px",
  },
  formHeader: {
    fontSize: "2rem",
    color: "#fff",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #ddd",
    marginTop: "5px",
  },
  nextButton: {
    background: "#E50914",
    padding: "15px 25px",
    border: "none",
    color: "#fff",
    fontSize: "1.2rem",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: "20px",
  },
  checkboxGroup: {
    display: "flex",
    flexDirection: "column",
  },
  checkbox: {
    marginLeft: "10px",
  },
  resultContainer: {
    marginTop: "40px",
    background: "#212121",
    padding: "30px",
    borderRadius: "8px",
  },
  resultHeader: {
    fontSize: "2rem",
    color: "#fff",
    marginBottom: "20px",
  },
  medicineCard: {
    background: "#333",
    borderRadius: "8px",
    padding: "20px",
    marginBottom: "20px",
  },
  medicineName: {
    fontSize: "1.5rem",
    color: "#E50914", 
    marginBottom: "10px",
  },
  medicineDescription: {
    fontSize: "1.1rem",
    color: "#fff",
    marginBottom: "10px",
  },
  medicineDosage: {
    fontSize: "1.1rem",
    color: "#fff",
  },
  instructionsHeader: {
    fontSize: "1.3rem",
    color: "#E50914",
    marginTop: "20px",
  },
  instructionsList: {
    listStyleType: "decimal",
    paddingLeft: "20px",
  },
  instruction: {
    fontSize: "1.1rem",
    color: "#fff",
  },
};

export default MedicineSuggestions;
