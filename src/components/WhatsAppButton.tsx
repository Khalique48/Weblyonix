import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_NUMBER = '919102479004';

export default function WhatsAppButton() {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleClick = () => {
        const message = encodeURIComponent(
            "Hi Weblyonix! I'm interested in your services. Can we discuss my project?"
        );
        window.open(
            `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
            '_blank'
        );
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
            {/* Tooltip */}
            {showTooltip && (
                <div className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-[260px] animate-slide-up border border-slate-100">
                    <button
                        onClick={() => setShowTooltip(false)}
                        className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                    <p className="text-slate-800 font-semibold text-sm mb-1">
                        Need help? 💬
                    </p>
                    <p className="text-slate-500 text-xs leading-relaxed mb-3">
                        Chat with us on WhatsApp for instant support & free consultancy.
                    </p>
                    <button
                        onClick={handleClick}
                        className="w-full px-4 py-2 bg-[#25D366] text-white text-sm font-semibold rounded-xl hover:bg-[#20BD5A] transition-colors"
                    >
                        Start Chat
                    </button>
                </div>
            )}

            {/* FAB Button */}
            <button
                onClick={() => setShowTooltip(!showTooltip)}
                className="group relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 hover:shadow-green-500/50 hover:scale-110 transition-all duration-300"
                aria-label="Chat on WhatsApp"
            >
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse opacity-10" />

                <MessageCircle className="w-7 h-7 text-white fill-white relative z-10" />
            </button>
        </div>
    );
}
