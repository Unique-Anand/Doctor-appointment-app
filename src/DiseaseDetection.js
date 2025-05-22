




// import React, { useState } from "react";
// import './DiseaseForm.css';

// const steps = [
//   "Select Disease Name",
//   "Enter Symptoms",
//   "Choose Disease Severity",
//   "Upload Medical Reports",
//   "Select Appointment Date & Time",
//   "Appointment Details",
// ];

// const diseases = ["Cancer", "Diabetes", "Hypertension", "Migraine", "Asthma", 
//     "Anemia", "Pneumonia", "Poisoning", "Arthritis", "Allergy","Depression","HeartAttack"];

// const symptomsData = {
//     Cancer: ["Fatigue", "Unexplained Weight Loss", "Pain", "Fever"],
//     Diabetes: ["Frequent Urination", "Excessive Thirst", "Fatigue"],
//     Hypertension: ["Headache", "Dizziness", "Shortness of Breath"],
//     Migraine: ["Severe Headache", "Nausea", "Sensitivity to Light", "Dizziness"],
//     Asthma: ["Shortness of Breath", "Wheezing", "Chest Tightness", "Coughing"],
//     Anemia: ["Fatigue", "Pale Skin", "Dizziness", "Shortness of Breath"],
//     Pneumonia: ["Fever", "Cough with Phlegm", "Chest Pain", "Difficulty Breathing"],
//     Poisoning: ["Nausea", "Vomiting", "Diarrhea", "Abdominal Pain"],
//     Arthritis: ["Joint Pain", "Swelling", "Stiffness", "Reduced Mobility"],
//     Allergy: ["Sneezing", "Itchy Eyes", "Skin Rash", "Runny Nose"],
//     Depression: ["Persistent Sadness", "Loss of Interest", "Fatigue", "Insomnia"],
//     HeartAttack: ["Chest Pain", "Shortness of Breath", "Nausea", "Cold Sweat"]
// };

// const doctorData = {
//     Cancer: { name: "Dr. Smith", specialist: "Oncologist", location: "Cancer Center, Delhi" },
//     Diabetes: { name: "Dr. Sharma", specialist: "Endocrinologist", location: "Diabetes Clinic, Mumbai" },
//     Hypertension: { name: "Dr. Patel", specialist: "Cardiologist", location: "Heart Hospital, Kolkata" },
//     Migraine: { name: "Dr. Rao", specialist: "Neurologist", location: "Neuro Center, Chennai" },
//     Asthma: { name: "Dr. Gupta", specialist: "Pulmonologist", location: "Lung Care, Bangalore" },
//     Anemia: { name: "Dr. Mehta", specialist: "Hematologist", location: "Blood Care, Hyderabad" },
//     Pneumonia: { name: "Dr. Verma", specialist: "Pulmonologist", location: "Respiratory Care, Pune" },
//     Poisoning: { name: "Dr. Reddy", specialist: "Toxicologist", location: "Emergency Care, Jaipur" },
//     Arthritis: { name: "Dr. Das", specialist: "Rheumatologist", location: "Joint Care, Chandigarh" },
//     Allergy: { name: "Dr. Nair", specialist: "Allergist", location: "Allergy Clinic, Lucknow" },
//     Depression: { name: "Dr. Bose", specialist: "Psychiatrist", location: "Mental Health Center, Indore" },
//     HeartAttack: { name: "Dr. Roy", specialist: "Cardiologist", location: "Heart Care, Ahmedabad" }
// };

// const DiseaseForm = () => {
//   const [step, setStep] = useState(0);
//   const [selectedDisease, setSelectedDisease] = useState("");
//   const [selectedSymptoms, setSelectedSymptoms] = useState([]);
//   const [severity, setSeverity] = useState("");
//   const [medicalReport, setMedicalReport] = useState(null);
//   const [appointment, setAppointment] = useState({ date: "", time: "" });
//   const [doctorDetails, setDoctorDetails] = useState(null);

//   const handleNext = () => {
//     if (step === 0 && !selectedDisease) return;
//     if (step === 1 && selectedSymptoms.length === 0) return;
//     if (step === 2 && !severity) return;
//     if (step === 4 && (!appointment.date || !appointment.time)) return;
//     if (step === 5) return;
    
//     if (step === 4) {
//       setDoctorDetails(doctorData[selectedDisease]);
//     }
//     setStep((prev) => prev + 1);
//   };

//   const handleBack = () => setStep((prev) => prev - 1);

