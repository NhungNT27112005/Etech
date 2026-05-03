import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false); // Đóng/mở khung chat
    const [messages, setMessages] = useState([
        { text: "Xin chào! E-Tech có thể giúp gì cho bạn?", isBot: true }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // Tự động cuộn xuống cuối khi có tin nhắn mới
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { text: input, isBot: false };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setLoading(true);

        try {
            // Gọi đến API /chat bạn đã viết ở server.js
            const response = await axios.post('http://localhost:3000/chat', { message: input });
            
            const botMsg = { 
                text: response.data.data || "E-Tech hiện chưa có câu trả lời cho vấn đề này.", 
                isBot: true 
            };
            setMessages(prev => [...prev, botMsg]);
        } catch (error) {
            console.error("Lỗi Chatbot:", error);
            setMessages(prev => [...prev, { text: "Xin lỗi, máy chủ đang bận!", isBot: true }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`chatbot-wrapper ${isOpen ? 'active' : ''}`}>
            {/* Nút tròn để mở chatbot */}
            <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-comment-dots"></i>}
            </button>

            {/* Khung nội dung Chat */}
            <div className="chatbot-container">
                <div className="chatbot-header">
                    <h3>Trợ lý ảo E-Tech</h3>
                    <p>Luôn sẵn sàng hỗ trợ bạn</p>
                </div>

                <div className="chatbot-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.isBot ? 'bot' : 'user'}`}>
                            <div className="message-content">{msg.text}</div>
                        </div>
                    ))}
                    {loading && <div className="message bot"><div className="typing-loader"></div></div>}
                    <div ref={messagesEndRef} />
                </div>

                <form className="chatbot-input" onSubmit={handleSendMessage}>
                    <input 
                        type="text" 
                        placeholder="Nhập câu hỏi của bạn..." 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
    );
};

export default Chatbot;