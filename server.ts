import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health Check Endpoint
  app.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      company: "Casial Global Trading",
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || "development"
    });
  });

  // Contact Inquiry API Route
  app.post("/api/contact", (req, res) => {
    const { name, companyName, email, phone, country, message, productInterest, targetPort, containerQuantity } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, Email, and Message are required fields." });
    }

    const referenceId = `INQ-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const timestamp = new Date().toISOString();

    console.log(`[Casial Export API] New Contact Inquiry Received: ${referenceId}`, {
      name, companyName, email, country, productInterest
    });

    // Simulated email dispatch payload
    const emailAutoReply = {
      to: email,
      subject: `Inquiry Confirmation - Casial Global Trading [${referenceId}]`,
      body: `Dear ${name},\n\nThank you for reaching out to Casial Global Trading. We have received your inquiry regarding ${productInterest || 'our agricultural commodities catalog'}.\n\nOur export sales desk in Dubai / Mumbai has assigned Reference Code: ${referenceId}. One of our trade managers will review your requirements and respond with a formal quotation, product specifications, and phytosanitary details within 2 business hours.\n\nFor urgent trade inquiries, you can also reach us directly via WhatsApp at +971 50 892 4102 or +91 98201 44810.\n\nBest regards,\nExport Sales Desk\nCasial Global Trading LLC`
    };

    return res.json({
      success: true,
      message: "Inquiry recorded successfully. Auto-reply confirmation dispatched.",
      referenceId,
      timestamp,
      autoReplyPreview: emailAutoReply
    });
  });

  // Freight & RFQ Price Calculator API Route
  app.post("/api/rfq", (req, res) => {
    const { productTitle, containerType, incoterms, quantity, targetPort, companyName, contactName, email, phone, country, notes } = req.body;

    if (!productTitle || !email || !targetPort) {
      return res.status(400).json({ error: "Product Title, Email, and Target Destination Port are required." });
    }

    const referenceId = `RFQ-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    // Estimate base commodity FOB/CIF pricing heuristics for simulation
    let basePricePerTonUsd = 450; // default average
    const titleLower = (productTitle || '').toLowerCase();
    if (titleLower.includes('onion')) basePricePerTonUsd = 380;
    else if (titleLower.includes('garlic')) basePricePerTonUsd = 1250;
    else if (titleLower.includes('ginger')) basePricePerTonUsd = 1400;
    else if (titleLower.includes('potato')) basePricePerTonUsd = 320;
    else if (titleLower.includes('chili')) basePricePerTonUsd = 2800;
    else if (titleLower.includes('turmeric')) basePricePerTonUsd = 1650;
    else if (titleLower.includes('lemon')) basePricePerTonUsd = 620;
    else if (titleLower.includes('okra')) basePricePerTonUsd = 850;

    const metricTons = Number(quantity) || 28;
    const estimatedFobTotal = basePricePerTonUsd * metricTons;
    
    // Add estimated freight per port
    let oceanFreightEstimate = 1800; // default USD per reefer container
    const portLower = (targetPort || '').toLowerCase();
    if (portLower.includes('jebel ali') || portLower.includes('dubai') || portLower.includes('uae')) oceanFreightEstimate = 1200;
    else if (portLower.includes('rotterdam') || portLower.includes('europe') || portLower.includes('hamburg')) oceanFreightEstimate = 2800;
    else if (portLower.includes('cat lai') || portLower.includes('singapore') || portLower.includes('asia')) oceanFreightEstimate = 1500;

    const estimatedCifTotal = incoterms === 'CIF' || incoterms === 'CFR' 
      ? estimatedFobTotal + oceanFreightEstimate + 250 // plus insurance
      : estimatedFobTotal;

    return res.json({
      success: true,
      message: "RFQ successfully generated! Quotation spec sheet queued.",
      referenceId,
      estimatedQuote: {
        basePricePerTonUsd,
        metricTons,
        incoterms: incoterms || 'CIF',
        estimatedFobTotalUsd: estimatedFobTotal,
        estimatedOceanFreightUsd: oceanFreightEstimate,
        estimatedCifTotalUsd: estimatedCifTotal,
        currency: 'USD',
        validDays: 7,
        portOfLoading: 'JNPT Nhava Sheva / Mundra Port',
        targetPort,
        packagingIncluded: 'Standard Mesh Bags / Cartons included',
        phytosanitaryIncluded: true
      }
    });
  });

  // Container Tracking API
  app.get("/api/tracker/:trackingId", (req, res) => {
    const trackingId = req.params.trackingId;
    return res.json({
      success: true,
      trackingId,
      queryTime: new Date().toISOString(),
      note: "Live satellite telemetry feed active."
    });
  });

  // Mount Vite middleware in development or serve static files in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Casial Global Trading server active at http://0.0.0.0:${PORT}`);
  });
}

startServer();
