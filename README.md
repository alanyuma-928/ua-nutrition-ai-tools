# The University of Arizona: Nutrition AI Tools (SSoT)
## Clinical Engineering & Decision Support Logic

### **Overview**
This repository serves as the **Infrastructure-as-Code (IaC)** foundation for the Nutritional Sciences & Wellness Foods Lab. It contains the core clinical math engines, unit tests, and JSON standards that power the Arizona Nutrition Aid deployment.

---

### **Technical Architecture**
* **Framework:** React / TypeScript / Vite
* **Audit Suite:** Vitest for clinical math verification.
* **Single Source of Truth (SSoT):** Clinical logic is derived from **DGA 2020-2025** and **Hamwi** standards, centralized in `src/data/clinicalStandards.json`.

---

### **Clinical Logic Verification**
To ensure clinical safety and mathematical integrity, run the automated auditor:
```bash
npm test
```
**Verified Formulas:**
* Fiber Density Rule: 14g / 1000 kcal (DGA Standard).
* IBW Calculation: Hamwi Method (Clinical Baseline).

---

**Architect:** Alan Pruitt DCC (UoA)  
**Institution:** The University of Arizona Nutritional Sciences & Wellness Foods Lab  
**License:** OER-CC-BY-4.0