//   return (
//     <div className="disease-form-container">
//       <h2>{steps[step]}</h2>
//       {step === 0 && (
//         <div className="step-content">
//           <select onChange={(e) => setSelectedDisease(e.target.value)} value={selectedDisease}>
//             <option value="">Select Disease</option>
//             {diseases.map((disease) => (
//               <option key={disease} value={disease}>{disease}</option>
//             ))}
//           </select>
//           <button onClick={handleNext}>Next</button>
//         </div>
//       )}
//       {step === 1 && (
//         <div className="step-content">
//           {symptomsData[selectedDisease]?.map((symptom) => (
//             <label key={symptom}><input type="checkbox" onChange={(e) => 
//             setSelectedSymptoms(prev => e.target.checked ? [...prev, symptom] : prev.filter(s => s !== symptom))} />{symptom}</label>
//           ))}
//           <button onClick={handleBack}>Back</button>
//           <button onClick={handleNext}>Next</button>
//         </div>
//       )}
//       {step === 2 && (
//         <div className="step-content">
//           {['Low', 'Mid', 'High'].map(level => (
//             <label key={level}><input type="radio" name="severity" onChange={() => setSeverity(level)} />{level}</label>
//           ))}
//           <button onClick={handleBack}>Back</button>
//           <button onClick={handleNext}>Next</button>
//         </div>
//       )}
//       {step === 3 && (
//         <div className="step-content">
//           <input type="file" onChange={(e) => setMedicalReport(e.target.files[0])} />
//           <button onClick={handleBack}>Back</button>
//           <button onClick={handleNext}>Next</button>
//         </div>
//       )}
//       {step === 4 && (
//         <div className="step-content">
//           <input type="date" onChange={(e) => setAppointment({ ...appointment, date: e.target.value })} />
//           <input type="time" onChange={(e) => setAppointment({ ...appointment, time: e.target.value })} />
//           <button onClick={handleBack}>Back</button>
//           <button onClick={handleNext}>Next</button>
//         </div>
//       )}
//       {step === 5 && doctorDetails && (
//         <div className="step-content">
//           <p><strong>Doctor:</strong> {doctorDetails.name} ({doctorDetails.specialist})</p>
//           <p><strong>Location:</strong> {doctorDetails.location}</p>
//           <p><strong>Appointment:</strong> {appointment.date} at {appointment.time}</p>
//           <button onClick={handleBack}>Back</button>
//           <button onClick={() => alert("Appointment Booked!")}>Submit</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DiseaseForm;




import React, { useState } from "react";
import './DiseaseForm.css';
import jsPDF from "jspdf";

const steps = [
  "Enter Patient Details",
  "Select Disease Name",
  "Enter Symptoms",
  "Choose Disease Severity",
  "Upload Medical Reports",
  "Select Appointment Date & Time",
  "Appointment Details",
];

const diseases = ["Cancer", "Diabetes", "Hypertension", "Migraine", "Asthma", 
  "Anemia", "Pneumonia", "Poisoning", "Arthritis", "Allergy", "Depression", "HeartAttack"];

const symptomsData = {
  Cancer: ["Fatigue", "Unexplained Weight Loss", "Pain", "Fever"],
  Diabetes: ["Frequent Urination", "Excessive Thirst", "Fatigue"],
  Hypertension: ["Headache", "Dizziness", "Shortness of Breath"],
  Migraine: ["Severe Headache", "Nausea", "Sensitivity to Light", "Dizziness"],
  Asthma: ["Shortness of Breath", "Wheezing", "Chest Tightness", "Coughing"],
  Anemia: ["Fatigue", "Pale Skin", "Dizziness", "Shortness of Breath"],
  Pneumonia: ["Fever", "Cough with Phlegm", "Chest Pain", "Difficulty Breathing"],
  Poisoning: ["Nausea", "Vomiting", "Diarrhea", "Abdominal Pain"],
  Arthritis: ["Joint Pain", "Swelling", "Stiffness", "Reduced Mobility"],
  Allergy: ["Sneezing", "Itchy Eyes", "Skin Rash", "Runny Nose"],
  Depression: ["Persistent Sadness", "Loss of Interest", "Fatigue", "Insomnia"],
  HeartAttack: ["Chest Pain", "Shortness of Breath", "Nausea", "Cold Sweat"]
};

const doctorData = {
  Cancer: { name: "Dr. Smith", specialist: "Oncologist", location: "Cancer Center, Delhi" },
  Diabetes: { name: "Dr. Sharma", specialist: "Endocrinologist", location: "Diabetes Clinic, Mumbai" },
  Hypertension: { name: "Dr. Patel", specialist: "Cardiologist", location: "Heart Hospital, Kolkata" },
  Migraine: { name: "Dr. Rao", specialist: "Neurologist", location: "Neuro Center, Chennai" },
  Asthma: { name: "Dr. Gupta", specialist: "Pulmonologist", location: "Lung Care, Bangalore" },
  Anemia: { name: "Dr. Mehta", specialist: "Hematologist", location: "Blood Care, Hyderabad" },
  Pneumonia: { name: "Dr. Verma", specialist: "Pulmonologist", location: "Respiratory Care, Pune" },
  Poisoning: { name: "Dr. Reddy", specialist: "Toxicologist", location: "Emergency Care, Jaipur" },
  Arthritis: { name: "Dr. Das", specialist: "Rheumatologist", location: "Joint Care, Chandigarh" },
  Allergy: { name: "Dr. Nair", specialist: "Allergist", location: "Allergy Clinic, Lucknow" },
  Depression: { name: "Dr. Bose", specialist: "Psychiatrist", location: "Mental Health Center, Indore" },
  HeartAttack: { name: "Dr. Roy", specialist: "Cardiologist", location: "Heart Care, Ahmedabad" }
};

