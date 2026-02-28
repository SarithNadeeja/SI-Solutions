import { motion, AnimatePresence } from "framer-motion"

const WHATSAPP_NUMBER = "94707047536"

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null

  const handleWhatsApp = () => {
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}`
  }

  const handleCall = () => {
    window.location.href = `tel:${WHATSAPP_NUMBER}`
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(6px)",
          zIndex: 999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "#0b0f18",
            padding: "32px",
            borderRadius: "16px",
            width: "90%",
            maxWidth: "420px",
            boxShadow: "0 0 40px rgba(0, 102, 255, 0.25)",
            border: "1px solid rgba(0, 102, 255, 0.3)",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <h2 style={{ marginBottom: "12px" }}>
            Contact SI Solutions
          </h2>

          <p style={{ marginBottom: "28px", color: "#aaa" }}>
            Choose your preferred way to reach us.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <button
              onClick={handleWhatsApp}
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "10px",
                border: "none",
                background: "#25D366",
                color: "#fff",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              WhatsApp
            </button>

            <button
              onClick={handleCall}
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "10px",
                border: "none",
                background: "#0066ff",
                color: "#fff",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Call Now
            </button>
          </div>

          <p
            onClick={onClose}
            style={{
              marginTop: "24px",
              fontSize: "14px",
              color: "#666",
              cursor: "pointer",
            }}
          >
            Cancel
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}