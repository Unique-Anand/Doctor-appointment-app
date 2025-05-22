import React, { useState } from "react";

const PreventionTips = () => {
  const [step, setStep] = useState(1); // Manage the form steps
  const [disease, setDisease] = useState("");
  const [stage, setStage] = useState("");
  const [duration, setDuration] = useState("");
  const [history, setHistory] = useState("");
  const [method, setMethod] = useState("");
  const [result, setResult] = useState(null);

  const diseaseOptions = [
    "Cold", "Flu", "Headache", "Cough", "Fever", "Asthma", "Diabetes", "Malaria", 
    "Hypertension", "COVID-19", "Migraine", "Pneumonia", "Acid Reflux", "Arthritis", 
    "Tuberculosis", "Cancer", "Tumor", "Paralysis", "Body Pain"
  ];

  const stageOptions = [
    "0-20%",
    "20-70%",
    "71-100%",
  ];

  const durationOptions = [
    "Less than 1 week",
    "1-2 weeks",
    "2-4 weeks",
    "More than 4 weeks",
  ];

  const historyOptions = [
    "Previous Treatments",
    "X-rays",
    "Operations",
    "Other",
  ];

  const methodOptions = [
    "Ayurveda",
    "Homeopathic",
    "Allopathic",
  ];

  // Dynamic prevention tips and advice for extended diseases list
  const getPreventionTips = () => {
    let tips = "";
    let dailyAdvice = "";
    let effectiveness = "";

    // Personalized prevention based on disease and treatment method
    switch(disease) {
      case "Cold":
        if (method === "Ayurveda") {
          tips = "Ayurveda recommends using warm water, honey, and ginger.";
          dailyAdvice = "Drink warm water and herbal teas regularly.";
          effectiveness = "Ayurveda works by strengthening the body's immunity to prevent infections.";
        } else if (method === "Homeopathic") {
          tips = "Homeopathic remedies like Aconite and Allium Cepa can help relieve cold symptoms.";
          dailyAdvice = "Use homeopathic remedies as prescribed and stay warm.";
          effectiveness = "Homeopathy stimulates the body's natural healing process.";
        } else if (method === "Allopathic") {
          tips = "Over-the-counter medications like antihistamines and decongestants can help.";
          dailyAdvice = "Stay hydrated, get plenty of rest, and use medications for symptom relief.";
          effectiveness = "Allopathic medicine provides quick relief from cold symptoms.";
        }
        break;

      case "Flu":
        if (method === "Ayurveda") {
          tips = "Ayurveda recommends Turmeric, Ginger, and garlic to fight flu symptoms.";
          dailyAdvice = "Make ginger and garlic tea, and take a steam bath for relief.";
          effectiveness = "Ayurvedic remedies help fight flu by strengthening the immune system.";
        } else if (method === "Homeopathic") {
          tips = "Homeopathic remedies like Bryonia and Gelsemium are commonly used for flu symptoms.";
          dailyAdvice = "Stay hydrated and take homeopathic remedies as prescribed.";
          effectiveness = "Homeopathy aims to boost your body's ability to fight infections.";
        } else if (method === "Allopathic") {
          tips = "The flu vaccine is the most effective prevention.";
          dailyAdvice = "Get vaccinated annually and take antiviral medications as prescribed.";
          effectiveness = "Allopathic treatments offer both prevention and relief from flu symptoms.";
        }
        break;

      case "Headache":
        if (method === "Ayurveda") {
          tips = "Ayurveda suggests using oils like peppermint and lavender for headache relief.";
          dailyAdvice = "Massage your head gently with soothing oils for pain relief.";
          effectiveness = "Ayurveda focuses on relieving headache by calming the nervous system.";
        } else if (method === "Homeopathic") {
          tips = "Homeopathic remedies such as Belladonna and Nux Vomica can help.";
          dailyAdvice = "Take the remedies and rest in a quiet, dark room.";
          effectiveness = "Homeopathy targets the underlying cause of headaches and provides relief.";
        } else if (method === "Allopathic") {
          tips = "Pain relievers like Ibuprofen or Paracetamol can provide immediate relief.";
          dailyAdvice = "Take the prescribed medication and ensure you rest and stay hydrated.";
          effectiveness = "Allopathic treatments provide fast relief from headaches.";
        }
        break;

      // Additional disease cases can be added here in the same format

      case "COVID-19":
        if (method === "Ayurveda") {
          tips = "Ayurveda recommends herbs like Tulsi and Ashwagandha to boost immunity.";
          dailyAdvice = "Incorporate herbs like Ashwagandha in your daily diet and practice yoga.";
          effectiveness = "Ayurvedic treatments are effective for enhancing immunity and balancing body functions.";
        } else if (method === "Homeopathic") {
          tips = "Homeopathic remedies like Oscillococcinum can help with flu-like symptoms.";
          dailyAdvice = "Take homeopathic remedies and maintain good hygiene to prevent the virus.";
          effectiveness = "Homeopathy works by stimulating the body's immune system to fight infection.";
        } else if (method === "Allopathic") {
          tips = "COVID-19 vaccines are the most effective way to prevent the disease.";
          dailyAdvice = "Wear masks, practice social distancing, and follow vaccination schedules.";
          effectiveness = "Allopathic treatments include preventive vaccines that are scientifically proven to reduce infection risk.";
        }
        break;

      // Repeat the case structure for each of the other diseases:
      // "Malaria", "Hypertension", "Migraine", "Pneumonia", "Acid Reflux", "Arthritis", "Tuberculosis", etc.
      // You can follow the same pattern of personalized tips based on the disease and treatment method.
    }

    // Additional personalized advice based on duration and stage
    if (duration === "More than 4 weeks") {
      tips += "\nFor chronic cases, it's important to monitor health regularly and consult a doctor frequently.";
    }

    // Final result and prevention tips
    const finalResult = `
      Disease: ${disease}
      Stage: ${stage}
      Duration: ${duration}
      Treatment Method: ${method}
      
      Prevention Tips:
      ${tips}

      Daily Advice:
      ${dailyAdvice}

      Effectiveness of the Selected Treatment:
      ${effectiveness}

      Incorporate prevention into your daily life by maintaining a healthy diet, regular exercise, and consistent medication use (based on the treatment method chosen). Stay informed and follow up with medical professionals for the best care.`;

    setResult(finalResult);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Prevention Tips</h1>
      
      {/* Form Steps */}
      <div style={styles.formContainer}>
        {/* Step 1: Disease Input or Selection */}
        {step === 1 && (
          <div style={styles.formSection}>
            <h2>Enter Disease or Choose from the List</h2>
            <input
              type="text"
              value={disease}
              onChange={(e) => setDisease(e.target.value)}
              placeholder="Enter disease name"
              style={styles.input}
            />
            <select
              value={disease}
              onChange={(e) => setDisease(e.target.value)}
              style={styles.dropdown}
            >
              <option value="">Select Disease</option>
              {diseaseOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            <button onClick={handleNextStep} style={styles.button}>Next</button>
          </div>
        )}

        {/* Step 2: Disease Stage */}
        {step === 2 && (
          <div style={styles.formSection}>
            <h2>Select Disease Stage</h2>
            <select
              value={stage}
              onChange={(e) => setStage(e.target.value)}
              style={styles.dropdown}
            >
              <option value="">Select Stage</option>
              {stageOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            <div style={styles.buttonGroup}>
              <button onClick={handlePrevStep} style={styles.button}>Back</button>
              <button onClick={handleNextStep} style={styles.button}>Next</button>
            </div>
          </div>
        )}

        {/* Step 3: Disease Duration */}
        {step === 3 && (
          <div style={styles.formSection}>
            <h2>Enter Duration of Disease</h2>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              style={styles.dropdown}
            >
              <option value="">Select Duration</option>
              {durationOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            <div style={styles.buttonGroup}>
              <button onClick={handlePrevStep} style={styles.button}>Back</button>
              <button onClick={handleNextStep} style={styles.button}>Next</button>
            </div>
          </div>
        )}

        {/* Step 4: Treatment Method */}
        {step === 4 && (
          <div style={styles.formSection}>
            <h2>Select Treatment Method</h2>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              style={styles.dropdown}
            >
              <option value="">Select Method</option>
              {methodOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            <div style={styles.buttonGroup}>
              <button onClick={handlePrevStep} style={styles.button}>Back</button>
              <button onClick={handleNextStep} style={styles.button}>Next</button>
            </div>
          </div>
        )}

        {/* Step 5: Additional Medical History */}
        {step === 5 && (
          <div style={styles.formSection}>
            <h2>Medical History (Optional)</h2>
            <select
              value={history}
              onChange={(e) => setHistory(e.target.value)}
              style={styles.dropdown}
            >
              <option value="">Select Medical History</option>
              {historyOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            <div style={styles.buttonGroup}>
              <button onClick={handlePrevStep} style={styles.button}>Back</button>
              <button onClick={getPreventionTips} style={styles.button}>Generate Tips</button>
            </div>
          </div>
        )}
      </div>

      {/* Display Result */}
      {result && (
        <div style={styles.resultContainer}>
          <h2 style={styles.resultHeader}>Your Results</h2>
          <p style={styles.resultText}>{result}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#111",
    color: "#fff",
  },
  header: {
    fontSize: "2em",
    color: "#FFD700",
  },
  formContainer: {
    maxWidth: "600px",
    margin: "0 auto",
  },
  formSection: {
    padding: "20px",
    backgroundColor: "#222",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    margin: "10px 0",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  dropdown: {
    padding: "10px",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1em",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
  },
  resultContainer: {
    backgroundColor: "#222",
    padding: "20px",
    borderRadius: "10px",
    color: "#FFD700",
  },
  resultHeader: {
    fontSize: "2em",
    marginBottom: "20px",
  },
  resultText: {
    fontSize: "1.2em",
    lineHeight: "1.6em",
  },
};

export default PreventionTips;