const DiseaseForm = () => {
  const [step, setStep] = useState(0);
  const [patientName, setPatientName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [selectedDisease, setSelectedDisease] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [severity, setSeverity] = useState("");
  const [medicalReport, setMedicalReport] = useState(null);
  const [appointment, setAppointment] = useState({ date: "", time: "" });
  const [doctorDetails, setDoctorDetails] = useState(null);

  const handleNext = () => {
    if (step === 0 && (!patientName || !phoneNumber || !address)) return;
    if (step === 1 && !selectedDisease) return;
    if (step === 2 && selectedSymptoms.length === 0) return;
    if (step === 3 && !severity) return;
    if (step === 5 && (!appointment.date || !appointment.time)) return;

    if (step === 5) {
      setDoctorDetails(doctorData[selectedDisease]);
    }

    setStep((prev) => prev + 1);
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text("Appointment Details", 20, 20);
    doc.text(`Patient Name: ${patientName}`, 20, 30);
    doc.text(`Phone Number: ${phoneNumber}`, 20, 40);
    doc.text(`Address: ${address}`, 20, 50);
    doc.text(`Disease: ${selectedDisease}`, 20, 60);
    doc.text(`Symptoms: ${selectedSymptoms.join(", ")}`, 20, 70);
    doc.text(`Severity: ${severity}`, 20, 80);
    doc.text(`Appointment Date: ${appointment.date}`, 20, 90);
    doc.text(`Appointment Time: ${appointment.time}`, 20, 100);
    doc.text(`Doctor: ${doctorDetails?.name} (${doctorDetails?.specialist})`, 20, 110);
    doc.text(`Location: ${doctorDetails?.location}`, 20, 120);
    doc.save("appointment_details.pdf");
  };

  return (
    <div className="disease-form-container">
      <h2>{steps[step]}</h2>

      {step === 0 && (
        <div className="step-content">
          <input type="text" placeholder="Patient Name" value={patientName} onChange={(e) => setPatientName(e.target.value)} />
          <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 1 && (
        <div className="step-content">
          <select onChange={(e) => setSelectedDisease(e.target.value)} value={selectedDisease}>
            <option value="">Select Disease</option>
            {diseases.map((disease) => (
              <option key={disease} value={disease}>{disease}</option>
            ))}
          </select>
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div className="step-content">
          {symptomsData[selectedDisease]?.map((symptom) => (
            <label key={symptom}>
              <input type="checkbox" onChange={(e) => setSelectedSymptoms(prev => e.target.checked ? [...prev, symptom] : prev.filter(s => s !== symptom))} />
              {symptom}
            </label>
          ))}
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 3 && (
        <div className="step-content">
          {['Low', 'Mid', 'High'].map(level => (
            <label key={level}>
              <input type="radio" name="severity" onChange={() => setSeverity(level)} />
              {level}
            </label>
          ))}
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 4 && (
        <div className="step-content">
          <input type="file" onChange={(e) => setMedicalReport(e.target.files[0])} />
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 5 && (
        <div className="step-content">
          <input type="date" onChange={(e) => setAppointment({ ...appointment, date: e.target.value })} />
          <input type="time" onChange={(e) => setAppointment({ ...appointment, time: e.target.value })} />
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 6 && doctorDetails && (
        <div className="step-content">
          <h3>Patient Information</h3>
          <p><strong>Name:</strong> {patientName}</p>
          <p><strong>Phone:</strong> {phoneNumber}</p>
          <p><strong>Address:</strong> {address}</p>
          <p><strong>Disease:</strong> {selectedDisease}</p>
          <h3>Doctor Information</h3>
          <p><strong>Doctor:</strong> {doctorDetails.name} ({doctorDetails.specialist})</p>
          <p><strong>Location:</strong> {doctorDetails.location}</p>
          <p><strong>Appointment:</strong> {appointment.date} at {appointment.time}</p>
          <button onClick={handleBack}>Back</button>
          <button onClick={() => alert("Appointment Booked!")}>Submit</button>
          <button onClick={handleDownloadPDF}>Download PDF</button>
        </div>
      )}
    </div>
  );
};

export default DiseaseForm;
