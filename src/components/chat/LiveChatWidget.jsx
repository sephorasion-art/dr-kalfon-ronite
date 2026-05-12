import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { base44 } from "@/api/base44Client";
import { useLang } from "@/lib/LanguageContext";

function generateConversationId() {
  return "conv_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
}

export default function LiveChatWidget() {
  const { t, isRTL } = useLang();
  const tc = t.chat;
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [started, setStarted] = useState(false);
  const [sending, setSending] = useState(false);
  const [conversationId] = useState(() => generateConversationId());
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open && started && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open, started]);

  // Poll for new messages
  useEffect(() => {
    if (!started) return;
    const interval = setInterval(async () => {
      const allMsgs = await base44.entities.ChatMessage.filter(
        { conversation_id: conversationId },
        "created_date"
      );
      setMessages(allMsgs);
    }, 3000);
    return () => clearInterval(interval);
  }, [started, conversationId]);

  const handleStart = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setStarted(true);
    // Send welcome
    await base44.entities.ChatMessage.create({
      sender_name: "Clinique Dr. Kalfon",
      message: tc.welcome(name),
      sender_type: "admin",
      conversation_id: conversationId,
    });
    const msgs = await base44.entities.ChatMessage.filter(
      { conversation_id: conversationId },
      "created_date"
    );
    setMessages(msgs);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || sending) return;
    setSending(true);
    await base44.entities.ChatMessage.create({
      sender_name: name,
      sender_email: email,
      message: input.trim(),
      sender_type: "client",
      conversation_id: conversationId,
    });
    setInput("");
    const msgs = await base44.entities.ChatMessage.filter(
      { conversation_id: conversationId },
      "created_date"
    );
    setMessages(msgs);
    setSending(false);
  };

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-2xl flex items-center justify-center hover:bg-primary/90 transition-colors"
          >
            <MessageCircle className="w-7 h-7" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent border-2 border-background" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 w-[440px] max-w-[calc(100vw-32px)] bg-card rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col"
            style={{ height: "620px" }}
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground px-6 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{tc.title}</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-xs opacity-80">{tc.online}</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="hover:opacity-70 transition-opacity">
                <X className="w-5 h-5" />
              </button>
            </div>

            {!started ? (
              /* Start form */
              <div className="flex-1 flex flex-col items-center justify-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground text-lg mb-2">{tc.heading}</h4>
                <p className="text-sm text-muted-foreground text-center mb-6">
                  {tc.intro}
                </p>
                <form onSubmit={handleStart} className="w-full space-y-3">
                  <Input
                    placeholder={tc.namePlaceholder}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <Input
                    type="email"
                    placeholder={tc.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg">
                    {tc.start}
                  </Button>
                </form>
              </div>
            ) : (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender_type === "client" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                          msg.sender_type === "client"
                            ? "bg-primary text-primary-foreground rounded-br-md"
                            : "bg-secondary text-foreground rounded-bl-md"
                        }`}
                      >
                        {msg.message}
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleSend} className="p-4 border-t border-border shrink-0">
                  <div className="flex gap-2">
                    <Input
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder={tc.inputPlaceholder}
                      className="flex-1"
                      disabled={sending}
                    />
                    <Button
                      type="submit"
                      size="icon"
                      disabled={sending || !input.trim()}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}