"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Search, Send, Phone, Video, Info, Paperclip, Smile, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ChatInterface() {
  const [activeChat, setActiveChat] = useState(0)
  const [message, setMessage] = useState("")
  const messagesEndRef = useRef(null)

  const contacts = [
    {
      id: 1,
      name: "Maria Rodriguez",
      avatar: "/placeholder.svg?height=48&width=48",
      status: "online",
      lastMessage: "When would you like to schedule our next Spanish lesson?",
      lastMessageTime: "10:42 AM",
      unread: 2,
    },
    {
      id: 2,
      name: "Robert Chen",
      avatar: "/placeholder.svg?height=48&width=48",
      status: "offline",
      lastMessage: "Thanks for the cooking class yesterday!",
      lastMessageTime: "Yesterday",
      unread: 0,
    },
    {
      id: 3,
      name: "Sarah Williams",
      avatar: "/placeholder.svg?height=48&width=48",
      status: "online",
      lastMessage: "I'll bring my camera to our next photography session",
      lastMessageTime: "Yesterday",
      unread: 0,
    },
    {
      id: 4,
      name: "David Kim",
      avatar: "/placeholder.svg?height=48&width=48",
      status: "online",
      lastMessage: "The JavaScript tutorial was really helpful",
      lastMessageTime: "Monday",
      unread: 0,
    },
  ]

  const conversations = [
    {
      contactId: 1,
      messages: [
        {
          id: 1,
          sender: "them",
          text: "Hi Alex! I wanted to check if you're available this weekend for our Spanish lesson?",
          time: "10:30 AM",
        },
        {
          id: 2,
          sender: "me",
          text: "Hey Maria! Yes, I'm free on Saturday afternoon. Would 2 PM work for you?",
          time: "10:35 AM",
        },
        {
          id: 3,
          sender: "them",
          text: "2 PM on Saturday sounds perfect! Should we meet at the library again?",
          time: "10:38 AM",
        },
        {
          id: 4,
          sender: "me",
          text: "Yes, the library works well. I'll book a study room for us.",
          time: "10:40 AM",
        },
        {
          id: 5,
          sender: "them",
          text: "When would you like to schedule our next Spanish lesson?",
          time: "10:42 AM",
        },
      ],
    },
    {
      contactId: 2,
      messages: [
        {
          id: 1,
          sender: "them",
          text: "Thanks for the cooking class yesterday! I really enjoyed learning how to make sushi.",
          time: "Yesterday",
        },
        {
          id: 2,
          sender: "me",
          text: "You're welcome, Robert! You did a great job with the rolls. Very neat for a first-timer!",
          time: "Yesterday",
        },
        {
          id: 3,
          sender: "them",
          text: "I've been practicing at home. Would love to learn more dishes next time.",
          time: "Yesterday",
        },
      ],
    },
    {
      contactId: 3,
      messages: [
        {
          id: 1,
          sender: "me",
          text: "Hi Sarah, just confirming our photography session for tomorrow at the park?",
          time: "Yesterday",
        },
        {
          id: 2,
          sender: "them",
          text: "Yes, I'm looking forward to it! Weather should be perfect.",
          time: "Yesterday",
        },
        {
          id: 3,
          sender: "them",
          text: "I'll bring my camera to our next photography session",
          time: "Yesterday",
        },
      ],
    },
    {
      contactId: 4,
      messages: [
        {
          id: 1,
          sender: "them",
          text: "The JavaScript tutorial was really helpful",
          time: "Monday",
        },
        {
          id: 2,
          sender: "me",
          text: "Glad you found it useful! Let me know if you have any questions about the concepts we covered.",
          time: "Monday",
        },
      ],
    },
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [activeChat])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (message.trim() === "") return

    // In a real app, you would send this message to your backend
    // For now, we'll just clear the input
    setMessage("")
  }

  const activeContact = contacts[activeChat]
  const activeConversation = conversations[activeChat]

  return (
    <section className="bg-background py-12">
      <div className="container-custom">
        <div className="rounded-xl border bg-card shadow-sm">
          <div className="grid h-[600px] md:grid-cols-[320px_1fr]">
            {/* Contacts sidebar */}
            <div className="border-r">
              <div className="border-b p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search contacts..."
                    className="w-full rounded-md border bg-background px-9 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="h-[calc(600px-65px)] overflow-y-auto">
                {contacts.map((contact, index) => (
                  <div
                    key={contact.id}
                    className={`flex cursor-pointer items-center gap-3 border-b p-4 transition-colors hover:bg-muted/50 ${
                      activeChat === index ? "bg-muted" : ""
                    }`}
                    onClick={() => setActiveChat(index)}
                  >
                    <div className="relative">
                      <Image
                        src={contact.avatar || "/placeholder.svg"}
                        alt={contact.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div
                        className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
                          contact.status === "online" ? "bg-green-500" : "bg-gray-400"
                        }`}
                      ></div>
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{contact.name}</h3>
                        <span className="text-xs text-muted-foreground">{contact.lastMessageTime}</span>
                      </div>
                      <p className="truncate text-sm text-muted-foreground">{contact.lastMessage}</p>
                    </div>
                    {contact.unread > 0 && (
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                        {contact.unread}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Chat area */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between border-b p-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={activeContact.avatar || "/placeholder.svg"}
                    alt={activeContact.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-medium">{activeContact.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {activeContact.status === "online" ? "Online" : "Offline"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Phone className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Video className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Info className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                  {activeConversation.messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
                      {msg.sender === "them" && (
                        <Image
                          src={activeContact.avatar || "/placeholder.svg"}
                          alt={activeContact.name}
                          width={32}
                          height={32}
                          className="mr-2 self-end rounded-full"
                        />
                      )}
                      <div
                        className={`max-w-[70%] rounded-lg px-4 py-2 ${
                          msg.sender === "me" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                        }`}
                      >
                        <p>{msg.text}</p>
                        <p
                          className={`text-right text-xs ${
                            msg.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"
                          }`}
                        >
                          {msg.time}
                        </p>
                      </div>
                      {msg.sender === "me" && (
                        <div className="ml-1 self-end text-xs text-muted-foreground">
                          <Check className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              <form onSubmit={handleSendMessage} className="border-t p-4">
                <div className="flex items-center gap-2">
                  <Button type="button" variant="ghost" size="icon" className="rounded-full">
                    <Paperclip className="h-5 w-5" />
                  </Button>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 rounded-full border bg-background px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <Button type="button" variant="ghost" size="icon" className="rounded-full">
                    <Smile className="h-5 w-5" />
                  </Button>
                  <Button type="submit" size="icon" className="rounded-full">
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
