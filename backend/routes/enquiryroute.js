const router = require("express").Router();
const Enquiry = require("../models/Enquiry");

// ✅ POST: Add Enquiry
router.post("/addEnquiry", async (req, res) => {
  try {
    const { name, email, contactno, institutionname, requirements } = req.body;

    if (!name || !email || !contactno || !institutionname || !requirements) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const enquiry = new Enquiry({
      name,
      email,
      contactno,
      institutionname,
      requirements,
    });

    await enquiry.save();
    res.status(201).json({ message: "Enquiry submitted successfully", enquiry });
  } catch (error) {
    res.status(500).json({ message: "Error submitting enquiry", error: error.message });
  }
});



module.exports = router;
