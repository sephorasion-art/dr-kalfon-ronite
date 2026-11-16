import React, { useState, useEffect, useRef } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Send, MessageCircle, User, ArrowLeft, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

function ConversationList({ conversations, selectedId, onSelect }) {
  const grouped = {};
  conversations.forEach((msg) => {
    if (!grouped[msg.conversation_id]) {
      grouped[msg.conversation_id] = {
        id: msg.conversation_id,
        name: msg.sender_name || "Visiteur",
        email: msg.sender_email || "",
        lastMessage: msg.message,
        lastDate: msg.created_date,
        unread: !msg.is_read && msg.sender_type === "client",
      };
    }
    const conv = grouped[msg.conversation_id];
    if (new Date(msg.created_date) > new Date(conv.lastDate)) {
      conv.lastMessage = msg.message;
      conv.lastDate = msg.created_date;
      if (msg.sender_type === "client") {
        conv.name = msg.sender_name || conv.name;
        conv.email = msg.sender_email || conv.email;
      }
      if (!msg.is_read && msg.sender_type === "client") {
        conv.unread = true;
      }
    }
  });

  const convList = Object.values(grouped).sort(
    (a, b) => new Date(b.lastDate) - new Date(a.lastDate)
  );

  return (
    <div className="space-y-1">
      {convList.length === 0 && (
        <p className="text-sm text-muted-foreground p-4 text-center">Aucune conversation</p>
      )}
      {convList.map((conv) => (
        <button
          key={conv.id}
          onClick={() => onSelect(conv.id)}
          className={`w-full text-left p-4 rounded-xl transition-colors ${
            selectedId === conv.id ? "bg-primary/10" : "hover:bg-secondary"
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="font-medium text-sm text-foreground">{conv.name}</span>
            {conv.unread && <Badge className="bg-primary text-primary-foreground text-[10px] h-5">Nouveau</Badge>}
          </div>
          <p className="text-xs text-muted-foreground truncate">{conv.lastMessage}</p>
        </button>
      ))}
    </div>
  );
}

export default function AdminChat() {
  const [selectedConv, setSelectedConv] = useState(null);
  const [reply, setReply] = useState("");
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef(null);
  const queryClient = useQueryClient();

  const { data: allMessages = [], refetch } = useQuery({
    queryKey: ["admin-chat-messages"],
    queryFn: () => base44.entities.ChatMessage.list("-created_date", 200),
    refetchInterval: 3000,
  });

  const convMessages = allMessages
    .filter((m) => m.conversation_id === selectedConv)
    .sort((a, b) => new Date(a.created_date) - new Date(b.created_date));

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [convMessages.length]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!reply.trim() || sending) return;
    setSending(true);
    await base44.entities.ChatMessage.create({
      sender_name: "Clinique Dr. Kalfon",
      message: reply.trim(),
      sender_type: "admin",
      conversation_id: selectedConv,
    });
    setReply("");
    setSending(false);
    refetch();
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <div className="shrink-0 border-b border-border px-6 py-4 flex items-center justify-between bg-card">
        <div className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-primary" />
            <h1 className="font-semibold text-foreground">Chat Admin</h1>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={() => refetch()}>
          <RefreshCw className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex-1 flex min-h-0">
        {/* Sidebar */}
        <div className="w-80 border-r border-border bg-card overflow-y-auto shrink-0 hidden md:block">
          <div className="p-4 border-b border-border">
            <h2 className="text-sm font-semibold text-foreground">Conversations</h2>
          </div>
          <ConversationList
            conversations={allMessages}
            selectedId={selectedConv}
            onSelect={setSelectedConv}
          />
        </div>

        {/* Chat area */}
        <div className="flex-1 flex flex-col min-h-0">
          {!selectedConv ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground">Sélectionnez une conversation</p>

                {/* Mobile conversation list */}
                <div className="md:hidden mt-6 max-w-sm mx-auto">
                  <ConversationList
                    conversations={allMessages}
                    selectedId={selectedConv}
                    onSelect={setSelectedConv}
                  />
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-6 space-y-3">
                {convMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender_type === "admin" ? "justify-end" : "justify-start"}`}
                  >
                    <div className="flex items-end gap-2 max-w-[70%]">
                      {msg.sender_type === "client" && (
                        <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center shrink-0">
                          <User className="w-4 h-4 text-muted-foreground" />
                        </div>
                      )}
                      <div
                        className={`rounded-2xl px-4 py-2.5 text-sm ${
                          msg.sender_type === "admin"
                            ? "bg-primary text-primary-foreground rounded-br-md"
                            : "bg-secondary text-foreground rounded-bl-md"
                        }`}
                      >
                        {msg.message}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <form onSubmit={handleSend} className="p-4 border-t border-border shrink-0">
                <div className="flex gap-3">
                  <Input
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    placeholder="Répondre au patient..."
                    className="flex-1"
                    disabled={sending}
                  />
                  <Button
                    type="submit"
                    disabled={sending || !reply.trim()}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Envoyer
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}