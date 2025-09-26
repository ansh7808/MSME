// import Scheme from '../models/Scheme.js';

// export const checkEligibility = async (req, res) => {
//   try {
//     const {
//       businessType,
//       enterpriseSize,
//       udyamRequired,
//       location,
//       supportType,
//       employeesRange,
//       turnoverRange,
//       sectorSpecific
//     } = req.body;

//     const trimString = (str) => str ? str.trim() : str;

//     const filters = {
//       businessType: { $in: [trimString(businessType)] },
//       enterpriseSize: { $in: [trimString(enterpriseSize)] },
//       udyamRequired: udyamRequired,
//       location: { $in: [trimString(location)] },
//       supportType: { $all: supportType.map(s => s.trim()) },
//       employeesRange: { $regex: trimString(employeesRange), $options: 'i' },
//       turnoverRange: { $regex: trimString(turnoverRange), $options: 'i' },
//       sectorSpecific: sectorSpecific
//     };

//     const schemes = await Scheme.find(filters, { schemeName: 1, applicationLink: 1, _id: 0 });

//     if (!schemes.length) {
//       return res.json({ message: 'No matching schemes found', schemes: [] });
//     }

//     console.log("schemes", schemes);
//     res.json({ schemes });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// import Scheme from '../models/Scheme.js';

// export const checkEligibility = async (req, res) => {
//   try {
//     const {
//       businessType,        // String
//       enterpriseSize,      // String
//       udyamRequired,       // Boolean
//       location,            // String
//       supportType,         // Array
//       employeesRange,      // String
//       turnoverRange,       // String
//       sectorSpecific       // Boolean
//     } = req.body;

//     const trimString = (str) => (str ? str.trim() : str);

//     // Build filters dynamically
//     const filters = {
//       businessType: { $in: [trimString(businessType)] },
//       enterpriseSize: { $in: [trimString(enterpriseSize)] },
//       udyamRequired: udyamRequired,
//       location: { $in: [trimString(location)] },
//       supportType: { $in: supportType.map(s => s.trim()) },
//       employeesRange: { $in: [trimString(employeesRange)] },
//       turnoverRange: { $in: [trimString(turnoverRange)] },
//       sectorSpecific: sectorSpecific
//     };

//     const schemes = await Scheme.find(filters, {
//       schemeName: 1,
//       description: 1,
//       applicationLink: 1,
//       _id: 0
//     });

//     if (!schemes.length) {
//       return res.json({ message: "No matching schemes found", schemes: [] });
//     }

//     res.json({ schemes });

//   } catch (error) {
//     console.error("Eligibility check error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };


// import Scheme from '../models/Scheme.js';

// // --- FINAL SIMPLIFIED CODE ---
// export const checkEligibility = async (req, res) => {
//     try {
//         const userInput = req.body;
//         const filters = {};

//         // Boolean fields
//         if (userInput.udyamRequired !== undefined) filters.udyamRequired = userInput.udyamRequired;
//         if (userInput.sectorSpecific !== undefined) filters.sectorSpecific = userInput.sectorSpecific;

//         // Array fields: Mongoose automatically checks if the user's string
//         // exists in the database's array for that field.
//         if (userInput.businessType) filters.businessType = userInput.businessType;
//         if (userInput.enterpriseSize) filters.enterpriseSize = userInput.enterpriseSize;
//         if (userInput.location) filters.location = userInput.location;
//         if (userInput.employeesRange) filters.employeesRange = userInput.employeesRange;
//         if (userInput.turnoverRange) filters.turnoverRange = userInput.turnoverRange;
        
//         // Multiple choice support type
//         if (userInput.supportType && userInput.supportType.length > 0) {
//             filters.supportType = { $in: userInput.supportType };
//         }
        
//         console.log("Applying Final Simplified Filters:", JSON.stringify(filters, null, 2));

//          const schemes = await Scheme.find(filters, 'schemeName applicationLink description natureOfAssistance whocanApply howtoApply -_id');

//        // const schemes = await Scheme.find(filters, 'schemeName description applicationLink -_id');

//         if (!schemes || schemes.length === 0) {
//             return res.json({ message: 'No matching schemes found', schemes: [] });
//         }

//         res.json({ schemes });

//     } catch (err) {
//         console.error("Error in checkEligibility:", err);
//         res.status(500).json({ message: 'Server error' });
//     }
// };




import Scheme from '../models/Scheme.js';

export const checkEligibility = async (req, res) => {
    try {
        const userInput = req.body;
        const filters = {};

        // Array fields: Mongoose automatically checks if the user's string
        // exists in the database's array for that field.
        if (userInput.businessType) filters.businessType = userInput.businessType;
        if (userInput.enterpriseSize) filters.enterpriseSize = userInput.enterpriseSize;
        if (userInput.location) filters.location = userInput.location;
        if (userInput.employeesRange) filters.employeesRange = userInput.employeesRange;
        if (userInput.turnoverRange) filters.turnoverRange = userInput.turnoverRange;
        
        // This is ready for when you add a 'States' question to your form
        if (userInput.states) filters.states = userInput.states;
        
        // Multiple choice support type
        if (userInput.supportType && userInput.supportType.length > 0) {
            filters.supportType = { $in: userInput.supportType };
        }
        
        console.log("Applying Final Simplified Filters:", JSON.stringify(filters, null, 2));

        const schemes = await Scheme.find(filters, 'schemeName applicationLink description natureOfAssistance whocanApply howtoApply -_id');

        if (!schemes || schemes.length === 0) {
            return res.json({ message: 'No matching schemes found', schemes: [] });
        }

        res.json({ schemes });

    } catch (err) {
        console.error("Error in checkEligibility:", err);
        res.status(500).json({ message: 'Server error' });
    }
};